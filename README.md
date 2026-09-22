# Gabriel Guerra · Portfolio

Source of [gaborgr.github.io](https://gaborgr.github.io/), my personal portfolio.

I am a software developer working across Python/Django on the backend and TypeScript with React,
Next.js and React Native on the front. Before software I spent nearly 18 years in audit, accounting
and finance, up to Controller, which is why I tend to ask what a feature does to the business before
asking how to build it.

Everything below is live and open to anyone right now. All of it was designed, built and released by
me as founder of [Teddy Code](https://teddy-code.com/), alongside a full-time engineering job.

## Apps on Google Play

| App | What it does | Stack |
|---|---|---|
| [Playro](https://play.google.com/store/apps/details?id=com.teddycode.playro) | Social matchmaking for gamers: find teammates by game, platform, language and playstyle | React Native, Expo, Supabase, push notifications |
| [Stusher](https://play.google.com/store/apps/details?id=com.teddycode.stusher) | Three personalized movie and series picks in 30 seconds, based on the services you already pay for | React Native, Expo, TypeScript, Edge Functions |
| [Decibra](https://play.google.com/store/apps/details?id=com.teddycode.decibra) | Sound level meter | React Native, Expo, local-first |
| [Magniyo](https://play.google.com/store/apps/details?id=com.teddycode.magniyo) | Magnifier | React Native, Expo, local-first |
| [Osito](https://play.google.com/store/apps/details?id=com.teddycode.osito) | Offline baby log | React Native, Expo, MMKV |
| [Arrullo](https://play.google.com/store/apps/details?id=com.teddycode.arrullo) | Sleep sound mixer with procedurally generated audio | React Native, Expo, local-first |
| [AviCalma](https://play.google.com/store/apps/details?id=com.teddycode.avicalma) | Bilingual companion for fear of flying | React Native, Expo, local-first |
| [Tiltza](https://play.google.com/store/apps/details?id=com.teddycode.tiltza) | Bubble level | React Native, Expo, local-first |
| [Woggli](https://play.google.com/store/apps/details?id=com.teddycode.woggli) | Peer to peer marketplace and social network for the world Scout movement: trade badges, neckerchiefs and woggles | React Native, Expo, Supabase realtime, Postgres RPCs, i18n in 5 languages |
| [Wheelza](https://play.google.com/store/apps/details?id=com.teddycode.wheelza) | Decision wheel | React Native, Expo, local-first |

## Web products

| Product | What it does | Stack |
|---|---|---|
| [hallazgo.app](https://hallazgo.app/) | Daily Spanish-language magazine of verified global opportunities, fed by an AI agent that runs headless and publishes straight to the database | Next.js, Supabase, PostgreSQL, ISR, Claude API |
| [qualipath.co](https://qualipath.co/) | Decision engine for getting a professional qualification recognized abroad. 83 verified routes across 18 destinations, every requirement linked to its official source and verification date | Next.js, TypeScript, structured data |
| [quecalifico.com](https://quecalifico.com/) | Financial eligibility engine for people in the US without an SSN, comparing products across 48 institutions | Next.js, static export, Tailwind |
| [channelberry.com](https://channelberry.com/) | Editorial guide to YouTube: 93 hand-reviewed channels published in 5 languages | Next.js, YouTube Data API, i18n, ISR |
| [fadechats.app](https://fadechats.app/) | Disposable two-person chat with no signup. Peer to peer over WebRTC, so message content never reaches a server | Next.js, WebRTC, TypeScript |
| [web.playro.app](https://web.playro.app/) | Web counterpart of the Playro app, sharing its production backend and row level security | Next.js, Supabase, RLS |

Plus the studio and product sites: [teddy-code.com](https://teddy-code.com/),
[playro.app](https://playro.app/), [stusher.app](https://stusher.app/).

## This repository

Static site served by GitHub Pages from `docs/`. Hand-written HTML and CSS, a small vanilla i18n
layer (English and Spanish, with language detection and a stored preference), and no build step,
because a portfolio that needs a toolchain to publish is a portfolio that stops getting updated.

```
docs/
  index.html        the whole site, including the i18n dictionaries
  assets/
    styles.css      the design system: tokens, layout, components
    shots/          product screenshots (webp)
    apps/           app icons
    logos/          stack logos
    og.png          social preview card
    favicon.svg
  cv/               CV in PDF, copied from the plan-2027 repo
```

Verification while editing runs headless:

```bash
google-chrome --headless=new --disable-gpu --hide-scrollbars \
  --window-size=1440,7000 --virtual-time-budget=9000 \
  --screenshot=/tmp/portfolio.png file://$PWD/docs/index.html
```

The CV PDF is generated in the `plan-2027` repo (`cv/generate-pdf.sh`) and copied here. The source of
truth for its content is the markdown there, never the copy in this repo.

## Contact

- Email: gguerra.code@gmail.com
- LinkedIn: [linkedin.com/in/gguerra-code](https://www.linkedin.com/in/gguerra-code)
- GitHub: [github.com/gaborgr](https://github.com/gaborgr)
