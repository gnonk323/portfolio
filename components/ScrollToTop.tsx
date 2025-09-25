"use client";

import React, { useEffect, useState } from "react";

export default function ScrollToTop(): JSX.Element {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } bg-primary text-white`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M3.707 10.707a1 1 0 01-1.414-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414L11 4.414V19a1 1 0 11-2 0V4.414L3.707 10.707z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
