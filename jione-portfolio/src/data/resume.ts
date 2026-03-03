// ⚠️ 포트폴리오 콘텐츠 단일 소스 — 이 파일만 수정하면 전체 반영됩니다.

export const resume = {
  // ─── SEO & 메타데이터 ────────────────────────────────────────────
  meta: {
    siteTitle: '이지혜 | Full-Side Product Engineer',
    siteDescription:
      'AI 도구와 자동화 프로세스를 적극 활용하여 개발 생산성을 극대화하며, 사용자 중심의 서비스 구조 개선에 강점이 있습니다. 경력 15년 이상의 Full-Side Engineer.',
    siteUrl: 'https://jione-portfolio.vercel.app',
    ogImage: '/images/og-image.jpg',
    author: '이지혜',
    keywords: [
      'Full-Side Engineer',
      'Next.js',
      'React',
      'TypeScript',
      'AI Automation',
      'EdTech',
      'PM',
      '기획',
    ],
    theme: {
      primaryColor: '#3182F6',
      accentColor: '#000000',
    },
  },

  // ─── 기본 프로필 ─────────────────────────────────────────────────
  profile: {
    name: '이지혜',
    title: 'Full-Side Product Engineer',
    subtitle: '전략 기획 · UX 설계 · 개발',
    tagline:
      '기획의 의도를 기술 명세로 전환하고, 디자인과 개발의 경계를 허물어 비즈니스 가치를 제품으로 빠르게 구현하는 Full-Side 엔지니어입니다.',
    bio: 'AI 도구와 자동화 프로세스를 적극 활용하여 개발 생산성을 극대화하며, 사용자 중심의 서비스 구조 개선에 강점이 있습니다.',
    email: 'euneundh@gmail.com',
    phone: '010-7205-0408',
    social: {
      github: 'https://github.com/iimandoo',
      email: 'mailto:euneundh@gmail.com',
      phone: 'tel:010-7205-0408',
    },
  },

  // ─── 경력 타임라인 ───────────────────────────────────────────────
  career: {
    summary: '기획·설계·개발을 아우르는 풀사이드 엔지니어링 경험.',
    experiences: [
      {
        id: 'mata-edu',
        company: '(주)마타에듀',
        position: '차장',
        period: { start: '2023-03', end: 'present' },
        isCurrent: true,
        tasks: ['서비스 전략 제안 및 PM', '기획 및 프론트엔드 개발'],
      },
      {
        id: 'freelancer',
        company: '프리랜서',
        position: '프리랜서',
        period: { start: '2014-01', end: '2022-12' },
        tasks: ['React / TypeScript 프론트엔드 개발'],
      },
      {
        id: 'hanyang',
        company: '㈜한양정보통신',
        position: '프리랜서',
        period: { start: '2012-07', end: '2013-08' },
        tasks: ['서브셋엔진 개발 (JQuery)', 'UI개발 (HTML5)'],
      },
      {
        id: 'gretech',
        company: '㈜GRETECH JAPAN',
        position: 'PM',
        period: { start: '2007-12', end: '2011-02' },
        tasks: [
          '서비스/웹 기획, 서비스 운영, 고객 대응',
          '개발 (CGI, VC++/Xcode)',
          '퍼블리싱 (HTML, Javascript)',
        ],
      },
      {
        id: 'alqui',
        company: '㈜AlquiMedia',
        position: '매니저',
        period: { start: '2007-01', end: '2007-09' },
        tasks: ['웹 기획, 웹 운영, ASP/PHP/AJAX 개발'],
      },
      {
        id: 'aion',
        company: '㈜아이온 글로벌',
        position: '사원',
        period: { start: '2005-01', end: '2006-06' },
        tasks: ['UI 기획, ASP/JSP/AJAX/VC++ 개발'],
      },
      {
        id: 'gettosoft',
        company: '㈜GettoSoft',
        position: '팀장',
        period: { start: '2003-07', end: '2004-12' },
        tasks: ['금융권 WEB 시스템 기획', '프로젝트 관리, VC++/ASP 개발'],
      },
      {
        id: 'itwill',
        company: '㈜ITWILL',
        position: '강사',
        period: { start: '2001-12', end: '2002-12' },
        tasks: ['C, C++, VC++ 언어 강의'],
      },
    ],
  },

  // ─── 기술 스택 ───────────────────────────────────────────────────
  skills: {
    categories: [
      {
        name: 'Frontend',
        items: [
          'React',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'Styled-Components',
          'Recoil',
          'Redux',
        ],
      },
      {
        name: '기획 / PM',
        items: ['서비스 전략', 'PRD 작성', 'UX/UI 설계', 'Figma', 'Make (자동화)', 'Notion'],
      },
      {
        name: 'AI / 자동화',
        items: ['Claude Code', 'Gemini', 'GCP Vertex AI', 'Python', 'AI 워크플로우'],
      },
      {
        name: 'Infrastructure',
        items: ['Vercel', 'AWS', 'Storybook', 'GitLab', 'Jira'],
      },
    ],
  },

  // ─── 프로젝트 ────────────────────────────────────────────────────
  Project: {
    intro:
      '저는 기획과 개발의 경계를 허무는 Full-Side Product Engineer입니다. 단순히 기능을 구현하는 것이 아니라, 비즈니스 전략을 기술 구조로 정교하게 전환하는 역할을 수행합니다.',
    cases: [
      {
        id: 'ai-mata',
        title: 'AI마타수학',
        year: '2023 ~ 현재',
        company: '(주)마타에듀',
        role: '기획+개발',
        description:
          'AI 진단 기반 수학 학습 플랫폼. 교사는 수업을 설계하고, 학생은 개인 맞춤 학습으로 실력을 키웁니다. 초등·중고등 전 과정을 커버하며 EBS 초등온에 납품된 서비스입니다.',
        highlights: [
          '서비스 전략 제안 및 2026 리뉴얼 구조 설계 주도',
          'React / Next.js / TypeScript / Redux 기반 개발',
          'AWS CodeCommit 기반 협업, Notion QA 관리',
          'EBS 초등온 – 마타수학 납품 (2025)',
        ],
        tags: ['Next.js', 'React', 'TypeScript', 'Redux', 'EdTech', 'AI', '기획', 'PM'],
        images: [
          '/projects/AI마타_선생님.png',
          '/projects/AI마타_학생.png',
          '/projects/초등마타.png',
          '/projects/중고등마타.png',
        ],
      },
      {
        id: 'paddly',
        title: '패들리',
        year: '2025',
        company: '(주)마타에듀',
        role: '기획+개발',
        description:
          '수학 모둠활동 서비스. 교사가 수업 활동을 직접 만들고 공유하는 학급 활동 플랫폼으로, 카드 뒤집기·퀴즈 등 다양한 인터랙티브 활동을 지원합니다.',
        highlights: [
          '서비스 전략 제안 및 모둠활동 UX 기획',
          'Figma를 활용한 인터랙션 설계',
          'Make(업무 자동화)를 활용한 기획 프로세스 효율화',
        ],
        tags: ['EdTech', 'UX 기획', 'Figma', '서비스 전략'],
        images: ['/projects/패들리.png'],
      },
      {
        id: 'cool-hanja',
        title: '쿨한자',
        year: '2025',
        company: '개인 프로젝트',
        role: '기획+개발',
        description:
          '한자 학습 서비스. Next.js로 Front/Back-end를 직접 구축하고 Vercel에 배포. AI를 활용해 빠르게 런칭한 EdTech MVP 서비스입니다.',
        highlights: [
          'Next.js 기반 풀스택 개발 (Front + Back-end)',
          'Vercel 배포 및 AI 활용 개발',
          '아이디어 단계에서 시장 검증 가능한 수준으로 빠른 런칭',
        ],
        tags: ['Next.js', 'Full-Stack', 'Vercel', 'AI', 'EdTech'],
        images: ['/projects/쿨한자.png'],
      },
      {
        id: 'baemin-sangwoe',
        title: '배민상회 Admin',
        year: '2014 ~ 2022 (프리랜서)',
        company: '우아한형제들',
        role: '개발',
        description:
          '배민상회 어드민 시스템 및 권한관리 서비스 개발. React-Query 기반 데이터 패칭 최적화와 Storybook을 통한 UI 컴포넌트 시스템을 구축했습니다.',
        highlights: [
          'React / TypeScript / Styled-Components 기반 어드민 개발',
          'React-Query를 활용한 데이터 패칭 및 캐싱 최적화',
          'Storybook을 통한 UI 컴포넌트 시스템 구축',
          'GitLab 협업 및 Jira 기반 스프린트 운영',
        ],
        tags: ['React', 'TypeScript', 'React-Query', 'Storybook', 'Styled-Components'],
        images: [],
      },
    ],
  },
} as const;

// ─── 타입 추출 ────────────────────────────────────────────────────
export type Resume = typeof resume;
export type Experience = (typeof resume.career.experiences)[number];
export type SkillCategory = (typeof resume.skills.categories)[number];
export type ProjectCase = (typeof resume.Project.cases)[number];
