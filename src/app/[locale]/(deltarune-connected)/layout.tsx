import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { DeltaruneConnectedPageShell } from '@/components/deltarune-connected/wiki-navigation';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function DeltaruneConnectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#05060A]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <DeltaruneConnectedPageShell>{children}</DeltaruneConnectedPageShell>
      </main>
      <AdsterraNativeBanner className="border-[#32364A] border-t bg-[#05060A]" />
      <Footer />
    </div>
  );
}
