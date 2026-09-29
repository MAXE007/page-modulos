import { useEffect, useRef, useState } from "react";
import "./RevealText.css";

export default function RevealText({
  text = "Bienvenidos a",
  words = ["FAST", "FAST MODULAR"],
  interval = 4200,
}) {
  const [index, setIndex] = useState(0);
  const slotRef = useRef(null);
  const measureRef = useRef(null);

  useEffect(() => {
    if (words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words, interval]);

  useEffect(() => {
    if (!measureRef.current || !slotRef.current) return;

    const width = measureRef.current.offsetWidth;
    const horizontalPadding = 44;
    slotRef.current.style.width = `${width + horizontalPadding}px`;
  }, [index, words]);

  return (
    <h1 className="ltf">
      <span className="ltf__static">{text}</span>

      <span className="ltf__slot" ref={slotRef}>
        <span
          key={index}
          className="ltf__word notranslate"
          translate="no"
        >
          {words[index]}
        </span>
      </span>

      <span
        className="ltf__measure notranslate"
        ref={measureRef}
        translate="no"
      >
        {words[index]}
      </span>
    </h1>
  );
}
