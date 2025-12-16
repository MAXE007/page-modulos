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

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;   // 0..1
    const py = y / rect.height;  // 0..1
    const mx = (px - 0.5) * 2;   // -1..1
    const my = (py - 0.5) * 2;   // -1..1

    const rotateY = mx * 7;     // deg
    const rotateX = -my * 5;     // deg

    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
    el.style.setProperty("--mx", `${mx}`);
    el.style.setProperty("--my", `${my}`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--mx", `0`);
    el.style.setProperty("--my", `0`);
  };

  return (
    <MouseCtx.Provider value={{}}>
      <div
        ref={ref}
        className={`card3d-body ${className}`}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </div>
    </MouseCtx.Provider>
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
