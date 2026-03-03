'use client';

import styled from 'styled-components';
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

const Badge = styled.span`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondaryForeground};
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.375rem 1rem;
  border-radius: 9999px;
  margin-bottom: 1.5rem;
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
  margin-bottom: 2.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

const PrimaryButton = styled.a`
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

export function HeroSection() {
  const { profile } = resume;

  return (
    <Section id="hero">
      <Inner>
        <Badge>{profile.yearsOfExperience} 경력</Badge>
        <Title>{profile.name}</Title>
        <RoleDetail>{profile.subtitle}</RoleDetail>
        <Tagline>{profile.tagline}</Tagline>
        <Description>{profile.bio}</Description>
        <ButtonGroup>
          <PrimaryButton href="#contact">연락하기</PrimaryButton>
          <SecondaryButton href={profile.social.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </SecondaryButton>
          <SecondaryButton href="#project">프로젝트 보기</SecondaryButton>
        </ButtonGroup>
      </Inner>
    </Section>
  );
}
