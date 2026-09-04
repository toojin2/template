import "./Sketchbook.css";

const CARDS = [
  { t: "여름 감기", m: "2025 · 개인 작업", a: "a1", pin: "new" },
  { t: "월간 «오늘» 표지", m: "2025 · 편집 일러스트", a: "a2", pin: null },
  { t: "빵집 고양이", m: "2024 · 그림책 습작", a: "a3", pin: null },
  { t: "이사하는 날", m: "2024 · 브랜드 캠페인", a: "a4", pin: "hot" },
  { t: "밤에 걷는 사람들", m: "2024 · 전시 «걷기»", a: "a5", pin: null },
  { t: "우산이 없어서", m: "2023 · 스티커 시리즈", a: "a6", pin: null },
];

export default function Sketchbook() {
  return (
    <div className="t-sk">
      <div className="t-sk__wrap">
        <nav className="t-sk__nav">
          <span className="t-sk__logo">
            <i />
            민지의 스케치북
          </span>
          <div className="t-sk__menu">
            <a href="#c">작업</a>
            <a href="#c">그림책</a>
            <a href="#c">굿즈</a>
            <a href="#c">소개</a>
            <a href="#c">문의</a>
          </div>
        </nav>

        <header className="t-sk__hero">
          <div>
            <h1 className="t-sk__title">
              그리는 게 <mark>일</mark>이자
              <br />
              <i>취미</i>인 사람
            </h1>
            <p className="t-sk__lede">
              서울에서 그림 그리는 김민지입니다. 잡지 표지, 그림책, 브랜드 캠페인 일러스트를 주로
              작업해요. 요즘은 고양이를 자주 그립니다.
            </p>
            <div className="t-sk__heroBtns">
              <a className="t-sk__btn t-sk__btn--red" href="#c">
                작업 문의하기
              </a>
              <a className="t-sk__btn" href="#c">
                포트폴리오 PDF
              </a>
            </div>
          </div>

          <div className="t-sk__polaroid">
            <div className="t-sk__polaroidArt" />
            <p className="t-sk__polaroidCap">작업실, 화요일 오후</p>
          </div>
        </header>

        <section className="t-sk__board">
          <div className="t-sk__boardHead">
            <h2 className="t-sk__boardTitle">붙여둔 작업들</h2>
          </div>

          <div className="t-sk__cards">
            {CARDS.map((c) => (
              <a key={c.t} className="t-sk__card" href="#c">
                {c.pin && (
                  <span className={`t-sk__pin t-sk__pin--${c.pin}`}>{c.pin === "new" ? "새" : "인기"}</span>
                )}
                <div className={`t-sk__cardArt t-sk__${c.a}`} />
                <h3 className="t-sk__cardTitle">{c.t}</h3>
                <p className="t-sk__cardMeta">{c.m}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="t-sk__about">
          <span className="t-sk__avatar" />
          <div className="t-sk__aboutText">
            <h3>안녕하세요, 김민지입니다</h3>
            <p>
              2018년부터 프리랜스 일러스트레이터로 일하고 있습니다. 사람의 표정과 사물의 그림자를
              오래 보는 편이고, 색은 늘 여섯 개 안쪽으로 씁니다. 함께 작업하고 싶은 이야기가 있다면
              편하게 연락 주세요.
            </p>
            <div className="t-sk__tags">
              <span className="t-sk__tag">편집 일러스트</span>
              <span className="t-sk__tag">그림책</span>
              <span className="t-sk__tag">패키지</span>
              <span className="t-sk__tag">캐릭터</span>
              <span className="t-sk__tag">전시</span>
            </div>
          </div>
        </section>

        <footer className="t-sk__footer">
          <span>minji.draws@mail.com</span>
          <span>인스타그램 @minji.draws</span>
          <span>© 2026 김민지</span>
        </footer>
      </div>
    </div>
  );
}
