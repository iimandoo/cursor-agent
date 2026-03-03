'use client';

import styled from 'styled-components';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ProjectSection } from '@/components/sections/Project';
import { ContactSection } from '@/components/sections/contact';

const MainContainer = styled.main`
  width: 100%;
  overflow-x: hidden;
`;

export default function Home() {
  return (
    <MainContainer>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </MainContainer>
  );
}
