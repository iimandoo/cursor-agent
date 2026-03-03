'use client';

import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, type Variants } from 'framer-motion';
import { resume } from '@/data/resume';

/* ─── 섹션 레이아웃 ──────────────────────────────────────── */

const Section = styled.section`
  padding: 5rem 1.5rem;
  background-color: ${(props) => props.theme.colors.background};
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
  margin-bottom: 0.75rem;
`;

const Intro = styled.p`
  font-size: 1.0625rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.secondaryForeground};
  margin-bottom: 3rem;
  max-width: 48rem;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

/* ─── 프로젝트 카드 ──────────────────────────────────────── */

const CaseCard = styled.div<{ $hasImages: boolean }>`
  background-color: ${(props) => props.theme.colors.card};
  border-radius: ${(props) => props.theme.radius.xl};
  box-shadow: ${(props) => props.theme.shadows.sm};
  overflow: hidden;
  transition: box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: ${({ $hasImages }) => ($hasImages ? 'row' : 'column')};
  }

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.md};
  }
`;

const CardBody = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
`;

const CompanyBadge = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  background-color: #eff6ff;
  padding: 0.1875rem 0.625rem;
  border-radius: 9999px;
`;

const YearBadge = styled.span`
  font-size: 0.8125rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`;

const RoleBadge = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.secondaryForeground};
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 0.1875rem 0.625rem;
  border-radius: 9999px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.foreground};
  letter-spacing: -0.01em;
  margin-bottom: 0.75rem;
`;

const CardDesc = styled.p`
  font-size: 0.9375rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.secondaryForeground};
  margin-bottom: 1.25rem;
`;

const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-bottom: 1.25rem;
`;

const HighlightItem = styled.li`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.secondaryForeground};
  padding-left: 1.125rem;
  position: relative;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 700;
    font-size: 0.75rem;
    top: 0.125rem;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;

const Tag = styled.span`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondaryForeground};
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.1875rem 0.5rem;
  border-radius: ${(props) => props.theme.radius.xs};
`;

/* ─── 이미지 영역 ────────────────────────────────────────── */

const ImageSide = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  min-height: 240px;

  @media (min-width: 768px) {
    border-top: none;
    border-left: 1px solid ${(props) => props.theme.colors.border};
    flex: 0 0 45%;
    min-height: unset;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex: 1;
  min-height: 240px;
  background-color: ${(props) => props.theme.colors.secondary};

  &:hover::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.08);
    transition: background-color 0.2s ease;
  }
`;

/* ─── 슬라이더 (이미지 2장 이상) ────────────────────────── */

const SliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex: 1;
  min-height: 240px;
`;

const SliderTrack = styled.div<{ $index: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  transform: translateX(${({ $index }) => -$index * 100}%);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
`;

const Slide = styled.div`
  position: relative;
  flex: 0 0 100%;
  min-height: 240px;
  background-color: ${(props) => props.theme.colors.secondary};

  &:hover::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.08);
    transition: background-color 0.2s ease;
  }
`;

const SlideNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.45);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  &[data-dir='prev'] {
    left: 0.5rem;
  }
  &[data-dir='next'] {
    right: 0.5rem;
  }
`;

const SliderDots = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.375rem;
  z-index: 10;
`;

const SliderDot = styled.button<{ $active: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: ${({ $active }) =>
    $active ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.45)'};
  transition: background-color 0.15s ease;
`;

/* ─── 모달 ───────────────────────────────────────────────── */

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  cursor: zoom-out;
  animation: ${fadeIn} 0.2s ease;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: min(90vw, 960px);
  width: 100%;
  cursor: default;
  animation: ${scaleIn} 0.25s cubic-bezier(0.16, 1, 0.3, 1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -2.75rem;
  right: 0;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.75rem;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #ffffff;
  }
`;

const ModalImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.6);
`;

/* ─── 애니메이션 variants ────────────────────────────────── */

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ─── 컴포넌트 ───────────────────────────────────────────── */

interface ModalState {
  src: string;
  alt: string;
}

export function ProjectSection() {
  const { Project } = resume;
  const [modal, setModal] = useState<ModalState | null>(null);
  const [slideIndices, setSlideIndices] = useState<Record<string, number>>({});

  const closeModal = useCallback(() => setModal(null), []);
  const getIdx = (id: string) => slideIndices[id] ?? 0;

  const goSlide = useCallback((id: string, total: number, dir: 1 | -1) => {
    setSlideIndices((prev) => ({
      ...prev,
      [id]: ((prev[id] ?? 0) + dir + total) % total,
    }));
  }, []);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [modal, closeModal]);

  return (
    <>
      <Section id="project">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            <SectionLabel>Projects</SectionLabel>
            <SectionTitle>프로젝트</SectionTitle>
            <Intro>{Project.intro}</Intro>
          </motion.div>

          <CardList>
            {Project.cases.map((c, idx) => {
              const images = ('images' in c ? c.images : []) as readonly string[];
              return (
                <motion.div
                  key={c.id}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                <CaseCard $hasImages={images.length > 0}>
                  {/* 왼쪽: 텍스트 */}
                  <CardBody>
                    <CardMeta>
                      {'company' in c && c.company && (
                        <CompanyBadge>{c.company}</CompanyBadge>
                      )}
                      {'year' in c && c.year && <YearBadge>{c.year}</YearBadge>}
                      {'role' in c && c.role && <RoleBadge>{c.role}</RoleBadge>}
                    </CardMeta>
                    <CardTitle>{c.title}</CardTitle>
                    {'description' in c && c.description && (
                      <CardDesc>{c.description}</CardDesc>
                    )}
                    {'highlights' in c && c.highlights && (
                      <HighlightList>
                        {(c.highlights as readonly string[]).map((h, i) => (
                          <HighlightItem key={i}>{h}</HighlightItem>
                        ))}
                      </HighlightList>
                    )}
                    {'tags' in c && c.tags && (
                      <TagList>
                        {(c.tags as readonly string[]).map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </TagList>
                    )}
                  </CardBody>

                  {/* 이미지 1장 — 단일 표시 */}
                  {images.length === 1 && (
                    <ImageSide>
                      <ImageWrapper
                        onClick={() => setModal({ src: images[0], alt: c.title })}
                        role="button"
                        aria-label={`${c.title} 이미지 크게 보기`}
                      >
                        <Image
                          src={images[0]}
                          alt={c.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(max-width: 768px) 100vw, 45vw"
                        />
                      </ImageWrapper>
                    </ImageSide>
                  )}

                  {/* 이미지 2장 이상 — 슬라이더 */}
                  {images.length >= 2 && (
                    <ImageSide>
                      <SliderContainer>
                        <SliderTrack $index={getIdx(c.id)}>
                          {images.map((src, i) => (
                            <Slide
                              key={src}
                              onClick={() =>
                                setModal({ src, alt: `${c.title} ${i + 1}` })
                              }
                              role="button"
                              aria-label={`${c.title} 이미지 ${i + 1} 크게 보기`}
                            >
                              <Image
                                src={src}
                                alt={`${c.title} ${i + 1}`}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 45vw"
                              />
                            </Slide>
                          ))}
                        </SliderTrack>

                        <SlideNavButton
                          data-dir="prev"
                          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.stopPropagation();
                            goSlide(c.id, images.length, -1);
                          }}
                          aria-label="이전 이미지"
                        >
                          ‹
                        </SlideNavButton>

                        <SlideNavButton
                          data-dir="next"
                          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.stopPropagation();
                            goSlide(c.id, images.length, 1);
                          }}
                          aria-label="다음 이미지"
                        >
                          ›
                        </SlideNavButton>

                        <SliderDots>
                          {images.map((_, i) => (
                            <SliderDot
                              key={i}
                              $active={getIdx(c.id) === i}
                              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                e.stopPropagation();
                                setSlideIndices((prev) => ({
                                  ...prev,
                                  [c.id]: i,
                                }));
                              }}
                              aria-label={`이미지 ${i + 1}로 이동`}
                            />
                          ))}
                        </SliderDots>
                      </SliderContainer>
                    </ImageSide>
                  )}
                </CaseCard>
                </motion.div>
              );
            })}
          </CardList>
        </Container>
      </Section>

      {/* 이미지 모달 */}
      {modal && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
            <CloseButton onClick={closeModal} aria-label="닫기">
              ×
            </CloseButton>
            <ModalImageWrapper>
              <Image
                src={modal.src}
                alt={modal.alt}
                fill
                style={{ objectFit: 'contain' }}
                sizes="min(90vw, 960px)"
                priority
              />
            </ModalImageWrapper>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}
