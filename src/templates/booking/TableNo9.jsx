import "./TableNo9.css";

const COURSE = [
  {
    no: "I",
    n: "제철 채소와 잣 소스",
    en: "Seasonal Vegetables, Pine Nut",
    d: "강원도에서 그날 아침 올라온 채소만 씁니다.",
  },
  {
    no: "II",
    n: "숙성 광어와 다시마",
    en: "Aged Flounder, Kelp",
    d: "5일간 건식 숙성한 광어를 다시마 육수와 함께.",
  },
  {
    no: "III",
    n: "메밀 파스타와 들기름",
    en: "Buckwheat Pasta, Perilla Oil",
    d: "봉평 메밀을 직접 반죽해 그날 뽑아냅니다.",
  },
  {
    no: "IV",
    n: "한우 등심과 구운 배",
    en: "Beef Sirloin, Grilled Pear",
    d: "참숯에 천천히 익혀 배의 단맛을 곁들입니다.",
  },
  {
    no: "V",
    n: "쑥과 흑임자",
    en: "Mugwort, Black Sesame",
    d: "계절이 바뀔 때마다 다시 만드는 디저트.",
  },
];

const PARTY = ["1인", "2인", "3인", "4인", "5인 이상"];
const DATES = ["2/9 월", "2/10 화", "2/11 수", "2/12 목", "2/13 금", "2/14 토"];
const TIMES = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];
const FULL = ["18:30", "19:00"];

export default function TableNo9() {
  return (
    <div className="t-t9">
      <nav className="t-t9__nav">
        <span className="t-t9__logo">Table No.9</span>
        <div className="t-t9__menu">
          <a href="#c">코스</a>
          <a href="#c">와인</a>
          <a href="#c">공간</a>
          <a href="#c">오시는 길</a>
        </div>
        <a className="t-t9__navBtn" href="#c">
          예약
        </a>
      </nav>

      <header className="t-t9__hero">
        <div className="t-t9__heroBg" />
        <div className="t-t9__heroIn">
          <p className="t-t9__label">Seoul · Seochon</p>
          <h1 className="t-t9__title">
            Table No.9
            <small>Nine Seats Only</small>
          </h1>
          <p className="t-t9__heroKr">
            아홉 개의 자리, 하루 두 번의 서비스.
            <br />
            그날 들어온 재료로 그날의 코스를 씁니다.
          </p>
          <a className="t-t9__heroBtn" href="#c">
            자리 예약하기
          </a>
        </div>
      </header>

      <section className="t-t9__section">
        <div className="t-t9__secHead">
          <p className="t-t9__label">Tasting Course</p>
          <h2 className="t-t9__secTitle">2월의 코스</h2>
          <div className="t-t9__rule" />
        </div>

        <div className="t-t9__course">
          {COURSE.map((c) => (
            <div key={c.no} className="t-t9__dish">
              <p className="t-t9__dishNo">{c.no}</p>
              <h3 className="t-t9__dishName">{c.n}</h3>
              <p className="t-t9__dishEn">{c.en}</p>
              <p className="t-t9__dishDesc">{c.d}</p>
            </div>
          ))}

          <div className="t-t9__coursePrice">
            <b>1인 145,000원</b>
            <span>와인 페어링 +75,000원 · 부가세 포함, 봉사료 없음</span>
          </div>
        </div>
      </section>

      <section className="t-t9__reserve">
        <div className="t-t9__secHead">
          <p className="t-t9__label">Reservation</p>
          <h2 className="t-t9__secTitle">예약</h2>
          <div className="t-t9__rule" />
        </div>

        <div className="t-t9__rsGrid">
          <div className="t-t9__rsCol">
            <h3>인원</h3>
            <div className="t-t9__chips">
              {PARTY.map((p, i) => (
                <span key={p} className={`t-t9__chip${i === 1 ? " t-t9__chip--on" : ""}`}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="t-t9__rsCol">
            <h3>날짜</h3>
            <div className="t-t9__chips">
              {DATES.map((d, i) => (
                <span key={d} className={`t-t9__chip${i === 2 ? " t-t9__chip--on" : ""}`}>
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div className="t-t9__rsCol">
            <h3>시간</h3>
            <div className="t-t9__chips">
              {TIMES.map((t) => (
                <span key={t} className={`t-t9__chip${FULL.includes(t) ? " t-t9__chip--off" : ""}`}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="t-t9__rsFoot">
          <p className="t-t9__rsNote">
            예약 확정 후 취소는 방문 48시간 전까지 가능합니다. 알러지나 못 드시는 재료는 예약 시
            남겨주세요.
          </p>
          <a className="t-t9__heroBtn" href="#c">
            2월 11일 19:30 예약
          </a>
        </div>
      </section>

      <section className="t-t9__info">
        <div className="t-t9__infoCell">
          <b>Hours</b>
          <p>
            화–토 17:30 / 20:30
            <br />
            일 · 월 휴무
          </p>
        </div>
        <div className="t-t9__infoCell">
          <b>Address</b>
          <p>
            서울 종로구 자하문로 00
            <br />
            지하 1층
          </p>
        </div>
        <div className="t-t9__infoCell">
          <b>Contact</b>
          <p>
            02-000-0000
            <br />
            book@tableno9.kr
          </p>
        </div>
        <div className="t-t9__infoCell">
          <b>Note</b>
          <p>
            13세 이상 입장
            <br />
            주차 불가 · 발렛 없음
          </p>
        </div>
      </section>

      <footer className="t-t9__ft">
        <span>Table No.9</span>
        <span>Instagram @tableno9</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}
