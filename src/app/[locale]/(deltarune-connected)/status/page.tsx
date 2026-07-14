import { TopicPage } from '@/components/deltarune-connected/topic-page';
import { getTopicPage } from '@/data/deltarune-connected/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const topic = getTopicPage('status');

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

export default function StatusPage() {
  return <TopicPage topic={topic} />;
}
