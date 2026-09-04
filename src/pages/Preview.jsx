import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Toast from "../components/Toast.jsx";
import { CATEGORY_MAP } from "../data/categories.js";
import { TEMPLATES, TEMPLATE_MAP } from "../data/templates.js";
import { useRecent, useSaved, useSelected } from "../hooks/useSession.js";

const DEVICES = [
  { id: "desktop", label: "데스크탑" },
  { id: "tablet", label: "태블릿" },
  { id: "mobile", label: "모바일" },
];

export default function Preview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const template = TEMPLATE_MAP[id];

  const [device, setDevice] = useState("desktop");
  const [toast, setToast] = useState("");

  const { toggle, isSaved } = useSaved();
  const { selected, setSelected } = useSelected();
  const { push } = useRecent();

  useEffect(() => {
    if (template) push(template.id);
  }, [template, push]);

  useEffect(() => {
    setDevice("desktop");
    window.scrollTo(0, 0);
  }, [id]);

  const { prev, next } = useMemo(() => {
    const i = TEMPLATES.findIndex((t) => t.id === id);
    return {
      prev: TEMPLATES[(i - 1 + TEMPLATES.length) % TEMPLATES.length],
      next: TEMPLATES[(i + 1) % TEMPLATES.length],
    };
  }, [id]);

  if (!template) {
    return (
      <div className="empty" style={{ paddingTop: "6rem" }}>
        <h3>없는 템플릿입니다</h3>
        <p>주소를 다시 확인해 주세요.</p>
        <Link to="/" className="btn">
          아카이브로
        </Link>
      </div>
    );
  }

  const { Component } = template;
  const cat = CATEGORY_MAP[template.category];
  const inUse = selected === template.id;

  const apply = () => {
    if (inUse) {
      setSelected(null);
      setToast("선택을 해제했습니다");
    } else {
      setSelected(template.id);
      setToast(`${template.name} 템플릿을 적용했습니다`);
    }
  };

  return (
    <div className="pv">
      <div className="pv__bar">
        <Link to={`/?c=${template.category}`} className="pv__back">
          <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M14 8H3M7 4L3 8l4 4" />
          </svg>
          목록
        </Link>

        <span className="pv__id">
          <b>{template.name}</b>
          <span>
            {cat.latin} — {template.layout}
          </span>
        </span>

        <span className="pv__spacer" />

        <div className="pv__devices" role="group" aria-label="화면 크기">
          {DEVICES.map((d) => (
            <button key={d.id} aria-pressed={device === d.id} onClick={() => setDevice(d.id)}>
              {d.label}
            </button>
          ))}
        </div>

        <button className="btn btn--ghost" onClick={() => navigate(`/preview/${prev.id}`)} title={prev.name}>
          이전
        </button>
        <button className="btn btn--ghost" onClick={() => navigate(`/preview/${next.id}`)} title={next.name}>
          다음
        </button>

        <button className="btn" onClick={() => toggle(template.id)}>
          {isSaved(template.id) ? "찜 해제" : "찜하기"}
        </button>

        <button className="btn btn--solid" onClick={apply}>
          {inUse ? "사용 중 · 해제" : "이 템플릿으로 시작"}
        </button>
      </div>

      <div className="pv__stage">
        <div className={`pv__viewport pv__viewport--${device}`}>
          <Component />
        </div>
      </div>

      <Toast message={toast} onDone={() => setToast("")} />
    </div>
  );
}
