import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import TemplateCard from "../components/TemplateCard.jsx";
import { TEMPLATE_MAP } from "../data/templates.js";
import { resetSession, useRecent, useSaved, useSelected } from "../hooks/useSession.js";

function Row({ title, latin, items, isSaved, toggle, selected, offset }) {
  if (!items.length) return null;
  return (
    <section>
      <div className="section-rule">
        <h2>{title}</h2>
        <i>{latin}</i>
      </div>
      <div className="grid">
        {items.map((t, i) => (
          <TemplateCard
            key={t.id}
            template={t}
            index={offset + i}
            delay={i * 80}
            saved={isSaved(t.id)}
            onToggleSave={toggle}
            inUse={selected === t.id}
          />
        ))}
      </div>
    </section>
  );
}

export default function Saved() {
  const { saved, toggle, isSaved } = useSaved();
  const { selected } = useSelected();
  const { recent } = useRecent();

  const current = selected ? TEMPLATE_MAP[selected] : null;
  const savedItems = saved.map((id) => TEMPLATE_MAP[id]).filter(Boolean);
  const recentItems = recent
    .map((id) => TEMPLATE_MAP[id])
    .filter(Boolean)
    .filter((t) => t.id !== selected);

  const nothing = !current && !savedItems.length && !recentItems.length;

  return (
    <>
      <div className="shell-grain" />
      <Header />

      <section className="saved-hero">
        <h1>보관함</h1>
        <p>
          이 목록은 브라우저 <b>세션</b>에만 저장됩니다. 탭을 닫으면 초기화돼요.
        </p>
        {!nothing && (
          <p style={{ marginTop: "1.4rem" }}>
            <button className="btn btn--ghost" onClick={resetSession}>
              세션 비우기
            </button>
          </p>
        )}
      </section>

      {nothing ? (
        <div className="empty">
          <h3>아직 담긴 템플릿이 없습니다</h3>
          <p>아카이브에서 마음에 드는 디자인을 찜하거나, 하나를 골라 적용해 보세요.</p>
          <Link to="/" className="btn btn--solid">
            템플릿 보러 가기
          </Link>
        </div>
      ) : (
        <>
          {current && (
            <Row
              title="사용 중인 템플릿"
              latin="IN USE"
              items={[current]}
              isSaved={isSaved}
              toggle={toggle}
              selected={selected}
              offset={0}
            />
          )}
          <Row
            title="찜한 템플릿"
            latin={`SAVED · ${savedItems.length}`}
            items={savedItems}
            isSaved={isSaved}
            toggle={toggle}
            selected={selected}
            offset={0}
          />
          <Row
            title="최근 본 템플릿"
            latin={`RECENT · ${recentItems.length}`}
            items={recentItems}
            isSaved={isSaved}
            toggle={toggle}
            selected={selected}
            offset={0}
          />
        </>
      )}

      <footer className="ft">
        <p className="ft__big">TOOJIN</p>
        <div className="ft__note">
          세션 기반 저장
          <br />
          로그인 없이 바로 사용
        </div>
      </footer>
    </>
  );
}
