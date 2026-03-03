'use client';

import styled from 'styled-components';
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

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  padding: 0.75rem 1.5rem;
  border-radius: ${(props) => props.theme.radius.md};
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 0.88;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondaryForeground};
  padding: 0.75rem 1.5rem;
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
        <SectionLabel>Contact</SectionLabel>
        <SectionTitle>함께 일해요</SectionTitle>
        <SectionDesc>
          새로운 기회나 협업 제안은 언제든지 환영합니다.
          <br />
          이메일이나 전화로 연락해 주세요.
        </SectionDesc>

        <ButtonGroup>
          <ContactButton href={profile.social.email}>이메일 보내기</ContactButton>
          <SecondaryButton href={profile.social.phone}>전화 연결</SecondaryButton>
          <SecondaryButton href={profile.social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </SecondaryButton>
        </ButtonGroup>

        <Footer>© {new Date().getFullYear()} {profile.name}. All rights reserved.</Footer>
      </Container>
    </Section>
  );
}
