import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    title: 'Deltarune Connected Wiki Disclaimer',
    description:
      'Independent-site disclaimer for Deltarune Connected, Viatrix, Roblox, Toby Fox, DELTARUNE, changing game details, and safety boundaries.',
    locale,
    pathname: '/disclaimer',
    image: '/deltarune-connected/icon.png',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#05060A] py-6 text-[#F8F7FF]">
      <Container className="space-y-8 px-0">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#67E8F9] text-[#05060A]">Disclaimer</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Deltarune Connected Wiki Disclaimer
          </h1>
          <p className="text-[#C5C8D8] text-lg leading-8">
            This is an independent guide site. It is not created, endorsed,
            sponsored, or operated by Roblox, Viatrix, Toby Fox, or the
            DELTARUNE team.
          </p>
        </header>

        <section className="rounded-lg border border-[#32364A] bg-[#10131F] p-6 text-[#C5C8D8] leading-8">
          <h2 className="font-display text-[#F8F7FF] text-2xl font-bold">
            Game and ownership boundary
          </h2>
          <p className="mt-3">
            Roblox lists {officialGameFacts.creatorName} as the creator of
            Deltarune: Connected. The official description calls it an
            unofficial fangame and states that DELTARUNE is owned by Toby Fox.
            This wiki covers the Roblox experience without claiming ownership of
            either project or their characters.
          </p>
          <h2 className="mt-8 font-display text-[#F8F7FF] text-2xl font-bold">
            Accuracy and game changes
          </h2>
          <p className="mt-3">
            Character, hidden-access, update, and platform details can change
            whenever the experience is revised. Staff-only, random, and
            unverified access claims are kept separate from normal player
            instructions, and uncertain details are labeled as such.
          </p>
          <h2 className="mt-8 font-display text-[#F8F7FF] text-2xl font-bold">
            Safety boundary
          </h2>
          <p className="mt-3">
            This site does not provide scripts, executors, modified clients, APK
            mirrors, private account access, fake codes, or instructions to
            bypass hidden-character restrictions. It also avoids importing
            official DELTARUNE or DONTFORGET CONNECTED mechanics into this
            Roblox experience.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#67E8F9] text-[#05060A] hover:bg-[#A5F3FC]"
          >
            <LocaleLink href="/guides/how-to-play-deltarune-connected">
              Start Guide
            </LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/official-links">Official Links</LocaleLink>
          </Button>
        </div>
      </Container>
    </div>
  );
}
