import { FaqSection } from '@/components/deltarune-connected/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  getGuide,
  guides,
  relatedRouteLabels,
} from '@/data/deltarune-connected/guides';
import { officialGameFacts } from '@/data/deltarune-connected/sources';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    locale,
    pathname: `/guides/${slug}`,
    image: guide.coverImageUrl,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const guideImage = guide.coverImageUrl.startsWith('http')
    ? guide.coverImageUrl
    : `${officialGameFacts.domain}${guide.coverImageUrl}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.summary,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        image: guideImage,
        mainEntityOfPage: `${officialGameFacts.domain}/guides/${guide.slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Deltarune Connected Wiki',
            item: officialGameFacts.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: `${officialGameFacts.domain}/guides`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: `${officialGameFacts.domain}/guides/${guide.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-[#05060A] py-6 text-[#F8F7FF]">
      <JsonLd data={jsonLd} />
      <Container className="px-0">
        <article className="rounded-lg border border-[#32364A] bg-[#10131F] p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#A78BFA] text-[#05060A]">
              {guide.category}
            </Badge>
            <Badge
              variant="outline"
              className="border-[#32364A] text-[#C5C8D8]"
            >
              {guide.difficulty}
            </Badge>
            {guide.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-[#32364A] text-[#C5C8D8]"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-5 font-display text-4xl font-black md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-[#C5C8D8] text-lg leading-8">
            {guide.summary}
          </p>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-lg border border-[#32364A]">
            <Image
              src={guide.coverImageUrl}
              alt={`${guide.title} cover`}
              fill
              priority
              sizes="(min-width: 1024px) 820px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-8 space-y-8">
            {guide.body.map((section, index) => (
              <Fragment key={section.heading}>
                <section>
                  <h2 className="font-display text-2xl font-bold">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-4 text-[#C5C8D8] text-base leading-8">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-4 space-y-2 text-[#C5C8D8] text-sm leading-7">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>- {bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>

                {guide.video && index === 1 ? (
                  <div className="overflow-hidden rounded-lg border border-[#32364A] bg-black">
                    <iframe
                      className="aspect-video w-full"
                      src={`https://www.youtube.com/embed/${guide.video.id}`}
                      title={guide.video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <div className="bg-[#05060A] px-4 py-3 text-[#C5C8D8] text-sm">
                      Walkthrough cross-check:{' '}
                      <a
                        href={guide.video.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#67E8F9] underline underline-offset-4"
                      >
                        {guide.video.title}
                      </a>{' '}
                      by {guide.video.channel}
                    </div>
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>

          <div className="mt-10">
            <FaqSection items={guide.faq} />
          </div>

          <section className="mt-10 rounded-lg border border-[#32364A] bg-[#05060A] p-5">
            <h2 className="font-display text-[#FDE68A] text-2xl font-bold">
              Related next steps
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {guide.relatedRoutes.map((route) => (
                <LocaleLink
                  key={route}
                  href={route}
                  className="flex h-auto min-w-0 items-center justify-between gap-3 whitespace-normal rounded-md border border-[#32364A] bg-[#10131F] px-4 py-3 text-left text-[#C5C8D8] text-sm transition hover:border-[#67E8F9] hover:text-[#67E8F9]"
                >
                  <span className="min-w-0 break-words">
                    {relatedRouteLabels[route] ??
                      (route.replace(/^\/+/, '') || 'Home')}
                  </span>
                </LocaleLink>
              ))}
            </div>
          </section>
        </article>
      </Container>
    </div>
  );
}
