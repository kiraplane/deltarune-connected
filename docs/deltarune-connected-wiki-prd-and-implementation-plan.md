# Deltarune Connected Wiki PRD and Implementation Plan

## 1. Product summary

- Product: Deltarune Connected Wiki
- Canonical domain: `https://www.deltarune-connected.wiki`
- Platform: Roblox
- Primary keyword: `deltarune connected`
- Audience: players looking for the correct Roblox experience, current character/showcase guidance, hidden-character status, safe platform help, and update context
- Scope: English-first independent guide hub; no localization at launch
- Launch size: 15 high-intent public content routes plus legal pages
- Source template: `icetycoon-2`, selected by user after bootstrap approval because its topic-page, guide-detail, data-layer, and wiki-navigation patterns are a better fit

The site must describe the Roblox experience accurately: Viatrix calls it a fully 2D remake of DELTARUNE's engine, not the full game, and classifies it as an unofficial fangame/showcase. Public copy must never imply affiliation with Toby Fox, DELTARUNE, Roblox, or Viatrix.

## 2. Verified official identity

| Field | Verified value | Source |
| --- | --- | --- |
| Experience | Deltarune: Connected | Roblox game page and games API |
| Official Roblox URL | `https://www.roblox.com/games/12880465992/Deltarune-Connected` | Roblox |
| Place ID | `12880465992` | Roblox URL and universe API |
| Universe ID | `4508091056` | Roblox universe API |
| Creator | Viatrix, Group | Roblox games API |
| Creator Group ID | `3135430` | Roblox games API and group page |
| Genre | Roleplay & Avatar Sim / Morph Roleplay | Roblox games API |
| Server capacity | 100 | Roblox games API |
| Created | 2023-03-24 | Roblox games API |
| Current official update signal | Official media says `LIGHTNERS LIVE UPDATE`; games API updated 2026-07-12 | Roblox thumbnail and games APIs |
| Independent official website | Not yet verified | Roblox page/group checks |
| Badges | No universe badges returned | Roblox badges API |

Checked on 2026-07-14. The API snapshot showed roughly 2.9 million visits and active public servers. These live metrics belong in internal source notes, not hard-coded permanent homepage claims.

## 3. Discovery method and query budget

Serper was used for candidate discovery with US English settings:

- 5 autocomplete requests: head keyword plus `how to`, `character`, `map`, and `command` modifiers
- 5 related-search/PAA requests: one for every core seed keyword
- 9 selected-intent searches for YouTube, characters, commands, maps, Roaring Knight, mobile/console, and community verification
- No bulk candidate-by-candidate rank validation

The strongest exact autocomplete terms were `deltarune connected roblox`, `game`, `roaring knight`, `discord`, `secret characters`, `maps`, `commands`, and `commands list`. Search results frequently confused this experience with official DELTARUNE, DONTFORGET CONNECTED, GameJolt projects, mods, and exploit scripts, so disambiguation is a core product advantage.

## 4. Keyword matrix

| Keyword | Intent | Route | Priority | Status | Evidence and decision |
| --- | --- | --- | --- | --- | --- |
| deltarune connected | Head/entity | `/` | P0 | keep | Exact Roblox result, current social/YouTube activity |
| deltarune connected wiki | Wiki hub | `/` | P0 | keep | Exact related search; Fandom and standalone competitor rank |
| deltarune connected roblox | Official play intent | `/play` | P0 | keep | Exact autocomplete and Roblox result |
| deltarune connected guide | Guide hub | `/guides` | P0 | keep | Core seed; results are polluted by official DELTARUNE guides |
| deltarune connected game | Entity clarification | `/play` | P0 | keep | Core seed; users confuse it with GameJolt/DONTFORGET |
| deltarune connected characters | Roster/selector | `/characters` | P0 | keep | Fandom inventory, official roster art, current videos |
| deltarune connected secret characters | Hidden-access intent | `/guides/hidden-characters` | P0 | keep | Exact autocomplete and current character showcase video |
| how to get roaring knight in deltarune connected | Hidden morph access | `/guides/roaring-knight` | P0 | keep | Related search, YouTube, Reddit; current evidence says staff/dev or random access rather than a public quest |
| deltarune connected woody | Hidden character | `/guides/woody-friend-inside-me` | P1 | keep | 37K-view current video and Fandom page; not a normal unlock |
| deltarune connected lightners live update | Current update | `/guides/lightners-live-update` | P1 | keep | Current official Roblox thumbnail |
| deltarune connected maps | Area/navigation intent | `/maps` | P1 | keep | Exact autocomplete; SERP is polluted by official DELTARUNE and DONTFORGET maps |
| deltarune connected commands | Action/command intent | `/commands` | P0 | keep | Exact autocomplete; no reliable target-game command list, so publish a disambiguation/status guide |
| deltarune connected mobile | Platform help | `/guides/mobile-and-console` | P1 | keep | Related search and real mobile gameplay video |
| deltarune connected console graphics | Troubleshooting | `/guides/console-graphics-fix` | P1 | keep | Current RobloxHelp report; advice must stay conservative |
| deltarune connected download | Safe-entry intent | `/play` | P0 | keep | Related search; route players to Roblox only |
| deltarune connected codes | Redeem-code intent | `/codes` | P1 | watch | Competitor covers it, but no verified code system or active codes; publish code-watch page, never fabricate |
| deltarune connected discord | Community intent | `/official-links` | P1 | watch | Exact related search, but no Viatrix-owned invite verified; do not link unrelated DELTARUNE servers |
| deltarune connected status | Join/server intent | `/status` | P1 | keep | Public server API and recent player confusion |
| deltarune connected script | Exploit/feature ambiguity | `/commands` | P1 | ignore | Autocomplete exists, but exploit instructions are unsafe; explain actions/commands and reject executors |
| deltarune connected tier list | Ranking intent | none | P2 | ignore | Roleplay/morph showcase has no verified competitive ranking system |
| deltarune connected badges | Completion intent | none | P2 | ignore | Universe badges API returned zero badges |
| deltarune connected battle system | Combat intent | none | P2 | ignore | Standalone competitor assumes official DELTARUNE-style combat; official target-game evidence does not support a permanent battle guide |
| deltarune connected GameJolt / Android / APK | Download confusion | `/play` | P1 | ignore | Wrong products or unsafe mirrors; Roblox is the verified distribution path |
| DONTFORGET CONNECTED commands/maps | Wrong-game intent | `/commands`, `/maps` | P1 | ignore | Search results mix a separate multiplayer fangame into this entity |
| chapter-specific map pages | Official-game ambiguity | `/maps` | P2 | watch | Autocomplete exists but evidence does not support separate target-game pages |

## 5. Competitor benchmark

### `deltaruneconnected.wiki`

- Sitemap: 44 URLs, including English topic pages, five locale homepages, and legal pages.
- Homepage: about 560 visible words, 30 internal links, WebSite schema only.
- Sample content pages: roughly 300-950 words, generally four internal links, WebSite schema only.
- Strengths: broad query inventory, clear no-code stance, safe script wording, many route ideas.
- Weaknesses: thin page bodies, weak article/category schema, few contextual links, outdated traffic claims, and speculative official-DELTARUNE mechanics such as party roles/battle inputs.
- Pages to match: head wiki intent, play link, codes status, characters, maps, platform help.
- Pages to improve: commands disambiguation, hidden-character access, current update coverage, Roaring Knight status, official source separation, related paths, structured data.
- Pages not to copy: separate active/expired/redeem-code pages, generic battle-system pages, thin roadmap/review/localization pages.

### `deltarune-connected.fandom.com`

- MediaWiki API returned only 18 pages.
- Most useful evidence: character names, incomplete action inventories, and explicit hidden/exclusive access notes for Titan, Woody, Madotsuki, and Green Ralsei.
- Weaknesses: extremely incomplete, `Character selection` is only `wip`, no real route guidance, and community claims may be stale.
- Use: competitor/lead inventory only; cross-check public claims with current videos and official media.

### Official DELTARUNE and DONTFORGET results

- These are entity-confusion competitors, not sources for the Roblox experience's mechanics.
- Do not import chapter walkthroughs, secret-boss strategies, DONTFORGET chat commands, map-editor instructions, or character stats.

## 6. Source and video plan

Official sources:

- Roblox experience page and games/universe/server/badges APIs
- Viatrix Roblox Group page
- Roblox icon and four current official thumbnail assets

Selected community video references:

| Guide | Video | Why selected |
| --- | --- | --- |
| current beginner snapshot | `EW6IYLCe1P4` — Gred, `I Returned to DELTARUNE Connected...` | Current, direct target, strong traction |
| character selector/update | `0RBly1i4sVc` — Dale Jr Piston Cup 8 | Direct current character showcase |
| Roaring Knight access status | `Iu-hQMZkO6g` — Gred | Description explicitly says a lead developer supplied the dev character |
| Woody hidden character | `CQDkon4NGD8` — Gred | Direct target and character intent, strong traction |
| mobile platform behavior | `XfoQzAJXOXY` — SmileHD1998 | Direct mobile target gameplay |
| update cross-check | `Hk5Chw2dQuE` — Dale Jr Piston Cup 8 | Direct Jevil/Tenna update showcase |

Videos are research references and optional embeds, not article bodies. Guides must state actionable conclusions directly and must not narrate or spin transcripts.

## 7. Launch route map

Core hubs and status pages:

1. `/`
2. `/guides`
3. `/characters`
4. `/maps`
5. `/commands`
6. `/codes`
7. `/play`
8. `/status`
9. `/official-links`

High-intent guides:

10. `/guides/how-to-play-deltarune-connected`
11. `/guides/character-selector-and-actions`
12. `/guides/hidden-characters`
13. `/guides/roaring-knight`
14. `/guides/woody-friend-inside-me`
15. `/guides/lightners-live-update`
16. `/guides/mobile-and-console`
17. `/guides/console-graphics-fix`

Legal/disclosure:

- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

The sitemap will carry 17 content routes because the exact current query set supports them; it will not create thin chapter, character-detail, code-history, battle, or localization pages.

## 8. Information architecture and UI

- Compact black/purple/cyan pixel-inspired visual system derived from official icon/media.
- Compact homepage hero with official icon, one official Roblox CTA, `Start Here` CTA, short quick links, and a current official media frame.
- Desktop sticky wiki sidebar with collapsed groups, active-group auto-open, counts, and active-page styling.
- Mobile expandable wiki menu.
- Compact `Latest updates`, `Start here`, `Player questions`, and `Source-backed routes` panels.
- Guide cards use selected YouTube thumbnails; safety/status pages use official media.
- Explicit short related-route labels; all buttons allow wrapping.
- No public internal-confidence/debug cards.

## 9. SEO and schema

- Homepage: WebSite, Organization, VideoGame.
- Guides hub: ItemList.
- Guide details: Article and BreadcrumbList.
- Core status/topic pages: Article plus BreadcrumbList where appropriate.
- Exact canonical for every route; English only at launch with `x-default` handled by current locale framework.
- Homepage description target: under 160 characters and specific to choosing characters, finding safe links, and understanding current Roblox showcase content.
- All high-value secondary keywords appear in linked homepage modules, not only nav/footer.

## 10. Migration and residual-cleanup checklist

- Rename route group `(icetycoon2)` to `(deltarune-connected)`.
- Rename data/component namespaces to `deltarune-connected`.
- Replace Ice Tycoon data, routes, guides, covers, icon, colors, IDs, domain, creator, and metadata.
- Remove inherited Adsterra documentation, route, components, config, keys, and placements because monetization was not requested.
- Remove unsupported badges/items/rebirths/secrets/update routes from the template.
- Replace README, package name, website config, navbar/footer, route constants, URL helpers, manifest, robots, sitemap, and messages.
- Search for `ice tycoon`, `icetycoon`, `Slized`, old IDs, old domains, Experience Abstraction, and inherited ad variables after every migration stage.
- Clear stale `.next*` output before TypeScript/build validation.

## 11. Validation and launch

1. `pnpm install`
2. `pnpm lint`
3. `pnpm exec tsc --noEmit`
4. `pnpm next:build`
5. `pnpm build`
6. Browser QA: desktop/mobile homepage, guide hub/detail, long sidebar links, mobile wiki menu, official CTA, sitemap, robots, and metadata/schema.
7. Initialize clean Git history, create `deltarune-connected` GitHub repository, push `main`.
8. Deploy Cloudflare Worker `deltarune-connected`; bind apex and `www`, redirect apex to canonical `www` if needed.
9. Attempt Cloudflare GitHub automatic builds.
10. Create/reuse GA4 property and web stream, add measurement ID once globally, sync GA-GTM registries.
11. Register Shipmanager with `P0`, homepage core link, and `/guides` as the likely second core link unless final implemented demand proves another hub stronger.

## 12. Risks and guardrails

- Current game updates may change hidden-character access quickly; date and qualify all access conclusions.
- Do not call staff/dev-only or random morphs normal unlocks.
- Do not invent code redemption, chat commands, maps, quests, stats, battle inputs, or unlock requirements.
- Do not publish exploit scripts, executors, APKs, mods, or fake Discord invites.
- Do not use official DELTARUNE chapter facts as Deltarune: Connected facts.
- Do not expose private server IDs, user server tokens, or unverified community links.
