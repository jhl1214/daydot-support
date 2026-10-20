# daydot support

Static GitHub Pages support, privacy, and App Store privacy-planning pages for **daydot (데이닷)**.

- Home: <https://jhl1214.github.io/daydot-support/>
- Support: <https://jhl1214.github.io/daydot-support/support/>
- Privacy: <https://jhl1214.github.io/daydot-support/privacy/>
- App privacy guide: <https://jhl1214.github.io/daydot-support/app-privacy/>

The app can open the localized deep links `https://jhl1214.github.io/daydot-support/support/?lang=ko`, `https://jhl1214.github.io/daydot-support/support/?lang=en`, `https://jhl1214.github.io/daydot-support/privacy/?lang=ko`, and `https://jhl1214.github.io/daydot-support/privacy/?lang=en`.

The site is intentionally static. It has no cookies, analytics, external fonts, external scripts, or tracking. The Korean/English switch is a small local script with an HTML fallback that leaves both language sections readable if JavaScript is unavailable.

## Local typeface

`assets/fonts/GowunBatang-Regular.ttf` is bundled from the DayTracker project with the accompanying SIL Open Font License in `assets/fonts/OFL.txt`.

## `app-ads.txt`

The repository copy is:

```text
google.com, pub-9263895083101178, DIRECT, f08c47fec0942fa0
```

AdMob’s crawler requires this file at the root of the publisher’s developer website. For this GitHub Pages project, the project-subpath URL is `https://jhl1214.github.io/daydot-support/app-ads.txt`; it is not the root-domain location. The shared root site `https://jhl1214.github.io/app-ads.txt` was verified to serve the exact line on 2026-10-20, but crawler or AdMob verification is a separate live check.

## Editing and deployment

Open `index.html` locally or serve this folder with any static HTTP server. GitHub Pages should publish the repository root with `index.html` as the entry point. The site does not contain an App Store listing identifier; App Store Connect metadata and final compiled SDK/ad-settings review remain separate from this content.
