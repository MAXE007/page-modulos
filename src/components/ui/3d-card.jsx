import React, { createContext, useRef } from "react";
import "./3d-card.css";

const MouseCtx = createContext({});

export function CardContainer({ className = "", children }) {
  return (
    <div className={`card3d-container ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ className = "", children }) {
  const ref = useRef(null);
  const raf = useRef(0);

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

    const rotateY = mx * 7;
    const rotateX = -my * 5;

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

  const onPointerMove = (e) => {
    scheduleMove(e.clientX, e.clientY);
  };

  const onPointerEnter = (e) => {
    // mouse hover: primera actualización inmediata
    scheduleMove(e.clientX, e.clientY);
  };

  const onPointerLeave = () => {
    resetVars();
  };

  const onPointerDown = (e) => {
    // touch: capturamos para seguir el dedo dentro de la card
    e.currentTarget.setPointerCapture?.(e.pointerId);
    scheduleMove(e.clientX, e.clientY);
  };

  const onPointerUp = (e) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    resetVars();
  };

  const onPointerCancel = (e) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId);
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


/**
 * CardItem: “sale” en Z y puede usar el parallax del mouse.
 * translateZ: number (px) recomendado 10..120
 */
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
