import "./CitrusMarket.css";

const RAIL = [
  { name: "제주 한라봉 3kg", tag: "제철", price: "24,900원", art: "1" },
  { name: "유기농 샐러드 믹스", tag: "새벽배송", price: "6,900원", art: "2" },
  { name: "무화과 잼 250g", tag: "수제", price: "12,000원", art: "3" },
  { name: "콜드프레스 주스 6팩", tag: "베스트", price: "29,000원", art: "4" },
  { name: "감귤 꿀 500g", tag: "한정", price: "18,500원", art: "1" },
];

export default function CitrusMarket() {
  return (
    <div className="t-citrus">
      <nav className="t-citrus__nav">
        <span className="t-citrus__logo">
          <em />
          CITRUS
        </span>
        <div className="t-citrus__menu">
          <a href="#c">제철과일</a>
          <a href="#c">채소</a>
          <a href="#c">가공식품</a>
          <a href="#c">선물세트</a>
          <a href="#c">생산자</a>
        </div>
        <span className="t-citrus__navBtn">장바구니 3</span>
      </nav>

      <div className="t-citrus__bento">
        <div className="t-citrus__tile t-citrus__tile--hero">
          <h1 className="t-citrus__heroTitle">
            <small>Fresh from the farm</small>
            오늘 딴 것만
            <br />
            내일 아침에
          </h1>
          <div>
            <p className="t-citrus__heroCopy">
              전국 128개 산지에서 수확 당일 포장합니다. 밤 11시까지 주문하면 다음 날 문 앞에 도착해요.
            </p>
            <a className="t-citrus__heroBtn" href="#c">
              오늘의 수확 보기 →
            </a>
          </div>
          <span className="t-citrus__blob" />
        </div>

        <div className="t-citrus__tile t-citrus__tile--wide">
          <span className="t-citrus__tileLabel">This week</span>
          <div>
            <p className="t-citrus__tileBig">
              제철 한라봉
              <br />
              첫 수확 시작
            </p>
            <div className="t-citrus__prod">
              <span className="t-citrus__swatch t-citrus__swatch--a" />
              <span className="t-citrus__price">
                24,900원<small>3kg / 무료배송</small>
              </span>
            </div>
          </div>
          <span className="t-citrus__sticker">-20%</span>
        </div>

        <div className="t-citrus__tile t-citrus__tile--leaf">
          <span className="t-citrus__tileLabel">Producers</span>
          <div>
            <span className="t-citrus__tileNum">128</span>
            <p className="t-citrus__tileBig" style={{ fontSize: "1rem", marginTop: "0.4rem" }}>
              계약 재배 농가
            </p>
          </div>
        </div>

        <div className="t-citrus__tile t-citrus__tile--plain">
          <span className="t-citrus__tileLabel">Salad box</span>
          <div>
            <div className="t-citrus__prod">
              <span className="t-citrus__swatch t-citrus__swatch--b" />
              <span className="t-citrus__price">
                6,900원<small>주 3회 정기</small>
              </span>
            </div>
          </div>
        </div>

        <div className="t-citrus__tile t-citrus__tile--berry">
          <span className="t-citrus__tileLabel">Gift set</span>
          <p className="t-citrus__tileBig">
            마음 전하는
            <br />
            과일 선물 상자
          </p>
          <div className="t-citrus__prod">
            <span className="t-citrus__swatch t-citrus__swatch--c" />
            <span className="t-citrus__price">
              48,000원<small>메시지 카드 포함</small>
            </span>
          </div>
        </div>

        <div className="t-citrus__tile t-citrus__tile--note">
          <span className="t-citrus__tileLabel">Delivery</span>
          <p className="t-citrus__tileBig" style={{ fontSize: "1.05rem" }}>
            밤 11시 주문 → 내일 아침 7시 도착 · 전국 새벽배송
          </p>
        </div>
      </div>

      <section className="t-citrus__railWrap">
        <div className="t-citrus__railHead">
          <h2 className="t-citrus__railTitle">이번 주 잘 나가요</h2>
          <a className="t-citrus__railMore" href="#c">
            전체 보기 →
          </a>
        </div>
        <div className="t-citrus__rail">
          {RAIL.map((p) => (
            <article key={p.name} className="t-citrus__card">
              <div className={`t-citrus__cardArt t-citrus__cardArt--${p.art}`} />
              <h3 className="t-citrus__cardName">{p.name}</h3>
              <div className="t-citrus__cardFoot">
                <span className="t-citrus__price" style={{ fontSize: "0.95rem" }}>
                  {p.price}
                </span>
                <span className="t-citrus__tag">{p.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="t-citrus__footer">
        <div className="t-citrus__fBig">
          맛있게
          <br />
          드세요 🍊
        </div>
        <div className="t-citrus__fNote">
          시트러스 마켓 · 사업자 000-00-00000
          <br />
          서울 마포구 어딘가 24
          <br />
          고객센터 1600-0000 (평일 9-18시)
        </div>
      </footer>
    </div>
  );
}
