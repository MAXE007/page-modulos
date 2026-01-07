import React, { createContext, useRef } from "react";
import "./3d-card.css";

const MouseCtx = createContext({});

export function CardContainer({ className = "", children }) {
  return <div className={`card3d-container ${className}`}>{children}</div>;
}

export function CardBody({ className = "", children }) {
  const ref = useRef(null);
  const isDown = useRef(false);
  const start = useRef({ x: 0, y: 0 });
  const pointerType = useRef("mouse");

  const setTiltFromPoint = (clientX, clientY) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;
    const mx = (px - 0.5) * 2;
    const my = (py - 0.5) * 2;

    const rotateY = mx * 9;  // subí si querés más
    const rotateX = -my * 7;

    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
    el.style.setProperty("--mx", `${mx}`);
    el.style.setProperty("--my", `${my}`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--mx", `0`);
    el.style.setProperty("--my", `0`);
  };

  const onPointerDown = (e) => {
    // Si tocaste un link/botón, NO activamos tilt ni bloqueamos nada
    if (e.target.closest("a,button")) return;

    pointerType.current = e.pointerType; // "mouse" | "touch" | "pen"
    isDown.current = true;
    start.current = { x: e.clientX, y: e.clientY };

    // Solo capturamos en touch para que el movimiento sea estable
    if (e.pointerType === "touch") {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    }
  };

  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el) return;

    // Mouse: tilt siempre con hover/move
    if (e.pointerType === "mouse") {
      setTiltFromPoint(e.clientX, e.clientY);
      return;
    }

    // Touch: tilt SOLO cuando el dedo está presionado (evita cosas raras)
    if (!isDown.current) return;

    const dx = Math.abs(e.clientX - start.current.x);
    const dy = Math.abs(e.clientY - start.current.y);

    // Si es un gesto vertical fuerte, dejá que scrollee y no fuerces tilt
    if (dy > dx && dy > 12) return;

    // Si es movimiento horizontal/leve, aplicamos tilt
    setTiltFromPoint(e.clientX, e.clientY);
  };

  const onPointerUp = () => {
    isDown.current = false;
    reset();
  };

  const onPointerLeave = () => {
    isDown.current = false;
    reset();
  };

  return (
    <MouseCtx.Provider value={{}}>
      <div
        ref={ref}
        className={`card3d-body ${className}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerLeave}
      >
        {children}
      </div>
    </MouseCtx.Provider>
  );
}

export function CardItem({
  as: Tag = "div",
  translateZ = 0,
  className = "",
  children,
  ...props
}) {
  return (
    <Tag
      className={`card3d-item ${className}`}
      style={{
        transform: `translate3d(calc(var(--mx) * 6px), calc(var(--my) * 4px), ${translateZ}px)`,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
