import type { DataSource } from './types';

export const CHECKED_AT = '2026-07-14';
export const OFFICIAL_CHECKED_AT = '2026-07-14';

export const officialGameFacts = {
  name: 'Deltarune: Connected',
  siteName: 'Deltarune Connected Wiki',
  domain: 'https://www.deltarune-connected.wiki',
  canonicalHost: 'www.deltarune-connected.wiki',
  robloxPlaceId: '12880465992',
  robloxUniverseId: '4508091056',
  creatorName: 'Viatrix',
  creatorType: 'Roblox Group',
  creatorId: '3135430',
  genre: 'Roleplay & Avatar Sim / Morph Roleplay',
  status: 'Live Roblox experience',
  createdAt: '2023-03-24T11:39:09.4Z',
  updatedAt: '2026-07-12T20:19:33.71587Z',
  maxPlayers: 100,
  activePlayersAtCheck: 1445,
  visitsAtCheck: 2908648,
  favoritesAtCheck: 44039,
  officialRobloxUrl:
    'https://www.roblox.com/games/12880465992/Deltarune-Connected',
  officialGroupUrl: 'https://www.roblox.com/communities/3135430/Viatrix',
};

export const siteDescription =
  'Deltarune Connected Wiki: choose characters, understand hidden morphs, find safe Roblox links, and track current Viatrix showcase updates.';

export const officialSources: DataSource[] = [
  {
    type: 'official',
    label: 'Deltarune: Connected on Roblox',
    url: officialGameFacts.officialRobloxUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Primary source for the current experience name, description, creator link, and unofficial-fangame boundary.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox universe API',
    url: `https://apis.roblox.com/universes/v1/places/${officialGameFacts.robloxPlaceId}/universe`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Confirms the place-to-universe mapping.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox games API snapshot',
    url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.robloxUniverseId}`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Confirms Viatrix group ownership, roleplay/morph genre, update signal, server capacity, and current live metrics.',
  },
  {
    type: 'official',
    label: 'Viatrix Roblox group',
    url: officialGameFacts.officialGroupUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Verified creator destination linked from the Roblox experience page.',
  },
  {
    type: 'competitor',
    label: 'Deltarune Connected standalone wiki',
    url: 'https://deltaruneconnected.wiki/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used for route inventory and content-gap analysis, not as proof of target-game mechanics.',
  },
  {
    type: 'community',
    label: 'Deltarune Connected Fandom API',
    url: 'https://deltarune-connected.fandom.com/api.php?action=query&list=allpages&aplimit=500&format=json',
    checkedAt: CHECKED_AT,
    confidence: 'watch',
    note: 'Small, incomplete community inventory used to identify character terms and hidden-access cautions.',
  },
  {
    type: 'youtube',
    label: 'Deltarune Connected video results',
    url: 'https://www.youtube.com/results?search_query=Deltarune+Connected+Roblox',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used to cross-check current character/showcase activity and platform behavior without treating videos as official patch notes.',
  },
];

export const officialQuickLinks = [
  {
    label: 'Play on Roblox',
    href: officialGameFacts.officialRobloxUrl,
  },
  {
    label: 'Viatrix Group',
    href: officialGameFacts.officialGroupUrl,
  },
];
