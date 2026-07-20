import { TopicPage } from '@/components/deltarune-connected/topic-page';
import { getTopicPage } from '@/data/deltarune-connected/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const officialLinks = getTopicPage('officialLinks');
const topic = {
  ...officialLinks,
  route: '/discord',
  label: 'Discord Status',
  title: 'Deltarune Connected Discord Status',
  seoTitle: 'Deltarune Connected Discord - Official Invite Status',
  seoDescription:
    'Check whether a verified Deltarune Connected Discord exists, avoid unrelated DELTARUNE servers, and use the official Viatrix Roblox links.',
  summary:
    'No Viatrix-owned Discord invite is independently verified right now. This status page keeps that answer separate from unrelated DELTARUNE community servers.',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: topic.seoTitle,
    description: topic.seoDescription,
    locale,
    pathname: topic.route,
    image: topic.image,
  });
}

export default function DiscordPage() {
  return <TopicPage topic={topic} />;
}
