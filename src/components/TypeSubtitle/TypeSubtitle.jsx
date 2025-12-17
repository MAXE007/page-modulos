import { useEffect, useState } from "react";
import "./TypeSubtitle.css";

export default function TypeSubtitle({
  text,
  speed = 26,
  delay = 900,
}) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;
    setOut("");

    const startId = setTimeout(() => {
      const id = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, speed);

      // cleanup del interval interno
      return () => clearInterval(id);
    }, delay);

    return () => clearTimeout(startId);
  }, [text, speed, delay]);

  return <p className="ts">{out}</p>;
}
