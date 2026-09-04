import "./AtlasIndustrial.css";

const STEPS = [
  { no: "01", name: "설계 검토", desc: "도면과 공차를 먼저 읽습니다. 양산 가능성을 3일 내 회신." },
  { no: "02", name: "시작품 제작", desc: "CNC·판금 시제품으로 구조를 실물에서 확인합니다." },
  { no: "03", name: "양산 이관", desc: "치공구를 세우고 초도 물량의 전수 검사를 진행합니다." },
  { no: "04", name: "품질 추적", desc: "로트 단위 이력을 10년간 보관하고 즉시 조회합니다." },
];

const SPECS = [
  ["가공 정밀도", "± 0.01 mm"],
  ["최대 가공 크기", "2,400 × 1,200 mm"],
  ["보유 설비", "CNC 24대 / 레이저 6대"],
  ["월 생산 능력", "180,000 EA"],
  ["인증", "ISO 9001 · IATF 16949"],
  ["초도 납기", "평균 12 영업일"],
];

const BARS = [
  ["정밀 절삭", 96],
  ["판금 · 용접", 88],
  ["표면 처리", 74],
  ["조립 · 검사", 91],
];

export default function AtlasIndustrial() {
  return (
    <div className="t-atlas">
      <aside className="t-atlas__rail">
        <span className="t-atlas__railBadge">A</span>
        <span className="t-atlas__railMark">EST. 1987</span>
        <span className="t-atlas__railFoot">PLANT 03 — ANSAN</span>
      </aside>

      <div className="t-atlas__main">
        <div className="t-atlas__top">
          <span className="t-atlas__brand">
            <i />
            ATLAS INDUSTRIAL
          </span>
          <nav className="t-atlas__topNav">
            <a href="#c">회사 개요</a>
            <a href="#c">생산 설비</a>
            <a href="#c">품질 관리</a>
            <a href="#c">납품 실적</a>
          </nav>
          <a className="t-atlas__topCta" href="#c">
            견적 요청
          </a>
        </div>

        <header className="t-atlas__hero">
          <div className="t-atlas__tagRow">
            <span className="t-atlas__tag t-atlas__tag--y">ISO 9001</span>
            <span className="t-atlas__tag">IATF 16949</span>
            <span className="t-atlas__tag">39 YEARS</span>
            <span className="t-atlas__tag">ANSAN · KR</span>
          </div>

          <h1 className="t-atlas__display">
            <span>PRECISION</span>
            <span className="hl">METAL</span>
            <span>WORKS</span>
          </h1>

          <p className="t-atlas__krLine">
            0.01mm의 오차가 제품의 수명을 바꿉니다. 아틀라스는 1987년부터 자동차·중장비 부품을
            같은 기준으로 깎아 왔습니다.
          </p>

          <div className="t-atlas__heroMeta">
            <div>
              <b>39</b>
              <span>Years of Operation</span>
            </div>
            <div>
              <b>180K</b>
              <span>Units / Month</span>
            </div>
            <div>
              <b>0.01㎜</b>
              <span>Tolerance</span>
            </div>
            <div>
              <b>142</b>
              <span>Partners</span>
            </div>
          </div>
        </header>

        <section className="t-atlas__section">
          <div className="t-atlas__secHead">
            <span className="t-atlas__secNo">[ 01 ]</span>
            <h2 className="t-atlas__secTitle">Process</h2>
          </div>
          <div className="t-atlas__steps">
            {STEPS.map((s) => (
              <div key={s.no} className="t-atlas__step">
                <div className="t-atlas__stepNo">{s.no}</div>
                <h3 className="t-atlas__stepName">{s.name}</h3>
                <p className="t-atlas__stepDesc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="t-atlas__section">
          <div className="t-atlas__secHead">
            <span className="t-atlas__secNo">[ 02 ]</span>
            <h2 className="t-atlas__secTitle">Specification</h2>
          </div>
          <div className="t-atlas__specs">
            {SPECS.map(([k, v]) => (
              <div key={k} className="t-atlas__specRow">
                <b>{k}</b>
                <span>{v}</span>
              </div>
            ))}
          </div>

          <div className="t-atlas__bars">
            {BARS.map(([name, pct], i) => (
              <div key={name} className="t-atlas__bar">
                <b>{name}</b>
                <div className="t-atlas__barTrack">
                  <div
                    className="t-atlas__barFill"
                    style={{ width: `${pct}%`, animationDelay: `${i * 0.12}s` }}
                  />
                </div>
                <span>{pct}%</span>
              </div>
            ))}
          </div>
        </section>

        <section className="t-atlas__cta">
          <div>
            <h2 className="t-atlas__ctaTitle">
              도면을 보내주세요.
              <br />
              <em>3일 안에</em> 회신합니다.
            </h2>
            <p className="t-atlas__ctaSub">DWG · STEP · PDF 지원 — 비밀유지계약 선행 가능</p>
          </div>
          <a className="t-atlas__ctaBtn" href="#c">
            견적 요청서
          </a>
        </section>

        <footer className="t-atlas__footer">
          <span>ATLAS INDUSTRIAL CO., LTD.</span>
          <span>경기도 안산시 단원구 000로 24</span>
          <span>T. 031-000-0000</span>
          <span>© 2026</span>
        </footer>
      </div>
    </div>
  );
}
