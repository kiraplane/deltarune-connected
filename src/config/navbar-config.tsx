'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Command,
  ExternalLink,
  Gamepad2,
  LockKeyhole,
  Map,
  RadioTower,
  Smartphone,
  Users,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'All Guides',
          description:
            'Current character, update, platform, and safety guides.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'How to Play',
          description: 'Join safely, choose a public morph, and explore.',
          href: Routes.HowToPlayGuide,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Mobile + Console',
          description: 'Platform setup and current rendering differences.',
          href: Routes.PlatformGuide,
          external: false,
          icon: <Smartphone className="size-4" />,
        },
      ],
    },
    {
      title: t('characters.title'),
      href: Routes.Characters,
      external: false,
      icon: <Users className="size-4" />,
      items: [
        {
          title: 'Characters Hub',
          description:
            'Public selector access and update-sensitive roster notes.',
          href: Routes.Characters,
          external: false,
          icon: <Users className="size-4" />,
        },
        {
          title: 'Selector + Actions',
          description: 'Use morph-specific expressions and action menus.',
          href: Routes.CharacterSelectorGuide,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Hidden Characters',
          description: 'Separate staff, random, temporary, and public access.',
          href: Routes.HiddenCharactersGuide,
          external: false,
          icon: <LockKeyhole className="size-4" />,
        },
        {
          title: 'Roaring Knight',
          description: 'Developer/random access status without fake commands.',
          href: Routes.RoaringKnightGuide,
          external: false,
          icon: <LockKeyhole className="size-4" />,
        },
      ],
    },
    {
      title: t('explore.title'),
      href: Routes.Maps,
      external: false,
      icon: <Map className="size-4" />,
      items: [
        {
          title: 'Maps + Areas',
          description: 'Current in-game areas without wrong-game downloads.',
          href: Routes.Maps,
          external: false,
          icon: <Map className="size-4" />,
        },
        {
          title: 'Commands + Actions',
          description: 'Target-game status and DONTFORGET disambiguation.',
          href: Routes.Commands,
          external: false,
          icon: <Command className="size-4" />,
        },
        {
          title: 'Game Status',
          description: 'Server and current official update signals.',
          href: Routes.Status,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
    {
      title: t('official.title'),
      href: Routes.Play,
      external: false,
      icon: <ExternalLink className="size-4" />,
      items: [
        {
          title: 'Play on Roblox',
          description: 'Open Place ID 12880465992 by Viatrix.',
          href: Routes.Play,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Verified Links',
          description: 'Roblox and Viatrix destinations only.',
          href: Routes.OfficialLinks,
          external: false,
          icon: <ExternalLink className="size-4" />,
        },
        {
          title: 'Codes Status',
          description: 'No verified active codes or redeem system.',
          href: Routes.Codes,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
  ];
}
