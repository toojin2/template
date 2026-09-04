import "./TownSquare.css";

const CHANNELS = [
  { n: "전체글", c: "12,482", color: "#0d7d76", on: true },
  { n: "자유게시판", c: "4,120", color: "#2563eb" },
  { n: "질문/답변", c: "3,208", color: "#d97706" },
  { n: "정보공유", c: "2,764", color: "#7c3aed" },
  { n: "후기", c: "1,542", color: "#db2777" },
  { n: "중고장터", c: "848", color: "#0891b2" },
];

const POSTS = [
  {
    v: 248,
    t: "이사한 지 한 달, 동네에서 알게 된 것들 정리해봤어요",
    ch: "자유게시판",
    by: "초록우산",
    time: "12분 전",
    cm: 84,
    chip: "인기",
    thumb: "t1",
  },
  {
    v: 132,
    t: "[공지] 3월부터 중고장터 거래 규칙이 바뀝니다",
    ch: "공지",
    by: "운영진",
    time: "1시간 전",
    cm: 41,
    chip: "공지",
    thumb: null,
  },
  {
    v: 96,
    t: "전세 계약 갱신 거절당했는데 어떻게 대응해야 할까요?",
    ch: "질문/답변",
    by: "다섯시반",
    time: "2시간 전",
    cm: 57,
    thumb: null,
  },
  {
    v: 74,
    t: "동네 카페 12곳 6개월간 다 가본 후기 (사진 많음)",
    ch: "후기",
    by: "커피중독",
    time: "3시간 전",
    cm: 33,
    thumb: "t2",
  },
  {
    v: 58,
    t: "재활용 분리수거 요일 헷갈리는 분들 참고하세요",
    ch: "정보공유",
    by: "분리수거왕",
    time: "5시간 전",
    cm: 19,
    thumb: null,
  },
  {
    v: 41,
    t: "책상 무료 나눔합니다 (직접 가져가실 분)",
    ch: "중고장터",
    by: "미니멀",
    time: "6시간 전",
    cm: 12,
    thumb: "t3",
  },
];

const RANK = [
  ["1", "이사한 지 한 달, 동네에서 알게 된 것들", "248"],
  ["2", "전세 계약 갱신 거절 대응법", "196"],
  ["3", "동네 카페 12곳 후기", "174"],
  ["4", "주차 분쟁 결국 이렇게 끝났습니다", "132"],
  ["5", "우리 동네 병원 추천 모음", "118"],
];

export default function TownSquare() {
  return (
    <div className="t-town">
      <header className="t-town__hd">
        <span className="t-town__logo">
          <i />
          타운스퀘어
        </span>
        <div className="t-town__search">
          <span>🔍</span>
          <span>커뮤니티 검색…</span>
        </div>
        <div className="t-town__hdRight">
          <a className="t-town__hdBtn" href="#c">
            글쓰기
          </a>
          <span className="t-town__avatar" />
        </div>
      </header>

      <div className="t-town__body">
        <aside className="t-town__side">
          <div className="t-town__panel">
            <div className="t-town__panelHead">
              <span>게시판</span>
              <span>편집</span>
            </div>
            {CHANNELS.map((c) => (
              <a key={c.n} className={`t-town__chan${c.on ? " t-town__chan--on" : ""}`} href="#c">
                <span className="t-town__dot" style={{ background: c.color }} />
                <span className="t-town__kr">{c.n}</span>
                <span>{c.c}</span>
              </a>
            ))}
          </div>

          <div className="t-town__panel">
            <div className="t-town__panelHead">
              <span>내 활동</span>
            </div>
            <div className="t-town__stat">
              <div>
                <b>42</b>
                <span>작성한 글</span>
              </div>
              <div>
                <b>318</b>
                <span>받은 공감</span>
              </div>
            </div>
          </div>
        </aside>

        <main>
          <div className="t-town__feedTabs">
            <a className="t-town__tab t-town__tab--on" href="#c">
              최신순
            </a>
            <a className="t-town__tab" href="#c">
              인기순
            </a>
            <a className="t-town__tab" href="#c">
              댓글많은순
            </a>
            <a className="t-town__tab" href="#c">
              이미지
            </a>
          </div>

          {POSTS.map((p) => (
            <a key={p.t} className="t-town__post" href="#c">
              <span className="t-town__vote">
                <span className="t-town__voteUp">▲</span>
                <b>{p.v}</b>
                <span>공감</span>
              </span>
              <span>
                <span style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start" }}>
                  <span style={{ flex: 1 }}>
                    <span className="t-town__postTitle">{p.t}</span>
                    <span className="t-town__postMeta">
                      {p.chip && (
                        <span
                          className={`t-town__chip${
                            p.chip === "공지" ? " t-town__chip--notice" : " t-town__chip--hot"
                          }`}
                        >
                          {p.chip}
                        </span>
                      )}
                      <span className="t-town__chip">{p.ch}</span>
                      <span>{p.by}</span>
                      <span>·</span>
                      <span>{p.time}</span>
                      <span>·</span>
                      <span>댓글 {p.cm}</span>
                    </span>
                  </span>
                  {p.thumb && <span className={`t-town__thumb t-town__${p.thumb}`} />}
                </span>
              </span>
            </a>
          ))}
        </main>

        <aside className="t-town__side t-town__widgets">
          <div className="t-town__panel">
            <div className="t-town__panelHead">
              <span>실시간 인기글</span>
              <span>1시간</span>
            </div>
            {RANK.map(([no, name, val]) => (
              <a key={no} className="t-town__rank" href="#c">
                <span className="t-town__rankNo">{no}</span>
                <span className="t-town__rankName">{name}</span>
                <span className="t-town__rankVal">{val}</span>
              </a>
            ))}
          </div>

          <div className="t-town__panel">
            <div className="t-town__panelHead">
              <span>커뮤니티 현황</span>
            </div>
            <div className="t-town__stat">
              <div>
                <b>8,412</b>
                <span>전체 멤버</span>
              </div>
              <div>
                <b>246</b>
                <span>지금 접속 중</span>
              </div>
              <div>
                <b>12,482</b>
                <span>누적 게시글</span>
              </div>
              <div>
                <b>+38</b>
                <span>오늘 가입</span>
              </div>
            </div>
          </div>

          <div className="t-town__panel">
            <div className="t-town__cta">
              <p>이웃들과 나누고 싶은 이야기가 있나요?</p>
              <a className="t-town__ctaBtn" href="#c">
                글 작성하기
              </a>
            </div>
          </div>
        </aside>
      </div>

      <footer className="t-town__ft">
        <span>타운스퀘어 · 우리 동네 이야기</span>
        <span>운영정책 · 이용약관 · 개인정보처리방침</span>
        <span>© 2026 TownSquare</span>
      </footer>
    </div>
  );
}
