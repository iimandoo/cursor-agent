'use client';

import styled from 'styled-components';
import { motion, type Variants } from 'framer-motion';
import { resume } from '@/data/resume';

const Section = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #f9fafb 0%, #ffffff 60%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
`;

const Inner = styled.div`
  max-width: 48rem;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.foreground};
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const RoleDetail = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const Tagline = styled.p`
  font-size: 1.0625rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.secondaryForeground};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.mutedForeground};
`;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export function HeroSection() {
  const { profile } = resume;

  return (
    <Section id="hero">
      <Inner>
        <motion.div custom={0} initial="hidden" animate="visible" variants={itemVariants}>
          <Title>{profile.name}</Title>
        </motion.div>
        <motion.div custom={1} initial="hidden" animate="visible" variants={itemVariants}>
          <RoleDetail>{profile.subtitle}</RoleDetail>
        </motion.div>
        <motion.div custom={2} initial="hidden" animate="visible" variants={itemVariants}>
          <Tagline>{profile.tagline}</Tagline>
        </motion.div>
        <motion.div custom={3} initial="hidden" animate="visible" variants={itemVariants}>
          <Description>{profile.bio}</Description>
        </motion.div>
      </Inner>
    </Section>
  );
}
