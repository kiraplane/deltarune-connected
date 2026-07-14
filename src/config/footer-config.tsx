'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';

export function useFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: t('wiki.title'),
      items: [
        {
          title: t('wiki.items.characters'),
          href: Routes.Characters,
          external: false,
        },
        { title: t('wiki.items.maps'), href: Routes.Maps, external: false },
        {
          title: t('wiki.items.commands'),
          href: Routes.Commands,
          external: false,
        },
        { title: t('wiki.items.codes'), href: Routes.Codes, external: false },
        { title: t('wiki.items.status'), href: Routes.Status, external: false },
      ],
    },
    {
      title: t('guides.title'),
      items: [
        { title: t('guides.items.all'), href: Routes.Guides, external: false },
        {
          title: t('guides.items.howToPlay'),
          href: Routes.HowToPlayGuide,
          external: false,
        },
        {
          title: t('guides.items.hidden'),
          href: Routes.HiddenCharactersGuide,
          external: false,
        },
        {
          title: t('guides.items.platforms'),
          href: Routes.PlatformGuide,
          external: false,
        },
      ],
    },
    {
      title: t('legal.title'),
      items: [
        {
          title: t('legal.items.privacyPolicy'),
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('legal.items.termsOfService'),
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: t('legal.items.cookiePolicy'),
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: t('legal.items.disclaimer'),
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
  ];
}
