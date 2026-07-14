import { FaqSection } from '@/components/deltarune-connected/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { relatedRouteLabels } from '@/data/deltarune-connected/guides';
import { officialGameFacts } from '@/data/deltarune-connected/sources';
import type { TopicPage as TopicPageData } from '@/data/deltarune-connected/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

function getRelatedRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? (route.replace(/^\/+/, '') || 'Home');
}

export function TopicPage({ topic }: { topic: TopicPageData }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: topic.title,
        description: topic.summary,
        dateModified: topic.updatedAt,
        image: `${officialGameFacts.domain}${topic.image}`,
        mainEntityOfPage: `${officialGameFacts.domain}${topic.route}`,
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
            name: topic.label,
            item: `${officialGameFacts.domain}${topic.route}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-[#05060A] py-6 text-[#F8F7FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="max-w-3xl space-y-4">
            <Badge className="bg-[#67E8F9] text-[#05060A]">
              {topic.eyebrow}
            </Badge>
            <h1 className="font-display text-4xl font-black md:text-6xl">
              {topic.title}
            </h1>
            <p className="text-[#C5C8D8] text-lg leading-8">{topic.summary}</p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg border border-[#32364A] bg-[#10131F]">
            <Image
              src={topic.image}
              alt={`${topic.title} artwork`}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover"
            />
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {topic.featuredRoutes.map((route) => (
            <LocaleLink
              key={route}
              href={route}
              className="group min-w-0 rounded-lg border border-[#32364A] bg-[#10131F] p-5 transition hover:border-[#67E8F9]"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="min-w-0 break-words font-display text-[#FDE68A] text-xl font-bold">
                  {getRelatedRouteLabel(route)}
                </h2>
                <ArrowRight className="size-4 shrink-0 text-[#F472B6] transition group-hover:translate-x-0.5" />
              </div>
              <p className="mt-3 text-[#C5C8D8] text-sm leading-6">
                Continue here when this is the next question in your current
                player path.
              </p>
            </LocaleLink>
          ))}
        </section>

        <article className="rounded-lg border border-[#32364A] bg-[#10131F] p-6 md:p-8">
          <div className="space-y-8">
            {topic.sections.map((section) => (
              <section key={section.heading}>
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
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#67E8F9] text-[#05060A] hover:bg-[#A5F3FC]"
            >
              <LocaleLink href="/guides">All Guides</LocaleLink>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#F472B6] bg-[#05060A] text-[#FCE7F3] hover:bg-[#F472B6] hover:text-[#05060A]"
            >
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Roblox
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
        </article>

        <FaqSection items={topic.faq} />
      </Container>
    </div>
  );
}
