export const CATEGORIES = [
  {
    id: "shop",
    name: "쇼핑몰",
    latin: "Commerce",
    desc: "상품 진열, 장바구니, 브랜드 스토리까지. 판매 흐름을 중심으로 설계된 레이아웃.",
  },
  {
    id: "business",
    name: "비즈니스 홍보",
    latin: "Business",
    desc: "회사 소개, 서비스, 실적, 문의. 신뢰를 만드는 구성과 절제된 조판.",
  },
  {
    id: "blog",
    name: "블로그·미디어",
    latin: "Editorial",
    desc: "긴 글을 읽게 만드는 조판. 기사 목록, 아카이브, 뉴스레터 구독 흐름.",
  },
  {
    id: "event",
    name: "이벤트·프로젝트",
    latin: "Event",
    desc: "날짜와 참여가 핵심. 카운트다운, 타임테이블, 신청 전환에 최적화.",
  },
  {
    id: "portfolio",
    name: "포트폴리오",
    latin: "Portfolio",
    desc: "작업이 주인공. 이미지와 여백, 그리고 작가의 목소리를 담는 구조.",
  },
  {
    id: "community",
    name: "커뮤니티",
    latin: "Community",
    desc: "글이 쌓이는 공간. 게시판 밀도, 랭킹, 멤버 활동을 보여주는 레이아웃.",
  },
  {
    id: "booking",
    name: "예약·기타",
    latin: "Booking",
    desc: "시간을 파는 비즈니스. 예약 위젯, 메뉴·요금표, 위치 안내 중심.",
  },
];

export const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
