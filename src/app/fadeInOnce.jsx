// components/FadeInOnce.jsx
"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function FadeInOnce({ children, className = "" }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInView) setShow(true);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </div>
  );
}
