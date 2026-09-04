import "./NoirAtelier.css";

const PIECES = [
  { no: "001", name: "캐시미어 롱 코트", en: "Cashmere Long Coat", price: "₩1,290,000", cls: "t-noir__s1" },
  { no: "002", name: "실크 새틴 드레스", en: "Silk Satin Dress", price: "₩870,000", cls: "t-noir__s2" },
  { no: "003", name: "울 테일러드 재킷", en: "Wool Tailored Jacket", price: "₩1,040,000", cls: "t-noir__s3" },
];

const MARQUEE = [
  "Handmade in Seoul",
  "Free Alteration",
  "Archive Sale",
  "Private Fitting",
  "Made to Order",
];

export default function NoirAtelier() {
  return (
    <div className="t-noir">
      <nav className="t-noir__nav">
        <span className="t-noir__logo">NOIR</span>
        <div className="t-noir__menu">
          <a href="#c">컬렉션</a>
          <a href="#c">아우터</a>
          <a href="#c">드레스</a>
          <a href="#c">아카이브</a>
          <a href="#c">스토어</a>
        </div>
        <span className="t-noir__bag">BAG (2)</span>
      </nav>

      <header className="t-noir__hero">
        <div className="t-noir__heroText">
          <span className="t-noir__label">Collection 26 — Winter</span>
          <h1 className="t-noir__title">
            Quiet
            <br />
            <i>Luxury</i>
            <span className="kr">
              소리 내지 않는 옷.
              <br />
              단정한 선과 밀도 있는 소재만 남겼습니다.
            </span>
          </h1>
          <div className="t-noir__heroFoot">
            <a className="t-noir__cta" href="#c">
              컬렉션 보기
            </a>
            <div className="t-noir__season">
              LOOKBOOK 24 PIECES
              <br />
              SEOUL · MILANO
            </div>
          </div>
        </div>
        <div className="t-noir__heroArt">
          <div className="t-noir__figure" />
          <div className="t-noir__figureTag">
            LOOK 07
            <br />
            CASHMERE / IVORY
          </div>
        </div>
      </header>

      <div className="t-noir__marquee">
        <div className="t-noir__track">
          {[...MARQUEE, ...MARQUEE].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </div>
      </div>

      <section className="t-noir__section">
        <div className="t-noir__secHead">
          <h2 className="t-noir__secTitle">
            The <i>Lookbook</i>
          </h2>
          <span className="t-noir__label">03 / 24 Pieces</span>
        </div>

        <div className="t-noir__grid">
          {PIECES.map((p) => (
            <a key={p.no} className="t-noir__item" href="#c">
              <div className={`t-noir__shot ${p.cls}`} data-no={p.no}>
                <i />
              </div>
              <div className="t-noir__meta">
                <span className="t-noir__name">
                  {p.name}
                  <small>{p.en}</small>
                </span>
                <span className="t-noir__price">{p.price}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="t-noir__band">
        <div className="t-noir__bandArt" />
        <div className="t-noir__bandText">
          <span className="t-noir__label">Atelier Note</span>
          <p className="t-noir__quote">
            “좋은 옷은 입은 사람보다 먼저 말하지 않는다.”
          </p>
          <p>
            서울 성수동 아틀리에에서 한 벌씩 재단합니다. 모든 제품은 주문 후 3주 내 제작되며, 평생 무료
            수선을 보장합니다.
          </p>
        </div>
      </section>

      <footer className="t-noir__footer">
        <div className="t-noir__fLogo">NOIR</div>
        <div className="t-noir__fCols">
          <div className="t-noir__fCol">
            <b>Shop</b>
            <span>신상품</span>
            <span>아우터</span>
            <span>액세서리</span>
          </div>
          <div className="t-noir__fCol">
            <b>Service</b>
            <span>배송 안내</span>
            <span>수선 예약</span>
            <span>프라이빗 피팅</span>
          </div>
          <div className="t-noir__fCol">
            <b>Contact</b>
            <span>서울 성수동 12-4</span>
            <span>02-000-0000</span>
            <span>hello@noir.kr</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
