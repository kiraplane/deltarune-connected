import { CHECKED_AT, officialGameFacts } from './sources';
import type { TopicPage } from './types';

export const topicPages = {
  characters: {
    route: '/characters',
    label: 'Characters',
    eyebrow: 'Morph Roster',
    title: 'Deltarune Connected Characters',
    seoTitle: 'Deltarune Connected Characters - Selector and Hidden Morphs',
    seoDescription:
      'Understand the Deltarune Connected character selector, public morphs, action menus, hidden characters, and why the roster changes after updates.',
    summary:
      "Choose a public character for roleplay, then use that character's action set. Hidden or staff-only morphs are tracked separately from normal selector access.",
    image: '/deltarune-connected/media/official-1.png',
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/character-selector-and-actions',
      '/guides/hidden-characters',
      '/guides/roaring-knight',
    ],
    sections: [
      {
        heading: 'The roster is a roleplay toolkit, not a tier list',
        paragraphs: [
          'Roblox classifies Deltarune: Connected as a Roleplay & Avatar Sim experience. The official media shows many players using recognizable pixel characters together, while the small community wiki focuses on sprites and character actions. That evidence supports a selector-and-actions model, not a competitive roster with damage rankings or investment tiers.',
          'Pick a character because you want that sprite, expression set, or roleplay style. A larger action menu does not automatically make a character better. Updates can also add, remove, or rebuild action sets, so this site avoids freezing an incomplete roster into a permanent database.',
        ],
      },
      {
        heading: 'Public selector access and hidden access are different',
        paragraphs: [
          'Names appearing in current community pages include Ralsei, Berdly, Alphys, Asgore, C. Round, Elnina, Hathy, Human, Starwalker, Titan, Woody, Madotsuki, and Green Ralsei. That list is useful for discovery, but it does not prove that every name is selectable by every player today.',
          'Hidden-character pages repeatedly describe staff permission, developer morphing, or exclusive access. Treat those notes as an access boundary. If a character is missing from your selector, do not assume there is a secret quest, code, or script that unlocks it.',
        ],
      },
      {
        heading: 'Use current media to verify update-era characters',
        paragraphs: [
          'Current videos explicitly showcase Papyrus, Jevil, Tenna, Woody, Flowery, and Roaring Knight-related appearances. A video can prove that a character exists in a build, but it cannot prove a universal unlock method. Check the upload date, the visible selector, and whether the creator mentions staff or developer help.',
          'For the cleanest next step, read the selector guide first. Use the hidden-character guide only when the character is absent from normal menus, and use the Roaring Knight or Woody pages for those exact access questions.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Deltarune Connected have a character tier list?',
        answer:
          'No useful competitive tier system is verified. The experience is a morph-roleplay showcase, so choose characters by access and action style.',
      },
      {
        question: 'Why is a character missing from my selector?',
        answer:
          'It may be hidden, staff-only, temporary, rebuilt after an update, or unavailable in the current server. Do not use exploit scripts to force access.',
      },
    ],
  },
  maps: {
    route: '/maps',
    label: 'Maps',
    eyebrow: 'Areas and Navigation',
    title: 'Deltarune Connected Maps and Areas',
    seoTitle: 'Deltarune Connected Maps - Current Areas and Navigation',
    seoDescription:
      'Navigate Deltarune Connected maps without mixing in official DELTARUNE chapter maps, DONTFORGET maps, or unsafe map downloads.',
    summary:
      'The current Roblox universe exposes one public place, with areas and update scenes inside it. Use this page to avoid wrong-game map results and stale chapter labels.',
    image: '/deltarune-connected/media/official-4.png',
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/how-to-play-deltarune-connected',
      '/guides/lightners-live-update',
      '/play',
    ],
    sections: [
      {
        heading: 'There is one verified public Roblox place',
        paragraphs: [
          `Roblox universe data lists ${officialGameFacts.officialRobloxUrl} as the public place for universe ${officialGameFacts.robloxUniverseId}. The official screenshots show different interiors, hub-like spaces, multiplayer rooms, and the current Lightners Live scene, but they do not prove separate downloadable maps or chapter servers.`,
          'That matters because Google results mix this game with official DELTARUNE maps, DONTFORGET CONNECTED map editors, Minecraft projects, and generic chapter layouts. None of those should be installed or presented as Deltarune: Connected content.',
        ],
      },
      {
        heading: 'Treat area names as update-sensitive',
        paragraphs: [
          'The experience is described by its creator as a showcase whose current state is not the final product. Rooms can be reworked, event scenes can rotate, and a familiar DELTARUNE-inspired location can serve a different purpose here than it does in the original game.',
          'Use visible in-game labels and current official media before following a community route. If a guide promises a chapter-specific map download, a custom map file, or an editor, it is probably discussing a different game.',
        ],
      },
      {
        heading: 'A safe navigation routine',
        paragraphs: [
          'Start from the normal spawn or hub, identify the character selector and area entrances, then explore one branch at a time. Rejoin a fresh public server if an update object or doorway fails to load, and compare the official media before assuming you reached the wrong game.',
          'This page will expand only when current source material supports stable area names. It will not create thin Chapter 1, Chapter 2, or Hometown map pages merely because those phrases appear in ambiguous autocomplete suggestions.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I download Deltarune Connected maps?',
        answer:
          'No verified map download is needed. Join the official Roblox experience; map downloads and editors in search results usually belong to other games.',
      },
      {
        question: 'Why are chapter map results confusing?',
        answer:
          "Search engines mix the Roblox showcase with official DELTARUNE and DONTFORGET CONNECTED. This site covers only Viatrix's Roblox experience.",
      },
    ],
  },
  commands: {
    route: '/commands',
    label: 'Commands',
    eyebrow: 'Actions, Chat and Safety',
    title: 'Deltarune Connected Commands and Actions',
    seoTitle: 'Deltarune Connected Commands - Actions and Safe Status',
    seoDescription:
      'Check the Deltarune Connected commands status, use character actions safely, and avoid DONTFORGET commands or Roblox exploit scripts.',
    summary:
      'No reliable universal chat-command list is verified for this experience. Most player-facing expression options are character actions, while many search results belong to DONTFORGET or exploit pages.',
    image: '/deltarune-connected/media/official-3.png',
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/character-selector-and-actions',
      '/guides/how-to-play-deltarune-connected',
      '/official-links',
    ],
    sections: [
      {
        heading: 'Do not paste a DONTFORGET command list here',
        paragraphs: [
          'The exact search for Deltarune Connected commands currently returns a prominent DONTFORGET Wiki result explaining a T-key global chat menu. DONTFORGET CONNECTED is a separate fan game. Its command syntax, map tools, and account systems are not evidence for this Roblox experience.',
          'A trustworthy commands page must begin with that distinction. As of this check, no official Viatrix page or reliable current target-game source publishes a universal slash-command list for normal players.',
        ],
      },
      {
        heading: 'Character actions are the useful player-facing system',
        paragraphs: [
          'Community character pages document actions such as expressions, poses, sounds, battle-style animations, and character-specific jokes. These are attached to the selected morph and may be exposed through an action menu rather than a typed chat command.',
          'Open the character selector, choose a public morph, then inspect the visible action interface. If an action is missing, the character may have a shorter set, the server may be outdated, or an update may have changed that menu. Rejoin before assuming a secret command exists.',
        ],
      },
      {
        heading: 'Scripts and executors are not commands',
        paragraphs: [
          'Autocomplete also surfaces Deltarune Connected script searches. In Roblox search culture, that often means exploit executors or copied client code. This site does not provide them. They can compromise accounts, break platform rules, and create fake claims about staff-only morph access.',
          'Use only visible in-game controls and Roblox features. If Viatrix later publishes a real command list, this page can document the official syntax with a checked date and source link.',
        ],
      },
    ],
    faq: [
      {
        question: 'What are the Deltarune Connected commands?',
        answer:
          'No verified universal player command list is published. Use the visible character action interface and avoid command lists from DONTFORGET CONNECTED.',
      },
      {
        question: 'Can commands unlock hidden characters?',
        answer:
          'No reliable public command is verified for that. Staff-only or random morph access should not be bypassed with scripts.',
      },
    ],
  },
  play: {
    route: '/play',
    label: 'Play',
    eyebrow: 'Official Roblox Access',
    title: 'Play Deltarune Connected on Roblox',
    seoTitle: 'Play Deltarune Connected - Official Roblox Link',
    seoDescription:
      'Open the verified Deltarune Connected Roblox experience by Viatrix, confirm place ID 12880465992, and avoid fake downloads or APK mirrors.',
    summary:
      'Use the verified Roblox place by Viatrix. You do not need a GameJolt build, APK mirror, mod loader, or third-party login page.',
    image: '/deltarune-connected/media/official-1.png',
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/how-to-play-deltarune-connected',
      '/guides/mobile-and-console',
      '/official-links',
    ],
    sections: [
      {
        heading: 'Verify the place and creator before joining',
        paragraphs: [
          `The correct experience is ${officialGameFacts.officialRobloxUrl}. Its Place ID is ${officialGameFacts.robloxPlaceId}, its Universe ID is ${officialGameFacts.robloxUniverseId}, and Roblox links the creator to the Viatrix group.`,
          'Those identifiers are the strongest defense against lookalike results. Search snippets also mention GameJolt, DONTFORGET, online fangames, Android, and downloadable mods. They are different entities and should not be treated as alternate clients for this Roblox experience.',
        ],
      },
      {
        heading: 'Use Roblox on your supported device',
        paragraphs: [
          'Open Roblox through its normal website or platform app, sign in to your own account, then use the verified game link. Mobile gameplay is visible in current community video evidence, while console behavior can vary by current build and device rendering.',
          'Never enter your Roblox password on a guide site. This wiki links out to Roblox but does not operate a login, code redemption form, private server, or downloadable client.',
        ],
      },
      {
        heading: 'What the game is and is not',
        paragraphs: [
          'Viatrix describes Deltarune: Connected as a fully 2D remake of the DELTARUNE engine, not the full game. It is currently a showcase and an unofficial fangame. Roblox categorizes it as Morph Roleplay, which matches the multiplayer character scenes shown in official media.',
          'Do not expect the complete commercial DELTARUNE story, save structure, or every chapter mechanic. Use the character selector, action menus, social roleplay spaces, and current update content on their own terms.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Deltarune Connected an official DELTARUNE game?',
        answer:
          'No. Viatrix calls it an unofficial fangame; DELTARUNE is owned by Toby Fox.',
      },
      {
        question: 'Do I need to download an APK?',
        answer:
          'No. Use the normal Roblox app or website and the verified place link.',
      },
    ],
  },
  status: {
    route: '/status',
    label: 'Status',
    eyebrow: 'Live and Update Signals',
    title: 'Deltarune Connected Status and Updates',
    seoTitle: 'Deltarune Connected Status - Servers and Current Update',
    seoDescription:
      'Check whether Deltarune Connected is live, the current Roblox update signal, public-server evidence, and what to try when a server fails to load.',
    summary:
      'The experience is live and public servers were active at the latest check. Current official media highlights the Lightners Live update, but detailed patch notes are not publicly verified.',
    image: '/deltarune-connected/media/official-2.png',
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/lightners-live-update',
      '/guides/console-graphics-fix',
      '/play',
    ],
    sections: [
      {
        heading: 'Current verified status',
        paragraphs: [
          `Roblox API data checked on ${CHECKED_AT} reported a live experience, a 100-player server capacity, recent update activity, and multiple public servers. The exact player count changes constantly, so this page records the checked state rather than promising a permanent number.`,
          'The current official thumbnail set includes a Lightners Live update card plus active multiplayer scenes. That is a reliable update signal, but it is not a complete changelog and should not be expanded into invented patch notes.',
        ],
      },
      {
        heading: 'If Roblox says there are no running experiences',
        paragraphs: [
          'Roblox search snippets sometimes show a temporary no-running-experiences message even while public server APIs later report active servers. Refresh the official page, confirm Roblox status, and try another server before assuming the game has shut down.',
          'If only one device fails, restart Roblox and the device. If every Roblox experience fails, the problem is probably platform-wide. If this game alone shows missing art or controls, report the build issue through the verified creator channel rather than downloading a replacement client.',
        ],
      },
      {
        heading: 'What this tracker will update',
        paragraphs: [
          'The tracker follows official media, Roblox update timestamps, public-server availability, and current character/update videos. It does not repeat rumor-only roadmaps, fake Discord announcements, or unofficial DELTARUNE chapter news as target-game updates.',
          'Use the Lightners Live guide for the current media signal and the official-links page for the creator destinations that are actually verified.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Deltarune Connected still playable?',
        answer:
          'Yes at the latest check: the official place was live and public servers were active.',
      },
      {
        question: 'Where are the official patch notes?',
        answer:
          'No complete public patch-note source was verified. This site separates official media/update timestamps from community observations.',
      },
    ],
  },
  officialLinks: {
    route: '/official-links',
    label: 'Official Links',
    eyebrow: 'Verified Destinations',
    title: 'Deltarune Connected Official Links',
    seoTitle: 'Deltarune Connected Official Links - Roblox and Viatrix',
    seoDescription:
      'Use verified Deltarune Connected links for the Roblox experience and Viatrix group, with clear warnings about unverified Discord and download results.',
    summary:
      'Only the Roblox experience and Viatrix creator group are verified here. No independent official website or Viatrix-owned Discord invite was confirmed.',
    image: '/deltarune-connected/media/official-3.png',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/play', '/status', '/commands'],
    sections: [
      {
        heading: 'Verified: Roblox experience and Viatrix group',
        paragraphs: [
          `Use ${officialGameFacts.officialRobloxUrl} to play and ${officialGameFacts.officialGroupUrl} to inspect the creator group linked by Roblox. These destinations match Place ID ${officialGameFacts.robloxPlaceId}, Universe ID ${officialGameFacts.robloxUniverseId}, and Group ID ${officialGameFacts.creatorId}.`,
          'This wiki is not an official destination. It is an independent guide hub that records those identifiers so players can avoid lookalikes.',
        ],
      },
      {
        heading: 'Not verified: a dedicated website or Discord invite',
        paragraphs: [
          'Search demand exists for a Deltarune Connected Discord, but current results prominently surface unrelated DELTARUNE community servers. Linking one of those as Viatrix official would create exactly the entity confusion this site is meant to prevent.',
          'Until an invite is visibly linked from the Roblox experience, the Viatrix group, or another verified creator-owned surface, this page will say not verified instead of guessing.',
        ],
      },
      {
        heading: 'Do not trust login, code, or download forms',
        paragraphs: [
          'A guide site, Discord directory, or video description does not need your Roblox password. Future codes should be redeemed only inside the official Roblox experience if a real redeem system appears.',
          "Avoid executors, scripts, APK mirrors, map downloads, and modified clients. They are not official access methods for Viatrix's Roblox showcase.",
        ],
      },
    ],
    faq: [
      {
        question: 'Is there an official Deltarune Connected Discord?',
        answer:
          'No Viatrix-owned invite was verified from an official surface at the current check.',
      },
      {
        question: 'Who owns Deltarune Connected?',
        answer:
          'Roblox lists Viatrix as the creator group. The fangame description states that DELTARUNE is owned by Toby Fox.',
      },
    ],
  },
} satisfies Record<string, TopicPage>;

export const topicPageList = Object.values(topicPages);

export function getTopicPage(key: keyof typeof topicPages) {
  return topicPages[key];
}
