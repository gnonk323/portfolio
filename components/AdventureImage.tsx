"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export interface ImageTile {
  src: string;
  alt: string;
  location: string;
  locationHref: string;
  caption: string;
}

function useCanHover(): boolean {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const query = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateHover = (e: MediaQueryListEvent) => {
      setCanHover(e.matches);
    };

    setCanHover(query.matches);
    query.addEventListener("change", updateHover);

    return () => {
      query.removeEventListener("change", updateHover);
    };
  }, []);

  return canHover;
}

export default function AdventureImage({ src, alt, location, locationHref, caption }: ImageTile) {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const canHover = useCanHover();

  const maxAngle = 5;

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const distances = {
      top: y,
      bottom: rect.height - y,
      left: x,
      right: rect.width - x,
    };

    const closestSide = Object.entries(distances).reduce((a, b) => (a[1] < b[1] ? a : b))[0];

    let rotateDirection = 1;
    let distanceFromCenter = 0;

    if (closestSide === "top" || closestSide === "bottom") {
      const offset = x - centerX;
      distanceFromCenter = Math.abs(offset) / centerX;
      const isRight = offset > 0;
      rotateDirection =
        (closestSide === "top" && isRight) || (closestSide === "bottom" && !isRight) ? 1 : -1;
    } else {
      const offset = y - centerY;
      distanceFromCenter = Math.abs(offset) / centerY;
      const isBelow = offset > 0;
      rotateDirection =
        (closestSide === "right" && isBelow) || (closestSide === "left" && !isBelow) ? 1 : -1;
    }

    const finalRotation = rotateDirection * distanceFromCenter * maxAngle;
    setRotation(finalRotation);
    setIsHovering(true);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative overflow-hidden rounded-lg"
      whileHover={
        canHover
          ? {
              scale: 1.05,
              rotate: rotation,
              boxShadow: "0 0 25px 10px rgba(0, 0, 0, 0.4)",
              zIndex: 10,
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
      onMouseEnter={canHover ? handleMouseEnter : undefined}
      onMouseLeave={canHover ? () => setIsHovering(false) : undefined}
    >
      <img src={src} alt={alt} />
      <AnimatePresence>
        {isHovering && canHover && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full bottom-0 bg-gradient-to-t from-black/75 to-transparent text-white leading-3 p-4"
          >
            <p>
              📍{" "}
              <a
                href={locationHref}
                target="_blank"
                className="font-bold cursor-pointer hover:underline"
              >
                {location}
              </a>
            </p>
            <p className="text-xs mt-2">{caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}