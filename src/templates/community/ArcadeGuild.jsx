import "./ArcadeGuild.css";

const PLAYERS = [
  { r: "01", n: "밤샘장인", s: "284,910", lv: "Lv.98", t: "s", a: "1" },
  { r: "02", n: "픽셀도둑", s: "271,340", lv: "Lv.94", t: "s", a: "2" },
  { r: "03", n: "한손엔커피", s: "248,720", lv: "Lv.91", t: "a", a: "3" },
  { r: "04", n: "느긋한궁수", s: "212,065", lv: "Lv.88", t: "a", a: "1" },
  { r: "05", n: "새벽세시", s: "198,430", lv: "Lv.85", t: "b", a: "2" },
  { r: "06", n: "라면먹고감", s: "176,220", lv: "Lv.82", t: "b", a: "3" },
];

const QUESTS = [
  {
    tag: "WEEKLY",
    t: "길드 레이드 3회 참여",
    d: "이번 주 정규 레이드에 세 번 이상 참여하면 길드 코인 500개를 받습니다.",
    pct: 66,
    cur: "2 / 3",
    rw: "+500 COIN",
  },
  {
    tag: "EVENT",
    t: "신규 길드원 환영 인사",
    d: "이번 주 가입한 12명에게 인사 댓글을 남겨주세요. 아무 말이나 좋습니다.",
    pct: 40,
    cur: "5 / 12",
    rw: "+200 COIN",
  },
  {
    tag: "DAILY",
    t: "공략 게시판 글 작성",
    d: "직접 시도한 공략이나 실패담을 하나 남기면 완료됩니다.",
    pct: 100,
    cur: "1 / 1",
    rw: "+80 COIN",
  },
];

export default function ArcadeGuild() {
  return (
    <div className="t-arc">
      <div className="t-arc__vig" />
      <div className="t-arc__crt" />

      <div className="t-arc__wrap">
        <header className="t-arc__hd">
          <span className="t-arc__logo">ARCADE GUILD</span>
          <nav className="t-arc__nav">
            <a href="#c">LEADERBOARD</a>
            <a href="#c">QUESTS</a>
            <a href="#c">GUIDE</a>
            <a href="#c">FORUM</a>
          </nav>
          <span className="t-arc__coin">◎ 1,240 COIN</span>
        </header>

        <section className="t-arc__hero">
          <p className="t-arc__insert">▸ INSERT COIN TO CONTINUE</p>
          <h1 className="t-arc__title">
            PRESS
            <br />
            START
          </h1>
          <p className="t-arc__titleKr">
            842명이 함께 달리는 길드. 오늘도 누군가는 새벽에 접속해 있습니다.
          </p>
          <div className="t-arc__heroBtns">
            <a className="t-arc__btn" href="#c">
              길드 가입
            </a>
            <a className="t-arc__btn t-arc__btn--cy" href="#c">
              공략 보기
            </a>
          </div>
        </section>

        <div className="t-arc__stats">
          <div className="t-arc__stat">
            <b>842</b>
            <span>GUILD MEMBERS</span>
          </div>
          <div className="t-arc__stat">
            <b>127</b>
            <span>ONLINE NOW</span>
          </div>
          <div className="t-arc__stat">
            <b>Lv.64</b>
            <span>GUILD LEVEL</span>
          </div>
          <div className="t-arc__stat">
            <b>#3</b>
            <span>SERVER RANK</span>
          </div>
        </div>

        <section className="t-arc__section">
          <h2 className="t-arc__secTitle">HIGH SCORE</h2>
          <div className="t-arc__board">
            <div className="t-arc__boardHead">
              <span>RANK</span>
              <span>PLAYER</span>
              <span>SCORE</span>
              <span>LEVEL</span>
              <span>TIER</span>
            </div>
            {PLAYERS.map((p) => (
              <a key={p.r} className="t-arc__row" href="#c">
                <span className="t-arc__rank">{p.r}</span>
                <span className="t-arc__player">
                  <span className={`t-arc__pxAvatar t-arc__pxAvatar--${p.a}`} />
                  <span className="t-arc__pName">{p.n}</span>
                </span>
                <span className="t-arc__score">{p.s}</span>
                <span className="t-arc__lv">{p.lv}</span>
                <span className={`t-arc__tier t-arc__tier--${p.t}`}>{p.t.toUpperCase()}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="t-arc__section">
          <h2 className="t-arc__secTitle">QUEST BOARD</h2>
          <div className="t-arc__quests">
            {QUESTS.map((q, i) => (
              <article key={q.t} className="t-arc__quest">
                <span className="t-arc__questTag">{q.tag}</span>
                <h3 className="t-arc__questTitle">{q.t}</h3>
                <p className="t-arc__questDesc">{q.d}</p>
                <div className="t-arc__xp">
                  <div
                    className="t-arc__xpFill"
                    style={{ width: `${q.pct}%`, animationDelay: `${i * 0.14}s` }}
                  />
                </div>
                <div className="t-arc__questFoot">
                  <span>{q.cur}</span>
                  <span>{q.rw}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="t-arc__ft">
          <span>ARCADE GUILD © 2026</span>
          <span>DISCORD · TWITCH · YOUTUBE</span>
          <span>GAME OVER? INSERT COIN.</span>
        </footer>
      </div>
    </div>
  );
}
