'use client';

import dynamic from 'next/dynamic';
import HeroExperience from '@/experience/HeroExperience';
import TrustBar from '@/components/sections/home/TrustBar';

// Dynamic imports for performance and code splitting
const ProblemExperience = dynamic(() => import('@/experience/ProblemExperience'), { ssr: true });
const PlatformExperience = dynamic(() => import('@/experience/PlatformExperience'), { ssr: true });
const ExplorerExperience = dynamic(() => import('@/experience/ExplorerExperience'), { ssr: true });
const ImplementationLifecycle = dynamic(() => import('@/components/sections/home/ImplementationLifecycle'), { ssr: true });
const StaffAugmentationProcess = dynamic(() => import('@/components/sections/home/StaffAugmentationProcess'), { ssr: true });
const EcosystemExperience = dynamic(() => import('@/experience/EcosystemExperience'), { ssr: true });
const AIConsultant = dynamic(() => import('@/features/ai-consultant/AIConsultant'), { ssr: true });

export default function HomePage() {
  return (
    <>
      {/* Chapter 01: Hero - Full screen with interactive network */}
      <HeroExperience />

      {/* Chapter 02: Trust Bar - Infinite marquee */}
      <TrustBar />

      {/* Chapter 03: Business Problems - Pain points */}
      <ProblemExperience />

      {/* Chapter 04: Connected Intelligence Platform */}
      <PlatformExperience />

      {/* Chapter 05: Architecture Explorer */}
      <ExplorerExperience />

      {/* Chapter 06: Implementation & Delivery Lifecycles */}
      <ImplementationLifecycle />

      {/* Chapter 07: Staff Augmentation & Hiring Pipeline */}
      <StaffAugmentationProcess />

      {/* Chapter 08: Industry Ecosystem */}
      <EcosystemExperience />

      {/* Chapter 09: AI Consultation Form */}
      <AIConsultant />
    </>
  );
}
