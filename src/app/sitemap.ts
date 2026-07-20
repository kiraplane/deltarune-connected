import { allCoreRoutes } from '@/data/deltarune-connected/guides';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const stableLastModified = new Date('2026-07-14T00:00:00.000Z');

function getLocalizedRoute(locale: string, route: string) {
  if (locale === routing.defaultLocale) {
    return route;
  }
  return route === Routes.Root ? `/${locale}` : `/${locale}${route}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapList: MetadataRoute.Sitemap = [];
  const baseUrl = getCanonicalBaseUrl();

  routing.locales.forEach((locale) => {
    allCoreRoutes.forEach((route) => {
      const localizedRoute = getLocalizedRoute(locale, route);
      const isHighValueHub = [
        Routes.Guides,
        Routes.Characters,
        Routes.Maps,
        Routes.Commands,
        Routes.Codes,
        Routes.Play,
        Routes.Status,
        Routes.Discord,
        Routes.OfficialLinks,
      ].includes(route as Routes);

      sitemapList.push({
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency:
          route === Routes.Root || route === Routes.Status ? 'daily' : 'weekly',
        priority:
          route === Routes.Root
            ? 1
            : isHighValueHub
              ? 0.9
              : route.startsWith('/guides/')
                ? 0.85
                : 0.7,
      });
    });
  });

  return sitemapList;
}
