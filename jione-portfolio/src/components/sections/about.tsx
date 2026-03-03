'use client';

import styled from 'styled-components';
import { motion, type Variants } from 'framer-motion';
import { resume } from '@/data/resume';

const Section = styled.section`
  padding: 5rem 1.5rem;
  background-color: ${(props) => props.theme.colors.muted};
`;

const Container = styled.div`
  max-width: 64rem;
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
  margin-bottom: 0.5rem;
`;

const SectionDesc = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

/* ─── 경력 카드 ─────────────────────────────────────────── */

const CareerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CareerCard = styled.div<{ $isCurrent?: boolean }>`
  background-color: ${(props) => props.theme.colors.card};
  border-radius: ${(props) => props.theme.radius.lg};
  padding: 1.25rem 1.5rem;
  box-shadow: ${(props) => props.theme.shadows.sm};
  border-left: 3px solid
    ${(props) =>
      props.$isCurrent ? props.theme.colors.primary : props.theme.colors.border};
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.md};
  }
`;

const CareerCompany = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.foreground};
`;

const CareerMeta = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-top: 0.125rem;
  margin-bottom: 0.5rem;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const TaskItem = styled.li`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.secondaryForeground};
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '·';
    position: absolute;
    left: 0.25rem;
    color: ${(props) => props.theme.colors.mutedForeground};
  }
`;

/* ─── 기술 스택 ─────────────────────────────────────────── */

const SkillCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillCategoryCard = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  border-radius: ${(props) => props.theme.radius.lg};
  padding: 1.25rem 1.5rem;
  box-shadow: ${(props) => props.theme.shadows.sm};
`;

const CategoryName = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.foreground};
  margin-bottom: 0.75rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondaryForeground};
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.25rem 0.625rem;
  border-radius: ${(props) => props.theme.radius.sm};
`;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

export function AboutSection() {
  const { career, skills } = resume;

  return (
    <Section id="about">
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <SectionLabel>About</SectionLabel>
          <SectionTitle>경력 & 기술</SectionTitle>
          <SectionDesc>{career.summary}</SectionDesc>
        </motion.div>

        <Grid>
          {/* 경력 타임라인 */}
          <div>
            <CategoryName style={{ fontSize: '1rem', marginBottom: '1rem' }}>
              경력 타임라인
            </CategoryName>
            <CareerList>
              {career.experiences.map((exp, i) => (
                <motion.div key={exp.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <CareerCard $isCurrent={'isCurrent' in exp && exp.isCurrent}>
                  <CareerCompany>{exp.company}</CareerCompany>
                  <CareerMeta>
                    {exp.position} · {exp.period.start} ~{' '}
                    {exp.period.end === 'present' ? '현재' : exp.period.end}
                  </CareerMeta>
                  <TaskList>
                    {exp.tasks.map((task, i) => (
                      <TaskItem key={i}>{task}</TaskItem>
                    ))}
                  </TaskList>
                </CareerCard>
                </motion.div>
              ))}
            </CareerList>
          </div>

          {/* 기술 스택 */}
          <div>
            <CategoryName style={{ fontSize: '1rem', marginBottom: '1rem' }}>
              기술 스택
            </CategoryName>
            <SkillCategories>
              {skills.categories.map((cat) => (
                <SkillCategoryCard key={cat.name}>
                  <CategoryName>{cat.name}</CategoryName>
                  <TagList>
                    {cat.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </TagList>
                </SkillCategoryCard>
              ))}
            </SkillCategories>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
