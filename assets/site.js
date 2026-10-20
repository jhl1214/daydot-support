(function () {
  "use strict";

  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-language-button]");
  var panels = document.querySelectorAll("[data-language-panel]");

  if (!buttons.length || !panels.length) {
    return;
  }

  root.classList.add("js");

  function requestedLanguage() {
    var value = new URLSearchParams(window.location.search).get("lang");
    return value === "en" ? "en" : "ko";
  }

  function syncLanguageQuery(language) {
    var path = window.location.pathname;
    if (!/(\/support|\/privacy)\/?$/.test(path) || !window.history || !window.history.replaceState) {
      return;
    }

    var url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url.pathname + "?" + url.searchParams.toString() + url.hash);
  }

  function setLanguage(language, updateQuery) {
    language = language === "en" ? "en" : "ko";
    root.dataset.language = language;
    root.lang = language;

    buttons.forEach(function (button) {
      var active = button.dataset.languageButton === language;
      button.setAttribute("aria-pressed", String(active));
    });

    panels.forEach(function (panel) {
      panel.hidden = panel.dataset.languagePanel !== language;
    });

    if (updateQuery) {
      syncLanguageQuery(language);
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.dataset.languageButton, true);
    });
  });

  setLanguage(requestedLanguage(), false);
})();
