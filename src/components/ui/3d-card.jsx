import React, { createContext, useRef } from "react";
import "./3d-card.css";

const MouseCtx = createContext({});

export function CardContainer({ className = "", children }) {
  return <div className={`card3d-container ${className}`}>{children}</div>;
}

export function CardBody({ className = "", children }) {
  const ref = useRef(null);
  const raf = useRef(0);
  const isTouching = useRef(false);

  const setVarsFromPoint = (clientX, clientY) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;
    const mx = (px - 0.5) * 2;
    const my = (py - 0.5) * 2;

    const rotateY = mx * 13;
    const rotateX = -my * 9;

    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
    el.style.setProperty("--mx", `${mx}`);
    el.style.setProperty("--my", `${my}`);
  };

  const resetVars = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--mx", `0`);
    el.style.setProperty("--my", `0`);
  };

  const scheduleMove = (clientX, clientY) => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => setVarsFromPoint(clientX, clientY));
  };

  const onPointerEnter = (e) => {
    // desktop hover
    if (e.pointerType === "mouse") scheduleMove(e.clientX, e.clientY);
  };

  const onPointerMove = (e) => {
    // desktop: siempre
    if (e.pointerType === "mouse") {
      scheduleMove(e.clientX, e.clientY);
      return;
    }

    // touch: solo mientras estamos tocando
    if (e.pointerType === "touch" && isTouching.current) {
      scheduleMove(e.clientX, e.clientY);
    }
  };

  const onPointerLeave = () => {
    isTouching.current = false;
    resetVars();
  };

  const onPointerDown = (e) => {
    isTouching.current = e.pointerType === "touch";

    // ✅ SIEMPRE arrancamos el efecto (aunque el dedo esté sobre el link)
    scheduleMove(e.clientX, e.clientY);

    // ✅ Pero SOLO capturamos si NO tocaste un elemento interactivo
    const isInteractive = !!e.target.closest("a,button");
    if (e.pointerType === "touch" && !isInteractive) {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    }
  };

  const onPointerUp = (e) => {
    isTouching.current = false;
    if (e.pointerType === "touch") {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    }
    resetVars();
  };

  const onPointerCancel = (e) => {
    isTouching.current = false;
    if (e.pointerType === "touch") {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    }
    resetVars();
  };

  return (
    <div
      ref={ref}
      className={`card3d-body ${className}`}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      {children}
    </div>
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
