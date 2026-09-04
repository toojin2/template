import "./BloomClinic.css";

const CARDS = [
  {
    icon: "01",
    title: "통합 건강검진",
    desc: "혈액·영상·체성분을 하루 안에 마치고, 결과는 담당 의사가 30분간 직접 설명합니다.",
    meta: "소요 2시간 · 사전 예약제",
  },
  {
    icon: "02",
    title: "여성 건강 클리닉",
    desc: "호르몬 균형, 임신 준비, 갱년기까지 생애 주기 전체를 하나의 기록으로 관리합니다.",
    meta: "여성 의료진 상주",
  },
  {
    icon: "03",
    title: "회복 · 영양 관리",
    desc: "수액 치료와 영양 상담을 결합해 검사 이후의 생활을 함께 설계합니다.",
    meta: "1:1 영양사 배정",
  },
];

const HOURS = [
  ["월 · 화 · 목 · 금", "09:00 – 18:00", false],
  ["수요일", "09:00 – 13:00", false],
  ["토요일", "09:00 – 14:00", false],
  ["일요일 · 공휴일", "휴진", true],
];

export default function BloomClinic() {
  return (
    <div className="t-bloom">
      <div className="t-bloom__blobs">
        <i />
        <i />
        <i />
      </div>

      <div className="t-bloom__wrap">
        <nav className="t-bloom__nav">
          <span className="t-bloom__logo">
            <i />
            BLOOM
          </span>
          <div className="t-bloom__menu">
            <a href="#c">진료 안내</a>
            <a href="#c">의료진</a>
            <a href="#c">검진 프로그램</a>
            <a href="#c">오시는 길</a>
          </div>
          <a className="t-bloom__navBtn" href="#c">
            예약하기
          </a>
        </nav>

        <header className="t-bloom__hero">
          <div>
            <span className="t-bloom__eyebrow">여성 의료진 · 서울 서초</span>
            <h1 className="t-bloom__title">
              천천히 묻고
              <br />
              오래 <em>듣습니다</em>
            </h1>
            <p className="t-bloom__lede">
              한 사람당 진료 시간 30분. 검사 수치보다 지금의 생활을 먼저 이해하는 것이 블룸의 방식입니다.
            </p>
            <div className="t-bloom__heroBtns">
              <a className="t-bloom__btn t-bloom__btn--fill" href="#c">
                진료 예약
              </a>
              <a className="t-bloom__btn t-bloom__btn--line" href="#c">
                검진 프로그램 보기
              </a>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className="t-bloom__arch" />
            <div className="t-bloom__archCard">
              <b>30</b>
              <span>
                분
                <br />
                평균 진료 시간
              </span>
            </div>
          </div>
        </header>

        <section className="t-bloom__section">
          <div className="t-bloom__secHead">
            <span className="t-bloom__eyebrow">Programs</span>
            <h2 className="t-bloom__secTitle">세 가지 진료 프로그램</h2>
          </div>
          <div className="t-bloom__cards">
            {CARDS.map((c) => (
              <article key={c.title} className="t-bloom__card">
                <div className="t-bloom__cardIcon">{c.icon}</div>
                <h3 className="t-bloom__cardTitle">{c.title}</h3>
                <p className="t-bloom__cardDesc">{c.desc}</p>
                <p className="t-bloom__cardMeta">{c.meta}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="t-bloom__hours">
          <div>
            <h2 className="t-bloom__hoursTitle">진료 시간</h2>
            {HOURS.map(([day, time, off]) => (
              <div key={day} className={`t-bloom__hoursRow${off ? " t-bloom__hoursRow--off" : ""}`}>
                <b>{day}</b>
                <span>{time}</span>
              </div>
            ))}
            <p className="t-bloom__hoursNote">점심시간 13:00 – 14:00 · 마지막 접수는 종료 30분 전</p>
          </div>
          <div>
            <h2 className="t-bloom__hoursTitle">오시는 길</h2>
            <div className="t-bloom__hoursRow">
              <b>주소</b>
              <span>서울 서초구 서초대로 000, 3층</span>
            </div>
            <div className="t-bloom__hoursRow">
              <b>지하철</b>
              <span>2호선 강남역 4번 출구 도보 6분</span>
            </div>
            <div className="t-bloom__hoursRow">
              <b>주차</b>
              <span>건물 지하 2시간 무료</span>
            </div>
            <div className="t-bloom__hoursRow">
              <b>전화</b>
              <span>02-000-0000</span>
            </div>
          </div>
        </section>

        <section className="t-bloom__book">
          <span className="t-bloom__eyebrow">Reservation</span>
          <h2 className="t-bloom__bookTitle">예약은 1분이면 충분해요</h2>
          <p className="t-bloom__bookSub">
            연락처를 남겨주시면 원하시는 시간대를 확인해 문자로 안내드립니다.
          </p>
          <form className="t-bloom__form" onSubmit={(e) => e.preventDefault()}>
            <input type="tel" placeholder="휴대폰 번호를 입력해 주세요" aria-label="휴대폰 번호" />
            <button type="submit">예약 신청</button>
          </form>
        </section>

        <footer className="t-bloom__footer">
          <span>블룸 의원 · 대표원장 000</span>
          <span>사업자등록번호 000-00-00000</span>
          <span>© 2026 Bloom Clinic</span>
        </footer>
      </div>
    </div>
  );
}
