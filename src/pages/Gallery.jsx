import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header.jsx";
import TemplateCard from "../components/TemplateCard.jsx";
import { CATEGORIES } from "../data/categories.js";
import { TEMPLATES } from "../data/templates.js";
import { useSaved, useSelected } from "../hooks/useSession.js";

export default function Gallery() {
  const [params, setParams] = useSearchParams();
  const active = params.get("c") || "all";
  const [sort, setSort] = useState("archive");

  const { saved, toggle, isSaved } = useSaved();
  const { selected } = useSelected();

  const setCategory = (id) => {
    if (id === "all") setParams({}, { replace: false });
    else setParams({ c: id }, { replace: false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sortFn = useMemo(
    () => (list) => (sort === "name" ? [...list].sort((a, b) => a.name.localeCompare(b.name, "ko")) : list),
    [sort]
  );

  const sections = useMemo(() => {
    if (active === "all") {
      return CATEGORIES.map((c) => ({
        cat: c,
        items: sortFn(TEMPLATES.filter((t) => t.category === c.id)),
      }));
    }
    const cat = CATEGORIES.find((c) => c.id === active);
    return cat ? [{ cat, items: sortFn(TEMPLATES.filter((t) => t.category === active)) }] : [];
  }, [active, sortFn]);

  let running = 0;

  return (
    <>
      <div className="shell-grain" />
      <Header />

      {active === "all" && (
        <section className="hero">
          <div className="hero__inner">
            <p className="hero__eyebrow">Vol.01 — 2026 Collection</p>
            <h1 className="hero__title">
              고르는 순간
              <br />
              <span className="kr">웹사이트가</span> <em>시작된다</em>
            </h1>
            <p className="hero__lede">
              7개 분야, 21종의 완성형 레이아웃. 코드 한 줄 쓰지 않고 미리보고, 마음에 드는 하나를 골라
              그대로 시작하세요.
            </p>
            <div className="hero__meta">
              <div className="hero__stat">
                <b>21</b>
                <span>Templates</span>
              </div>
              <div className="hero__stat">
                <b>07</b>
                <span>Categories</span>
              </div>
              <div className="hero__stat">
                <b>100%</b>
                <span>Responsive</span>
              </div>
              <div className="hero__stat">
                <b>{saved.length}</b>
                <span>Saved in session</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <nav className="rail" aria-label="카테고리">
        <button
          className={`rail__btn${active === "all" ? " rail__btn--on" : ""}`}
          onClick={() => setCategory("all")}
        >
          전체<sup>{TEMPLATES.length}</sup>
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={`rail__btn${active === c.id ? " rail__btn--on" : ""}`}
            onClick={() => setCategory(c.id)}
          >
            {c.name}
            <sup>{TEMPLATES.filter((t) => t.category === c.id).length}</sup>
          </button>
        ))}
      </nav>

      {sections.map(({ cat, items }, si) => (
        <section key={cat.id}>
          <div className="grid-head">
            <div>
              <h2 className="grid-head__title">
                {cat.name}
                <i>{cat.latin.toUpperCase()}</i>
              </h2>
              <p className="grid-head__desc">{cat.desc}</p>
            </div>
            {si === 0 && (
              <div className="grid-head__sort">
                <button aria-pressed={sort === "archive"} onClick={() => setSort("archive")}>
                  아카이브순
                </button>
                <button aria-pressed={sort === "name"} onClick={() => setSort("name")}>
                  이름순
                </button>
              </div>
            )}
          </div>

          <div className="grid">
            {items.map((t, i) => {
              const idx = running++;
              return (
                <TemplateCard
                  key={t.id}
                  template={t}
                  index={idx}
                  delay={i * 80}
                  saved={isSaved(t.id)}
                  onToggleSave={toggle}
                  inUse={selected === t.id}
                />
              );
            })}
          </div>
        </section>
      ))}

      <footer className="ft">
        <p className="ft__big">TOOJIN</p>
        <div className="ft__note">
          Template Archive Vol.01
          <br />
          선택 · 찜은 브라우저 세션에만 저장됩니다
          <br />
          © 2026 TOOJIN
        </div>
      </footer>
    </>
  );
}
