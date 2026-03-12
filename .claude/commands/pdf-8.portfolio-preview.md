# pdf-8: 포트폴리오 자동 생성 & 미리보기

Portfolio Builder에서 PDF 변환 완료 후, 변환된 데이터를 기반으로 포트폴리오를 자동 생성하고 미리보기한다.
기존 pm-portfolio(pm-site-builder)에서 구축한 block/corporate 컴포넌트와 theme 시스템을 재사용한다.

---

## 담당 역할

| 역할      | 미션                                                                |
| --------- | ------------------------------------------------------------------- |
| 기획자    | 포트폴리오 미리보기 UX 플로우 설계, 와이어프레임                    |
| FE 개발자 | 미리보기 페이지 UI 구현, 8개 조합 선택 그리드, 동적 렌더링          |
| BE 개발자 | 포트폴리오 빌드 API, resume.ts 데이터 → 컴포넌트 주입 로직         |
| 디자이너  | 미리보기 썸네일 레이아웃, 선택 UI 디자인, 반응형 그리드             |
| QA        | 8개 조합 렌더링 검증, resume.ts 데이터 반영 확인, 반응형 테스트     |

---

## 선행 조건

- `pdf-4.frontend.md` (FE UI) 완료 — `/pdf/result` 페이지 존재
- `data/resume.ts` 파일이 변환 완료 상태
- `jione-portfolio/` 프로젝트가 빌드되어 있어야 함 (pm-site-builder로 생성)

---

## UX 플로우

```
/pdf/result (변환 결과 미리보기 + 편집 페이지)
  │
  ├→ [resume.ts 다운로드] 버튼 (기존)
  │
  └→ [포트폴리오 미리보기] 버튼 (NEW)
       │
       ▼
/pdf/portfolio-preview
  │
  ├→ Style × Tone 선택 그리드 (8개 조합)
  │   ┌─────────────────────────────────────────┐
  │   │  Block                                  │
  │   │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   │
  │   │  │ Toss │ │Minimal│ │ Dark │ │Kakao │   │
  │   │  └──────┘ └──────┘ └──────┘ └──────┘   │
  │   │                                         │
  │   │  Corporate                              │
  │   │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐   │
  │   │  │ Toss │ │Minimal│ │ Dark │ │Kakao │   │
  │   │  └──────┘ └──────┘ └──────┘ └──────┘   │
  │   └─────────────────────────────────────────┘
  │
  ├→ 선택된 조합 미리보기 (iframe 또는 동적 렌더링)
  │   - resume.ts 데이터가 실시간으로 반영됨
  │   - 반응형 미리보기 (데스크탑/태블릿/모바일 전환)
  │
  └→ [ZIP 다운로드] 버튼 → pdf-9 기능으로 연결
```

---

## 구현 Steps

### Step 1: 기획 — UX 플로우 확정

**기획자 미션**:

1. `/pdf/result` 페이지에 "포트폴리오 미리보기" 버튼 위치 결정
2. `/pdf/portfolio-preview` 페이지 와이어프레임 작성:
   - 상단: Style × Tone 선택 그리드 (2행 × 4열)
   - 하단: 선택된 조합의 미리보기 영역
   - 우측 하단: "ZIP 다운로드" 버튼
3. 기본 선택값: block/toss

### Step 2: BE — 포트폴리오 빌드 API

**BE 개발자 미션**:

1. `src/lib/portfolio/builder.ts` 생성:
   ```typescript
   // resume.ts 데이터를 받아 포트폴리오 렌더링에 필요한 props 생성
   export function buildPortfolioProps(resumeData: ResumeDto) {
     return {
       profile: resumeData.profile,
       career: resumeData.career,
       projects: resumeData.Project,
       skills: resumeData.skills,
       meta: resumeData.meta,
     };
   }
   ```

2. `POST /api/portfolio/build` 엔드포인트 (`src/app/api/portfolio/build/route.ts`):
   - Request: `{ resumeData: ResumeDto, style: string, tone: string }`
   - 변환된 resume.ts 데이터를 포트폴리오 컴포넌트에 주입할 props 구조로 변환
   - Response: `{ success: true, props: PortfolioProps }`

3. jione-portfolio의 컴포넌트를 참조하여 props 인터페이스 맞추기:
   - Block 컴포넌트: `HeroSection`, `AboutSection`, `ProjectsSection`, `ContactSection`
   - Corporate 컴포넌트: `GNB`, `Hero`, `CardSlider`, `Career`, `Contact`

### Step 3: FE — 미리보기 페이지 구현

**FE 개발자 미션**:

1. `/pdf/result` 페이지에 "포트폴리오 미리보기" 버튼 추가:
   ```typescript
   // sessionStorage에 저장된 변환 데이터를 포트폴리오 미리보기로 전달
   <Button onClick={() => router.push('/pdf/portfolio-preview')}>
     포트폴리오 미리보기
   </Button>
   ```

2. `src/app/pdf/portfolio-preview/page.tsx` 생성:
   - sessionStorage에서 변환된 resume 데이터 로드
   - `StyleToneGrid` 컴포넌트로 8개 조합 표시
   - 선택된 조합의 포트폴리오를 `PreviewFrame`에서 렌더링

3. `src/components/portfolio-preview/StyleToneGrid.tsx`:
   - 2행(Block/Corporate) × 4열(Toss/Minimal/Dark/Kakao) 그리드
   - 각 카드에 스타일 이름 + 톤 이름 표시
   - 선택 시 하이라이트 + 미리보기 영역 업데이트

4. `src/components/portfolio-preview/PreviewFrame.tsx`:
   - jione-portfolio의 block/corporate 컴포넌트를 동적 import
   - 선택된 tone의 theme를 `StyleProvider`로 감싸서 렌더링
   - resume.ts 데이터를 각 컴포넌트 props로 주입
   - 반응형 미리보기 전환 버튼 (Desktop / Tablet / Mobile)

5. 컴포넌트 재사용 전략:
   - `jione-portfolio/src/components/block/*` → 동적 import
   - `jione-portfolio/src/components/corporate/*` → 동적 import
   - `jione-portfolio/src/styles/themes/*` → theme 토큰 import
   - `jione-portfolio/src/styles/provider.tsx` → StyleProvider import

### Step 4: 디자이너 — UI 디자인

**디자이너 미션**:

1. StyleToneGrid 카드 디자인:
   - 각 카드 크기: 200px × 140px (반응형)
   - 선택된 카드: 파란색 보더 + 체크 아이콘
   - 호버 효과: 살짝 확대 + 그림자
   - 각 톤의 대표 색상을 카드 상단 바에 표시

2. PreviewFrame 디자인:
   - 브라우저 모양 프레임 (주소창 mock 포함)
   - 반응형 전환 버튼 (🖥 / 📱 / 📲)
   - 미리보기 영역 최소 높이: 600px

3. 전체 레이아웃:
   - 좌측: 선택 그리드 (고정 사이드바)
   - 우측: 미리보기 영역 (유동)
   - 하단: ZIP 다운로드 버튼

### Step 5: QA — 미리보기 검증

**QA 미션**:

1. 8개 조합 모두 정상 렌더링 확인
2. resume.ts 데이터 필드가 각 컴포넌트에 올바르게 표시되는지 확인:
   - profile → Hero 섹션
   - career → About/Career 섹션
   - projects → Projects/CardSlider 섹션
   - skills → About/Career 섹션
3. 반응형 미리보기 전환 동작 확인
4. sessionStorage 데이터 유실 없이 페이지 이동 확인
5. jione-portfolio 컴포넌트 import 에러 없음 확인

---

## 의존 관계

```
pdf-1.spec.md (기획) → pdf-4.frontend.md (FE UI) → pdf-8 (포트폴리오 미리보기)
                                                         ↓
                                                    pdf-9 (ZIP 다운로드)
```

---

## Rules

- jione-portfolio의 컴포넌트는 **import하여 재사용** — 복사하여 중복 생성하지 않는다
- resume.ts 데이터는 sessionStorage에서 가져온다 (PDF 변환 결과)
- 미리보기는 클라이언트 사이드 렌더링 (SSR 불필요)
- 8개 조합 모두 미리보기 가능해야 한다 — 특정 조합만 지원하지 않는다
- pm-portfolio(pm-site-builder) 에이전트와 커맨드는 변경하지 않는다
