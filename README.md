# Yaadon Ka Radio — Terminal FM

A single-page, terminal-styled radio. Pick a region (or Podcasts), press play,
keep working — it plays live public internet radio streams, plus a few
on-demand podcast episodes, inside a black/red/blue/grey terminal UI.

Working title — rename freely (`index.html`'s `<title>`/prompt line and
`manifest.json`) whenever you land on something you like.

## Run it locally

No build step — it's plain HTML/CSS/JS. Either:

- Open `index.html` directly in a browser, or
- From this folder: `npx serve .` (or any static server) — a real server
  avoids occasional browser autoplay/mixed-content quirks that can show up
  with `file://`.

## Deploy to Vercel

Zero-config static site:

1. **Dashboard:** vercel.com/new → Import this folder (or a GitHub repo you
   push it to) → framework preset "Other" → deploy. No build command needed.
2. **CLI:**
   ```
   npx vercel        # first deploy, follow the prompts
   npx vercel --prod # promote to production
   ```

## What's in this build

- **39 Pakistani stations** from your stream list, organized into four
  groups: Popular & independent FM, PBC/Radio Pakistan's government FM+MW
  network, Religious (Quran recitation stations), and Health & community.
- **India, Singapore, Arabic** — one flagship station each, as before.
- **World tab** — 53 flagship stations across the Americas, Europe,
  Asia-Pacific, and Africa & the wider Middle East. **Unlike every other
  region in this app, none of these have been playback-tested yet** — see
  "World tab: unverified, read this before relying on it" below before you
  ship this.
- **Podcasts tab** — a 50-show library (imported from a Pocket Casts OPML
  export) organized into 10 categories, plus live keyword search across
  Apple's podcast index. Click any show to fetch its real episodes on
  demand. Seekable progress bar, separate from the live-radio player state.
- **World Podcasts** — a pinned row in the Podcasts tab that browses Podcast
  Index's trending shows once you add your own free API key via the ⚙
  settings icon (top bar). See "World Podcasts" below — CORS support is
  unconfirmed, so it may show a clear error instead of loading.
- **Search** — filters the visible list by name, live, across whichever
  region/tab is open.
- Sticky player bar: play/pause, volume, LIVE indicator (blinks while
  playing), progress bar + time (podcasts only), **playback speed**
  (podcasts only — see below)
- Spacebar toggles play/pause; OS lock-screen / media-key support via the
  Media Session API (next/previous step through the current region's list,
  or through podcast episodes)
- Remembers your last region, station, volume, theme, and **playback
  speed** (`localStorage`)
- Installable as a mini app (PWA manifest)
- A gently drifting "listeners online" counter — ambience, not a real feed
- **6 selectable color themes** — Terminal, Black, Red, Blue, Gray, White.
  See "Themes" below.

## World tab: unverified, read this before relying on it

The Pakistan/India/Singapore/Arabic stations in this app were each loaded
in a real browser and confirmed to actually play. **The 53 World-tab
stations were not** — they were sourced (names + candidate stream URLs)
from official broadcaster pages, technical/hobbyist stream-URL repos, and
directory sites, but no live browser was available to test them when this
batch was built, so `verified: false` is set on every single one — that's
different from the rest of the catalog, where `false` marks the exceptions.
Each station's `note` carries how solid its sourcing was:

- **high confidence** — an explicit direct stream URL stated on the
  broadcaster's own site, or corroborated by 2+ independent sources
- **medium confidence** — a third-party CDN whose hostname matches the
  station's own brand, but not confirmed on the broadcaster's own page
- **low confidence** — a single unconfirmed source; try these last, and
  expect some to be dead or wrong

Run an actual playback pass (load each URL in a browser, confirm audio
comes back) before treating this tab as reliable, the same way the rest of
this catalog was built. Swap or drop anything that fails.

**Many World stations are HLS (`.m3u8`) streams**, which a plain
`<audio src="…">` only plays natively in Safari. Everywhere else (Chrome,
Firefox, Edge) needs [hls.js](https://github.com/video-dev/hls.js), loaded
via CDN in `index.html` and wired up in `loadAudioSource()` in
`script.js` — every station/episode selection routes through that one
function now instead of setting `audio.src` directly, so it stays the
single place that knows how to play both plain streams and HLS ones.

## Playback speed

A speed button (shows "1×" by default) sits next to the volume slider —
click it for 0.5×, 1×, 1.5×, or 2×. It only appears for **podcast
episodes**: live radio streams have no future content to play into faster
than real time, so speeding one up just stalls it waiting to re-buffer to
the live edge — the control is hidden automatically whenever a radio
station is loaded (`speedSwitcher.hidden` toggles alongside the progress
bar in `selectStation`/`selectPodcastEpisode` in `script.js`), and the rate
resets to 1× so a station never inherits a podcast's speed. Your last-picked
speed is remembered and reapplied the next time you open an episode.

## Themes

The grid icon in the top bar (next to fullscreen) opens a theme picker with
6 palettes: **Terminal** (the original black/red/blue CRT look — the only
one with scanlines/vignette), **Black** (clean monochrome dark), **Red**,
**Blue**, **Gray**, and **White** (a light theme). Your choice is saved to
`localStorage` and restored on your next visit, with a tiny inline script
in `index.html`'s `<head>` that applies it before first paint so there's no
flash of the default theme.

Every color in the whole app is a CSS custom property (`--bg`, `--fg`,
`--blue`, `--red`, etc. — see `:root` at the top of `style.css`), so a
"theme" is just a fresh set of values for those same variables — nothing
else in the CSS needed to change. To add a 7th theme: add a
`:root[data-theme="yourname"]{ --bg:…; --fg:…; … }` block in `style.css`
(copy an existing one as a starting point) and add `{ id: "yourname", label:
"Your Name" }` to the `THEMES` array near the top of `script.js` — the
picker UI builds itself from that array. Give it a `.swatch-yourname` rule
too (a small `background` gradient/color for the picker's preview dot).

## Bug fix: podcast progress bar showing during radio playback

Earlier builds set `progressWrap.hidden = true` for radio stations, but the
CSS never actually hid it — `.progress-wrap`'s own `display:flex` rule and
the browser's built-in `[hidden]{display:none}` rule have equal specificity,
and an author stylesheet always wins ties over the browser's default one,
regardless of order. Fixed by adding an explicit `.progress-wrap[hidden]{
display:none }` rule. If you add other elements toggled via the `hidden`
attribute and give them their own `display` rule, they'll need the same
`[hidden]` override or they'll have this same silent bug.

## On station reliability — read this before you rely on the list

Every stream in `script.js`'s `CATALOG` carries a `verified` flag. `true`
means I actually loaded that exact URL in a browser and got playable audio
back (tested Sep 2026). `false` means one of:

- **It timed out or errored on test** — the mount may be down, moved, or
  just slow. Marked in the UI with a red "unverified" tag and a `note`
  explaining what happened. 5 of your 38 stream-list entries fall here:
  ILM Radio Renala FM 92, and the `s17.ssl-stream.com` Radio Pak Filmi URL
  (Radio Pakistan Karachi MW 639 and D.I. Khan MW, previously flagged here,
  now verify fine — re-tested Sep 2026 and moved to `verified: true`). I
  kept the remaining flagged entries (per your ask to include everything
  from the file) but I'd verify them yourself before leaning on them, or
  swap in a fresher URL if you find one.
- **It's a plain `http://` stream** (FM 100 Pakistan, FM 100 Karachi, Hot FM
  105) — most browsers block loading `http://` audio from an `https://` page
  outright (mixed content), and Vercel always serves over HTTPS. These three
  will likely never play once deployed unless the broadcaster adds TLS.

I also added one station **not in your file**: "Radio Pak Filmi (Zeno
relay)" — a working alternate source for the same station, since the URL
from your list timed out. Both are listed so you can compare/replace freely.

To swap or add any station: everything lives in the `CATALOG` object at the
top of `script.js`, grouped by region → category → station. Podcasts live in
the separate `PODCAST_LIBRARY` array — see below.

## Podcasts: a 50-show library, imported from your OPML export

`PODCAST_LIBRARY` in `script.js` holds every show from your Pocket Casts
OPML export (`podcasts_opml.xml`), grouped into 10 categories:

- **Security & privacy** (13) — We Hack Purple, The Secure Developer, The
  Official OffSec Podcast, Cloud Security Podcast, The OSINT Curious
  Project, Coffee with the Council (PCI SSC), Security Now, Troy Hunt's
  Weekly Update, Surveillance Report, Application Security Weekly, The
  OWASP Podcast Series, The Application Security Podcast, The Privacy,
  Security & OSINT Show
- **Business & finance** (9) — 2 Minute Money Manager, BaKhabar (Macro
  Pakistani x Investors Lounge), All the Hacks, Sarmaaya.pk, Smart Passive
  Income, It's Not Magic. It's Marketing., Money Talks (The Economist),
  Wamda, Guy Kawasaki's Remarkable People, The GaryVee Audio Experience
- **Mindset & self-improvement** (6) — How to Be a Better Human, 10%
  Happier, Fixable, Thought Behind Things, On Purpose with Jay Shetty,
  Good Inside with Dr. Becky
- **Pakistani & Urdu** (6) — BBC Urdu, The Pakistan Experience,
  Jashn-e-Rekhta, بات سرحد پار, Urdunama, ڈرامہ کوئین (Drama Queen)
- **Tech & dev** (4) — Hanselminutes, Software Engineering Unlocked,
  Karachi Wala Developer, Accidental Tech Podcast
- **Ideas & talks** (3) — TED Talks Daily, Talks at Google, TED Radio Hour
- **News & current affairs** (2) — NPR News Now, The Daily

Every show is just `{name, feedUrl}` — no hardcoded episodes. Clicking a
show fetches its real RSS feed live (same `fetch()` + `DOMParser` pipeline
used for search results below) and lists its actual current episodes. This
keeps the library current automatically and avoids hand-maintaining 50
episode lists that would go stale immediately.

To add or remove a show: edit the relevant group's `shows` array in
`PODCAST_LIBRARY` — same `{name, feedUrl}` shape. To add a new category,
add a `{name, shows: [...]}` object to the array.

## News tab

A dedicated `[ 📰 News ]` tab, separate from the Pakistan tab (though a few
stations are the same underlying streams, just grouped differently):

- **International** — BBC World Service, Deutsche Welle English. Both
  tested and playing.
- **Pakistan — news & talk** — led by PBC's **News & Current Affairs
  Channel (NCAC)**, its dedicated news network (breaking news, hourly
  bulletins, live event coverage, talk shows — 13hrs/day from Islamabad,
  8hrs/day from the provincial HQs; found and verified straight from
  `radio.gov.pk`, Sep 2026), followed by Radio Pakistan Islamabad, World
  Service, and the regional MW relays (Hyderabad, Multan, Peshawar, Quetta,
  Karachi MW 639, and D.I. Khan MW — all verified). Outside of NCAC,
  Pakistan doesn't have a dedicated 24/7 all-news FM station the way some
  countries do — PBC/Radio Pakistan carries news bulletins alongside music
  and talk on its regular frequencies, so this list is the honest shape of
  what's actually out there. I looked at VOA Deewa/VOA Urdu as
  international-in-Urdu alternatives but couldn't find a public direct
  stream URL for either (their sites route through an ad network, not an
  exposed player) — worth revisiting if you want that angle specifically.

## Podcasts: live search, not just a fixed list

The Podcasts tab now does real keyword search, entirely client-side, no
backend:

1. Type a show name or topic and press **Enter** — this calls Apple's free
   iTunes Search API (`itunes.apple.com/search?media=podcast`) directly from
   the browser. It's public and CORS-open, so no proxy is needed.
2. Click a show in the results — the app fetches that show's own RSS feed
   directly (`fetch()` + the browser's built-in `DOMParser`, no library) and
   lists its recent episodes.
3. Click an episode to play it in the same player bar used for radio, with a
   seekable progress bar.

**The catch:** not every podcast host allows a browser to fetch its RSS feed
cross-origin. I tested this against a real search ("cricket") end-to-end and
it worked cleanly — found BBC's "Test Match Special," pulled its feed, got
real episode titles and playable URLs. Anchor/Spotify-for-Podcasters and
Libsyn feeds worked in testing too. But a host that blocks cross-origin
fetches will show a plain "couldn't load this show's episodes" message
instead of failing silently — there's no way to force it open from the
client alone; that show just isn't browsable here without a backend proxy.
Also, like the radio streams, some podcast hosts' episode files are plain
`http://` (BBC's are, for example) and may be blocked as mixed content on an
`https://` page — same caveat as the FM streams above.

Your 50-show library (above) is what's shown before you search anything, so
the tab isn't empty on first load and doubles as a browsable directory of
your own subscriptions, grouped by category instead of one flat list.

## World Podcasts (Podcast Index) — bring your own API key

The Podcasts tab has a pinned **🌍 Browse World Podcasts** row above your own
library. It's powered by [Podcast Index](https://podcastindex.org), a free,
open podcast database — but unlike the iTunes search above, it requires you
to register and supply your own API key + secret (Podcast Index has no
anonymous/public tier).

**Where to put your key:** click the gear (⚙) icon in the top bar. Paste your
key and secret and hit Save — that's it, no other setup. They're stored only
in this browser's `localStorage` (`ykr_pi_key` / `ykr_pi_secret`) and are
never sent anywhere except `api.podcastindex.org`, and only at the moment you
open World Podcasts. Hit Clear to remove them. Get a free key at
[podcastindex.org/developer](https://podcastindex.org/developer).

**How the request is authenticated:** Podcast Index doesn't use a simple
bearer token — each request needs three headers, computed client-side:
`X-Auth-Key` (your key), `X-Auth-Date` (current Unix time), and
`Authorization` (`sha1(key + secret + date)`, via the browser's built-in
`crypto.subtle.digest`). This matches their documented scheme; no backend or
library is needed for it.

**Honest caveat — CORS is unconfirmed.** Podcast Index's own docs only show
server-side examples (PHP, .NET) and don't mention whether their API sends
the `Access-Control-Allow-Origin` header a browser needs to call it directly
from a page like this one. I couldn't test this live — no browser was
available in the environment this was built in. If it turns out their API
blocks direct browser calls, World Podcasts will show a clear "couldn't
reach Podcast Index — this may be a CORS restriction…" message rather than
failing silently or crashing; it will not corrupt or affect any other part
of the app. If that happens, the fix would be a small backend proxy (see
"Other ideas" below) — please let me know if you hit it.

If it does work: browsing loads Podcast Index's current trending shows: `GET
/api/1.0/podcasts/trending`. Clicking a show reuses the exact same
feed-fetching code as the rest of the Podcasts tab (`fetch()` the show's own
RSS feed, parse it client-side), so once a show is open it behaves
identically to one from your library or from iTunes search.

## In progress — next up for this project

Agreed direction for the next few rounds of work:

- **Verify the 53 World-tab streams** in a real browser (blocked on device
  access when this batch shipped — see "World tab" above), drop/replace
  whatever fails
- **A live "browse the globe" mode** on top of the curated World tab, using
  Radio Garden's *unofficial* API (no official public API exists) — pending
  a live CORS test to see whether its place/channel-listing endpoints can
  be fetched directly from a browser on this app's own domain, or need a
  one-time snapshot instead. Actual stream *playback* via their
  `/api/ara/content/listen/{id}/channel.mp3` redirect endpoint should work
  regardless of that answer, since `<audio>` doesn't need CORS for playback
- **Confirm World Podcasts' CORS support live** (see above) — once you've
  added your key, try it and let me know whether it loads or shows the
  "couldn't reach Podcast Index" message
- **Category-tied background images** — real photographic imagery per
  region/category (not procedural), superimposed with a theme-colored scrim
  for readability, crossfading as you switch tabs. Needs a licensing-safe
  image source to be chosen before building

## Other ideas

- Real listener count via a Vercel Edge Function + KV
- ICY stream metadata ("now playing: song — artist") where a station exposes it
- A sleep timer, shareable per-station/episode/show URLs (`?station=id`,
  `?show=feedUrl`)
- Cache each show's parsed episode list in `localStorage` for a few minutes,
  so re-opening a show you already browsed doesn't always re-fetch
- A small backend proxy as a fallback for the (uncommon) podcast feed that
  blocks cross-origin fetches
