'use client';

import dynamic from 'next/dynamic';
import HeroExperience from '@/experience/HeroExperience';
import TrustBar from '@/components/sections/home/TrustBar';

// Dynamic imports for performance and code splitting
const ProblemExperience = dynamic(() => import('@/experience/ProblemExperience'), { ssr: true });
const SalesforceCapabilities = dynamic(() => import('@/components/sections/home/SalesforceCapabilities'), { ssr: true });
const CloudExplorer = dynamic(() => import('@/components/sections/home/CloudExplorer'), { ssr: true });
const StaffAugmentationProcess = dynamic(() => import('@/components/sections/home/StaffAugmentationProcess'), { ssr: true });

export default function HomePage() {
  return (
    <>
      {/* Chapter 01: Hero - Full screen with interactive network */}
      <HeroExperience />

      {/* Chapter 02: Trust Bar - Infinite marquee */}
      <TrustBar />

      {/* Chapter 03: Business Problems - Pain points */}
      <ProblemExperience />

      {/* Chapter 04: Core Salesforce Capabilities (Image-led) */}
      <SalesforceCapabilities />

      {/* Chapter 05: Salesforce Cloud Explorer */}
      <CloudExplorer />

      {/* Chapter 06: Staff Augmentation (Lightweight) */}
      <StaffAugmentationProcess />

    </>
  );
}
