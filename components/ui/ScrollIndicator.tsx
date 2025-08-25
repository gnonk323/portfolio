"use client"

import { motion, MotionValue } from "motion/react"

export default function ScrollIndicator({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleX: scrollProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        backgroundColor: "#007FFF",
      }}
      className="mt-24 ml-0 h-1 lg:mt-0 lg:ml-64 lg:h-2"
    />
  )
}