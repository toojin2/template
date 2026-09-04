import "./NeonDispatch.css";

const ISSUES = [
  {
    no: "#142",
    date: "2026.02.02",
    title: "런타임을 고르는 일은 결국 팀을 고르는 일이다",
    desc: "Bun, Deno, Node 세 진영을 6개월씩 굴려본 팀의 회고를 정리했다.",
    tags: ["runtime", "infra"],
  },
  {
    no: "#141",
    date: "2026.01.26",
    title: "벡터 DB를 걷어내고 얻은 것과 잃은 것",
    desc: "검색 품질은 12% 떨어졌지만 인프라 비용은 3분의 1이 됐다.",
    tags: ["ai", "cost"],
  },
  {
    no: "#140",
    date: "2026.01.19",
    title: "온콜 로테이션을 다시 짜는 다섯 가지 원칙",
    desc: "새벽 호출을 절반으로 줄인 팀이 실제로 바꾼 것들.",
    tags: ["sre", "culture"],
  },
  {
    no: "#139",
    date: "2026.01.12",
    title: "타입스크립트 5.9의 조용한 파괴적 변경",
    desc: "릴리즈 노트 한 줄이 우리 모노레포를 이틀 멈춰 세웠다.",
    tags: ["typescript"],
  },
  {
    no: "#138",
    date: "2026.01.05",
    title: "사내 디자인 시스템은 왜 항상 두 번째 버전에서 죽는가",
    desc: "채택률 데이터를 공개한 네 회사의 사례 비교.",
    tags: ["design", "frontend"],
  },
];

export default function NeonDispatch() {
  return (
    <div className="t-neon">
      <div className="t-neon__glow" />
      <div className="t-neon__scan" />

      <div className="t-neon__wrap">
        <div className="t-neon__chrome">
          <span className="t-neon__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="t-neon__chromeTitle">~/dispatch — weekly — 80×24</span>
          <span className="t-neon__chromeRight">● LIVE</span>
        </div>

        <header className="t-neon__head">
          <p className="t-neon__prompt">
            <b>$</b> <i>cat</i> ./about.md
          </p>
          <h1 className="t-neon__logo">
            neon<span>://</span>dispatch
          </h1>
          <p className="t-neon__tagline">
            매주 화요일 아침, 실제로 배포해 본 사람들의 기록만 골라 보냅니다. 홍보 글과 번역 요약은
            싣지 않습니다.
            <span className="t-neon__cursor" />
          </p>

          <div className="t-neon__stats">
            <div>
              <b>18,402</b>
              <span>Subscribers</span>
            </div>
            <div>
              <b>142</b>
              <span>Issues</span>
            </div>
            <div>
              <b>61%</b>
              <span>Open Rate</span>
            </div>
            <div>
              <b>0</b>
              <span>Sponsored Posts</span>
            </div>
          </div>
        </header>

        <section className="t-neon__section">
          <p className="t-neon__secHead">
            <b>ls</b> ./archive — 최근 발행분
          </p>
          {ISSUES.map((i) => (
            <a key={i.no} className="t-neon__issue" href="#c">
              <span className="t-neon__issueNo">
                {i.no}
                <br />
                {i.date}
              </span>
              <span>
                <span className="t-neon__issueTitle">{i.title}</span>
                <p className="t-neon__issueDesc">{i.desc}</p>
              </span>
              <span className="t-neon__issueTags">
                {i.tags.map((t) => (
                  <span key={t} className="t-neon__tag">
                    {t}
                  </span>
                ))}
              </span>
            </a>
          ))}
        </section>

        <section className="t-neon__sub">
          <h2 className="t-neon__subTitle">구독하면 매주 화요일 07:00에 도착합니다</h2>
          <p className="t-neon__subDesc">
            언제든 한 번의 클릭으로 해지할 수 있고, 이메일 주소는 발송 외 어떤 용도로도 쓰지 않습니다.
          </p>
          <form className="t-neon__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@example.com" aria-label="이메일 주소" />
            <button type="submit">Subscribe</button>
          </form>
          <p className="t-neon__subNote">
            → 지난 이슈를 먼저 읽어보고 싶다면 아카이브를 확인하세요.
          </p>
        </section>

        <footer className="t-neon__footer">
          <span>© 2026 NEON DISPATCH</span>
          <span>
            RSS · <a href="#c">/feed.xml</a>
          </span>
          <span>
            문의 · <a href="#c">hi@neondispatch.dev</a>
          </span>
          <span>UNSUBSCRIBE ANYTIME</span>
        </footer>
      </div>
    </div>
  );
}
