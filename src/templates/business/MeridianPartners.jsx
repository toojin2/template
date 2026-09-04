import "./MeridianPartners.css";

const SERVICES = [
  {
    no: "01",
    name: "경영 전략",
    desc: "시장 진입부터 사업 재편까지, 의사결정의 근거를 숫자로 만듭니다.",
    items: ["시장 진입 전략", "포트폴리오 재편", "성장 로드맵"],
  },
  {
    no: "02",
    name: "재무 자문",
    desc: "인수합병과 자금 조달 전 과정에서 기업 가치를 지키는 구조를 설계합니다.",
    items: ["M&A 자문", "기업가치 평가", "자금 조달"],
  },
  {
    no: "03",
    name: "리스크 관리",
    desc: "규제·시장·운영 리스크를 상시 모니터링하고 대응 체계를 세웁니다.",
    items: ["규제 대응", "내부통제 설계", "위기 커뮤니케이션"],
  },
];

const INSIGHTS = [
  { date: "2026.01.28", title: "2026년 국내 M&A 시장 전망: 조정 이후의 기회", cat: "Market Outlook" },
  { date: "2026.01.14", title: "중견기업의 지배구조 개편, 무엇이 달라지는가", cat: "Governance" },
  { date: "2025.12.19", title: "금리 정상화 국면의 자본조달 전략 다섯 가지", cat: "Finance" },
  { date: "2025.12.02", title: "공급망 리스크를 재무제표로 읽는 법", cat: "Risk" },
];

export default function MeridianPartners() {
  return (
    <div className="t-mrd">
      <nav className="t-mrd__nav">
        <div className="t-mrd__navL">
          <a href="#c">회사 소개</a>
          <a href="#c">서비스</a>
          <a href="#c">인사이트</a>
        </div>
        <span className="t-mrd__logo">MERIDIAN</span>
        <div className="t-mrd__navR">
          <a href="#c">인재 영입</a>
          <a href="#c">문의하기</a>
          <a href="#c">EN</a>
        </div>
      </nav>

      <header className="t-mrd__hero">
        <p className="t-mrd__eyebrow">Since 1998 — Seoul</p>
        <h1 className="t-mrd__title">
          결정의 순간에
          <br />
          <em>함께 서는 일</em>
        </h1>
        <p className="t-mrd__titleKr">
          메리디안은 28년간 국내외 640여 개 기업의
          <br />
          가장 어려운 의사결정을 함께 검토해 왔습니다.
        </p>
        <div className="t-mrd__heroBtns">
          <a className="t-mrd__btn t-mrd__btn--solid" href="#c">
            상담 요청
          </a>
          <a className="t-mrd__btn" href="#c">
            회사 소개서 (PDF)
          </a>
        </div>
      </header>

      <section className="t-mrd__stats">
        <div className="t-mrd__stat">
          <b>28</b>
          <span>Years</span>
        </div>
        <div className="t-mrd__stat">
          <b>640+</b>
          <span>Clients</span>
        </div>
        <div className="t-mrd__stat">
          <b>₩12.4조</b>
          <span>Deal Value</span>
        </div>
        <div className="t-mrd__stat">
          <b>96%</b>
          <span>Retention</span>
        </div>
      </section>

      <section className="t-mrd__section">
        <div className="t-mrd__secHead">
          <p className="t-mrd__eyebrow">Practice Areas</p>
          <h2 className="t-mrd__secTitle">세 개의 축으로 일합니다</h2>
        </div>
        <div className="t-mrd__services">
          {SERVICES.map((s) => (
            <article key={s.no} className="t-mrd__service">
              <span className="t-mrd__serviceNo">{s.no}</span>
              <h3 className="t-mrd__serviceName">{s.name}</h3>
              <p className="t-mrd__serviceDesc">{s.desc}</p>
              <div className="t-mrd__serviceList">
                {s.items.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="t-mrd__insight">
        <div className="t-mrd__insightHead">
          <h2>인사이트</h2>
          <span>Latest Reports</span>
        </div>
        {INSIGHTS.map((a) => (
          <a key={a.title} className="t-mrd__article" href="#c">
            <time>{a.date}</time>
            <h3>{a.title}</h3>
            <em>{a.cat}</em>
          </a>
        ))}
      </section>

      <section className="t-mrd__contact">
        <p className="t-mrd__eyebrow">Get in touch</p>
        <h2 className="t-mrd__contactTitle">
          첫 대화는 <em>무료입니다</em>
        </h2>
        <p className="t-mrd__contactSub">
          현재 상황을 간단히 알려주시면, 담당 파트너가 영업일 기준 2일 이내에 연락드립니다.
        </p>
        <a className="t-mrd__btn t-mrd__btn--solid" href="#c">
          문의 남기기
        </a>
      </section>

      <footer className="t-mrd__footer">
        <span>MERIDIAN PARTNERS CO., LTD.</span>
        <span>서울특별시 중구 세종대로 000, 24F</span>
        <span>© 2026 Meridian Partners</span>
      </footer>
    </div>
  );
}
