import { useCallback, useEffect, useState } from "react";

/**
 * 브라우저 세션(sessionStorage)에만 기록한다.
 * - 로그인/서버 저장 없음. 탭을 닫으면 사라진다.
 * - 같은 탭 안의 모든 컴포넌트가 즉시 동기화되도록 커스텀 이벤트를 쓴다.
 */
const PREFIX = "toojin.";
const EVENT = "toojin:session";

const read = (key, fallback) => {
  try {
    const raw = sessionStorage.getItem(PREFIX + key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
};

const write = (key, value) => {
  try {
    sessionStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* 저장 공간이 없거나 차단된 환경 — 화면 상태만 유지한다 */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: { key } }));
};

export function useSessionValue(key, fallback) {
  const [value, setValue] = useState(() => read(key, fallback));

  useEffect(() => {
    const sync = (e) => {
      if (!e.detail || e.detail.key === key) setValue(read(key, fallback));
    };
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, [key, fallback]);

  const update = useCallback(
    (next) => {
      const resolved = typeof next === "function" ? next(read(key, fallback)) : next;
      write(key, resolved);
      setValue(resolved);
    },
    [key, fallback]
  );

  return [value, update];
}

const EMPTY = [];

/** 찜한 템플릿 id 목록 */
export function useSaved() {
  const [saved, setSaved] = useSessionValue("saved", EMPTY);
  const toggle = useCallback(
    (id) => setSaved((list) => (list.includes(id) ? list.filter((x) => x !== id) : [id, ...list])),
    [setSaved]
  );
  return { saved, toggle, isSaved: (id) => saved.includes(id) };
}

/** 현재 적용한 템플릿 id */
export function useSelected() {
  const [selected, setSelected] = useSessionValue("selected", null);
  return { selected, setSelected, clear: () => setSelected(null) };
}

/** 최근 본 템플릿 (최대 8개) */
export function useRecent() {
  const [recent, setRecent] = useSessionValue("recent", EMPTY);
  const push = useCallback(
    (id) => setRecent((list) => [id, ...list.filter((x) => x !== id)].slice(0, 8)),
    [setRecent]
  );
  return { recent, push };
}

export function resetSession() {
  try {
    Object.keys(sessionStorage)
      .filter((k) => k.startsWith(PREFIX))
      .forEach((k) => sessionStorage.removeItem(k));
  } catch {
    /* noop */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: null }));
}
