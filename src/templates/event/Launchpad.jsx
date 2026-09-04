import "./Launchpad.css";

const REWARDS = [
  {
    price: "29,000원",
    name: "얼리버드 1개",
    items: ["본품 1개", "전용 파우치", "스티커 세트"],
    left: "잔여 12개",
    ship: "2026년 5월 발송",
    sold: false,
  },
  {
    price: "54,000원",
    name: "2개 세트",
    items: ["본품 2개", "전용 파우치 2개", "스티커 세트", "여분 심 4개"],
    left: "잔여 88개",
    ship: "2026년 5월 발송",
    sold: false,
  },
  {
    price: "119,000원",
    name: "스튜디오 패키지",
    items: ["본품 5개", "우드 스탠드", "각인 서비스", "제작 노트 (한정)"],
    left: "마감",
    ship: "2026년 6월 발송",
    sold: true,
  },
];

export default function Launchpad() {
  return (
    <div className="t-lp">
      <nav className="t-lp__nav">
        <span className="t-lp__logo">
          <i />
          런치패드
        </span>
        <div className="t-lp__menu">
          <a href="#c">둘러보기</a>
          <a href="#c">오픈예정</a>
          <a href="#c">인기 프로젝트</a>
          <a href="#c">창작자 지원</a>
        </div>
        <a className="t-lp__navBtn" href="#c">
          프로젝트 올리기
        </a>
      </nav>

      <div className="t-lp__main">
        <div>
          <div className="t-lp__badges">
            <span className="t-lp__badge t-lp__badge--b">디자인 문구</span>
            <span className="t-lp__badge">목표 달성</span>
            <span className="t-lp__badge t-lp__badge--y">🔥 인기 1위</span>
          </div>

          <h1 className="t-lp__title">
            30년 쓰는 볼펜,
            <br />
            다시 만들었습니다
          </h1>
          <p className="t-lp__lede">
            부품 7개, 나사 하나 없이 조립되는 황동 볼펜. 심만 바꾸면 평생 쓸 수 있도록 설계했고,
            모든 부품을 개별 판매합니다.
          </p>

          <div className="t-lp__cover" />

          <div className="t-lp__facts">
            <div className="t-lp__fact">
              <b>7</b>
              <span>부품 수</span>
            </div>
            <div className="t-lp__fact">
              <b>41g</b>
              <span>무게 (황동 기준)</span>
            </div>
            <div className="t-lp__fact">
              <b>100%</b>
              <span>국내 생산</span>
            </div>
          </div>

          <div className="t-lp__story">
            <h2>왜 만들었나요</h2>
            <p>
              3년 전 쓰던 볼펜의 클립이 부러졌습니다. 부품만 사려 했지만 어디에도 팔지 않았고, 결국
              멀쩡한 몸통까지 버려야 했습니다. 그때부터 “고쳐 쓸 수 있는 필기구”를 만들기로 했습니다.
            </p>

            <div className="t-lp__pull">
              “버리는 이유가 부품 하나 때문이라면, 그 부품을 팔면 됩니다.”
            </div>

            <h2>어떻게 만들었나요</h2>
            <p>
              황동 봉재를 CNC로 깎아 표면을 헤어라인 처리했습니다. 나사 결합 대신 정밀 압입 구조를 써서
              분해와 재조립이 반복돼도 유격이 생기지 않도록 공차를 0.02mm로 관리했습니다.
            </p>
            <p>
              심은 시중에서 가장 널리 쓰이는 규격을 그대로 채택했습니다. 저희 제품이 단종되더라도
              문구점에서 살 수 있는 심을 계속 쓸 수 있어야 한다고 생각했습니다.
            </p>
          </div>
        </div>

        <aside className="t-lp__panel">
          <p className="t-lp__raised">₩18,420,000</p>
          <p className="t-lp__raisedSub">목표 금액 ₩8,000,000</p>

          <div className="t-lp__gauge">
            <div className="t-lp__gaugeFill" style={{ width: "100%" }} />
          </div>
          <div className="t-lp__gaugeMeta">
            <span>230% 달성</span>
            <span>D-14</span>
          </div>

          <div className="t-lp__panelStats">
            <div>
              <b>642명</b>
              <span>후원자</span>
            </div>
            <div>
              <b>14일</b>
              <span>남은 기간</span>
            </div>
            <div>
              <b>1,284</b>
              <span>알림 신청</span>
            </div>
            <div>
              <b>5월</b>
              <span>예상 발송</span>
            </div>
          </div>

          <a className="t-lp__panelBtn" href="#c">
            이 프로젝트 후원하기
          </a>
          <p className="t-lp__panelNote">목표 미달 시 100% 환불됩니다</p>
        </aside>
      </div>

      <section className="t-lp__rewards">
        <h2 className="t-lp__secTitle">리워드 선택</h2>
        <div className="t-lp__rewardGrid">
          {REWARDS.map((r) => (
            <article key={r.name} className={`t-lp__reward${r.sold ? " t-lp__reward--sold" : ""}`}>
              {r.sold && <span className="t-lp__soldTag">SOLD OUT</span>}
              <p className="t-lp__rewardPrice">{r.price}</p>
              <h3 className="t-lp__rewardName">{r.name}</h3>
              <div className="t-lp__rewardList">
                {r.items.map((i) => (
                  <span key={i}>· {i}</span>
                ))}
              </div>
              <div className="t-lp__rewardFoot">
                <span>{r.left}</span>
                <span>{r.ship}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="t-lp__footer">
        <span>런치패드 · 창작자와 후원자를 잇습니다</span>
        <span>고객센터 1600-0000</span>
        <span>© 2026 Launchpad</span>
      </footer>
    </div>
  );
}
