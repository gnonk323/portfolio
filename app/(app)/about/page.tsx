"use client"

import { ChatBubbleLeftIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function About() {
  const [clickCount, setClickCount] = useState(0);
  const [imageSrc, setImageSrc] = useState("/images/gustave-montana.jpg");
  const [lastClickTime, setLastClickTime] = useState<number | null>(null);

  const handleImageClick = () => {
    const now = Date.now();
    setLastClickTime(now);

    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setImageSrc("/images/gustave-montana-stache.jpg");
      }
      return newCount;
    });
  };

  useEffect(() => {
    if (clickCount > 0 && clickCount < 5) {
      const timer = setTimeout(() => {
        setClickCount(0);
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer on unmount or when clickCount changes
    }
  }, [clickCount]);

  return (
    <main className="min-h-screen">
      <div className={"lg:ml-64 lg:pt-10 lg:px-24 lg:mt-0 p-6 mt-24 min-h-screen"}>
        <div className="flex items-center">
          <div>
            <SectionHeader icon={<ChatBubbleLeftIcon />}>ABOUT ME</SectionHeader>
            <p className={"lg:text-2xl"}>
              I am recent Computer Science graduate from Worcester Polytechnic Institute in the Spring of 2025, and
              looking to start my career in software engineering.
              Throughout my various project experiences, I&apos;ve found a passion for front-end development and UI/UX
              design.
            </p>
          </div>
          <motion.img 
            src={imageSrc} 
            alt="headshot"
            className={"rounded-full lg:size-48 ml-12 border-solid border-2 border-blue-500 shadow-md hidden lg:block"}
            whileTap={{ scale: 0.95 }}
            onClick={handleImageClick}
          />
        </div>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <div className={"flex lg:flex-row flex-col lg:gap-10"}>
          <p className={"lg:text-base text-sm lg:w-1/2"}>
            I&apos;ve loved computers ever since I can remember, and I started programming in my freshman year of high
            school, after building my first PC. When I found out
            that I could make a career out of it, I never looked back. I am always looking for new opportunities to
            learn and grow as a developer.
          </p>
          <br />
          <p className={"lg:text-base text-sm lg:w-1/2"}>
            I find that front-end development is located at the perfect place, at the intersection of creativity and logic,
            and I love the opportunity to create something
            new and unique while simultaneously solving problems and thinking logically.
          </p>
        </div>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <div className="flex justify-between h-full lg:mb-12">
          <img src="/images/BoyntonHall.jpg" alt="WPI Campus" className="w-1/2 object-cover rounded-md mr-16 hidden lg:block" />
          <div className="flex flex-col lg:w-1/2 lg:justify-between lg:gap-0 gap-5">
            <SectionHeader icon={<AcademicCapIcon />}>EDUCATION</SectionHeader>
            <div>
              <h3 className="lg:text-3xl text-2xl font-semibold mb-4">Worcester Polytechnic Institute</h3>
              <p className="lg:text-2xl text-xl"><span className="lg:text-lg text-base text-[#007FFF] font-black mr-3">MAJOR</span>Computer Science</p>
              <p className="lg:text-2xl text-xl"><span className="lg:text-lg text-base text-[#007FFF] font-black mr-3">MINOR</span>Data Science</p>
            </div>
            <p className="italic text-neutral-400">Graduated May 2025</p>
          </div>
        </div>
      </div>
    </main>
  );
}