import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORY_MAP } from "../data/categories.js";

const STAGE_W = 1440;

/** 실제 템플릿 컴포넌트를 1440px 무대에 그린 뒤 카드 폭에 맞춰 축소한다. */
function LivePreview({ Component }) {
  const frameRef = useRef(null);
  const [scale, setScale] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / STAGE_W);
    });
    ro.observe(el);

    // 화면에 들어올 때만 렌더 — 21개를 한 번에 그리지 않는다.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);

    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div ref={frameRef} className="card__frame">
      {!visible && <div className="card__skel" />}
      {visible && scale > 0 && (
        <div className="card__stage" style={{ transform: `scale(${scale})` }} aria-hidden="true">
          <Component />
        </div>
      )}
      <div className="card__veil">
        <span className="card__cta">
          미리보기
          <svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M2 8h11M9 4l4 4-4 4" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default function TemplateCard({ template, index, saved, onToggleSave, inUse, delay = 0 }) {
  const cat = CATEGORY_MAP[template.category];

  return (
    <article className="card" style={{ animationDelay: `${delay}ms` }}>
      <Link to={`/preview/${template.id}`} aria-label={`${template.name} 미리보기`}>
        <LivePreview Component={template.Component} />
      </Link>

      <span className="card__idx">
        {String(index + 1).padStart(2, "0")} / {cat?.latin ?? ""}
      </span>

      <button
        className={`card__save${saved ? " card__save--on" : ""}`}
        onClick={() => onToggleSave(template.id)}
        aria-pressed={saved}
        aria-label={saved ? "찜 해제" : "찜하기"}
        title={saved ? "찜 해제" : "찜하기"}
      >
        <svg viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.2">
          <path d="M6 3h12v18l-6-5-6 5z" />
        </svg>
      </button>

      {inUse && <span className="card__used">사용 중</span>}

      <div className="card__body">
        <div>
          <h3 className="card__name">
            {template.name}
            <span className="card__latin">{template.latin}</span>
          </h3>
        </div>
        <div className="card__tags">
          {template.tags.map((t) => (
            <span key={t} className="card__tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
