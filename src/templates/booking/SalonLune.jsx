import "./SalonLune.css";

const CUT = [
  ["여성 커트", "Women's Cut", "45,000"],
  ["남성 커트", "Men's Cut", "32,000"],
  ["앞머리 정리", "Bang Trim", "8,000"],
  ["클리닉 커트", "Cut + Clinic", "78,000"],
];

const COLOR = [
  ["뿌리 염색", "Root Touch-up", "68,000"],
  ["전체 염색", "Full Color", "95,000"],
  ["발레아쥬", "Balayage", "180,000"],
  ["펌 · 다운펌", "Perm", "120,000"],
];

const DATES = [
  ["월", "9"],
  ["화", "10"],
  ["수", "11"],
  ["목", "12"],
  ["금", "13"],
  ["토", "14"],
];

const SLOTS = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
const OFF = ["12:00", "15:00"];

const TEAM = [
  { n: "유선아", r: "Director", a: "1" },
  { n: "박준서", r: "Senior Stylist", a: "2" },
  { n: "이하늘", r: "Color Specialist", a: "3" },
];

export default function SalonLune() {
  return (
    <div className="t-lune">
      <div className="t-lune__deco" />

      <div className="t-lune__wrap">
        <nav className="t-lune__nav">
          <div className="t-lune__navL">
            <a href="#c">살롱 소개</a>
            <a href="#c">시술 안내</a>
            <a href="#c">디자이너</a>
          </div>
          <span className="t-lune__logo">LUNE</span>
          <div className="t-lune__navR">
            <a href="#c">요금표</a>
            <a href="#c">오시는 길</a>
            <a href="#c">예약</a>
          </div>
        </nav>

        <header className="t-lune__hero">
          <div className="t-lune__frame">
            <p className="t-lune__label">Hair Salon — Since 2014</p>
            <h1 className="t-lune__title">
              LUNE
              <em>살롱 뤼느</em>
            </h1>
            <p className="t-lune__titleKr">
              하루 여섯 분만 예약받습니다. 서두르지 않고, 머리 결의 상태를 먼저 읽는 것부터
              시작합니다.
            </p>
            <div className="t-lune__heroBtns">
              <a className="t-lune__btn t-lune__btn--solid" href="#c">
                예약하기
              </a>
              <a className="t-lune__btn" href="#c">
                요금표 보기
              </a>
            </div>
          </div>

          <div className="t-lune__arch">
            <div className="t-lune__archIn" />
            <span className="t-lune__archTag t-lune__label">Seoul · Hannam</span>
          </div>
        </header>

        <section className="t-lune__section">
          <div className="t-lune__secHead">
            <p className="t-lune__label">Price List</p>
            <h2 className="t-lune__secTitle">시술 안내</h2>
          </div>
          <p className="t-lune__ornament">◆ ◇ ◆</p>

          <div className="t-lune__menu">
            <div className="t-lune__menuGroup">
              <h3 className="t-lune__menuTitle">CUT</h3>
              {CUT.map(([n, e, p]) => (
                <div key={n} className="t-lune__row">
                  <span className="t-lune__rowName">
                    {n}
                    <small>{e}</small>
                  </span>
                  <span className="t-lune__leader" />
                  <span className="t-lune__rowPrice">₩{p}</span>
                </div>
              ))}
            </div>
            <div className="t-lune__menuGroup">
              <h3 className="t-lune__menuTitle">COLOR &amp; PERM</h3>
              {COLOR.map(([n, e, p]) => (
                <div key={n} className="t-lune__row">
                  <span className="t-lune__rowName">
                    {n}
                    <small>{e}</small>
                  </span>
                  <span className="t-lune__leader" />
                  <span className="t-lune__rowPrice">₩{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="t-lune__book">
          <div>
            <p className="t-lune__label">Reservation</p>
            <h2 className="t-lune__bookTitle">원하는 시간을 골라주세요</h2>
            <p className="t-lune__bookSub">
              예약 확정 문자는 신청 후 10분 이내에 발송됩니다. 변경과 취소는 방문 24시간 전까지
              가능합니다.
            </p>
          </div>

          <div>
            <div className="t-lune__dateRow">
              {DATES.map(([d, n], i) => (
                <div key={n} className={`t-lune__date${i === 2 ? " t-lune__date--on" : ""}`}>
                  {d}
                  <b>{n}</b>
                </div>
              ))}
            </div>
            <div className="t-lune__slots">
              {SLOTS.map((s) => (
                <div key={s} className={`t-lune__slot${OFF.includes(s) ? " t-lune__slot--off" : ""}`}>
                  {s}
                </div>
              ))}
            </div>
            <p className="t-lune__bookNote">2월 11일(수) · 잔여 6석 중 4석</p>
          </div>
        </section>

        <section className="t-lune__section">
          <div className="t-lune__secHead">
            <p className="t-lune__label">Our Team</p>
            <h2 className="t-lune__secTitle">디자이너</h2>
          </div>
          <div className="t-lune__team">
            {TEAM.map((m) => (
              <div key={m.n} className="t-lune__member">
                <div className={`t-lune__memberArt t-lune__memberArt--${m.a}`} />
                <p className="t-lune__memberName">{m.n}</p>
                <p className="t-lune__memberRole">{m.r}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="t-lune__ft">
          <span>SALON LUNE</span>
          <span>서울 용산구 한남대로 00, 2F</span>
          <span>02-000-0000 · 화–일 10:00–20:00</span>
          <span>© 2026</span>
        </footer>
      </div>
    </div>
  );
}
