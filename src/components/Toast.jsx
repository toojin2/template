import { useEffect } from "react";

export default function Toast({ message, onDone, duration = 2600 }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [message, onDone, duration]);

  if (!message) return null;

  return (
    <div className="toast" role="status">
      <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2.5 8.5l3.5 3.5 7-8" />
      </svg>
      {message}
    </div>
  );
}
