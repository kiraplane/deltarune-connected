import {
  DeltaruneConnectedMobileMenu,
  DeltaruneConnectedRouteSidebar,
} from '@/components/deltarune-connected/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guides, siteDescription } from '@/data/deltarune-connected/guides';
import { officialGameFacts } from '@/data/deltarune-connected/sources';
import { topicPageList } from '@/data/deltarune-connected/topics';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Command,
  ExternalLink,
  Gamepad2,
  LockKeyhole,
  Map,
  Play,
  RadioTower,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react';
import Image from 'next/image';

const primaryLinks = [
  {
    title: 'How to Play',
    body: 'Join the verified Roblox place, choose a public morph, and learn the action-first showcase loop.',
    href: '/guides/how-to-play-deltarune-connected',
    icon: Gamepad2,
  },
  {
    title: 'Characters',
    body: 'Understand selector access, character actions, and why the roster changes after updates.',
    href: '/characters',
    icon: Users,
  },
  {
    title: 'Roaring Knight',
    body: 'Current evidence points to developer or random access, not a verified public quest.',
    href: '/guides/roaring-knight',
    icon: LockKeyhole,
  },
  {
    title: 'Commands',
    body: 'Separate real character actions from DONTFORGET commands and unsafe Roblox scripts.',
    href: '/commands',
    icon: Command,
  },
  {
    title: 'Mobile + Console',
    body: 'Use safe Roblox clients and troubleshoot touch or console rendering differences.',
    href: '/guides/mobile-and-console',
    icon: Smartphone,
  },
  {
    title: 'Play on Roblox',
    body: 'Open Place ID 12880465992 by Viatrix and avoid APK or GameJolt confusion.',
    href: '/play',
    icon: Play,
  },
];

const quickLinks = [
  { label: 'Beginner', href: '/guides/how-to-play-deltarune-connected' },
  { label: 'Characters', href: '/characters' },
  { label: 'Hidden', href: '/guides/hidden-characters' },
  { label: 'Knight', href: '/guides/roaring-knight' },
  { label: 'Maps', href: '/maps' },
  { label: 'Commands', href: '/commands' },
  { label: 'Codes', href: '/codes' },
  { label: 'Status', href: '/status' },
];

const startSteps = [
  {
    title: 'Verify the Roblox place',
    href: '/play',
    body: 'Match Viatrix, Place ID 12880465992, and the official fangame description.',
  },
  {
    title: 'Pick a public character',
    href: '/guides/character-selector-and-actions',
    body: 'Use what the current selector shows before chasing video-only morphs.',
  },
  {
    title: 'Learn that action set',
    href: '/commands',
    body: 'Actions belong to forms; no reliable universal chat-command list is verified.',
  },
  {
    title: 'Explore one current area',
    href: '/maps',
    body: 'Follow visible labels and avoid official DELTARUNE or DONTFORGET map results.',
  },
];

const latestUpdateItems = [
  {
    title: 'Lightners Live is the current official media signal',
    href: '/guides/lightners-live-update',
    body: 'The official Roblox thumbnail highlights the update; exact modes and rewards remain unconfirmed.',
  },
  {
    title: 'Public servers were active',
    href: '/status',
    body: 'The experience supports large public servers; the status page explains what to try when one fails.',
  },
  {
    title: 'No verified codes or Discord invite',
    href: '/official-links',
    body: 'Only the Roblox experience and Viatrix group are treated as verified official destinations.',
  },
];

export function DeltaruneConnectedHomePage() {
  const latestGuides = guides.filter((guide) => guide.video).slice(0, 3);
  const featuredVideo = guides.find((guide) => guide.video)?.video;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${officialGameFacts.domain}/#website`,
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        description: siteDescription,
      },
      {
        '@type': 'Organization',
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        logo: `${officialGameFacts.domain}/deltarune-connected/icon.png`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        gamePlatform: ['Roblox'],
        applicationCategory: 'Game',
        genre: officialGameFacts.genre,
        url: officialGameFacts.officialRobloxUrl,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.creatorName,
        },
      },
    ],
  };

  return (
    <div className="bg-[#05060A] text-[#F8F7FF]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#32364A] border-b">
        <Image
          src="/deltarune-connected/media/official-1.png"
          alt="Deltarune Connected character showcase artwork"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,10,0.99)_0%,rgba(5,6,10,0.93)_45%,rgba(5,6,10,0.7)_70%,rgba(5,6,10,0.95)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#05060A] to-transparent" />

        <Container className="relative px-4 py-8 md:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#67E8F9] text-[#05060A]">
                  Roblox Morph Roleplay
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#A78BFA] bg-[#05060A]/80 text-[#DDD6FE]"
                >
                  Independent Guide Hub
                </Badge>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                Deltarune Connected Wiki
              </h1>
              <p className="max-w-2xl text-[#D7D9E8] text-lg leading-8 md:text-xl">
                Choose characters, understand hidden morphs, explore current
                showcase areas, and use the safe Roblox link without mixing in
                official DELTARUNE or DONTFORGET advice.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#67E8F9] text-[#05060A] hover:bg-[#A5F3FC]"
                >
                  <LocaleLink href="/guides/how-to-play-deltarune-connected">
                    Start Here
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#A78BFA] bg-[#05060A]/75 text-[#F8F7FF] hover:bg-[#A78BFA] hover:text-[#05060A]"
                >
                  <LocaleLink href="/characters">Characters</LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#F472B6] bg-[#05060A]/75 text-[#FCE7F3] hover:bg-[#F472B6] hover:text-[#05060A]"
                >
                  <a
                    href={officialGameFacts.officialRobloxUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Roblox
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((item) => (
                  <LocaleLink
                    key={item.label}
                    href={item.href}
                    className="rounded-md border border-[#32364A] bg-[#05060A]/75 px-3 py-2 font-medium text-[#C5C8D8] text-sm transition hover:border-[#67E8F9] hover:text-[#67E8F9]"
                  >
                    {item.label}
                  </LocaleLink>
                ))}
              </div>
            </div>

            {featuredVideo ? (
              <div className="overflow-hidden rounded-lg border border-[#32364A] bg-black shadow-2xl">
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                  title={featuredVideo.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8">
        <DeltaruneConnectedMobileMenu currentPath="/" />
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-10">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {primaryLinks.map((link) => (
                <LocaleLink
                  key={link.title}
                  href={link.href}
                  className="group rounded-lg border border-[#32364A] bg-[#10131F] p-5 transition hover:border-[#67E8F9]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#A78BFA] text-[#05060A]">
                      <link.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-[#FDE68A] text-xl font-bold">
                        {link.title}
                      </h2>
                      <p className="mt-2 text-[#C5C8D8] text-sm leading-6">
                        {link.body}
                      </p>
                    </div>
                  </div>
                </LocaleLink>
              ))}
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#32364A] bg-[#10131F] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#67E8F9] text-xs uppercase tracking-[0.18em]">
                      Latest Updates
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      Current wiki pulse
                    </h2>
                  </div>
                  <RadioTower className="size-8 text-[#F472B6]" />
                </div>
                <div className="mt-5 space-y-3">
                  {latestUpdateItems.map((item) => (
                    <LocaleLink
                      key={item.title}
                      href={item.href}
                      className="group block rounded-md border border-transparent p-3 transition hover:border-[#32364A] hover:bg-[#05060A]"
                    >
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-[#FDE68A]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[#C5C8D8] text-sm leading-6">
                          {item.body}
                        </p>
                      </div>
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#32364A] bg-[#10131F] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#F472B6] text-xs uppercase tracking-[0.18em]">
                      Start Here
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      First-session path
                    </h2>
                  </div>
                  <ShieldCheck className="size-8 text-[#67E8F9]" />
                </div>
                <div className="mt-5 space-y-3">
                  {startSteps.map((step, index) => (
                    <LocaleLink
                      key={step.title}
                      href={step.href}
                      className="group flex gap-3 rounded-lg border border-transparent p-2 transition hover:border-[#32364A] hover:bg-[#05060A]"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#A78BFA] text-[#DDD6FE]">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-[#F8F7FF]">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[#C5C8D8] text-sm leading-6">
                          {step.body}
                        </p>
                      </div>
                      <ArrowRight className="ml-auto mt-2 size-4 shrink-0 text-[#67E8F9] transition group-hover:translate-x-0.5" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#67E8F9] text-xs uppercase tracking-[0.18em]">
                    Wiki Hubs
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    High-intent routes
                  </h2>
                </div>
                <Button asChild variant="outline">
                  <LocaleLink href="/guides">All guides</LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {topicPageList.map((topic) => (
                  <LocaleLink
                    key={topic.route}
                    href={topic.route}
                    className="group rounded-lg border border-[#32364A] bg-[#10131F] p-5 transition hover:border-[#F472B6]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-[#FDE68A] text-xl font-bold">
                        {topic.label}
                      </h3>
                      <ArrowRight className="size-4 shrink-0 text-[#F472B6] transition group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-3 text-[#C5C8D8] text-sm leading-6">
                      {topic.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div>
                <p className="font-semibold text-[#67E8F9] text-xs uppercase tracking-[0.18em]">
                  Latest Guides
                </p>
                <h2 className="mt-2 font-display text-3xl font-black">
                  Answers for current player questions
                </h2>
              </div>
              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {latestGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group overflow-hidden rounded-lg border border-[#32364A] bg-[#10131F] transition hover:border-[#67E8F9]"
                  >
                    <div className="relative aspect-video overflow-hidden bg-black">
                      <Image
                        src={`https://i.ytimg.com/vi/${guide.video?.id}/hqdefault.jpg`}
                        alt={`${guide.title} video cover`}
                        fill
                        sizes="(min-width: 1024px) 280px, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-[#A78BFA] text-[#05060A]">
                          {guide.category}
                        </Badge>
                      </div>
                      <h3 className="mt-4 font-display text-[#FDE68A] text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-3 text-[#C5C8D8] text-sm leading-6">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>
          </main>

          <DeltaruneConnectedRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
