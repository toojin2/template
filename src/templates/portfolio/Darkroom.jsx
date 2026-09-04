import "./Darkroom.css";

const SHOTS = [
  { cls: "a", img: "1", t: "새벽 네 시의 노량진", m: "Kodak Portra 400 · 35mm" },
  { cls: "b", img: "2", t: "겨울 바다, 주문진", m: "Ilford HP5 · 6×7" },
  { cls: "c", img: "3", t: "적산가옥의 창", m: "Kodak Gold 200 · 50mm" },
  { cls: "d", img: "4", t: "폐선 부지에서", m: "Fuji Pro 400H · 35mm" },
];

const EX = [
  ["2025", "«머무는 빛» 개인전", "d/p 갤러리, 서울"],
  ["2024", "«도시의 가장자리» 2인전", "space xx, 부산"],
  ["2023", "서울사진축제 초청", "북서울시립미술관"],
  ["2022", "«필름, 이후» 단체전", "온수공간, 서울"],
];

export default function Darkroom() {
  return (
    <div className="t-dark">
      <aside className="t-dark__strip">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            className={`t-dark__frame t-dark__frame--${n}${n === 1 ? " t-dark__frame--on" : ""}`}
          />
        ))}
        <span className="t-dark__stripLabel">ROLL 024 — 2026</span>
      </aside>

      <div className="t-dark__main">
        <div className="t-dark__top">
          <span className="t-dark__logo">
            Dark<em>room</em>
          </span>
          <nav className="t-dark__nav">
            <a href="#c">Series</a>
            <a href="#c">Exhibitions</a>
            <a href="#c">Prints</a>
            <a href="#c">About</a>
          </nav>
          <span className="t-dark__meta">SEOUL · FILM ONLY</span>
        </div>

        <header className="t-dark__plate">
          <div className="t-dark__plateImg" />
          <div className="t-dark__plateText">
            <h1 className="t-dark__title">
              빛이 남긴 것,
              <br />
              <em>그 이후</em>
            </h1>
            <div className="t-dark__plateMeta">
              <span className="t-dark__meta">Series 024 — 2025.11 – 2026.01</span>
              <span className="t-dark__meta">42 Frames</span>
              <span className="t-dark__meta">Medium Format</span>
            </div>
          </div>
        </header>

        <section className="t-dark__seq">
          <div className="t-dark__seqHead">
            <h2 className="t-dark__seqTitle">최근 시리즈</h2>
            <span className="t-dark__meta">Selected Works</span>
          </div>

          <div className="t-dark__grid">
            {SHOTS.map((s) => (
              <a key={s.t} className={`t-dark__shot t-dark__shot--${s.cls} t-dark__i${s.img}`} href="#c">
                <i />
                <span className="t-dark__cap">
                  <b>{s.t}</b>
                  <span className="t-dark__meta">{s.m}</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="t-dark__ex">
          <div className="t-dark__seqHead">
            <h2 className="t-dark__seqTitle">전시</h2>
            <span className="t-dark__meta">Exhibitions</span>
          </div>
          {EX.map(([y, t, p]) => (
            <div key={y} className="t-dark__exRow">
              <span className="t-dark__meta">{y}</span>
              <b>{t}</b>
              <span className="t-dark__meta">{p}</span>
            </div>
          ))}
        </section>

        <footer className="t-dark__footer">
          <div>
            <p className="t-dark__meta" style={{ marginBottom: "0.8rem" }}>
              프린트 판매 · 촬영 의뢰
            </p>
            <a className="t-dark__mail" href="#c">
              studio@darkroom.kr
            </a>
          </div>
          <div className="t-dark__meta" style={{ textAlign: "right", lineHeight: 2.2 }}>
            INSTAGRAM
            <br />
            서울 마포구 성미산로 00
            <br />© 2026 DARKROOM STUDIO
          </div>
        </footer>
      </div>
    </div>
  );
}
