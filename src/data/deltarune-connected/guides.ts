import { CHECKED_AT, CONTENT_UPDATED_AT, siteDescription } from './sources';
import type { Guide, GuideCategory, GuideVideo } from './types';

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos = {
  currentOverview: {
    id: 'EW6IYLCe1P4',
    title: 'I Returned to DELTARUNE Connected...',
    channel: 'Gred',
    url: 'https://www.youtube.com/watch?v=EW6IYLCe1P4',
    thumbnailUrl: youtubeThumbnail('EW6IYLCe1P4'),
    publishedAt: '2026-07-04',
    viewCountLabel: '65K+ views at discovery',
    checkedAt: CHECKED_AT,
  },
  characterShowcase: {
    id: '0RBly1i4sVc',
    title: 'Showcasing more new characters in Deltarune connected on Roblox!',
    channel: 'Dale Jr Piston Cup 8',
    url: 'https://www.youtube.com/watch?v=0RBly1i4sVc',
    thumbnailUrl: youtubeThumbnail('0RBly1i4sVc'),
    publishedAt: '2026-02-27',
    checkedAt: CHECKED_AT,
  },
  roaringKnight: {
    id: 'Iu-hQMZkO6g',
    title: 'I became the Roaring Knight in Deltarune Connected...',
    channel: 'Gred',
    url: 'https://www.youtube.com/watch?v=Iu-hQMZkO6g',
    thumbnailUrl: youtubeThumbnail('Iu-hQMZkO6g'),
    publishedAt: '2026-01-21',
    checkedAt: CHECKED_AT,
  },
  woody: {
    id: 'CQDkon4NGD8',
    title: 'I became Woody in DELTARUNE: Connected...',
    channel: 'Gred',
    url: 'https://www.youtube.com/watch?v=CQDkon4NGD8',
    thumbnailUrl: youtubeThumbnail('CQDkon4NGD8'),
    publishedAt: '2026-03-06',
    viewCountLabel: '37K+ views at discovery',
    checkedAt: CHECKED_AT,
  },
  mobile: {
    id: 'XfoQzAJXOXY',
    title: 'Mobile Deltarune Connected on Roblox',
    channel: 'SmileHD1998',
    url: 'https://www.youtube.com/watch?v=XfoQzAJXOXY',
    thumbnailUrl: youtubeThumbnail('XfoQzAJXOXY'),
    checkedAt: CHECKED_AT,
  },
} satisfies Record<string, GuideVideo>;

const officialCover = '/deltarune-connected/media/official-1.png';
const updateCover = '/deltarune-connected/media/official-2.png';

export { siteDescription };

export const guideCategoryIntro: Record<GuideCategory, string> = {
  'Start Here':
    'Join the verified Roblox place, choose a public character, and treat the experience as a multiplayer morph-roleplay showcase.',
  Characters:
    'Understand the selector and character action sets without inventing stats, tiers, or permanent roster claims.',
  'Hidden Access':
    'Separate staff, developer, random, or temporary morphs from normal player unlocks.',
  Updates:
    'Use official Roblox media and checked community evidence without turning update signals into fake patch notes.',
  Platforms:
    'Use normal Roblox clients on desktop, mobile, and console while accounting for current rendering differences.',
  Safety:
    'Avoid fake downloads, scripts, APKs, commands from other games, and unverified community links.',
};

export const secretsChecklist: Array<{
  step: string;
  detail: string;
  href: string;
}> = [
  {
    step: 'Confirm the official place',
    detail:
      'Match Viatrix and Place ID 12880465992 before you follow any secret.',
    href: '/play',
  },
  {
    step: 'Check the live selector',
    detail:
      'A missing Roaring Knight, Woody, Titan, Madotsuki, or Green Ralsei entry is an access check.',
    href: '/characters',
  },
  {
    step: 'Follow the Roaring Knight play steps',
    detail:
      'Select the morph only if it is listed, then use the visible action menu in public rooms.',
    href: '/guides/roaring-knight',
  },
  {
    step: 'Walk one area branch',
    detail:
      'Start at the spawn hub and use the maps page. Do not download a chapter map.',
    href: '/maps',
  },
  {
    step: 'Retry a battle with one change',
    detail:
      'Use the bosses page to check morph, second-player, and current prompt requirements.',
    href: '/bosses',
  },
  {
    step: 'Ignore unverified codes and scripts',
    detail:
      'No active code is verified, and executors are not a secret-character method.',
    href: '/codes',
  },
];

export const relatedRouteLabels: Record<string, string> = {
  '/': 'Deltarune Connected Wiki',
  '/guides': 'All Guides',
  '/characters': 'Characters Hub',
  '/maps': 'Maps and Areas',
  '/commands': 'Commands and Actions',
  '/codes': 'Codes Status',
  '/play': 'Play on Roblox',
  '/status': 'Game Status',
  '/discord': 'Discord Status',
  '/official-links': 'Verified Links',
  '/guides/how-to-play-deltarune-connected': 'How to Play',
  '/guides/character-selector-and-actions': 'Character Selector',
  '/guides/hidden-characters': 'Hidden Characters',
  '/guides/roaring-knight': 'Roaring Knight',
  '/guides/secrets': 'Secrets Checklist',
  '/guides/woody-friend-inside-me': 'Woody Access',
  '/guides/lightners-live-update': 'Lightners Live Update',
  '/guides/mobile-and-console': 'Mobile and Console',
  '/guides/console-graphics-fix': 'Console Graphics Fix',
};

export const guides: Guide[] = [
  {
    slug: 'how-to-play-deltarune-connected',
    title: 'How to Play Deltarune Connected',
    seoTitle: 'How to Play Deltarune Connected on Roblox',
    seoDescription:
      "Join Deltarune Connected safely, choose a character, use actions, explore current areas, and understand what Viatrix's Roblox showcase includes.",
    summary:
      'Start with the verified Roblox place, choose a public morph, learn its action menu, and explore with other players without expecting the full commercial DELTARUNE story.',
    category: 'Start Here',
    difficulty: 'Beginner',
    coverImageUrl: videos.currentOverview.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Built from the official Roblox description/API, official media, current server evidence, and a current high-traction gameplay return video.',
    video: videos.currentOverview,
    videoSearchQueries: [
      'Deltarune Connected Roblox',
      'Deltarune Connected how to play',
      'Deltarune Connected beginner guide',
    ],
    tags: ['Roblox', 'Beginner', 'Roleplay'],
    relatedRoutes: [
      '/play',
      '/characters',
      '/guides/character-selector-and-actions',
      '/maps',
      '/official-links',
    ],
    body: [
      {
        heading: 'Join the correct experience first',
        paragraphs: [
          'Deltarune: Connected is easy to confuse with official DELTARUNE, DONTFORGET CONNECTED, downloadable fangames, GameJolt projects, and Roblox lookalikes. Begin from the verified Roblox page with Place ID 12880465992 and creator Viatrix. The official description calls this a fully 2D remake of the DELTARUNE engine, not the full game, and clearly labels it an unofficial fangame.',
          'That description sets the right expectation. You are entering a multiplayer showcase and morph-roleplay space where players gather as familiar pixel characters, use character-specific actions, and explore current update content. You are not importing a commercial DELTARUNE save, continuing every chapter, or installing a standalone client.',
        ],
        bullets: [
          'Check the Place ID and Viatrix creator link.',
          'Use the normal Roblox client for your device.',
          'Ignore APK, script, mod-loader, and third-party login offers.',
          'Expect the current showcase to change after updates.',
        ],
      },
      {
        heading: 'Choose a public character before chasing hidden morphs',
        paragraphs: [
          'The useful first decision is the character selector. Pick a morph that is visibly available in your server, then inspect the action interface attached to that character. Community pages describe different sprites, expressions, sounds, poses, and battle-style animations, but they do not establish a competitive tier list. Choose by look and action style rather than a fake power ranking.',
          'If a video shows Woody, Roaring Knight, Titan, Madotsuki, or another unusual character that is missing from your selector, stop and check the access context. Current evidence repeatedly points to staff, developer, random, temporary, or exclusive morphing. A character existing in a video does not mean there is a public unlock quest.',
        ],
      },
      {
        heading: 'Learn one action set and one area at a time',
        paragraphs: [
          'After selecting a character, test the visible actions in a quiet part of the map. Confirm which options are loops, one-time sounds, expressions, or movement poses. This prevents accidental action spam in a crowded server and helps you understand whether an option is actually missing or simply attached to a different character form.',
          'Then explore from the hub in one direction at a time. Official screenshots show multiplayer interiors, a castle-like roster scene, home spaces, and current Lightners Live content. Because the creator calls the project a showcase, area names and event entrances can change. Follow current in-game labels instead of downloading maps or using chapter layouts from another game.',
        ],
      },
      {
        heading: 'Use public servers as a social space',
        paragraphs: [
          'Public servers can hold up to 100 players, so the game works best when you treat the crowd as part of the experience. Give other players room to use actions, avoid impersonating staff, and do not promise hidden morph access you cannot provide. If an area becomes too noisy or an update object fails to load, join a different public server before troubleshooting deeper.',
          'Your next useful page depends on the problem you actually have: read the selector guide for normal actions, the hidden-character guide for missing morphs, the maps page for wrong-game search confusion, or the platform guide if mobile or console behaves differently from desktop.',
        ],
      },
      {
        heading: 'A simple first-session checklist',
        paragraphs: [
          'A productive first session does not require completing a progression track. Spend the first few minutes confirming the place identity, opening the selector, choosing one public morph, and testing its controls. Next, walk through the nearest labeled exits and observe how other players use poses or sounds. This sequence teaches the current interface without depending on an old walkthrough, a staff-only character, or an assumed story objective.',
          'Before leaving, remember one reliable character and one area that loaded correctly. If your next server looks different, you now have a useful comparison instead of a vague feeling that something is missing. Move to the status guide when the whole experience fails, the platform guide when only one device behaves badly, or the hidden-character guide when the problem is limited to a morph you saw elsewhere.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Deltarune Connected the full DELTARUNE game?',
        answer:
          'No. Viatrix describes it as a 2D engine remake/showcase, not the full game.',
      },
      {
        question: 'What should I do first after joining?',
        answer:
          'Choose a publicly available character, test its visible actions, then explore the current areas with a clear expectation that update content can change.',
      },
      {
        question: 'Can I play without downloading a separate fangame?',
        answer:
          'Yes. Use the official Roblox page and normal Roblox client; no separate APK or GameJolt build is required.',
      },
    ],
  },
  {
    slug: 'character-selector-and-actions',
    title: 'Deltarune Connected Character Selector and Actions',
    seoTitle: 'Deltarune Connected Character Selector and Actions Guide',
    seoDescription:
      'Use the Deltarune Connected character selector, understand morph-specific actions, handle missing options, and avoid false tier-list or command claims.',
    summary:
      'Pick a visible public morph, learn its own action set, and treat roster availability as update-sensitive rather than assuming every video character is unlockable.',
    category: 'Characters',
    difficulty: 'Beginner',
    coverImageUrl: videos.characterShowcase.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Cross-checked current character showcase video results, official roster media, and the small Fandom action inventories.',
    video: videos.characterShowcase,
    videoSearchQueries: [
      'Deltarune Connected character showcase',
      'Deltarune Connected character selector',
      'Deltarune Connected new characters',
    ],
    tags: ['Characters', 'Selector', 'Actions'],
    relatedRoutes: [
      '/characters',
      '/guides/hidden-characters',
      '/commands',
      '/guides/how-to-play-deltarune-connected',
    ],
    body: [
      {
        heading: 'Start with what the selector actually shows',
        paragraphs: [
          'The selector is the source of truth for normal player access in your current server. Open it, browse the visible roster, and choose a character from that menu before relying on an old screenshot or a video thumbnail. Deltarune: Connected is updated frequently enough that a character can be rebuilt, moved, temporarily absent, or tied to a server that has not restarted yet.',
          'Do not convert a community page list into a guaranteed roster. The small Fandom currently includes pages for Ralsei, Berdly, Alphys, Asgore, C. Round, Elnina, Hathy, Human, Starwalker, Titan, Woody, Madotsuki, and Green Ralsei, but several pages explicitly describe exclusive or hidden access. The list proves search interest, not universal availability.',
        ],
      },
      {
        heading: 'Actions belong to character forms',
        paragraphs: [
          'Community action pages show that morphs can carry expressions, sound loops, poses, item animations, battle-style stances, and jokes. Green Ralsei alone is documented with hat, no-hat, and butler forms plus a long action list. Other characters may have only one sprite and two actions. That difference is normal for a showcase under active development.',
          'Select the form you want, then test each visible action once. Note whether the action loops, changes form, plays audio, or needs a second tap to stop. If one action fails, reselect the character or rejoin a current server before assuming it requires a typed command.',
        ],
      },
      {
        heading: 'Missing characters need an access check, not a script',
        paragraphs: [
          'When a character appears in a recent video but not in your menu, look for context clues. Did the video creator mention a lead developer? Does the community page call the character exclusive? Did the morph appear randomly rather than after a repeatable route? Those details matter more than the character name in the title.',
          'Scripts and executors cannot turn a staff boundary into a safe public unlock. They can expose your account, break Roblox rules, and create false information for other players. Use the hidden-character guide to classify the access status and wait for public release if no verified route exists.',
        ],
      },
      {
        heading: 'Choose by expression set, not fake strength',
        paragraphs: [
          'This experience is categorized as Morph Roleplay, so the practical comparison is how a character feels in a social scene. A character with a good emote for group roleplay may suit you better than one with more total actions. A newly added character may look exciting but have placeholder animations until a later update.',
          'There is no evidence-based reason to publish a tier list. Instead, keep a short personal shortlist: one reliable public character, one character with actions you understand, and one update-era character to check after server restarts. That approach survives roster changes much better than a ranking table.',
        ],
      },
      {
        heading: 'Troubleshoot the selector in the right order',
        paragraphs: [
          'When the selector opens but a click does nothing, first close other menus and wait for the current character to finish loading. Select a different public morph, then return to the one you wanted. If the menu itself is blank, leave and join another public server. A server comparison is more informative than repeatedly clicking the same entry because it separates a stuck instance from a roster-wide change.',
          'If the character loads but its action panel is incomplete, test the same morph away from a crowded scene and look for a form-changing action that may reveal another set. Compare what is visible, not what an old list says should exist. Report a repeatable missing action with the morph name, form, device, and room; do not turn an ordinary loading problem into a rumor about a secret command.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I change characters in Deltarune Connected?',
        answer:
          "Use the visible character selector in the current Roblox server, choose a public morph, and then inspect that morph's action menu.",
      },
      {
        question: 'Why does one character have fewer actions?',
        answer:
          'Action sets are character-specific and update-sensitive. Some morphs are more complete than others.',
      },
      {
        question: 'Are hidden characters in the normal selector?',
        answer:
          'Not necessarily. Current evidence describes several as exclusive, staff-morphed, random, temporary, or otherwise unavailable through a normal public unlock.',
      },
    ],
  },
  {
    slug: 'hidden-characters',
    title: 'Deltarune Connected Hidden Characters',
    seoTitle: 'Deltarune Connected Hidden Characters - Access Status',
    seoDescription:
      'Check Deltarune Connected hidden characters, staff or random morph access, current examples, and why videos do not prove a public unlock method.',
    summary:
      'Hidden characters exist, but current evidence often points to staff, developer, random, exclusive, or temporary access rather than repeatable player quests.',
    category: 'Hidden Access',
    difficulty: 'Intermediate',
    coverImageUrl: officialCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Uses cautious community access notes and current character videos; no hidden character is presented as publicly unlockable without a repeatable source.',
    videoSearchQueries: [
      'Deltarune Connected secret characters',
      'Deltarune Connected hidden characters',
      'Deltarune Connected dev character',
    ],
    tags: ['Hidden', 'Characters', 'Safety'],
    relatedRoutes: [
      '/characters',
      '/guides/secrets',
      '/guides/roaring-knight',
      '/guides/woody-friend-inside-me',
      '/maps',
      '/bosses',
    ],
    body: [
      {
        heading: 'Hidden does not automatically mean unlockable',
        paragraphs: [
          'Players naturally search for secret characters after seeing unusual morphs in crowded servers or videos. The dangerous assumption is that every hidden appearance must have a puzzle, badge, code, or command behind it. Current Deltarune: Connected evidence does not support that assumption. Community pages repeatedly use words such as hidden, exclusive, permission, staff member, and developer character.',
          'A useful guide therefore separates existence from access. A screenshot or video can prove that Titan, Woody, Madotsuki, Green Ralsei, Roaring Knight, or another morph existed in a build. It cannot prove that a normal player can repeat the same transformation today.',
        ],
      },
      {
        heading: 'Classify the access signal before trying anything',
        paragraphs: [
          'Use four labels. Public means the morph is visible in the normal selector. Staff-morphed means a moderator or developer can apply it to a player. Random means reports describe chance rather than a controlled route. Temporary means the morph may have been available during an event, update test, or server state that no longer exists.',
          'If you cannot place the character in one of those categories, mark it unverified. That is better than inventing an unlock requirement. Update-sensitive games generate rumors quickly, and a confident fake method wastes more time than an honest status label.',
        ],
        bullets: [
          'Check the normal selector in a fresh server.',
          'Read the video description for developer or staff involvement.',
          'Look for a repeatable method from more than one current source.',
          'Reject scripts, executors, and private account requests.',
        ],
      },
      {
        heading: 'Current examples point to restricted access',
        paragraphs: [
          'The community Woody and Madotsuki pages say a player needs permission or a staff member to morph them. Green Ralsei is described as hidden and incomplete, with an unusually long action set and graphical errors. The Titan page also calls the character exclusive and documents placeholder actions. These details fit developer showcase content much better than polished public unlocks.',
          'Roaring Knight evidence is even clearer: a current video description says a lead developer turned the creator into a dev character, while a Reddit thread eventually described the appearance as random. Neither source provides a repeatable public quest. Treat the morph as restricted or chance-based until Viatrix publishes otherwise.',
        ],
      },
      {
        heading: 'What to do when you meet a hidden character',
        paragraphs: [
          'Enjoy the encounter without demanding access, impersonating staff, or telling the server you know a secret code. Ask politely if the player wants to explain the context, but respect that staff may not share internal tools. Record the current server date and character name if you are helping update a guide.',
          'If a hidden morph becomes public later, the evidence should be simple: it appears in the normal selector or Viatrix publishes a clear method. Until then, choose a public character with a strong action set and use hidden appearances as update clues rather than progression goals.',
        ],
      },
      {
        heading: 'Build a reliable access report',
        paragraphs: [
          'A useful access report answers four questions: which exact morph appeared, whether it was visible in the normal selector, whether a staff member was present, and whether another ordinary player could repeat the result. A short clip that begins before the transformation is better than a screenshot taken afterward because it preserves the action that caused the change. Do not include account details or private messages.',
          'Even a good report should use careful language. Say that a morph appeared in one server, not that it is permanently unlocked for everyone. If the appearance happened without input, call it an unexplained or random event until it repeats. If a developer applied it, label it staff-morphed. These categories keep the character hub useful when spectacular footage spreads faster than the access context.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I unlock hidden characters?',
        answer:
          'No universal unlock method is verified. Several documented hidden morphs require staff/developer access or appear randomly.',
      },
      {
        question: 'Can a script unlock every character?',
        answer:
          'Do not use scripts or executors. They are unsafe, violate the access boundary, and do not create a legitimate public unlock.',
      },
      {
        question: 'Does a YouTube video prove a character is public?',
        answer:
          'No. It proves the morph existed in that recorded context; check whether the creator received staff or developer help.',
      },
    ],
  },
  {
    slug: 'roaring-knight',
    title: 'How to Get Roaring Knight in Deltarune Connected',
    seoTitle: 'How to Get Roaring Knight in Deltarune Connected',
    seoDescription:
      'Check how to obtain and play the Roaring Knight in Deltarune Connected, the current access boundary, and secrets players confuse with a public quest.',
    summary:
      'There is no verified public Roaring Knight quest. If the selector lists the morph, play it with the visible action menu. Otherwise the checked path is developer or random access, not a code or script.',
    category: 'Hidden Access',
    difficulty: 'Advanced',
    coverImageUrl: videos.roaringKnight.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CONTENT_UPDATED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Access note: a public session required a lead developer to apply the morph, and a community thread describes some appearances as random. Play steps cover what an account can do after the sprite is already equipped. No public quest is verified.',
    video: videos.roaringKnight,
    videoSearchQueries: [
      'How to get the Roaring Knight in Deltarune Connected Roblox',
      'Deltarune Connected Roaring Knight',
      'Deltarune Connected Roaring Knight random',
    ],
    tags: ['Roaring Knight', 'Hidden', 'Play'],
    relatedRoutes: [
      '/guides/secrets',
      '/characters',
      '/guides/hidden-characters',
      '/maps',
      '/bosses',
      '/codes',
    ],
    body: [
      {
        heading: 'The short answer: there is no verified public quest',
        paragraphs: [
          'Players search this question because a Roaring Knight appearance looks like a normal unlock. The repeatable evidence points the other way. In a checked public session, a lead developer applied the morph as a developer character. That is special access, not a quest any account can copy. A community thread about finding the knight later described the appearance as random. Random still does not name a room, timer, command, badge, or guaranteed server action.',
          'Use the obtain steps below as a status check. Use the play steps only after the sprite is already your active morph. The secrets checklist covers the other hidden morphs, rooms, and battles that get mixed into the same search.',
        ],
      },
      {
        heading: 'Obtain steps that stay inside the real game',
        paragraphs: [
          'Open the verified Viatrix experience, Place ID 12880465992, and join a fresh public server. If Roblox says there are no running experiences, refresh the official page and try another join before you follow a download or private client. Open the character selector and look for the Roaring Knight name.',
          'If the name is listed, select it, wait for the sprite to finish loading, and continue with the play steps. If it is missing, stop. Staff can apply the morph in a public server; follow only prompts that appear in the game, and do not ask for internal tools. A random appearance still has no button you can farm. Codes, chat strings, and executors are not obtain methods.',
        ],
        bullets: [
          'Confirm creator Viatrix and Place ID 12880465992.',
          'Join a fresh public server, not a modified client.',
          'Select Roaring Knight only when the current selector lists it.',
          'If it is absent, check the official Roblox page and Viatrix group for a real release note.',
          'Record the room only when the morph appears without a selector entry.',
        ],
      },
      {
        heading: 'How to play the morph once it is on your character',
        paragraphs: [
          'These steps start after Roaring Knight is already your active morph. They do not create the morph. Open the action menu in the spawn hub and try one visible expression or pose so you know the form loaded. Then walk a single labeled area. Checked public sessions move through hub, field, forest, and castle-style rooms. A scene can also drop you into an unexpected room, including a green room. Read the labels you can see and return to the hub instead of hunting a secret exit.',
          'Other players can see the sprite. They may follow you or start a battle-style interaction. Use the prompts on screen, on your morph and on theirs. Do not type a command string, and do not assume a pose, sound, or spoken line from one session is still a button in the current build. When the scene is over, open the selector and choose a public character. Leaving the server does not publish the morph for anyone else.',
        ],
        bullets: [
          'Confirm the sprite loaded before you leave the hub.',
          'Move through one labeled area at a time.',
          'Let other players opt into the scene and follow current battle prompts.',
          'Re-select a public morph when you are done.',
          'If the form is gone after a rejoin, the access was temporary.',
        ],
      },
      {
        heading: 'What the current evidence actually proves',
        paragraphs: [
          'A developer-applied morph proves the sprite exists in that build and that staff tools can put it on a player. A random appearance proves some sessions show the form without a documented trigger. Neither result adds a public selector entry, a repeatable quest, a redeem code, or a chat command.',
          'That split protects players from false guides. If a page tells you to paste a long script, join a private server, send an account cookie, or download a modified client, it is using the missing public method as bait. Leave the page and protect your Roblox account.',
        ],
      },
      {
        heading: 'Secrets players confuse with the knight',
        paragraphs: [
          'Roaring Knight searches often arrive with Woody, Titan, Madotsuki, and Green Ralsei. Those morphs have their own access notes, and none of them is a reward for finishing a knight scene. A missing doorway is a maps question. A battle that will not start is a bosses question. The secrets checklist walks that split so one failed room is not treated as a hidden character.',
        ],
        bullets: [
          'Woody uses the Woody access guide, not a knight route.',
          'Other restricted names stay on the hidden-characters page.',
          'Area branches belong on the maps page.',
          'Battle triggers belong on the bosses page.',
          'Codes remain at zero verified strings.',
        ],
      },
      {
        heading: 'What to do while access remains restricted',
        paragraphs: [
          'Choose a public character with an action set that fits the roleplay scene you want. If a developer or staff member offers a temporary morph in a public server, follow their visible instructions and do not pressure them to reveal internal tools. Never claim you can sell, trade, or permanently unlock the character for someone else.',
          'This guide will change only when a repeatable public source appears. Until then, the accurate answer is more useful than a fake ten-step quest: Roaring Knight exists in Deltarune: Connected, but a normal player unlock method is not verified.',
        ],
      },
      {
        heading: 'How a real public method would look',
        paragraphs: [
          'A genuine public method would survive a simple repeatability test. An ordinary account could join through the normal Roblox page, follow visible steps, receive the morph without staff tools, and explain the same sequence to another player. The result would work in more than one current server or appear directly in the public selector. A dramatic appearance without those conditions remains an encounter, not an unlock guide.',
          'This test also rules out common false positives. Being transformed by a developer is special access. Seeing another player with the morph proves existence only. A random change with no controllable trigger cannot be written as a guaranteed route. A script that changes local visuals is not legitimate character access. Until the repeatability test passes, spend your time on public morphs and treat Roaring Knight sightings as rare showcase moments.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Roaring Knight in Deltarune Connected?',
        answer:
          'Yes, current video and community evidence show the morph exists.',
      },
      {
        question: 'Can every player unlock Roaring Knight?',
        answer:
          'No repeatable public method is verified. A checked session used developer help, and another report calls access random.',
      },
      {
        question: 'How do I play as Roaring Knight after the morph loads?',
        answer:
          'Stay in the public server, test one visible action in the hub, walk one labeled area, and follow on-screen battle prompts. Then switch back to a public character.',
      },
      {
        question: 'Is there a Roaring Knight command?',
        answer:
          'No official public command is verified. Avoid scripts or executor instructions that claim otherwise.',
      },
    ],
  },
  {
    slug: 'secrets',
    title: 'Deltarune Connected Secrets Checklist',
    seoTitle:
      'Deltarune Connected Secrets Checklist - Characters, Maps, Bosses',
    seoDescription:
      'Run a Deltarune Connected secrets checklist for hidden morphs, Roaring Knight play steps, map branches, and boss triggers without codes or scripts.',
    summary:
      'Separate a missing selector entry, a room that failed to load, and a battle that needs another player. Roaring Knight and other secret characters stay on their access pages.',
    category: 'Hidden Access',
    difficulty: 'Beginner',
    coverImageUrl: officialCover,
    publishedAt: CONTENT_UPDATED_AT,
    updatedAt: CONTENT_UPDATED_AT,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Checklist synthesizes the current character, map, boss, and code-watch pages. It does not add unverified room secrets, promo strings, or client tools.',
    videoSearchQueries: [
      'Deltarune Connected secrets',
      'Deltarune Connected secret characters',
      'Deltarune Connected hidden characters',
    ],
    tags: ['Secrets', 'Checklist', 'Characters'],
    relatedRoutes: [
      '/characters',
      '/guides/roaring-knight',
      '/guides/hidden-characters',
      '/maps',
      '/bosses',
      '/codes',
    ],
    body: [
      {
        heading: 'Use one checklist instead of three rumors',
        paragraphs: [
          'Secret searches for Deltarune: Connected mix four different problems. A morph is missing from the selector. A doorway or prop did not load. A battle will not start. A code list from another game is sitting in the results. Those problems do not share a solution. This pass checks them in order, inside the official Roblox place, and stops when the evidence stops.',
          'The experience is one public place by Viatrix, Place ID 12880465992. Official DELTARUNE chapter maps, DONTFORGET editors, and downloadable clients are different products. If a guide asks you to install one of those, you are no longer looking at this game.',
        ],
      },
      {
        heading: 'Secret characters: check the selector before the rumor',
        paragraphs: [
          'Join a fresh public server and open the character selector. Write down the names that are actually listed. Then compare the names players usually call secrets: Roaring Knight, Woody or Friend Inside Me, Titan, Madotsuki, and Green Ralsei. A name that is listed is a public morph for this server. Select it and use its action menu. A name that is missing is an access check, not a puzzle you failed.',
          'Roaring Knight has its own obtain and play steps. Select it only when the menu shows it. If a lead developer or staff member applies it in a public server, follow the on-screen prompts and then use the play steps on that guide. Woody remains a permission or staff morph in current community notes. Titan, Madotsuki, and Green Ralsei stay on the hidden-characters page until a normal selector entry exists. No verified code turns any of those names on.',
        ],
        bullets: [
          'Listed in the selector: choose it and learn that action set.',
          'Roaring Knight missing: stop at the obtain check. Do not farm a room.',
          'Woody missing: read the Woody access guide.',
          'Other missing names: use the hidden-characters labels.',
          'Staff present: record that. Do not request tools or payment.',
        ],
      },
      {
        heading: 'Map secrets: one branch from the spawn hub',
        paragraphs: [
          'After the selector check, walk the spawn hub and pick one visible branch. Use the maps page for the safe navigation routine: spawn, character area, social or showcase rooms, battle-enabled spaces, and event scenes. The official media shows different interiors inside one place. It does not publish separate downloadable chapter maps.',
          'If a doorway, prop, or scene from a clip is missing, rejoin one fresh public server before you retrace the route. Note the room or landmark, the morph you had selected, and the last prompt on screen. A changed door after a battle or showcase scene is worth writing down. It is not proof that a hidden morph is behind it. Skip any page that offers a map file, editor, or chapter download.',
        ],
        bullets: [
          'Anchor at the spawn hub.',
          'Explore one branch, then return.',
          'Rejoin once if an object fails to load.',
          'Keep area notes on the maps page, not in a fake chapter list.',
        ],
      },
      {
        heading: 'Boss secrets: change one condition at a time',
        paragraphs: [
          'Battle-style secrets belong on the bosses page. Join a current public server, use a public morph unless the route names one that is actually in your selector, and start from the same hub you used for the map check. If the scene does not trigger, reset once and try a fresh server before you change the route.',
          'Write down whether the encounter asked for a second player, a specific morph, or a prompt you do not see. Match the guide date to the build you are in. Roaring Knight is the clearest current battle-focused character page, and it is still an access check rather than a guaranteed boss unlock. Do not use a script to force a staff-only or removed encounter.',
        ],
        bullets: [
          'Confirm the encounter is in this Roblox place.',
          'Check morph, second player, and the current prompt.',
          'Change one of those variables, then retry.',
          'Leave removed encounters marked as update-sensitive.',
        ],
      },
      {
        heading: 'What to ignore, and what to write down',
        paragraphs: [
          'The codes page is still a watch page. The official Roblox description and the Viatrix group do not publish a redeem list, and no public redeem field is verified. A string copied from another Roblox game will not open a secret here. Scripts, executors, texture packs, APKs, and anyone asking for a password or account cookie are account risks, not hidden-content tools.',
          'A useful secret report answers four questions: which morph or room you saw, whether a normal selector or doorway showed it, whether staff were in the server, and whether another ordinary player could repeat it. Say that it happened in one server. Do not turn one appearance into a permanent unlock for everyone.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are there secret characters in Deltarune Connected?',
        answer:
          'Unusual morphs exist, including Roaring Knight and Woody. Current evidence puts several of them on staff, developer, random, or exclusive access rather than a public quest.',
      },
      {
        question: 'Does a code unlock secrets?',
        answer:
          'No verified active code or public redeem system does that. Check the codes page before you type a string from another game.',
      },
      {
        question: 'Where are the secret maps?',
        answer:
          'There is one verified public Roblox place. Use the maps page for in-game branches. Chapter-map downloads usually belong to other games.',
      },
      {
        question: 'Is the Roaring Knight a secret boss route?',
        answer:
          'It is a restricted or random morph with separate play steps once you have it. It is not a verified public boss unlock. Use the bosses page for other encounters.',
      },
    ],
  },
  {
    slug: 'woody-friend-inside-me',
    title: 'Deltarune Connected Woody / Friend Inside Me Access',
    seoTitle: 'Deltarune Connected Woody - Friend Inside Me Access',
    seoDescription:
      'Check the Woody or Friend Inside Me hidden-character status in Deltarune Connected, current staff-access evidence, actions, and update context.',
    summary:
      'Woody exists as a hidden character. Current community evidence requires permission or staff morphing, and a public unlock is not verified.',
    category: 'Hidden Access',
    difficulty: 'Intermediate',
    coverImageUrl: videos.woody.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Cross-checked a direct high-traction Woody video with the community page that documents hidden/staff access and a few visible actions.',
    video: videos.woody,
    videoSearchQueries: [
      'Deltarune Connected Woody',
      'Deltarune Connected Friend Inside Me',
      'Deltarune Connected hidden Woody',
    ],
    tags: ['Woody', 'Friend Inside Me', 'Hidden'],
    relatedRoutes: [
      '/guides/hidden-characters',
      '/guides/secrets',
      '/characters',
      '/guides/roaring-knight',
      '/guides/character-selector-and-actions',
    ],
    body: [
      {
        heading: 'Woody is documented as a hidden character',
        paragraphs: [
          'The current Deltarune Connected community page calls the character Woody while also noting uncertainty around the Friend Inside Me name. It says the morph was added on March 3, 2026 and is hidden, meaning a player cannot normally use it without permission or being morphed by a staff member. That is the clearest access statement available.',
          'The selected video is useful because it confirms the character was active enough to support a complete feature video and attracted strong player interest. It does not replace the access note. A creator being turned into Woody for content is not evidence of a secret object that every player can click.',
        ],
      },
      {
        heading: 'Known actions do not create an unlock route',
        paragraphs: [
          'The community page documents a forward-facing sprite plus Soda and Stare actions. Those names help players recognize the morph and understand what they may see in a server. They do not tell us how a normal account receives the character, whether the morph is permanent, or whether the same action set still exists after later updates.',
          'Treat action documentation as descriptive evidence. If you encounter Woody in a public server, compare the visible animations and current selector. Do not assume that reproducing an action name in chat will summon or unlock the character.',
        ],
      },
      {
        heading: 'How to check for a public release',
        paragraphs: [
          'Open the selector in a freshly started public server and search the visible roster. Then check the official Roblox page and Viatrix group for update signals. If Woody becomes publicly selectable, multiple ordinary players should be able to repeat the same process without a staff member applying the morph.',
          'A video title alone is not enough. Read the description, watch for developer involvement, and compare the upload date with the current game update. This matters because a hidden character can be rebuilt, temporarily showcased, or replaced while the older video continues ranking in search.',
        ],
      },
      {
        heading: 'Safe answer for players asking how to get Woody',
        paragraphs: [
          'The accurate answer today is that Woody exists but is not verified as a normal public unlock. Staff permission or staff morphing is the documented path. Do not buy access from another player, install an executor, share account credentials, or join an unverified private server because someone promises the morph.',
          'Use a public character while you wait, and follow the hidden-character hub for future status changes. If you capture current evidence of a normal selector release, include the server date and official update context so the guide can be corrected responsibly.',
        ],
      },
      {
        heading: 'Recognize Woody without inventing a method',
        paragraphs: [
          "When Woody appears in a server, identify the morph by the character model and the Soda or Stare actions rather than by another player's display name. Watch whether the transformation happens through a public menu, after staff interaction, or with no visible trigger. That observation can clarify access status, but it still does not give you permission to pressure the player or imitate a moderator.",
          'Keep the recognition step separate from the acquisition question. The visible sprite and actions tell you that the character is real in that build. They do not create a hidden button, phrase, badge, or payment route. If Woody is later added to the public selector, the change will be obvious to ordinary accounts. Until then, the safest useful answer remains: the morph exists, its public unlock is not verified, and third-party offers should be ignored.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Woody the same as Friend Inside Me?',
        answer:
          'The community page uses Woody while noting the Friend Inside Me naming uncertainty. Both terms currently point to the same hidden-character search intent.',
      },
      {
        question: 'How do I get Woody?',
        answer:
          'No public unlock is verified. Current community evidence says permission or staff morphing is required.',
      },
      {
        question: 'What actions does Woody have?',
        answer:
          'The current community page documents Soda and Stare, but action sets can change after updates.',
      },
    ],
  },
  {
    slug: 'lightners-live-update',
    title: 'Deltarune Connected Lightners Live Update',
    seoTitle: 'Deltarune Connected Lightners Live Update Guide',
    seoDescription:
      'Understand the current Deltarune Connected Lightners Live update signal, what the official Roblox media confirms, and what remains unverified.',
    summary:
      'Current official Roblox media advertises a Lightners Live update. Treat it as live showcase content, not proof that the full DELTARUNE chapter system was imported.',
    category: 'Updates',
    difficulty: 'Beginner',
    coverImageUrl: updateCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'Based on the current official Roblox thumbnail and games API update timestamp; no unrelated official DELTARUNE videos are attached.',
    videoSearchQueries: [
      'Deltarune Connected Lightners Live update',
      'Deltarune Connected update July 2026',
    ],
    tags: ['Update', 'Lightners Live', 'Official Media'],
    relatedRoutes: [
      '/status',
      '/guides/how-to-play-deltarune-connected',
      '/characters',
      '/maps',
    ],
    body: [
      {
        heading: 'What the official update image confirms',
        paragraphs: [
          'The current Roblox thumbnail set for universe 4508091056 contains a prominent Lightners Live Update card with rhythm-game imagery. Because it comes from the official experience media, it is a high-confidence signal that Viatrix is highlighting Lightners Live content in the current build or current promotion cycle.',
          'The games API also reports a recent July 2026 update timestamp. Together, those sources justify a current update page. They do not provide a detailed changelog, permanent feature list, difficulty table, reward chart, or exact control scheme.',
        ],
      },
      {
        heading: 'Treat it as showcase content inside the Roblox experience',
        paragraphs: [
          'Deltarune: Connected is officially described as an engine remake/showcase rather than the full game. Lightners Live should therefore be approached as a current playable scene, minigame, or showcase feature inside the Roblox experience, not as proof that every official DELTARUNE chapter system and save consequence exists here.',
          'Join through the verified Roblox place, let the current server finish loading, and follow visible in-game prompts. If the feature is absent, try a fresh public server because older servers can survive briefly after an update. Do not install a mod or separate Lightners Live client.',
        ],
      },
      {
        heading: 'How to avoid wrong-video conclusions',
        paragraphs: [
          'YouTube search for Lightners Live is dominated by official DELTARUNE minigame clips, music, mods, and chapter content. Those videos can explain the source inspiration, but they do not verify how Viatrix implemented the Roblox version. This guide therefore uses the official Roblox thumbnail instead of attaching an unrelated high-view video.',
          'When a target-specific walkthrough appears, check that the title and visuals show Deltarune: Connected on Roblox, not the commercial game, a browser mod, or a fan arrangement. Record the upload date and current update label before extracting route advice.',
        ],
      },
      {
        heading: 'Current checklist for players',
        paragraphs: [
          'Start in a fresh server, use a public character, locate the update entrance through visible labels, and test the feature without assuming hidden rewards. If prompts fail to load, rejoin before changing device settings. On mobile, make sure every touch prompt is visible; on console, compare with desktop or mobile media if graphics appear incomplete.',
          'Return to the status page for verified server and update signals. This guide will expand only when current target-specific evidence supports exact controls, modes, or rewards, keeping the page useful instead of filling it with official-game guesses.',
        ],
      },
      {
        heading: 'Separate the entrance, activity, and reward questions',
        paragraphs: [
          'Players often collapse three different questions into one: where the Lightners Live content begins, what the activity asks you to do, and whether it awards anything permanent. Confirm them in that order. First find a visible entrance or prompt in a current server. Then learn the controls from what appears on screen. Only after finishing should you check whether the selector, inventory, or another interface actually changed.',
          'This prevents the update artwork from being treated as a complete mechanic list. Promotional media can confirm the theme while leaving difficulty, scoring, rewards, and availability unexplained. If no entrance appears, try another fresh server before assuming a secret requirement. If the activity works but no reward appears, do not invent one from official DELTARUNE videos. The Roblox implementation should be documented by what ordinary players can reproduce inside this experience.',
          'For group play, let one player test the first prompt while the others watch for UI changes. That makes it easier to tell whether progress is shared, individual, or simply visual without turning one confusing attempt into a permanent rule.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Lightners Live in Deltarune Connected?',
        answer:
          'The current official Roblox media explicitly advertises a Lightners Live update.',
      },
      {
        question: 'Does it work exactly like official DELTARUNE?',
        answer:
          "That is not verified. Treat it as Viatrix's current Roblox showcase implementation and follow the visible in-game prompts.",
      },
      {
        question: 'Why is there no unrelated YouTube embed?',
        answer:
          'Most high-ranking Lightners Live videos cover official DELTARUNE, not this Roblox experience, so the guide uses official Roblox media instead.',
      },
    ],
  },
  {
    slug: 'mobile-and-console',
    title: 'Deltarune Connected Mobile and Console Guide',
    seoTitle: 'Deltarune Connected Mobile and Console Guide',
    seoDescription:
      'Play Deltarune Connected on Roblox mobile or console, use safe clients, handle touch/action UI, and understand current platform limitations.',
    summary:
      'Mobile gameplay is visible in current community evidence. Console availability and rendering can differ, so use normal Roblox clients and conservative troubleshooting.',
    category: 'Platforms',
    difficulty: 'Beginner',
    coverImageUrl: videos.mobile.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Uses direct mobile target-game video evidence, official Roblox access, and current console rendering reports without claiming universal device behavior.',
    video: videos.mobile,
    videoSearchQueries: [
      'Deltarune Connected mobile Roblox',
      'Deltarune Connected console Roblox',
      'Deltarune Connected touch controls',
    ],
    tags: ['Mobile', 'Console', 'Roblox'],
    relatedRoutes: [
      '/play',
      '/guides/console-graphics-fix',
      '/guides/character-selector-and-actions',
      '/status',
    ],
    body: [
      {
        heading: 'Use the official Roblox client on every platform',
        paragraphs: [
          'The safe access path is the same on desktop, mobile, and console: sign in through Roblox, open the verified Viatrix experience, and let the current server load. Search results for Android downloads and mobile ports can point to unrelated fangames or unofficial packages. Deltarune: Connected is already a Roblox experience, so you do not need a separate APK.',
          'Current video evidence shows the target game running on mobile, including the Roblox interface around the 2D play area. That proves mobile use is real, but device size, touch layout, memory, and server version can still change the experience.',
        ],
      },
      {
        heading: 'Mobile: protect the action interface from screen crowding',
        paragraphs: [
          'On a smaller screen, open the character selector and action menu deliberately rather than tapping through a crowd. Rotate only if Roblox and the game handle the orientation correctly, close unrelated overlays, and test one character action before entering a busy multiplayer scene. If buttons overlap, reselect the morph or rejoin before assuming the action is unavailable.',
          'Use a stable connection and give official media time to load. If character sprites or backgrounds are missing, lower Roblox graphics quality where the client allows it, close other apps, and restart Roblox. Do not install texture packs or modified clients to fix rendering.',
        ],
      },
      {
        heading: 'Console: expect current build differences',
        paragraphs: [
          "A recent RobloxHelp report describes Deltarune Connected graphics failing on console while the same scene looks correct on phone. One report cannot prove a universal bug, but it is enough to justify a cautious console note. The game's heavily 2D presentation and layered assets may expose device-specific loading issues.",
          'Check whether other Roblox experiences render normally, restart the console, rejoin a different public server, and compare the scene with an official thumbnail. If the problem affects this game only, save screenshots and report the issue through verified creator surfaces. Avoid guessing hidden graphics commands.',
        ],
      },
      {
        heading: 'Choose the platform by the task',
        paragraphs: [
          'Desktop is usually easiest for reading crowded menus and comparing character actions. Mobile is proven workable and convenient for social sessions. Console may be comfortable for movement but can be harder to diagnose when action prompts or layered sprites fail. Use the device that gives you the clearest current UI rather than assuming one platform has exclusive content.',
          'If you are troubleshooting, test the same account and public character on another supported device. A cross-device comparison tells you whether the problem follows the server, character, account, or hardware, which is much more useful than reinstalling random files.',
        ],
      },
      {
        heading: 'Run a clean cross-device comparison',
        paragraphs: [
          'Use the same public morph and visit the same easy-to-recognize room on each device. Check four things: whether the background loads, whether the character sprite is complete, whether the selector opens, and whether one simple action plays. Avoid comparing two different servers during a live update if you can, because the server build may explain more than the device. Write down only the differences you can see repeatedly.',
          'The result tells you where to continue. If every device fails, try a different server or wait for a game-side correction. If only one phone fails, free memory, lower Roblox graphics quality, and restart the app. If only console fails, use the console graphics guide and prepare a concise report. This method is safer and faster than downloading a replacement client or changing account settings blindly.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I play Deltarune Connected on mobile?',
        answer:
          'Yes, direct current video evidence shows the Roblox experience running on mobile.',
      },
      {
        question: 'Do I need a Deltarune Connected APK?',
        answer:
          "No. Install Roblox from your platform's official store and use the verified experience link.",
      },
      {
        question: 'Why does console look different?',
        answer:
          'A current report suggests console rendering can fail for some players. Rejoin, restart, test another Roblox experience, and compare with another device before reporting it.',
      },
    ],
  },
  {
    slug: 'console-graphics-fix',
    title: 'Deltarune Connected Console Graphics Fix',
    seoTitle: 'Deltarune Connected Console Graphics Fix Guide',
    seoDescription:
      'Troubleshoot missing Deltarune Connected sprites or backgrounds on Roblox console with safe rejoin, restart, comparison, and reporting steps.',
    summary:
      'If console assets fail while mobile looks correct, isolate server, Roblox, and device causes before reporting the bug. Do not use mods or executors.',
    category: 'Safety',
    difficulty: 'Intermediate',
    coverImageUrl: '/deltarune-connected/media/official-4.png',
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Built from a current RobloxHelp console report plus normal Roblox troubleshooting boundaries; no guaranteed client-side fix is claimed.',
    videoSearchQueries: [
      'Deltarune Connected console graphics fix',
      'Deltarune Connected assets not loading console',
    ],
    tags: ['Console', 'Graphics', 'Troubleshooting'],
    relatedRoutes: [
      '/guides/mobile-and-console',
      '/status',
      '/play',
      '/official-links',
    ],
    body: [
      {
        heading: 'Identify whether the failure is game-specific',
        paragraphs: [
          'The reported symptom is severe: Deltarune Connected graphics collapse or fail to load on console while a phone shows the expected scene. Before changing anything, open another visually complex Roblox experience on the same console. If every game is broken, focus on Roblox, network, storage, or hardware. If only this experience fails, keep the evidence game-specific.',
          'Take a screenshot of the broken scene and compare it with the current official Roblox thumbnails. Note the character, area, server time, and whether menus still respond. Those details help distinguish a missing background layer from a total client freeze.',
        ],
      },
      {
        heading: 'Try the safe reset sequence',
        paragraphs: [
          'Leave the server completely, close Roblox, restart the console, and reopen the verified experience link. Join a different public server rather than returning to the exact same instance. Older servers can hold stale update state, while a new server may fetch the current asset set correctly.',
          'If your console exposes Roblox graphics options, use a lower quality setting for the test. Also confirm the console has free storage and a stable connection. Do one change at a time so you know which step mattered; repeated reinstalls hide useful evidence.',
        ],
        bullets: [
          'Test another Roblox experience.',
          'Capture the broken scene and current server context.',
          'Close Roblox and restart the console.',
          'Join a different public server.',
          'Lower graphics quality if the console client exposes the option.',
        ],
      },
      {
        heading: 'Compare with mobile or desktop',
        paragraphs: [
          'Use the same Roblox account on mobile or desktop and join Deltarune Connected. If the art loads there, the account and experience are broadly available, and the failure is more likely tied to console rendering, cached assets, or that server. If every device fails in the same area, the current game build or server is a stronger suspect.',
          'Do not treat the cross-device test as a permanent workaround. Its purpose is diagnosis. Record whether the same character selector, room, and update scene load correctly so a developer can reproduce the problem.',
        ],
      },
      {
        heading: 'Report the issue without risky fixes',
        paragraphs: [
          'Use the verified Viatrix Roblox group or another creator-owned surface if one becomes available. Include console model, Roblox client version if visible, time, server behavior, screenshots, and the successful or failed mobile comparison. A concise reproduction report is more valuable than saying the graphics are broken.',
          'Do not install texture packs, scripts, executors, unofficial ports, or APKs. They cannot safely repair the console client and can create account risk. If the safe reset sequence fails, the correct next step is a developer or Roblox update, not a third-party download.',
        ],
      },
      {
        heading: 'What a useful console report contains',
        paragraphs: [
          'Lead with the smallest reproducible sequence: open the verified experience, join a public server, select a named public character, enter a named or clearly described room, and observe the missing layer. Add the console model, whether another Roblox experience renders correctly, and whether a second Deltarune Connected server changes the result. Attach one clear screenshot rather than a long collection of unrelated images.',
          'Also state what still works. A responsive selector with a missing background points to a different failure than a frozen client, invisible character, or disconnected server. Mention whether the same account and scene load on mobile or desktop. This lets a developer separate asset, server, and platform symptoms. Never include your password, cookie, recovery code, private account data, or a third-party executable in a bug report.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is console graphics failure confirmed for everyone?',
        answer:
          'No. A current player report justifies troubleshooting coverage, but it does not prove a universal console bug.',
      },
      {
        question: 'What should I try first?',
        answer:
          'Close Roblox, restart the console, join a different public server, and compare the same scene on another supported device.',
      },
      {
        question: 'Should I install a graphics mod?',
        answer:
          'No. Use normal Roblox clients and report reproducible game-specific failures through verified channels.',
      },
    ],
  },
];

export const allCoreRoutes = [
  '/',
  '/guides',
  '/characters',
  '/maps',
  '/bosses',
  '/commands',
  '/codes',
  '/play',
  '/status',
  '/discord',
  '/official-links',
  '/disclaimer',
  '/privacy',
  '/terms',
  '/cookie',
  ...guides.map((guide) => `/guides/${guide.slug}`),
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
