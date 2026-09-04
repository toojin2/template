import "./StudyCircle.css";

const GROUPS = [
  {
    tape: "모집중 3자리",
    t: "새벽 6시 알고리즘",
    d: "매일 아침 한 문제씩 풀고 30분 리뷰. 지각비 있습니다.",
    rows: [
      ["요일", "월–금"],
      ["시간", "06:00–07:00"],
      ["장소", "온라인"],
      ["기간", "12주"],
    ],
    m: 4,
    total: "9 / 12명",
    closed: false,
  },
  {
    tape: "모집중 5자리",
    t: "주말 독서 모임 «천천히»",
    d: "한 달에 두 권. 발제 없이 각자 밑줄 그은 문장만 나눕니다.",
    rows: [
      ["요일", "토요일"],
      ["시간", "10:00–12:00"],
      ["장소", "합정 카페"],
      ["기간", "상시"],
    ],
    m: 3,
    total: "11 / 16명",
    closed: false,
  },
  {
    tape: "모집 마감",
    t: "포트폴리오 합평 스터디",
    d: "2주에 한 번 각자 작업을 올리고 서로 피드백합니다.",
    rows: [
      ["요일", "격주 수요일"],
      ["시간", "20:00–22:00"],
      ["장소", "온라인"],
      ["기간", "8주"],
    ],
    m: 4,
    total: "8 / 8명",
    closed: true,
  },
];

const ATTEND = [1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1];

export default function StudyCircle() {
  return (
    <div className="t-sc">
      <nav className="t-sc__nav">
        <span className="t-sc__logo">
          <i />
          스터디 서클
        </span>
        <div className="t-sc__menu">
          <a href="#c">모집중</a>
          <a href="#c">분야별</a>
          <a href="#c">지역별</a>
          <a href="#c">후기</a>
          <a href="#c">운영 안내</a>
        </div>
        <a className="t-sc__navBtn" href="#c">
          스터디 만들기
        </a>
      </nav>

      <header className="t-sc__hero">
        <div>
          <p className="t-sc__kicker">Since 2021 — 1,240 groups</p>
          <h1 className="t-sc__title">
            혼자 하면 3일,
            <br />
            <mark>같이 하면 3개월</mark>
          </h1>
          <p className="t-sc__lede">
            출석과 진도를 자동으로 기록해 주는 스터디 모집 플랫폼. 모임을 만들면 출석표와 진행률이
            함께 생성됩니다.
          </p>
          <div className="t-sc__heroBtns">
            <a className="t-sc__btn t-sc__btn--pen" href="#c">
              스터디 찾기
            </a>
            <a className="t-sc__btn t-sc__btn--paper" href="#c">
              운영 가이드
            </a>
          </div>
        </div>

        <div className="t-sc__attend">
          <div className="t-sc__attendHead">
            <b>2월 출석표</b>
            <span>새벽 6시 알고리즘</span>
          </div>
          <div className="t-sc__dots">
            {ATTEND.map((v, i) => (
              <span
                key={i}
                className={`t-sc__dot${v === 1 ? " t-sc__dot--on" : v === 2 ? " t-sc__dot--miss" : ""}`}
              >
                {v === 1 ? "✓" : v === 2 ? "✕" : ""}
              </span>
            ))}
          </div>
          <div className="t-sc__attendFoot">
            <span>출석률 89%</span>
            <span>지각비 12,000원 적립</span>
          </div>
        </div>
      </header>

      <section className="t-sc__section">
        <div className="t-sc__secHead">
          <h2 className="t-sc__secTitle">지금 모집 중인 스터디</h2>
          <div className="t-sc__filter">
            <a className="on" href="#c">
              전체
            </a>
            <a href="#c">개발</a>
            <a href="#c">디자인</a>
            <a href="#c">어학</a>
            <a href="#c">독서</a>
            <a href="#c">운동</a>
          </div>
        </div>

        <div className="t-sc__groups">
          {GROUPS.map((g) => (
            <a key={g.t} className="t-sc__group" href="#c">
              <span className={`t-sc__tape${g.closed ? " t-sc__tape--closed" : ""}`}>{g.tape}</span>
              <h3 className="t-sc__groupTitle">{g.t}</h3>
              <p className="t-sc__groupDesc">{g.d}</p>
              <div className="t-sc__rows">
                {g.rows.map(([k, v]) => (
                  <span key={k}>
                    <b>{k}</b>
                    {v}
                  </span>
                ))}
              </div>
              <div className="t-sc__members">
                {Array.from({ length: g.m }).map((_, i) => (
                  <span key={i} className={`t-sc__mAvatar t-sc__mAvatar--${(i % 4) + 1}`} />
                ))}
                <span className="t-sc__mCount">{g.total}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="t-sc__cta">
        <h2 className="t-sc__ctaTitle">
          만들고 싶은 스터디가 <mark>이미 있나요?</mark>
        </h2>
        <p className="t-sc__ctaSub">
          모집글을 올리면 출석표·진행률·정산이 자동으로 만들어집니다. 개설은 무료입니다.
        </p>
        <a className="t-sc__btn t-sc__btn--pen" href="#c">
          스터디 개설하기
        </a>
      </section>

      <footer className="t-sc__ft">
        <span>스터디 서클 · 함께 하는 공부</span>
        <span>운영 문의 hello@studycircle.kr</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
