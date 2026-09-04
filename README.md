# TOOJIN — 템플릿 아카이브

> ⚠️ **React + Vite 학습용 연습 프로젝트입니다.** 상용 서비스가 아니며, 모든 문구·가격·연락처는 예시 더미 데이터입니다.

아이웹(imweb) 테마 갤러리처럼 **카테고리별 홈페이지 템플릿을 미리보고 골라 쓰는** 구조를 연습 삼아 만들었습니다.
로그인 없이 **브라우저 세션(sessionStorage)** 에만 선택 상태를 저장합니다.

| | |
|---|---|
| 스택 | React 18 · Vite 5 · React Router 6 |
| 템플릿 | 7개 카테고리 × 3종 = **21종** |
| 인증 | 없음 (세션 저장만) |
| 외부 이미지 | 0장 — 모든 시각 요소가 CSS |

---

## 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 정적 빌드
npm run preview  # 빌드 결과 미리보기 (4173)
```

---

## 폴더 구조

```
template/
├─ index.html                  Google Fonts 로드 + #root
├─ vite.config.js
├─ package.json
└─ src/
   ├─ main.jsx                 진입점 · HashRouter 라우팅 정의
   │
   ├─ styles/
   │  └─ global.css            갤러리 셸 전용 디자인 시스템
   │                           (CSS 변수 · 카드 · 프리뷰 · 토스트)
   │
   ├─ data/
   │  ├─ categories.js         7개 카테고리 정의 (id · 이름 · 설명)
   │  └─ templates.js          21종 메타데이터 + 컴포넌트 레지스트리
   │
   ├─ hooks/
   │  └─ useSession.js         sessionStorage 훅 3종 + 초기화 함수
   │
   ├─ components/
   │  ├─ Header.jsx            상단 네비 · 보관함 개수 뱃지
   │  ├─ TemplateCard.jsx      라이브 축소 썸네일 카드
   │  └─ Toast.jsx             적용/해제 알림
   │
   ├─ pages/
   │  ├─ Gallery.jsx           히어로 · 카테고리 레일 · 섹션 그리드
   │  ├─ Preview.jsx           전체 미리보기 · 디바이스 토글 · 적용
   │  └─ Saved.jsx             보관함 (사용 중 · 찜 · 최근 본)
   │
   └─ templates/               ← 템플릿 21종 (카테고리별 폴더)
      ├─ shop/       NoirAtelier · CitrusMarket · GearheadSupply
      ├─ business/   MeridianPartners · AtlasIndustrial · BloomClinic
      ├─ blog/       Broadsheet · NeonDispatch · PaperJournal
      ├─ event/      PulseFestival · SummitDeck · Launchpad
      ├─ portfolio/  Monolith · Darkroom · Sketchbook
      ├─ community/  TownSquare · ArcadeGuild · StudyCircle
      └─ booking/    SalonLune · TableNo9 · HanokStay
                     (각 템플릿 = 같은 이름의 .jsx + .css 한 쌍)
```

---

## 라우팅

`HashRouter`를 씁니다. 서버 설정 없이 정적 호스팅(GitHub Pages 등)에 올릴 수 있습니다.

| 경로 | 화면 |
|---|---|
| `#/` | 전체 갤러리 (21종 · 카테고리 섹션별) |
| `#/?c=shop` | 특정 카테고리만 (`shop` `business` `blog` `event` `portfolio` `community` `booking`) |
| `#/preview/:id` | 템플릿 전체 미리보기 (예: `#/preview/hanok-stay`) |
| `#/saved` | 보관함 — 사용 중 · 찜 · 최근 본 |

---

## 데이터 흐름

```
data/templates.js  ──▶  Gallery ──▶ TemplateCard ──▶ 템플릿 컴포넌트 (축소 렌더)
       │                   │
       │                   └──────▶ Preview ──▶ 템플릿 컴포넌트 (실제 크기 렌더)
       │                              │
       └── TEMPLATE_MAP[id] ◀─────────┘
                  ▲
                  │  id만 저장
          hooks/useSession.js ──▶ sessionStorage
```

템플릿을 추가하려면 **두 곳만** 건드리면 됩니다.

1. `src/templates/<카테고리>/새이름.jsx` + `.css` 생성
2. `src/data/templates.js`에서 import 하고 배열에 항목 추가

```js
{
  id: "my-template",        // URL에 쓰이는 고유값
  category: "shop",         // categories.js의 id
  name: "한글 이름",
  latin: "My Template",
  tone: "톤 설명",
  desc: "카드 · 프리뷰에 쓰이는 한 줄 설명",
  tags: ["태그1", "태그2"],
  layout: "레이아웃 요약",
  Component: MyTemplate,
}
```

---

## 세션 저장 (로그인 없음)

`sessionStorage`에 **id만** 저장합니다. 탭을 닫으면 초기화됩니다.

| 키 | 값 | 훅 |
|---|---|---|
| `toojin.selected` | 적용한 템플릿 id 1개 | `useSelected()` |
| `toojin.saved` | 찜한 id 배열 | `useSaved()` |
| `toojin.recent` | 최근 본 id 최대 8개 | `useRecent()` |

같은 탭 안의 여러 컴포넌트가 즉시 동기화되도록 `window` 커스텀 이벤트(`toojin:session`)를 씁니다.
`sessionStorage` 접근은 전부 `try/catch`로 감싸 시크릿 모드나 저장이 차단된 환경에서도 화면이 깨지지 않습니다.

---

## 설계 노트

**라이브 썸네일** — 카드에 스크린샷 이미지를 쓰지 않고 **실제 컴포넌트를 1440px 무대에 렌더한 뒤 `transform: scale()`로 축소**합니다.
`ResizeObserver`로 카드 폭에 맞춰 배율을 계산하고, `IntersectionObserver`로 화면에 들어올 때만 마운트해 21개를 한꺼번에 그리지 않습니다.

**컨테이너 쿼리** — 각 템플릿 루트에 `container-type: inline-size`를 줬습니다.
덕분에 미디어 쿼리 대신 `@container` + `cqw` 단위만으로, **카드 안(1440px)에서도 모바일 프리뷰(414px)에서도 같은 코드가 정확히 반응**합니다.

**CSS 스코프 분리** — 템플릿마다 `.t-<이름>` 루트 클래스 아래에 모든 규칙을 둬서, 21종이 한 페이지에 동시에 떠도 서로 간섭하지 않습니다.

**이미지 0장** — 배경·상품컷·인물 등 모든 시각 요소를 CSS 그라디언트, 반복 패턴, SVG 노이즈 필터로만 만들었습니다. 외부 에셋 의존과 깨진 이미지가 없습니다.

---

## 템플릿 21종

| 카테고리 | 템플릿 | 디자인 방향 |
|---|---|---|
| **쇼핑몰** | 느와르 아틀리에 / 시트러스 마켓 / 기어헤드 서플라이 | 럭셔리 다크 · 벤토 플레이풀 · 브루탈리스트 |
| **비즈니스 홍보** | 메리디안 파트너스 / 아틀라스 인더스트리얼 / 블룸 클리닉 | 딥네이비 대칭 · 도면형 산업 · 세이지 파스텔 |
| **블로그·미디어** | 브로드시트 / 네온 디스패치 / 페이퍼 저널 | 신문 다단 · 터미널 네온 · 종이 마지널리아 |
| **이벤트·프로젝트** | 펄스 페스티벌 / 서밋 덱 / 런치패드 | 맥시멀 메시 · 스위스 다크 미니멀 · 스티커 펀딩 |
| **포트폴리오** | 모노리스 / 다크룸 / 스케치북 | 흑백 브루탈 · 암실 필름 · 콜라주 핀보드 |
| **커뮤니티** | 타운스퀘어 / 아케이드 길드 / 스터디 서클 | 3분할 고밀도 · 픽셀 아케이드 · 모눈 노트 |
| **예약·기타** | 살롱 뤼느 / 테이블 넘버나인 / 한옥 스테이 | 아르데코 골드 · 다이닝 무드 · 세로 조판 |

레이아웃 원형이 겹치지 않도록 카드형·표형·다단·3분할·핀보드·스택·세로조판을 분산 배치했고,
폰트도 템플릿마다 다른 조합(Bodoni Moda · Anton · Silkscreen · Poiret One · Major Mono Display · Gaegu 등)을 씁니다.

---

## 알려진 한계

- 연습용이라 템플릿의 링크·버튼은 모두 더미(`#c`)이며 실제로 동작하지 않습니다.
- 선택 상태는 서버에 저장되지 않아 다른 기기·브라우저에서 공유되지 않습니다.
- 컨테이너 쿼리를 쓰므로 구형 브라우저(Chrome 105 미만 등)에서는 레이아웃이 깨질 수 있습니다.

---

## 결과물

<img width="1920" height="5725" alt="screencapture-localhost-5173-2026-09-04-14_04_42" src="https://github.com/user-attachments/assets/7877f2f4-6f7b-4dad-b4f3-1d514b61f2a9" />
<img width="1920" height="3646" alt="screencapture-localhost-5173-2026-09-04-14_08_36" src="https://github.com/user-attachments/assets/d43bcd20-68fb-43c3-adae-a080d7bb850d" />
<img width="1920" height="3605" alt="screencapture-localhost-5173-2026-09-04-14_08_30" src="https://github.com/user-attachments/assets/c09053f6-dd90-4224-b5ce-fff302444930" />
<img width="1920" height="3306" alt="screencapture-localhost-5173-2026-09-04-14_08_22" src="https://github.com/user-attachments/assets/e22340a0-64c4-4866-a58e-376d429fe43e" />
<img width="1920" height="1908" alt="screencapture-localhost-5173-2026-09-04-14_08_15" src="https://github.com/user-attachments/assets/add14e14-ed64-4fe5-9ec7-0315ef61e9ba" />
<img width="1920" height="1790" alt="screencapture-localhost-5173-2026-09-04-14_08_07" src="https://github.com/user-attachments/assets/4e5a5d09-4946-470f-b64b-5f110e92c3a0" />
<img width="1920" height="919" alt="screencapture-localhost-5173-2026-09-04-14_08_00" src="https://github.com/user-attachments/assets/7be278f2-cf5d-451e-a406-34b90b5702be" />
<img width="1920" height="2287" alt="screencapture-localhost-5173-2026-09-04-14_07_51" src="https://github.com/user-attachments/assets/efbb7e95-8bbc-43d2-ab34-c0cce9da8f8c" />
<img width="1920" height="3202" alt="screencapture-localhost-5173-2026-09-04-14_07_27" src="https://github.com/user-attachments/assets/23e33769-8fa5-47bf-9847-2e609ed54745" />
<img width="1920" height="2494" alt="screencapture-localhost-5173-2026-09-04-14_07_14" src="https://github.com/user-attachments/assets/edf3f571-2cea-4c64-baf9-5c57891fd232" />
<img width="1920" height="2485" alt="screencapture-localhost-5173-2026-09-04-14_06_58" src="https://github.com/user-attachments/assets/c3593b01-6fd2-4ab1-a729-128f5829b18c" />
<img width="1920" height="2974" alt="screencapture-localhost-5173-2026-09-04-14_06_51" src="https://github.com/user-attachments/assets/41449773-f325-4288-a8a5-e8fe9f6b06a6" />
<img width="1920" height="2796" alt="screencapture-localhost-5173-2026-09-04-14_06_32" src="https://github.com/user-attachments/assets/d054646d-bbab-43db-a2cd-7d7ccba5c5b8" />
<img width="1920" height="2339" alt="screencapture-localhost-5173-2026-09-04-14_06_24" src="https://github.com/user-attachments/assets/5a203ac6-e10b-470d-a929-257e783a2be8" />
<img width="1920" height="1704" alt="screencapture-localhost-5173-2026-09-04-14_06_12" src="https://github.com/user-attachments/assets/b7045730-4c06-415f-8e42-f4430be6d0ee" />
<img width="1920" height="2149" alt="screencapture-localhost-5173-2026-09-04-14_06_04" src="https://github.com/user-attachments/assets/bb4ffee2-6f93-4306-9de5-1c725240ff02" />
<img width="1920" height="3054" alt="screencapture-localhost-5173-2026-09-04-14_05_53" src="https://github.com/user-attachments/assets/2ba93b9d-0b5a-4568-aea6-731fe84e6594" />
<img width="1920" height="2718" alt="screencapture-localhost-5173-2026-09-04-14_05_42" src="https://github.com/user-attachments/assets/9b3d7b03-252b-4807-96ca-83731188bbed" />


