import "./Monolith.css";

const WORKS = [
  { no: "01", name: "SEOUL TYPE", kr: "서울시 공공 서체 리디자인", year: "2025" },
  { no: "02", name: "HANJI", kr: "한지 브랜드 아이덴티티", year: "2025" },
  { no: "03", name: "OFFLINE", kr: "전시 «오프라인» 그래픽", year: "2024" },
  { no: "04", name: "SLOW PRESS", kr: "독립출판사 아이덴티티 · 사이니지", year: "2024" },
  { no: "05", name: "MOOM", kr: "가구 브랜드 카탈로그 시스템", year: "2023" },
  { no: "06", name: "NIGHT BUS", kr: "심야버스 안내 사인 시스템", year: "2023" },
];

const CLIENTS = ["서울시", "국립현대미술관", "무신사", "배달의민족", "현대카드", "LG"];

export default function Monolith() {
  return (
    <div className="t-mono">
      <nav className="t-mono__nav">
        <a href="#c">JUNG HAEUN — GRAPHIC DESIGNER</a>
        <span className="t-mono__navLinks">
          <a href="#c">Index</a>
          <a href="#c">About</a>
          <a href="#c">Contact</a>
        </span>
        <span>SEOUL, KR / 2026</span>
      </nav>

      <header className="t-mono__hero">
        <h1 className="t-mono__mega">
          <span>GRAPHIC</span>
          <span>DESIGN</span>
        </h1>

        <div className="t-mono__heroFoot">
          <div>
            <b>Focus</b>
            <p>브랜드 아이덴티티 · 편집 · 사이니지</p>
          </div>
          <div>
            <b>Experience</b>
            <p>12년 · 서울 / 바젤</p>
          </div>
          <div>
            <b>Status</b>
            <p>2026년 3분기 신규 프로젝트 가능</p>
          </div>
          <div>
            <b>Recognition</b>
            <p>iF Design Award 2024 · Red Dot 2023</p>
          </div>
        </div>
      </header>

      <section className="t-mono__index">
        {WORKS.map((w) => (
          <a key={w.no} className="t-mono__row" href="#c">
            <span className="t-mono__rowNo">({w.no})</span>
            <span>
              <span className="t-mono__rowName">{w.name}</span>
              <br />
              <span className="t-mono__rowKr">{w.kr}</span>
            </span>
            <span className="t-mono__rowYear">{w.year}</span>
            <span className="t-mono__rowArrow">→</span>
          </a>
        ))}
      </section>

      <section className="t-mono__statement">
        <p className="t-mono__stLabel">Statement</p>
        <div>
          <p className="t-mono__stText">
            설명이 필요한 디자인은 대개 설명으로도 구해지지 않는다. 나는 남는 것을 덜어내는 쪽을
            택한다.
          </p>
          <p className="t-mono__stSmall">
            2014년부터 서울에서 활동하고 있습니다. 주로 문화기관과 제조 브랜드의 아이덴티티, 출판물,
            공공 공간의 사인 시스템을 만듭니다. 결과물보다 그것이 놓일 자리를 먼저 봅니다. 작업 문의는
            메일로 주시면 3일 안에 회신드립니다.
          </p>
        </div>
      </section>

      <section className="t-mono__clients">
        {CLIENTS.map((c) => (
          <div key={c} className="t-mono__client">
            {c}
          </div>
        ))}
      </section>

      <section className="t-mono__contact">
        <a className="t-mono__mail" href="#c">
          HELLO@MONOLITH.KR
        </a>
        <div className="t-mono__social">
          <a href="#c">INSTAGRAM</a>
          <a href="#c">BEHANCE</a>
          <a href="#c">CV (PDF)</a>
          <span style={{ opacity: 0.5, marginTop: "0.6rem" }}>© 2026</span>
        </div>
      </section>
    </div>
  );
}
