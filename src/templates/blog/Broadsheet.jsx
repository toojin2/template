import "./Broadsheet.css";

const SIDE = [
  { n: "1", t: "물류 자동화, 항만보다 창고가 먼저 바뀐다", d: "인건비 상승이 설비 투자를 앞당겼다." },
  { n: "2", t: "중고 거래 플랫폼의 다음 수익 모델", d: "수수료 대신 보증과 배송에서 답을 찾는 중." },
  { n: "3", t: "전세 시장 통계, 왜 체감과 다른가", d: "표본 구성과 신고 시차가 만든 착시." },
  { n: "4", t: "지방 소멸 대응 예산 3년 치를 뜯어보니", d: "축제 예산이 정주 인프라를 앞질렀다." },
];

const CARDS = [
  { t: "새벽 배송이 만든 도시의 두 번째 교대", c: "사회 · 김서연", a: "1" },
  { t: "국산 위스키가 넘어야 할 세 가지 벽", c: "산업 · 박도현", a: "2" },
  { t: "40년 된 시장의 재건축이 멈춘 이유", c: "도시 · 이지훈", a: "3" },
  { t: "AI 번역이 바꾼 출판 계약서의 문장", c: "문화 · 정민아", a: "4" },
];

export default function Broadsheet() {
  return (
    <div className="t-bs">
      <div className="t-bs__top">
        <span className="t-bs__meta">2026년 2월 4일 수요일</span>
        <span className="t-bs__meta">제 12,482호</span>
        <span className="t-bs__meta">구독 · 정기구독 문의</span>
      </div>

      <div className="t-bs__masthead">
        <h1 className="t-bs__title">The Broadsheet</h1>
        <div className="t-bs__sub">
          <span className="t-bs__meta">Independent Since 1961 — Seoul</span>
        </div>
      </div>
      <div className="t-bs__rules" />

      <nav className="t-bs__nav">
        <a href="#c">정치</a>
        <a href="#c">경제</a>
        <a href="#c">사회</a>
        <a href="#c">국제</a>
        <a href="#c">문화</a>
        <a href="#c">스포츠</a>
        <a href="#c">오피니언</a>
        <a href="#c">기획 · 탐사</a>
      </nav>

      <section className="t-bs__front">
        <div className="t-bs__col">
          <span className="t-bs__flag">단독</span>
          <h2 className="t-bs__lead">
            도시가 비워둔 1층,
            <br />
            상권은 어디로 갔나
          </h2>
          <p className="t-bs__deck">
            임대료는 그대로인데 공실은 3년째 늘고 있다. 서울 주요 상권 12곳을 6개월간 직접 걸으며
            셔터가 닫힌 자리를 세었다.
          </p>
          <p className="t-bs__byline t-bs__meta">글 · 김하윤 기자 | 사진 · 편집부</p>

          <div className="t-bs__photo" />
          <p className="t-bs__caption">
            ▲ 지난달 서울 마포구의 한 골목. 열두 칸 중 다섯 칸이 비어 있다.
          </p>

          <div className="t-bs__body">
            <p>
              골목은 조용했다. 오후 세 시, 문을 연 가게는 열두 칸 중 일곱 칸. 나머지는 셔터가 내려간 채
              임대 문의 번호만 붙어 있었다. 인근 공인중개사는 “작년 이맘때보다 두 칸이 더 늘었다”고 말했다.
            </p>
            <p>
              통계는 이 변화를 늦게 따라온다. 공실률 집계는 분기마다 갱신되고, 계약이 해지된 뒤에도 한동안
              영업 중으로 잡힌다. 현장에서 체감하는 속도와 지표 사이의 간격은 그래서 벌어진다.
            </p>
            <p>
              임대료는 좀처럼 내려가지 않았다. 건물주 입장에서 한 번 낮춘 임대료는 다시 올리기 어렵고,
              담보 가치와도 직결되기 때문이다. 그 결과 비어 있는 채로 유지하는 편이 합리적인 선택이 된다.
            </p>
            <p>
              변화는 2층에서 먼저 나타났다. 임대료가 낮은 위층으로 옮긴 가게들이 오히려 단골을 지켰다.
              접근성보다 검색과 예약이 손님을 데려오는 시대가 상권의 문법을 바꾸고 있다.
            </p>
          </div>
        </div>

        <div className="t-bs__col">
          <p className="t-bs__sideHead">오늘의 주요 기사</p>
          {SIDE.map((s) => (
            <a key={s.n} className="t-bs__item" href="#c">
              <span className="t-bs__num">{s.n}</span>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </a>
          ))}
        </div>

        <div className="t-bs__col">
          <p className="t-bs__sideHead">오피니언</p>
          <a className="t-bs__item" href="#c">
            <h4>[사설] 재정 준칙 논의, 이번엔 숫자부터 공개하자</h4>
            <p>논쟁은 원칙이 아니라 가정에서 갈린다.</p>
          </a>
          <a className="t-bs__item" href="#c">
            <h4>[칼럼] 인구가 줄어드는 도시의 예산 짜기</h4>
            <p>줄이는 기술이 늘리는 기술보다 어렵다.</p>
          </a>
          <a className="t-bs__item" href="#c">
            <h4>[독자 편지] 지역 신문이 사라진 자리</h4>
            <p>군청 회의록을 아무도 읽지 않는다.</p>
          </a>

          <div className="t-bs__ad">
            <b>정기구독</b>
            <span>월 12,000원 · 첫 달 무료</span>
          </div>
        </div>
      </section>

      <section className="t-bs__lower">
        <div className="t-bs__lowerHead">
          <h3 className="t-bs__lowerTitle">주말 기획</h3>
          <span className="t-bs__meta">Weekend Features</span>
        </div>
        <div className="t-bs__cards">
          {CARDS.map((c) => (
            <a key={c.t} className="t-bs__card" href="#c">
              <div className={`t-bs__cardArt t-bs__cardArt--${c.a}`} />
              <h4>{c.t}</h4>
              <span>{c.c}</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="t-bs__footer">
        <span className="t-bs__meta">The Broadsheet Media Co.</span>
        <span className="t-bs__meta">서울 중구 세종대로 000</span>
        <span className="t-bs__meta">제보 tip@broadsheet.kr</span>
        <span className="t-bs__meta">© 2026</span>
      </footer>
    </div>
  );
}
