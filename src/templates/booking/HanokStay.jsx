import "./HanokStay.css";

const ROOMS = [
  {
    no: "一",
    n: "안채",
    en: "Anchae · Main Room",
    d: "마당을 정면으로 보는 가장 큰 방. 아침 햇빛이 대청까지 들어옵니다.",
    p: "280,000원",
    cap: "기준 2인 · 최대 3인",
    sold: false,
  },
  {
    no: "二",
    n: "사랑채",
    en: "Sarangchae · Guest Room",
    d: "툇마루가 딸린 독립 채. 저녁에는 마당 등이 켜집니다.",
    p: "240,000원",
    cap: "기준 2인",
    sold: false,
  },
  {
    no: "三",
    n: "별채",
    en: "Byeolchae · Annex",
    d: "대나무 담 옆 가장 조용한 방. 창을 열면 뒷산이 보입니다.",
    p: "320,000원",
    cap: "기준 2인 · 최대 4인",
    sold: true,
  },
];

const DAYS = [
  ["9", "월", "on"],
  ["10", "화", "on"],
  ["11", "수", ""],
  ["12", "목", ""],
  ["13", "금", "full"],
  ["14", "토", "full"],
  ["15", "일", ""],
  ["16", "월", ""],
  ["17", "화", ""],
  ["18", "수", "full"],
  ["19", "목", ""],
  ["20", "금", ""],
  ["21", "토", "full"],
  ["22", "일", ""],
];

export default function HanokStay() {
  return (
    <div className="t-hanok">
      <nav className="t-hanok__nav">
        <span className="t-hanok__logo">서촌 한옥 · 무이</span>
        <div className="t-hanok__menu">
          <a href="#c">공간</a>
          <a href="#c">객실</a>
          <a href="#c">조식</a>
          <a href="#c">이용 안내</a>
          <a href="#c">오시는 길</a>
        </div>
        <a className="t-hanok__navBtn" href="#c">
          예약
        </a>
      </nav>

      <header className="t-hanok__hero">
        <h1 className="t-hanok__vertical">무이재</h1>

        <div className="t-hanok__heroText">
          <p className="t-hanok__label">Seochon, Seoul — Since 1936</p>
          <h2 className="t-hanok__title">
            하루를 천천히
            <br />
            쓰기 위한 집
            <em>A house for slow days</em>
          </h2>
          <p className="t-hanok__lede">
            1936년에 지어진 도시형 한옥을 고쳐 세 채의 객실로 만들었습니다. 하루 한 팀만 머뭅니다.
          </p>

          <div className="t-hanok__facts">
            <div className="t-hanok__fact">
              <b>Rooms</b>
              <span>3채 · 하루 한 팀</span>
            </div>
            <div className="t-hanok__fact">
              <b>Check-in</b>
              <span>16:00 / 퇴실 11:00</span>
            </div>
            <div className="t-hanok__fact">
              <b>Breakfast</b>
              <span>죽과 계절 반찬 (포함)</span>
            </div>
          </div>
        </div>

        <div className="t-hanok__heroArt" />
      </header>

      <section className="t-hanok__section">
        <div className="t-hanok__secHead">
          <h2 className="t-hanok__secTitle">객실</h2>
          <span className="t-hanok__label">Three Rooms</span>
        </div>

        {ROOMS.map((r) => (
          <a key={r.n} className="t-hanok__room" href="#c">
            <span className="t-hanok__roomNo">{r.no}</span>
            <span>
              <span className="t-hanok__roomName">{r.n}</span>
              <span className="t-hanok__roomEn">{r.en}</span>
            </span>
            <span className="t-hanok__roomDesc">{r.d}</span>
            <span className="t-hanok__roomMeta">
              <span className="t-hanok__roomPrice">{r.p}</span>
              <br />
              <span className="t-hanok__roomCap">{r.cap}</span>
              {r.sold && (
                <>
                  <br />
                  <span className="t-hanok__soldout">이번 주 예약 마감</span>
                </>
              )}
            </span>
          </a>
        ))}
      </section>

      <section className="t-hanok__cal">
        <div className="t-hanok__secHead">
          <h2 className="t-hanok__secTitle">예약 가능한 날</h2>
          <span className="t-hanok__label">2026 · February</span>
        </div>

        <div className="t-hanok__calGrid">
          {DAYS.map(([d, w, st]) => (
            <div key={d} className={`t-hanok__day${st ? ` t-hanok__day--${st}` : ""}`}>
              {d}
              <small>{w}</small>
            </div>
          ))}
        </div>

        <div className="t-hanok__calFoot">
          <span className="t-hanok__legend">
            <i style={{ background: "#5c6a4d" }} />
            선택한 날짜
          </span>
          <span className="t-hanok__legend">
            <i style={{ background: "#f6f2e9", border: "1px solid rgba(46,41,34,0.2)" }} />
            예약 가능
          </span>
          <span className="t-hanok__legend">
            <i style={{ background: "transparent", border: "1px dashed rgba(46,41,34,0.28)" }} />
            마감
          </span>
        </div>
      </section>

      <section className="t-hanok__section">
        <div className="t-hanok__secHead">
          <h2 className="t-hanok__secTitle">머무는 동안</h2>
          <span className="t-hanok__label">House Rules</span>
        </div>
        <div className="t-hanok__rules">
          <div className="t-hanok__rule">
            <h3>조용한 밤</h3>
            <p>
              밤 10시 이후에는 마당 사용을 삼가 주세요. 담 너머로 이웃집이 아주 가깝습니다.
            </p>
          </div>
          <div className="t-hanok__rule">
            <h3>맨발과 온돌</h3>
            <p>
              방은 전통 온돌입니다. 신발은 대청 앞에서 벗어 두시고, 겨울에는 바닥이 꽤 따뜻합니다.
            </p>
          </div>
          <div className="t-hanok__rule">
            <h3>아침 상</h3>
            <p>
              8시에서 9시 사이, 죽과 그날의 반찬을 대청에 차려 드립니다. 시간은 미리 알려주세요.
            </p>
          </div>
        </div>
      </section>

      <section className="t-hanok__cta">
        <p className="t-hanok__label">Reservation</p>
        <h2 className="t-hanok__ctaTitle">2월 11일부터 2박, 안채</h2>
        <p className="t-hanok__ctaSub">
          예약 확정 후 3일 이내 취소는 전액 환불됩니다. 문의는 전화로 주시면 가장 빠릅니다.
        </p>
        <a className="t-hanok__ctaBtn" href="#c">
          예약 신청하기
        </a>
      </section>

      <footer className="t-hanok__ft">
        <span>무이재 · 서울 종로구 자하문로 00</span>
        <span>02-000-0000</span>
        <span>© 2026 MUIJAE</span>
      </footer>
    </div>
  );
}
