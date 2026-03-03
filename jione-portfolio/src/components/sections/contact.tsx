'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { resume } from '@/data/resume';

const Section = styled.section`
  padding: 5rem 1.5rem;
  background-color: ${(props) => props.theme.colors.muted};
  text-align: center;
`;

const Container = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

const SectionLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.foreground};
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const SectionDesc = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-bottom: 2.5rem;
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const ContactInfoItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.foreground};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const ContactLabel = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  min-width: 3rem;
  text-align: right;
`;

const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondaryForeground};
  padding: 0.625rem 1.25rem;
  border-radius: ${(props) => props.theme.radius.md};
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.border};
    transform: translateY(-2px);
  }
`;

const Footer = styled.footer`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`;

export function ContactSection() {
  const { profile } = resume;

  return (
    <Section id="contact">
      <Container>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut' }}>
        <SectionLabel>Contact</SectionLabel>
        <SectionTitle>함께 일해요</SectionTitle>
        <SectionDesc>
          새로운 기회나 협업 제안은 언제든지 환영합니다.
          <br />
          이메일이나 전화로 연락해 주세요.
        </SectionDesc>

        <ContactInfoList>
          <ContactInfoItem href={profile.social.email}>
            <ContactLabel>이메일</ContactLabel>
            {profile.email}
          </ContactInfoItem>
          <ContactInfoItem href={profile.social.phone}>
            <ContactLabel>전화</ContactLabel>
            {profile.phone}
          </ContactInfoItem>
        </ContactInfoList>
        <GithubButton href={profile.social.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </GithubButton>

        <Footer>© {new Date().getFullYear()} {profile.name}. All rights reserved.</Footer>
      </motion.div>
      </Container>
    </Section>
  );
}
