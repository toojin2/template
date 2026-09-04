import "./GearheadSupply.css";

const TICKER = [
  "DROP 014 — 02.14 21:00 KST",
  "무료배송 10만원 이상",
  "당일 출고 마감 15:00",
  "리스톡 알림 신청",
];

const ROWS = [
  { no: "014-01", name: "택티컬 카고 팬츠", en: "Tactical Cargo Pants", size: "S / M / L / XL", price: "129,000", sold: false },
  { no: "014-02", name: "리플렉티브 윈드브레이커", en: "Reflective Windbreaker", size: "M / L / XL", price: "189,000", sold: false },
  { no: "014-03", name: "헤비웨이트 후디 400GSM", en: "Heavyweight Hoodie", size: "SOLD OUT", price: "98,000", sold: true },
  { no: "014-04", name: "유틸리티 크로스백", en: "Utility Crossbody", size: "ONE SIZE", price: "76,000", sold: false },
  { no: "014-05", name: "워크 부츠 GH-9", en: "Work Boots GH-9", size: "250 – 285", price: "245,000", sold: false },
];

export default function GearheadSupply() {
  return (
    <div className="t-gear">
      <div className="t-gear__rules" />

      <div className="t-gear__ticker">
        <div className="t-gear__tickerTrack">
          {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i}>◼ {t}</span>
          ))}
        </div>
      </div>

      <nav className="t-gear__nav">
        <span className="t-gear__brand">
          GEARHEAD<b>SUPPLY</b>
        </span>
        <div className="t-gear__navLinks">
          <a href="#c">신상</a>
          <a href="#c">아우터</a>
          <a href="#c">팬츠</a>
          <a href="#c">가방</a>
          <a href="#c">아카이브</a>
          <a href="#c" className="t-gear__cart">
            CART [3]
          </a>
        </div>
      </nav>

      <header className="t-gear__hero">
        <div className="t-gear__heroMain">
          <div className="t-gear__kicker">
            <span>DROP 014</span>
            <span>2026 SS</span>
            <span>LIMITED 200EA</span>
          </div>
          <h1 className="t-gear__display">
            <span className="out">FIELD</span>
            <span className="fill">
              TESTED<em>.</em>
            </span>
          </h1>
          <p className="t-gear__kr">
            현장에서 부서질 때까지 입어본 것만 만듭니다. 과장된 설명 대신 원단 번호와 실측 사이즈를
            그대로 적어둡니다.
          </p>
        </div>

        <div className="t-gear__heroSide">
          <div className="t-gear__spec">
            <span>FABRIC</span>
            <b>CORDURA 500D</b>
          </div>
          <div className="t-gear__spec">
            <span>ORIGIN</span>
            <b>MADE IN KOREA</b>
          </div>
          <div className="t-gear__spec">
            <span>STOCK</span>
            <b>200 / 200</b>
          </div>
          <div className="t-gear__spec">
            <span>COLORWAY</span>
            <b>04</b>
          </div>
          <div className="t-gear__swatchBox">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </header>

      <section className="t-gear__tableWrap">
        <div className="t-gear__tableHead">
          <span>NO.</span>
          <span>ITEM</span>
          <span>SIZE</span>
          <span>PRICE</span>
          <span>ORDER</span>
        </div>
        {ROWS.map((r) => (
          <a key={r.no} href="#c" className={`t-gear__row${r.sold ? " t-gear__row--sold" : ""}`}>
            <span className="t-gear__cellNo">{r.no}</span>
            <span className="t-gear__cellName">
              <b>{r.name}</b>
              <small>{r.en}</small>
            </span>
            <span className="t-gear__cellSize">{r.size}</span>
            <span className="t-gear__cellPrice">₩{r.price}</span>
            <span className="t-gear__cellBuy">{r.sold ? "SOLD" : "BUY"}</span>
          </a>
        ))}
      </section>

      <section className="t-gear__drop">
        <div>
          <h2 className="t-gear__dropTitle">
            NEXT DROP <em>02.14</em> 21:00
          </h2>
          <p className="t-gear__dropMeta">알림 신청자 4,812명 · 선착순 200개 · 1인 2개 한정</p>
        </div>
        <a className="t-gear__dropBtn" href="#c">
          알림 신청
        </a>
      </section>

      <footer className="t-gear__footer">
        <div className="t-gear__fCol">
          <b>SHOP</b>
          <span>NEW ARRIVALS</span>
          <span>OUTERWEAR</span>
          <span>ARCHIVE SALE</span>
        </div>
        <div className="t-gear__fCol">
          <b>SUPPORT</b>
          <span>배송 조회</span>
          <span>교환 / 반품</span>
          <span>사이즈 가이드</span>
        </div>
        <div className="t-gear__fCol">
          <b>CONTACT</b>
          <span>SEOUL, KR</span>
          <span>02-000-0000</span>
          <span>SUPPORT@GEARHEAD.KR</span>
        </div>
        <div className="t-gear__fCol">
          <b>INDEX</b>
          <span>© 2026 GEARHEAD SUPPLY</span>
          <span>ALL RIGHTS RESERVED</span>
          <span>V.014</span>
        </div>
      </footer>
    </div>
  );
}
