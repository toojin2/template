import "./SummitDeck.css";

const TRACK_A = [
  { t: "09:30", n: "여는 말: 우리가 다시 도구를 만드는 이유", by: "김민준 · 서밋 오거나이저" },
  { t: "10:00", n: "런타임 없는 프론트엔드는 가능한가", by: "이하람 · Vercel" },
  { t: "11:00", n: "10만 줄 레거시를 3개월에 옮긴 기록", by: "박세영 · 토스" },
  { t: "12:00", n: "점심 · 네트워킹", by: "3층 라운지", brk: true },
  { t: "13:30", n: "디자인 시스템의 수명을 늘리는 방법", by: "정우진 · 당근" },
];

const TRACK_B = [
  { t: "09:30", n: "등록 및 웰컴 커피", by: "1층 로비", brk: true },
  { t: "10:00", n: "관측 가능성, 로그부터 다시 짜기", by: "최다인 · 우아한형제들" },
  { t: "11:00", n: "온디바이스 추론의 현실적인 한계", by: "한지호 · 네이버" },
  { t: "12:00", n: "점심 · 네트워킹", by: "3층 라운지", brk: true },
  { t: "13:30", n: "작은 팀을 위한 플랫폼 엔지니어링", by: "서가온 · 라인" },
];

const SPEAKERS = [
  { n: "이하람", r: "Staff Engineer, Vercel" },
  { n: "박세영", r: "Frontend Lead, 토스" },
  { n: "최다인", r: "SRE, 우아한형제들" },
  { n: "한지호", r: "ML Engineer, 네이버" },
];

const COUNT = [
  ["48", "Days"],
  ["12", "Hours"],
  ["24", "Speakers"],
  ["02", "Tracks"],
];

function Slot({ s }) {
  return (
    <a className={`t-summit__slot${s.brk ? " t-summit__slot--break" : ""}`} href="#c">
      <span className="t-summit__slotTime">{s.t}</span>
      <span>
        <span className="t-summit__slotTitle">{s.n}</span>
        <p className="t-summit__slotBy">{s.by}</p>
      </span>
    </a>
  );
}

export default function SummitDeck() {
  return (
    <div className="t-summit">
      <nav className="t-summit__nav">
        <span className="t-summit__logo">
          SUMMIT<i>/</i>26
        </span>
        <div className="t-summit__menu">
          <a href="#c">Program</a>
          <a href="#c">Speakers</a>
          <a href="#c">Venue</a>
          <a href="#c">Sponsors</a>
        </div>
        <a className="t-summit__navBtn" href="#c">
          Register
        </a>
      </nav>

      <header className="t-summit__hero">
        <div className="t-summit__heroMain">
          <p className="t-summit__label">2026.03.24 — Seoul, Coex</p>
          <h1 className="t-summit__title">
            <span>BUILD</span>
            <span className="ice">SMALLER,</span>
            <span>SHIP FASTER</span>
          </h1>
          <p className="t-summit__titleKr">
            제품을 실제로 만들어 배포하는 사람들의 하루. 발표 24개, 트랙 2개, 그리고 쉬는 시간마다
            이어지는 대화. 슬라이드보다 코드를 더 많이 보여드립니다.
          </p>
          <div className="t-summit__heroTags">
            <span>Frontend</span>
            <span>Infrastructure</span>
            <span>AI Engineering</span>
            <span>Design Systems</span>
          </div>
        </div>

        <div className="t-summit__count">
          <div>
            <p className="t-summit__label">Countdown</p>
            <div className="t-summit__countGrid">
              {COUNT.map(([v, l]) => (
                <div key={l} className="t-summit__countCell">
                  <b>{v}</b>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="t-summit__venue">
            <div className="t-summit__venueRow">
              <b>Venue</b>
              <span>코엑스 그랜드볼룸 103호</span>
            </div>
            <div className="t-summit__venueRow">
              <b>Seats</b>
              <span>480석 (잔여 62석)</span>
            </div>
            <div className="t-summit__venueRow">
              <b>Fee</b>
              <span>₩120,000 · 얼리버드 ₩89,000</span>
            </div>
          </div>
        </div>
      </header>

      <section className="t-summit__section">
        <div className="t-summit__secHead">
          <h2 className="t-summit__secTitle">Timetable</h2>
          <span className="t-summit__label">Day 1 — March 24</span>
        </div>
        <div className="t-summit__tracks">
          <div>
            <div className="t-summit__trackName">
              <span>Track A</span>
              <em>Hall 103</em>
            </div>
            {TRACK_A.map((s) => (
              <Slot key={s.t + s.n} s={s} />
            ))}
          </div>
          <div>
            <div className="t-summit__trackName">
              <span>Track B</span>
              <em>Hall 104</em>
            </div>
            {TRACK_B.map((s) => (
              <Slot key={s.t + s.n} s={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="t-summit__section">
        <div className="t-summit__secHead">
          <h2 className="t-summit__secTitle">Speakers</h2>
          <span className="t-summit__label">24명 중 4명 공개</span>
        </div>
        <div className="t-summit__speakers">
          {SPEAKERS.map((s) => (
            <div key={s.n} className="t-summit__spk">
              <div className="t-summit__spkAvatar" />
              <p className="t-summit__spkName">{s.n}</p>
              <p className="t-summit__spkRole">{s.r}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="t-summit__cta">
        <p className="t-summit__label">Registration</p>
        <h2 className="t-summit__ctaTitle">얼리버드는 2월 20일까지</h2>
        <p className="t-summit__ctaSub">
          정가 대비 26% 할인된 금액으로 등록할 수 있습니다. 등록 후 7일 이내 전액 환불 가능합니다.
        </p>
        <a className="t-summit__ctaBtn" href="#c">
          Register Now
        </a>
      </section>

      <footer className="t-summit__footer">
        <span>SUMMIT/26</span>
        <span>hello@summit26.dev</span>
        <span>Seoul, Korea</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
