import { FaqSection } from '@/components/deltarune-connected/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guideCategoryIntro, guides } from '@/data/deltarune-connected/guides';
import { officialGameFacts } from '@/data/deltarune-connected/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Deltarune Connected Guides - Characters, Updates and Roblox Help',
    description:
      'Read Deltarune Connected guides for character actions, hidden morphs, Roaring Knight, Woody, Lightners Live, mobile, console, and safe Roblox access.',
    locale,
    pathname: '/guides',
    image: '/deltarune-connected/media/official-1.png',
  });
}

export default function GuidesPage() {
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Deltarune Connected Guides',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${officialGameFacts.domain}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <div className="bg-[#05060A] py-6 text-[#F8F7FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#67E8F9] text-[#05060A]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Deltarune Connected Guides
          </h1>
          <p className="text-[#C5C8D8] text-lg leading-8">
            Practical Roblox guides for choosing characters, understanding
            hidden access, following current update content, and solving mobile
            or console problems without importing mechanics from another game.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-[#32364A] bg-[#10131F] p-5"
            >
              <h2 className="font-display text-[#FDE68A] text-xl font-bold">
                {category}
              </h2>
              <p className="mt-2 text-[#C5C8D8] text-sm leading-6">
                {guideCategoryIntro[category]}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#32364A] bg-[#10131F]"
            >
              <div className="relative aspect-video border-[#32364A] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060A]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#A78BFA] text-[#05060A]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#32364A] text-[#C5C8D8]"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#32364A] text-[#C5C8D8]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-[#C5C8D8] text-sm leading-6">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 h-auto whitespace-normal bg-[#67E8F9] text-left text-[#05060A] hover:bg-[#A5F3FC]"
                >
                  <LocaleLink href={`/guides/${guide.slug}`}>
                    Read guide
                  </LocaleLink>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <FaqSection
          items={[
            {
              question: 'Which guide should I read first?',
              answer:
                'Start with How to Play, then use the character selector guide. Read hidden-character pages only when a morph is absent from the public selector.',
            },
            {
              question: 'Why is there no tier list?',
              answer:
                'Roblox classifies the experience as Morph Roleplay. No evidence-based competitive ranking system is verified.',
            },
            {
              question: 'Do these guides cover official DELTARUNE?',
              answer:
                "No. They cover Viatrix's Roblox experience and separate it from official DELTARUNE and DONTFORGET CONNECTED.",
            },
          ]}
        />
      </Container>
    </div>
  );
}
