import "./PaperJournal.css";

const ENTRIES = [
  { date: "1월 28일", title: "겨울 아침의 산책 코스를 바꿨다", art: "1" },
  { date: "1월 14일", title: "오래된 물건을 버리는 순서에 대하여", art: "2" },
  { date: "12월 30일", title: "올해 읽은 책 열두 권, 그리고 남은 문장", art: "3" },
];

export default function PaperJournal() {
  return (
    <div className="t-paper">
      <div className="t-paper__wrap">
        <header className="t-paper__top">
          <span className="t-paper__logo">
            종이 <em>일지</em>
          </span>
          <nav className="t-paper__menu">
            <a href="#c">기록</a>
            <a href="#c">주제별</a>
            <a href="#c">연도별</a>
            <a href="#c">소개</a>
            <a href="#c">구독</a>
          </nav>
        </header>

        <section className="t-paper__head">
          <span className="t-paper__tape">2026 · 02 · 04</span>
          <p className="t-paper__kicker">Journal — 일상의 기록</p>
          <h1 className="t-paper__title">
            느리게 걷는 사람에게만 <u>보이는</u> 골목이 있다
          </h1>
          <div className="t-paper__byline">
            <span className="t-paper__avatar" />
            <span>글 · 윤아름</span>
            <span>·</span>
            <span>읽는 데 7분</span>
            <span>·</span>
            <span className="t-paper__hand">세 번째 고쳐 씀</span>
          </div>
        </section>

        <article className="t-paper__article">
          <div className="t-paper__body">
            <p>
              같은 길을 3년째 걷는다. 처음에는 지하철역까지 가는 가장 빠른 경로였고, 지금은 일부러
              돌아가는 길이 되었다. 속도를 줄이자 없던 것들이 생겨났다. 정확히는, 계속 있었는데
              보이지 않던 것들이다.
            </p>
            <p>
              모퉁이 세탁소 앞에는 늘 같은 자리에 고양이가 앉아 있다. 주인 아저씨는 그 고양이를
              키우지 않는다고 했다. 다만 겨울에는 문을 조금 열어둔다고 했다.
            </p>

            <blockquote className="t-paper__quote">
              “빠르게 지나가면 풍경이 되고, 천천히 걸으면 이웃이 된다.”
            </blockquote>

            <h2>기록하기로 한 이유</h2>
            <p>
              사진을 찍는 대신 문장으로 적기 시작한 건 작년 가을부터다. 사진은 그 자리에서 완성되지만,
              문장은 집에 돌아와 다시 한 번 그 자리에 서게 만든다. 그 두 번째 방문이 좋았다.
            </p>
            <p>
              물론 대부분의 기록은 다시 읽히지 않는다. 그래도 괜찮다. 이 일지의 목적은 남기는 것이 아니라
              보는 연습이니까. 오늘은 담벼락의 페인트가 세 겹으로 벗겨져 있다는 걸 알았다.
            </p>

            <span className="t-paper__divider">· · ·</span>

            <p>
              내일도 같은 길을 걸을 것이다. 아마 또 다른 것이 보일 테고, 보이지 않으면 그것대로 적을
              것이다. 아무 일도 없었다는 문장도 하루의 기록이 된다.
            </p>
          </div>

          <aside className="t-paper__margin">
            <div className="t-paper__note">
              <b>Note 01</b>
              <div className="t-paper__noteSketch" />
              <p className="t-paper__hand">
                세탁소 고양이 — 이름은 모름.
                <br />
                왼쪽 귀 끝이 조금 접혀 있다.
              </p>
            </div>

            <div className="t-paper__note">
              <b>Note 02</b>
              <p className="t-paper__hand">
                오늘 걸음 수 6,412보.
                <br />
                평소보다 900보 더.
              </p>
            </div>

            <div className="t-paper__note">
              <b>듣던 음악</b>
              <p style={{ fontSize: "0.86rem", color: "#8b8171", fontFamily: "Gowun Batang, serif" }}>
                Nils Frahm — Says
                <br />
                Hania Rani — Glass
              </p>
            </div>
          </aside>
        </article>

        <section className="t-paper__more">
          <div className="t-paper__moreHead">
            <h2 className="t-paper__moreTitle">지난 기록</h2>
            <span className="t-paper__hand">전체 148편 →</span>
          </div>
          <div className="t-paper__entries">
            {ENTRIES.map((e) => (
              <a key={e.title} className="t-paper__entry" href="#c">
                <div className={`t-paper__entryArt t-paper__entryArt--${e.art}`} />
                <span className="t-paper__entryDate">{e.date}</span>
                <h3 className="t-paper__entryTitle">{e.title}</h3>
              </a>
            ))}
          </div>
        </section>

        <footer className="t-paper__footer">
          <span>종이 일지 · 2019년부터 씁니다</span>
          <span>메일로 받아보기</span>
          <span>© 2026 윤아름</span>
        </footer>
      </div>
    </div>
  );
}
