'use client';

import { Badge } from '@/components/ui/badge';
import { officialGameFacts } from '@/data/deltarune-connected/sources';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Command,
  Compass,
  ExternalLink,
  Gamepad2,
  ListChecks,
  type LucideIcon,
  Map,
  RadioTower,
  ShieldCheck,
  Smartphone,
  Users,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: LucideIcon;
  links: WikiNavLink[];
}

const wikiNavGroups: WikiNavGroup[] = [
  {
    title: 'Start Here',
    icon: Compass,
    links: [
      { href: '/', label: 'Home' },
      { href: '/guides/how-to-play-deltarune-connected', label: 'How to Play' },
      { href: '/play', label: 'Play on Roblox' },
      { href: '/official-links', label: 'Verified Links' },
    ],
  },
  {
    title: 'Characters',
    icon: Users,
    links: [
      { href: '/characters', label: 'Characters Hub' },
      {
        href: '/guides/character-selector-and-actions',
        label: 'Selector and Actions',
      },
      { href: '/guides/hidden-characters', label: 'Hidden Characters' },
      { href: '/guides/roaring-knight', label: 'Roaring Knight' },
      { href: '/guides/woody-friend-inside-me', label: 'Woody Access' },
    ],
  },
  {
    title: 'Explore',
    icon: Map,
    links: [
      { href: '/maps', label: 'Maps and Areas' },
      { href: '/bosses', label: 'Bosses and Battles' },
      { href: '/commands', label: 'Commands and Actions' },
      { href: '/codes', label: 'Codes Status' },
    ],
  },
  {
    title: 'Updates and Platforms',
    icon: RadioTower,
    links: [
      { href: '/status', label: 'Game Status' },
      {
        href: '/guides/lightners-live-update',
        label: 'Lightners Live Update',
      },
      { href: '/guides/mobile-and-console', label: 'Mobile and Console' },
      {
        href: '/guides/console-graphics-fix',
        label: 'Console Graphics Fix',
      },
    ],
  },
  {
    title: 'Guide Index',
    icon: BookOpen,
    links: [
      { href: '/guides', label: 'All Guides' },
      { href: '/disclaimer', label: 'Disclaimer' },
    ],
  },
];

function isCurrentPath(currentPath: string | undefined, href: string) {
  return Boolean(currentPath && currentPath === href);
}

function isGroupCurrentPath(
  currentPath: string | undefined,
  group: WikiNavGroup
) {
  return group.links.some((link) => isCurrentPath(currentPath, link.href));
}

function WikiNavLinkItem({
  currentPath,
  href,
  label,
}: {
  currentPath?: string;
  href: string;
  label: string;
}) {
  const isActive = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex h-auto min-w-0 items-center justify-between gap-3 whitespace-normal rounded-md border px-3 py-2 text-left text-sm leading-6 transition',
        isActive
          ? 'border-[#67E8F9] bg-[#67E8F9] font-semibold text-[#05060A]'
          : 'border-[#32364A] bg-[#05060A] text-[#C5C8D8] hover:border-[#67E8F9] hover:bg-[#171B2A] hover:text-[#F8F7FF]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#05060A]' : 'text-[#F472B6]'
        )}
      />
    </LocaleLink>
  );
}

export function DeltaruneConnectedMobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mb-6 rounded-lg border border-[#32364A] bg-[#10131F] p-4 xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-[#F8F7FF] [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <ListChecks className="size-4 text-[#67E8F9]" />
          Wiki Menu
        </span>
        <ChevronDown className="size-4 text-[#F472B6]" />
      </summary>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {wikiNavGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 flex items-center gap-2 font-semibold text-[#F472B6] text-xs uppercase">
              <group.icon className="size-4" />
              {group.title}
            </p>
            <div className="grid gap-2">
              {group.links.map((link) => (
                <WikiNavLinkItem
                  key={link.href}
                  currentPath={currentPath}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

export function DeltaruneConnectedRouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside className="hidden w-[264px] shrink-0 space-y-4 xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-4 overflow-y-auto pb-6">
        <div className="rounded-lg border border-[#32364A] bg-[#10131F] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#67E8F9] text-xs uppercase tracking-[0.18em]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-[#F8F7FF] text-xl font-bold">
                Connected routes
              </h2>
            </div>
            <Gamepad2 className="size-5 shrink-0 text-[#F472B6]" />
          </div>

          <div className="mt-4 space-y-4">
            {wikiNavGroups.map((group) => {
              const isGroupActive = isGroupCurrentPath(currentPath, group);

              return (
                <details
                  key={group.title}
                  open={isGroupActive}
                  className={cn(
                    'group rounded-md border p-3',
                    isGroupActive
                      ? 'border-[#67E8F9]/70 bg-[#18203A]'
                      : 'border-[#32364A] bg-[#05060A]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-[#F8F7FF] text-sm [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#F472B6]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <Badge
                      variant="outline"
                      className="ml-auto border-[#32364A] bg-[#10131F] px-1.5 py-0.5 text-[#C5C8D8] text-[10px]"
                    >
                      {group.links.length}
                    </Badge>
                    <ChevronDown className="size-4 shrink-0 text-[#67E8F9] transition group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 grid gap-2">
                    {group.links.map((link) => (
                      <WikiNavLinkItem
                        key={link.href}
                        currentPath={currentPath}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg border border-[#32364A] bg-[#10131F] p-4">
          <div className="flex items-center gap-2 font-semibold text-[#F8F7FF]">
            <ShieldCheck className="size-4 text-[#67E8F9]" />
            Verified identity
          </div>
          <dl className="mt-3 space-y-2 text-[#C5C8D8] text-xs leading-5">
            <div className="flex justify-between gap-3">
              <dt>Creator</dt>
              <dd className="text-right text-[#F8F7FF]">Viatrix</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Place</dt>
              <dd className="text-right text-[#F8F7FF]">12880465992</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Type</dt>
              <dd className="text-right text-[#F8F7FF]">Morph Roleplay</dd>
            </div>
          </dl>
          <a
            href={officialGameFacts.officialRobloxUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 border-[#32364A] border-t pt-3 font-medium text-[#D7D9E8] text-sm transition hover:text-[#67E8F9]"
          >
            Open Roblox
            <ExternalLink className="size-4" />
          </a>
        </div>

        <div className="rounded-lg border border-[#32364A] bg-[#05060A] p-4 text-[#C5C8D8] text-sm leading-6">
          <div className="mb-2 flex items-center gap-2 font-semibold text-[#F8F7FF]">
            <Command className="size-4 text-[#F472B6]" />
            Entity reminder
          </div>
          Official DELTARUNE, DONTFORGET CONNECTED, and Viatrix&apos;s Roblox
          showcase are different products. This site covers only the last one.
        </div>
      </div>
    </aside>
  );
}

export function DeltaruneConnectedPageShell({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#05060A] px-4 py-6">
      <DeltaruneConnectedMobileMenu currentPath={currentPath} />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <DeltaruneConnectedRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}

export const navigationIcons = {
  start: Gamepad2,
  characters: Users,
  maps: Map,
  commands: Command,
  status: RadioTower,
  platforms: Smartphone,
};
