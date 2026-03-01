# 💎 Full-Side Engineer Portfolio: Jihye "Toss-Style" Lee

Next.js 16 + Styled Component 기반의 **토스(Toss) 인터페이스** 포트폴리오 시스템

## 🎨 Design Concept: "Extreme Simplicity"

- **Typography**: Toss Product Sans / Pretendard (가독성 최우선)
- **Visual**: 여백의 미, 그림자(Shadow)를 활용한 입체감, 토스 특유의 부드러운 애니메이션
- **UX Flow**: 나열형 경력이 아닌 **'마타수학 리뉴얼'** 과 **'배달의민족 배민상회'** 를 필두로 한 핵심 성과 타임라인

## 🛠 Tech Stack (High Performance)

- **Framework**: Next.js 16 (App Router), React 19

- **Styling**: Styled-Components (CSS-in-JS)

- **Animation**: Framer Motion

- **State/Data**: React-Query, Recoil, Redux

- **Efficiency**: AI 자동화 워크플로우 (Claude Code, Gemini, GCP Vertex AI 기반)

## 📂 Project Structure (Toss Service Architecture)

> **단일 페이지(Single Page) 구조**: `/` 접속 시 모든 섹션(Hero, About, Projects, Contact)이 스크롤로 이어지는 1페이지 포트폴리오로 표시됩니다. 별도 라우트 페이지 없음.

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx           # 단일 페이지 메인 — 모든 섹션 포함 (Hero → About → Projects → Contact)
│   ├── admin/             # 방문자 로그 대시보드 (/admin)
│   └── api/               # Server-side API (로깅 등)
├── components/
│   ├── sections/          # 페이지를 구성하는 섹션 컴포넌트
│   │   ├── hero.tsx       #   ↳ 인트로 / 핵심 성과 타임라인
│   │   ├── about.tsx      #   ↳ Full-Side Engineer 소개
│   │   ├── projects.tsx   #   ↳ 마타수학 리뉴얼 등 주요 프로젝트
│   │   └── contact.tsx    #   ↳ 연락처
│   └── ui/                # 토스 디자인 시스템(TDS) 스타일 공통 컴포넌트
└── actions/               # Server Actions

```

## 📈 Impact-Driven Content (Focus: Mata-Edu)

억지스러운 마케팅 용어 대신, **기술적 성취가 가져온 실질적 서비스 변화**를 기술합니다.

저는 기획과 개발의 경계를 허무는 Full-Side Product Engineer입니다.
단순히 기능을 구현하는 것이 아니라,비즈니스 전략을 기술 구조로 정교하게 전환하는 역할을 수행합니다.
에듀테크, 커머스(배민상회), 공교육(EBS) 도메인을 넘나들며 전략 수립 → UX 설계 → 프론트엔드 아키텍처 설계 → 구현 → 확장까지 제품의 전 과정을 주도해왔습니다.
현재는 AI 기반 자동화 워크플로우를 적극 활용하여 개발 속도와 품질을 동시에 끌어올리는 데 집중하고 있습니다.

### **[Case 1] AI 마타수학 서비스 2026 리뉴얼 주도 (마타에듀)**

- **Impact**: 서비스 전략 제안부터 전체 정보구조(IA) 재설계, 프론트엔드 아키텍처 개편까지 리뉴얼 전 과정을 주도했습니다. 특히 AI 도구를 기획·설계·개발 단계에 통합하여, 복잡한 교육 도메인의 요구사항을 기술 명세로 빠르게 정제하고 제품화하는 프로세스를 구축했습니다.
- **Execution**: React / Next.js / TypeScript / Redux 기반 구조 개선 및 공통 컴포넌트 체계 정립. 기획과 개발 간 간극을 줄이는 협업 방식을 설계했습니다.
- **Tools**: Figma (Design, Make), AI 기반 워크플로우

### **[Case 2] AI 마타수학 멀티 플랫폼 확장 및 EBS 공급 (마타에듀)**

- **Impact**: 초등·중고등·대학 과정으로 확장되는 AI 진단 기반 학습 플랫폼의 안정적 운영과 구조 확장을 이끌었습니다. ‘EBS 초등온’ 납품을 통해 공교육 환경에서 요구되는 서비스 안정성과 품질 기준을 충족했습니다.
- **Execution**: 대상별 학습 UX 구조 설계 및 프론트엔드 최적화 수행. 대규모 사용 환경에서도 일관성을 유지할 수 있도록 공통 UI/컴포넌트 구조를 설계했습니다.

### **[Case 3] 패들리(Paddly) 모둠활동 서비스 기획 및 설계 (마타에듀)**

- **Impact**: 실시간 인터랙티브 학급 활동 플랫폼의 서비스 전략 수립과 UX 설계를 총괄했습니다. 교사가 직접 활동을 설계·공유할 수 있는 구조를 정의했습니다.
- **Execution**: Figma 기반 인터랙션 설계 및 프로토타이핑. Make(업무 자동화) 도입으로 기획 산출물 생성 프로세스를 체계화했습니다.

### **[Case 4] 쿨한자(Cool-Hanja) MVP 풀스택 개발 (개인 프로젝트)**

- **Impact**: 아이디어 단계에서 시장 검증을 목표로 기획·설계·개발·배포까지 전 과정을 단독 수행한 EdTech MVP입니다.
- **Execution**: Next.js 기반 풀스택 구조 설계 및 Vercel 배포. AI 워크플로우를 활용해 개발 속도를 단축하고 초기 서비스 완성도를 확보했습니다.

### **[Case 5] 맘토링(Momtoring) 서비스 전략 기획 및 UX 설계**

- **Impact**: 고입·대입 입시 시장의 정보 비대칭 문제 해결을 목표로 한 멘토링 매칭 플랫폼을 기획했습니다. 학부모 고민 등록 → 전문가 매칭 → 컨설팅 구조를 설계했습니다.
- **Execution**: 서비스 구조 정의 및 비즈니스 모델 설계. 2025년 K-Startup 사업지원 준비.

### **[Case 6] 배민상회 어드민 시스템 및 권한 관리 (우아한형제들)**

- **Impact**: 배민상회 Admin 및 권한 관리 시스템의 성능 최적화와 UI 체계 정립에 기여했습니다. 대규모 데이터 환경에서의 안정성과 유지보수성을 개선했습니다.
- **Execution**: React-Query 기반 데이터 패칭 및 캐싱 구조 개선. Storybook 기반 UI 컴포넌트 시스템 구축. GitLab·Jira 기반 애자일 협업 수행.

## 📄 이력서 PDF → resume.ts 변환

모든 포트폴리오 콘텐츠는 `src/data/resume.ts` 단일 파일에서 관리됩니다.

**이력서 PDF를 `resume.ts`로 자동 변환**하는 기능을 제공합니다:

```
/content-setup 실행 시:
  1. 이력서 PDF 경로를 입력
  2. AI가 PDF를 파싱하여 구조화된 TypeScript 데이터로 변환
  3. src/data/resume.ts 파일 자동 생성
```

`resume.ts` 구조:

```typescript
// src/data/resume.ts — 포트폴리오 콘텐츠 단일 소스
export const resume = {
  meta: { ... },          // SEO 메타데이터
  profile: { ... },       // 기본 정보, 자기소개
  career: [ ... ],        // 경력 타임라인
  projects: [ ... ],      // 주요 프로젝트
  skills: { ... },        // 기술 스택
};
```

> PDF 없이도 수동으로 직접 편집 가능. 모든 섹션 컴포넌트가 이 파일을 참조합니다.

## 🤖 AI Execution Commands

8개의 Commands로 포트폴리오를 단계적으로 구축합니다.
**Phase 1(필수) → Phase 2(선택)** 순서로 진행합니다.

---

### 🟢 Phase 1 — 포트폴리오 완성 (필수, 약 40분)

로컬에서 포트폴리오를 완성하는 핵심 단계입니다. 이 4개를 완료하면 포트폴리오가 완성됩니다.

```
1️⃣ /project-init          ← 프로젝트 초기화 (Next.js, 의존성, 폴더 구조)
   ↓
2️⃣ /toss-theme-on         ← 디자인 시스템 적용 (토스 UI)
   ↓
3️⃣ /content-setup         ← 콘텐츠 입력 (resume.ts 단일 소스, PDF 변환 지원)
   ↓
4️⃣ /sample-page-create    ← 섹션 컴포넌트 생성 (Hero, About, Projects, Contact)

✅ Phase 1 완료 = 로컬에서 완성된 포트폴리오 확인 가능
```

| #   | Command               | 설명                                              | 예상 시간 |
| --- | --------------------- | ------------------------------------------------- | --------- |
| 1   | `/project-init`       | Next.js 프로젝트 생성, 의존성 설치, 폴더 구조    | 5분       |
| 2   | `/toss-theme-on`      | 토스 디자인 토큰 (컬러, 타이포그래피, 쉐도우) 적용 | 10분      |
| 3   | `/content-setup`      | resume.ts 생성 (PDF → TS 변환 또는 직접 입력)    | 15분      |
| 4   | `/sample-page-create` | 단일 페이지 섹션 컴포넌트 자동 생성              | 10분      |

---

### 🔵 Phase 2 — 배포 & 운영 최적화 (선택, 약 45분)

Phase 1 완료 후 필요한 시점에 추가 진행합니다.

```
5️⃣ /seo-optimize          ← SEO 최적화 (메타데이터, sitemap, robots.txt)
   ↓
6️⃣ /vercel-deploy         ← Vercel 배포 (GitHub 자동 배포 파이프라인)
   ↓
7️⃣ /admin-logging-setup   ← 방문자 분석 (접속 로그, /admin 대시보드)
   ↓
8️⃣ /monitoring-setup      ← 모니터링 (Google Analytics, 성능 분석)
```

| #   | Command                | 설명                                             | 예상 시간 |
| --- | ---------------------- | ------------------------------------------------ | --------- |
| 5   | `/seo-optimize`        | SEO 메타데이터, sitemap, robots.txt 설정         | 10분      |
| 6   | `/vercel-deploy`       | Vercel 배포, GitHub 자동 배포 파이프라인 설정    | 15분      |
| 7   | `/admin-logging-setup` | 방문자 접속 로그 기능, /admin 대시보드           | 10분      |
| 8   | `/monitoring-setup`    | Google Analytics, 성능 모니터링 설정             | 10분      |

---

### 📈 전체 실행 시간

| 시나리오              | 시간  | 포함 내용                          |
| --------------------- | ----- | ---------------------------------- |
| Phase 1만 (Command 1-4) | 40분  | 로컬 완성 포트폴리오               |
| Phase 1+2 일부 (1-4, 5-6) | 65분 | + SEO + Vercel 배포                |
| 전체 (Command 1-8)    | 85분  | + 방문자 분석 + 성능 모니터링      |

### 🔗 Command 의존성 그래프

```
/project-init
    ↓
/toss-theme-on
    ↓ (동시 진행 가능)
/content-setup → /sample-page-create
                    ↓
                /seo-optimize
                    ↓
                /vercel-deploy
                    ↓ (동시 진행 가능)
            /admin-logging-setup
            /monitoring-setup
```

### ✅ Vercel 배포 전 체크리스트

**배포하기 전에 다음 항목을 확인하세요:**

```
✅ npm run build 성공 (로컬)
✅ npm run dev 정상 작동
✅ 모든 링크 동작 확인
✅ 이미지 경로 올바름
✅ Meta 태그 (title, description) 설정
✅ 환경 변수 Vercel에 등록
✅ robots.txt, sitemap.xml 생성
✅ Google Search Console 소유권 확인
✅ 모바일 반응형 테스트 완료
✅ Chrome Lighthouse 성능 점수 > 80
```

### 🚀 배포 후 필수 작업

**Vercel 배포 후 24시간 이내:**

```
1. Google Search Console에 포트폴리오 URL 등록
   https://search.google.com/search-console

2. Sitemap 제출
   Dashboard → Sitemaps → /sitemap.xml 추가

3. 모바일 친화성 테스트
   https://search.google.com/test/mobile-friendly

4. 도메인 설정 (선택)
   Vercel Dashboard → Domains → 커스텀 도메인 추가

5. 모니터링 시작
   Google Analytics 실시간 리포트 확인
```

### 📊 운영 가이드

**주간 (매주):**

- Vercel Analytics에서 Core Web Vitals 확인
- 접속 로그 (/admin) 검토

**월간 (매월):**

- Google Analytics 리포트 분석
- Google Search Console 검색 순위 확인
- Lighthouse 성능 점수 재검사

**분기별 (3개월마다):**

- 종합 분석 리포트 작성
- 콘텐츠 업데이트 계획
- SEO 개선 전략 수립
