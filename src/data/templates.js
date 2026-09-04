// ── 쇼핑몰 ───────────────────────────────────────────────
import NoirAtelier from "../templates/shop/NoirAtelier.jsx";
import CitrusMarket from "../templates/shop/CitrusMarket.jsx";
import GearheadSupply from "../templates/shop/GearheadSupply.jsx";
// ── 비즈니스 홍보 ────────────────────────────────────────
import MeridianPartners from "../templates/business/MeridianPartners.jsx";
import AtlasIndustrial from "../templates/business/AtlasIndustrial.jsx";
import BloomClinic from "../templates/business/BloomClinic.jsx";
// ── 블로그·미디어 ────────────────────────────────────────
import Broadsheet from "../templates/blog/Broadsheet.jsx";
import NeonDispatch from "../templates/blog/NeonDispatch.jsx";
import PaperJournal from "../templates/blog/PaperJournal.jsx";
// ── 이벤트·프로젝트 ──────────────────────────────────────
import PulseFestival from "../templates/event/PulseFestival.jsx";
import SummitDeck from "../templates/event/SummitDeck.jsx";
import Launchpad from "../templates/event/Launchpad.jsx";
// ── 포트폴리오 ───────────────────────────────────────────
import Monolith from "../templates/portfolio/Monolith.jsx";
import Darkroom from "../templates/portfolio/Darkroom.jsx";
import Sketchbook from "../templates/portfolio/Sketchbook.jsx";
// ── 커뮤니티 ─────────────────────────────────────────────
import TownSquare from "../templates/community/TownSquare.jsx";
import ArcadeGuild from "../templates/community/ArcadeGuild.jsx";
import StudyCircle from "../templates/community/StudyCircle.jsx";
// ── 예약·기타 ────────────────────────────────────────────
import SalonLune from "../templates/booking/SalonLune.jsx";
import TableNo9 from "../templates/booking/TableNo9.jsx";
import HanokStay from "../templates/booking/HanokStay.jsx";

export const TEMPLATES = [
  {
    id: "noir-atelier",
    category: "shop",
    name: "느와르 아틀리에",
    latin: "Noir Atelier",
    tone: "럭셔리 · 다크",
    desc: "대형 세리프와 깊은 여백으로 만든 하이엔드 패션 스토어. 비대칭 히어로와 정적인 상품 진열.",
    tags: ["패션", "럭셔리", "다크"],
    layout: "비대칭 스플릿 히어로 + 3열 룩북",
    Component: NoirAtelier,
  },
  {
    id: "citrus-market",
    category: "shop",
    name: "시트러스 마켓",
    latin: "Citrus Market",
    tone: "플레이풀 · 라이트",
    desc: "신선식품·리빙 브랜드를 위한 벤토 그리드. 둥근 형태와 과일빛 색면이 반복된다.",
    tags: ["푸드", "라이프스타일", "벤토"],
    layout: "벤토 박스 그리드 + 가로 스크롤 진열",
    Component: CitrusMarket,
  },
  {
    id: "gearhead-supply",
    category: "shop",
    name: "기어헤드 서플라이",
    latin: "Gearhead Supply",
    tone: "브루탈리스트 · 하이컨트라스트",
    desc: "그리드 라인을 그대로 노출한 스트리트웨어 상점. 모노스페이스 전면, 형광 액센트.",
    tags: ["스트리트", "브루탈리즘", "모노"],
    layout: "노출 그리드 + 티커 + 리스트형 상품",
    Component: GearheadSupply,
  },

  {
    id: "meridian-partners",
    category: "business",
    name: "메리디안 파트너스",
    latin: "Meridian Partners",
    tone: "정제된 · 딥네이비",
    desc: "컨설팅·금융을 위한 절제된 대칭 구조. 세리프 조판과 골드 헤어라인.",
    tags: ["컨설팅", "금융", "코퍼릿"],
    layout: "센터 정렬 + 수치 지표 밴드",
    Component: MeridianPartners,
  },
  {
    id: "atlas-industrial",
    category: "business",
    name: "아틀라스 인더스트리얼",
    latin: "Atlas Industrial",
    tone: "산업 · 테크니컬",
    desc: "제조·엔지니어링 기업용. 도면 눈금, 스텐실 타이포, 콘크리트 색면.",
    tags: ["제조", "B2B", "테크니컬"],
    layout: "도면형 사이드 인덱스 + 공정 스텝",
    Component: AtlasIndustrial,
  },
  {
    id: "bloom-clinic",
    category: "business",
    name: "블룸 클리닉",
    latin: "Bloom Clinic",
    tone: "소프트 · 세이지",
    desc: "의료·웰니스 브랜드를 위한 유기적 곡선과 파스텔. 부드러운 신뢰감.",
    tags: ["의료", "웰니스", "파스텔"],
    layout: "블롭 배경 + 카드형 진료 안내",
    Component: BloomClinic,
  },

  {
    id: "broadsheet",
    category: "blog",
    name: "브로드시트",
    latin: "Broadsheet",
    tone: "신문 · 흑백",
    desc: "다단 조판과 세로 괘선으로 만든 신문 1면. 밀도 높은 헤드라인 위계.",
    tags: ["뉴스", "에디토리얼", "다단"],
    layout: "5단 신문 그리드 + 괘선 분할",
    Component: Broadsheet,
  },
  {
    id: "neon-dispatch",
    category: "blog",
    name: "네온 디스패치",
    latin: "Neon Dispatch",
    tone: "터미널 · 네온",
    desc: "테크 뉴스레터. 터미널 프롬프트 감성, 시안 네온과 스캔라인 텍스처.",
    tags: ["테크", "뉴스레터", "다크"],
    layout: "터미널 헤더 + 이슈 아카이브 리스트",
    Component: NeonDispatch,
  },
  {
    id: "paper-journal",
    category: "blog",
    name: "페이퍼 저널",
    latin: "Paper Journal",
    tone: "따뜻한 · 종이",
    desc: "개인 기록을 위한 종이 질감. 손그림 밑줄과 여백 넉넉한 본문 조판.",
    tags: ["개인", "에세이", "웜톤"],
    layout: "단일 컬럼 리딩 + 사이드 노트",
    Component: PaperJournal,
  },

  {
    id: "pulse-festival",
    category: "event",
    name: "펄스 페스티벌",
    latin: "Pulse Festival",
    tone: "맥시멀 · 그라디언트",
    desc: "음악 페스티벌 랜딩. 대각선 흐름, 거대 라인업 타이포, 움직이는 메시 배경.",
    tags: ["페스티벌", "맥시멀", "라인업"],
    layout: "대각선 밴드 + 라인업 대형 타이포",
    Component: PulseFestival,
  },
  {
    id: "summit-deck",
    category: "event",
    name: "서밋 덱",
    latin: "Summit Deck",
    tone: "미니멀 · 라임",
    desc: "컨퍼런스용. 카운트다운, 트랙별 타임테이블, 연사 카드가 정돈된 다크 레이아웃.",
    tags: ["컨퍼런스", "타임테이블", "다크"],
    layout: "카운트다운 + 2열 세션 타임라인",
    Component: SummitDeck,
  },
  {
    id: "launchpad",
    category: "event",
    name: "런치패드",
    latin: "Launchpad",
    tone: "밝은 · 스티커",
    desc: "크라우드펀딩·프로젝트 공개용. 진행률 게이지와 리워드 카드, 스티커 UI.",
    tags: ["펀딩", "리워드", "라이트"],
    layout: "고정 펀딩 패널 + 스토리 컬럼",
    Component: Launchpad,
  },

  {
    id: "monolith",
    category: "portfolio",
    name: "모노리스",
    latin: "Monolith",
    tone: "브루탈 미니멀 · 흑백",
    desc: "거대한 타이포그래피 하나로 밀어붙이는 디자이너 포트폴리오. 인덱스형 작업 목록.",
    tags: ["디자이너", "타이포", "미니멀"],
    layout: "풀블리드 타입 + 호버 인덱스 리스트",
    Component: Monolith,
  },
  {
    id: "darkroom",
    category: "portfolio",
    name: "다크룸",
    latin: "Darkroom",
    tone: "사진 · 암실",
    desc: "사진가를 위한 암실. 필름 스트립 내비게이션과 풀블리드 이미지 시퀀스.",
    tags: ["사진", "갤러리", "다크"],
    layout: "필름 스트립 + 세로 스크롤 시퀀스",
    Component: Darkroom,
  },
  {
    id: "sketchbook",
    category: "portfolio",
    name: "스케치북",
    latin: "Sketchbook",
    tone: "컬러풀 · 콜라주",
    desc: "일러스트레이터용 콜라주 보드. 종이·테이프·기울어진 카드가 흩어진 구성.",
    tags: ["일러스트", "콜라주", "핸드메이드"],
    layout: "핀보드 콜라주 + 회전 카드",
    Component: Sketchbook,
  },

  {
    id: "town-square",
    category: "community",
    name: "타운스퀘어",
    latin: "Town Square",
    tone: "밝은 · 고밀도",
    desc: "일반 커뮤니티 포럼. 좌측 채널, 중앙 피드, 우측 랭킹의 3분할 고밀도 구조.",
    tags: ["포럼", "게시판", "3분할"],
    layout: "3컬럼 대시보드 피드",
    Component: TownSquare,
  },
  {
    id: "arcade-guild",
    category: "community",
    name: "아케이드 길드",
    latin: "Arcade Guild",
    tone: "레트로 아케이드 · 다크",
    desc: "게임 길드·서버 커뮤니티. 픽셀 타이포, CRT 스캔라인, 랭킹 리더보드.",
    tags: ["게임", "길드", "픽셀"],
    layout: "리더보드 + 퀘스트 보드 카드",
    Component: ArcadeGuild,
  },
  {
    id: "study-circle",
    category: "community",
    name: "스터디 서클",
    latin: "Study Circle",
    tone: "노트 · 파스텔",
    desc: "스터디·클럽 모집. 모눈 노트 배경, 형광펜 하이라이트, 출석 체크 그리드.",
    tags: ["스터디", "모집", "노트"],
    layout: "모눈 배경 + 모집 카드 그리드",
    Component: StudyCircle,
  },

  {
    id: "salon-lune",
    category: "booking",
    name: "살롱 뤼느",
    latin: "Salon Lune",
    tone: "아르데코 · 골드",
    desc: "헤어·뷰티 살롱. 아르데코 기하 패턴과 골드 라인, 시술별 요금과 예약 위젯.",
    tags: ["뷰티", "아르데코", "예약"],
    layout: "아치 프레임 + 요금표 + 예약 패널",
    Component: SalonLune,
  },
  {
    id: "table-no9",
    category: "booking",
    name: "테이블 넘버나인",
    latin: "Table No.9",
    tone: "다이닝 · 무드",
    desc: "파인다이닝 예약. 어두운 무드, 코스 메뉴 조판, 좌석 시간 선택 인터페이스.",
    tags: ["레스토랑", "코스", "예약"],
    layout: "메뉴 조판 + 시간 슬롯 선택",
    Component: TableNo9,
  },
  {
    id: "hanok-stay",
    category: "booking",
    name: "한옥 스테이",
    latin: "Hanok Stay",
    tone: "자연 · 흙빛",
    desc: "숙소 예약. 흙과 나무의 색, 세로 조판과 여백으로 머무는 시간을 보여준다.",
    tags: ["숙박", "한옥", "내추럴"],
    layout: "세로 조판 + 객실 스택 + 캘린더",
    Component: HanokStay,
  },
];

export const TEMPLATE_MAP = Object.fromEntries(TEMPLATES.map((t) => [t.id, t]));

export const byCategory = (categoryId) =>
  categoryId === "all" ? TEMPLATES : TEMPLATES.filter((t) => t.category === categoryId);
