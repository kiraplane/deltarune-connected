import { DeltaruneConnectedHomePage } from '@/components/deltarune-connected/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Deltarune Connected Wiki - Characters and Roblox Guides',
    description:
      'Choose Deltarune Connected characters, understand hidden morphs, find safe Roblox links, and track current Viatrix showcase updates.',
    locale,
    pathname: '',
    image: '/deltarune-connected/media/official-1.png',
  });
}

export default function HomePage() {
  return <DeltaruneConnectedHomePage />;
}
