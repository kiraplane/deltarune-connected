import { officialGameFacts } from './sources';

export const CODE_CHECKED_AT = '2026-07-24';

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  activeCount: 0,
  status:
    'No active Deltarune: Connected codes or public redeem system are verified. This is a code-watch page, not a copied list from another Roblox game.',
  sourcesChecked: [
    {
      label: 'Official Roblox experience',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'Viatrix group',
      url: officialGameFacts.officialGroupUrl,
    },
    {
      label: 'Current standalone competitor',
      url: 'https://deltaruneconnected.wiki/codes/active-codes/',
    },
  ],
};
