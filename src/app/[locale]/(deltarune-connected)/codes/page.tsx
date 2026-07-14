import { FaqSection } from '@/components/deltarune-connected/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { codeCheckSummary } from '@/data/deltarune-connected/codes';
import { officialGameFacts } from '@/data/deltarune-connected/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Deltarune Connected Codes - Honest Active Status',
    description:
      'Deltarune Connected codes status: no verified active codes or public redeem system, plus safe Roblox checks and fake-list warnings.',
    locale,
    pathname: '/codes',
    image: '/deltarune-connected/icon.png',
  });
}

export default function CodesPage() {
  const faqs = [
    {
      question: 'Are there active Deltarune Connected codes?',
      answer:
        'No active codes or public redeem system are verified as of the current check.',
    },
    {
      question: 'Where should future codes be redeemed?',
      answer:
        'Only inside the official Roblox experience if Viatrix adds a visible redeem interface.',
    },
    {
      question: 'Can a code unlock Roaring Knight or Woody?',
      answer:
        'No verified code does that. Current evidence describes restricted, developer, staff, or random access instead.',
    },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Deltarune Connected Codes',
        description: codeCheckSummary.status,
        dateModified: codeCheckSummary.checkedAt,
        mainEntityOfPage: `${officialGameFacts.domain}/codes`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#05060A] py-6 text-[#F8F7FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#67E8F9] text-[#05060A]">Code Watch</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Deltarune Connected Codes
          </h1>
          <p className="text-[#C5C8D8] text-lg leading-8">
            {codeCheckSummary.status}
          </p>
        </header>

        <section className="rounded-lg border border-[#32364A] bg-[#10131F] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#F472B6] text-xs uppercase tracking-[0.18em]">
                Verified active codes
              </p>
              <p className="mt-2 font-display text-5xl font-black">0</p>
            </div>
            <Badge
              variant="outline"
              className="border-[#A78BFA] text-[#DDD6FE]"
            >
              No public redeem system confirmed
            </Badge>
          </div>
          <p className="mt-5 max-w-3xl text-[#C5C8D8] text-sm leading-7">
            The official Roblox description and Viatrix group page do not
            publish a code list. The page stays live because players are already
            searching for codes and deserve a clear answer instead of copied
            strings from another game.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#67E8F9] text-[#05060A] hover:bg-[#A5F3FC]"
            >
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Roblox
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/official-links">Verified Links</LocaleLink>
            </Button>
          </div>
        </section>

        <article className="rounded-lg border border-[#32364A] bg-[#10131F] p-6 md:p-8">
          <div className="space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold">
                Why fake code lists appear
              </h2>
              <div className="mt-3 space-y-4 text-[#C5C8D8] leading-8">
                <p>
                  Search engines mix similarly named Roblox games, official
                  DELTARUNE pages, DONTFORGET CONNECTED, scripts, and generic
                  code aggregators. A copied string can rank beside the correct
                  game without ever being accepted by this experience.
                </p>
                <p>
                  Codes are also a common template page for Roblox sites. That
                  does not mean every game has a redeem system. Publishing an
                  honest code-watch page is more useful than inventing a reward
                  or copying codes from another creator.
                </p>
              </div>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold">
                How future codes will be verified
              </h2>
              <div className="mt-3 space-y-4 text-[#C5C8D8] leading-8">
                <p>
                  A future code must match this exact experience, appear on a
                  verified Viatrix-owned surface or inside the current game, and
                  have a visible redeem path. A screenshot without the place
                  identity is not enough.
                </p>
                <p>
                  Redeem only inside Roblox. Never enter your Roblox password,
                  account cookie, or recovery code on a guide site. This site
                  will list the reward and exact in-game redeem steps when a
                  real code system appears.
                </p>
              </div>
            </section>
            <section>
              <h2 className="font-display text-2xl font-bold">
                Hidden characters are not code rewards
              </h2>
              <div className="mt-3 space-y-4 text-[#C5C8D8] leading-8">
                <p>
                  Current evidence for Roaring Knight, Woody, Titan, and other
                  unusual morphs points to staff, developer, random, exclusive,
                  or temporary access. No verified code unlocks them.
                </p>
                <p>
                  If someone promises a hidden morph in exchange for a script,
                  payment, login, or private download, protect your account and
                  leave. Use the hidden-character guide for the accurate access
                  status instead.
                </p>
              </div>
            </section>
          </div>
        </article>

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
