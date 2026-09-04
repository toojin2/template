import "./PulseFestival.css";

const BAND = ["3 STAGES", "24 ACTS", "2 NIGHTS", "ALL NIGHT LONG", "SEOUL 2026"];

const ACTS = [
  { n: "MIDNIGHT ECHO", s: "xl" },
  { n: "청춘극장", s: "l" },
  { n: "SABLE", s: "l" },
  { n: "코스모스 오케스트라", s: "m" },
  { n: "VELVET RIOT", s: "xl" },
  { n: "하이퍼 나이트", s: "m" },
  { n: "DUSK PARADE", s: "l" },
  { n: "야광 소년단", s: "s" },
  { n: "NEON GARDEN", s: "m" },
  { n: "PAPER TIGERS", s: "s" },
  { n: "새벽 세 시", s: "l" },
  { n: "GLASS ANIMALS TRIBUTE", s: "s" },
];

const TICKETS = [
  {
    tag: "1일권",
    name: "DAY PASS",
    price: "88,000원",
    items: ["8월 15일 또는 16일 택 1", "전 스테이지 입장", "재입장 가능"],
    hot: false,
  },
  {
    tag: "가장 많이 선택",
    name: "2DAY PASS",
    price: "148,000원",
    items: ["8월 15–16일 전일", "전 스테이지 입장", "굿즈 토트백 증정", "우선 입장 30분"],
    hot: true,
  },
  {
    tag: "VIP",
    name: "PULSE VIP",
    price: "298,000원",
    items: ["2일 전일 입장", "VIP 전용 데크", "백스테이지 투어", "라운지 · 음료 무제한"],
    hot: false,
  },
];

export default function PulseFestival() {
  return (
    <div className="t-pulse">
      <div className="t-pulse__mesh">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="t-pulse__grain" />

      <div className="t-pulse__wrap">
        <nav className="t-pulse__nav">
          <span className="t-pulse__logo">
            PULSE<i>*</i>
          </span>
          <div className="t-pulse__menu">
            <a href="#c">라인업</a>
            <a href="#c">타임테이블</a>
            <a href="#c">티켓</a>
            <a href="#c">오시는 길</a>
            <a href="#c">FAQ</a>
          </div>
          <a className="t-pulse__navBtn" href="#c">
            티켓 예매
          </a>
        </nav>

        <header className="t-pulse__hero">
          <div className="t-pulse__dates">
            <span>2026.08.15 — 08.16</span>
            <span>난지한강공원</span>
            <span>D-192</span>
          </div>
          <h1 className="t-pulse__mega">
            <span className="l1">PULSE</span>
            <span className="l2">SUMMER</span>
            <span className="l3">FESTIVAL</span>
          </h1>
          <p className="t-pulse__krLine">
            여름의 <em>가장 시끄러운</em> 이틀.
            <br />
            세 개의 무대, 스물네 팀.
          </p>
        </header>

        <div className="t-pulse__band">
          <div className="t-pulse__bandTrack">
            {[...BAND, ...BAND, ...BAND].map((b, i) => (
              <span key={i}>★ {b}</span>
            ))}
          </div>
        </div>

        <section className="t-pulse__section">
          <h2 className="t-pulse__secTitle">
            LINE UP <small>1st Announcement</small>
          </h2>
          <div className="t-pulse__lineup">
            {ACTS.map((a, i) => (
              <span key={a.n}>
                <a href="#c" className={`t-pulse__act t-pulse__act--${a.s}`}>
                  {a.n}
                </a>
                {i < ACTS.length - 1 && <span className="t-pulse__dot"> ● </span>}
              </span>
            ))}
          </div>
        </section>

        <section className="t-pulse__section">
          <h2 className="t-pulse__secTitle">
            TICKETS <small>얼리버드 2월 14일 오픈</small>
          </h2>
          <div className="t-pulse__tickets">
            {TICKETS.map((t) => (
              <article key={t.name} className={`t-pulse__ticket${t.hot ? " t-pulse__ticket--hot" : ""}`}>
                <span className="t-pulse__ticketTag">{t.tag}</span>
                <h3 className="t-pulse__ticketName">{t.name}</h3>
                <p className="t-pulse__ticketPrice">{t.price}</p>
                <div className="t-pulse__ticketList">
                  {t.items.map((i) => (
                    <span key={i}>— {i}</span>
                  ))}
                </div>
                <a className="t-pulse__ticketBtn" href="#c">
                  예매하기
                </a>
              </article>
            ))}
          </div>
        </section>

        <footer className="t-pulse__footer">
          <div className="t-pulse__fBig">
            SEE YOU
            <br />
            IN AUGUST
          </div>
          <div className="t-pulse__fNote">
            주최 · 펄스 컴퍼니
            <br />
            문의 hello@pulsefest.kr
            <br />
            © 2026 PULSE FESTIVAL
          </div>
        </footer>
      </div>
    </div>
  );
}
