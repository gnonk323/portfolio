"use client"

import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import NextProject from "@/components/NextProject";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "motion/react";

interface Tile {
  name: string;
  color: string;
  container: number | null;
}

function Tile({ tile, handleClick }: { tile: Tile, handleClick: (tile: Tile) => void }) {
  const colors = ["bg-[#11B6EC]", "bg-[#06D6A0]", "bg-[#FFD166]", "bg-[#EF476F]"];
  return (
    <motion.button
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      className={clsx(
        "h-full w-full rounded text-black font-semibold flex justify-center items-center",
        tile.color === "blue" ? colors[0] : tile.color === "green" ? colors[1] : tile.color === "yellow" ? colors[2] : colors[3]
      )}
      onClick={() => handleClick(tile)}
    >
      {tile.name}
    </motion.button>
  );
}

export default function Consensus() {
  const technologies: string[] = [
    "Node.js",
    "Typescript",
    "Next.js",
    "MongoDB",
    "Axios",
    "Vercel",
    "Git",
    "Jira",
    "Figma"
  ];

  const [tiles, setTiles] = useState<Tile[]>([
    { name: "spring", color: "green", container: null },
    { name: "summer", color: "yellow", container: 2 },
    { name: "fall", color: "red", container: null },
    { name: "winter", color: "blue", container: null}
  ]);

  const handleTileClick = (tile: Tile) => {
    if (tile.container === null) {
      const highestAvailableContainer = [1, 2, 3, 4].find(containerId => !tiles.some(t => t.container === containerId));
      if (highestAvailableContainer !== undefined) {
        setTiles(prevTiles =>
          prevTiles.map(t =>
            t.name === tile.name ? { ...t, container: highestAvailableContainer } : t
          )
        );
      }
    } else {
      setTiles(prevTiles =>
        prevTiles.map(t =>
          t.name === tile.name ? { ...t, container: null } : t
        )
      );
    }
  }

  return (
    <div className="min-h-screen">
      <div className="lg:ml-64 lg:py-10 lg:px-48 lg:mt-0 mt-24 p-6 min-h-screen">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="lg:text-5xl text-3xl font-semibold">Consensus</h1>
            <h2 className="lg:text-xl text-sm text-neutral-400">Rank 4 choices and see how you compare to the consensus.</h2>
          </div>
          <a
            href="https://consensus-game.vercel.app/"
            target="_blank"
            className="py-2 px-4 bg-[#0065CC] rounded-md hover:scale-105 transition-all text-white text-center"
          >
            Play Now!
          </a>
        </div>
        <div className="lg:flex hidden justify-center items-center gap-8 my-16">
          <div>
            <div className="grid grid-cols-2 gap-2">
              {tiles.map((tile, index) => 
                tile.container === null ? (
                  <div key={index} className="h-8 w-32">
                    <Tile tile={tile} handleClick={handleTileClick} />
                  </div>
                ) : (
                  <div key={index} className="h-8 w-32 rounded dark:bg-neutral-700 bg-neutral-300">
                  </div>
                )
              )}
            </div>
            <h3 className="dark:text-neutral-300 font-semibold text-center mt-4">Category: Seasons</h3>
          </div>
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4].map((containerId) => {
              const tileInContainer = tiles.find(tile => tile.container === containerId);
              return (
                <div key={containerId} className="h-8 w-56">
                  {tileInContainer ? (
                    <Tile tile={tileInContainer} handleClick={handleTileClick} />
                  ) : (
                    <div className="h-8 w-56 border-2 dark:border-neutral-700 rounded flex items-center justify-center dark:text-neutral-700 text-xs select-none">
                      {containerId}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <SectionHeader icon={<CodeBracketIcon />}>TECHNOLOGY STACK</SectionHeader>
        <div className="flex flex-wrap">
          {technologies.map((tech: string, index: number) => {
            return (
              <div key={index} className="border border-neutral-600 rounded-full dark:bg-neutral-700 bg-neutral-300 font-semibold px-4 py-2 mr-2 mb-2 lg:text-base text-sm">{tech}</div>
            )
          })}
        </div>
        <p className="lg:text-base text-sm mt-8">
          Consensus is a game where every day there are 4 words that fit into a common category. You rank them in order of your opinion on &quot;best&quot; to &quot;worst&quot; and once you submit your ranking, you can see how it comapres to the calculated average ranking, or the &quot;consensus&quot;.
        </p>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <p className="p-4 rounded-md border border-green-500 bg-green-500/15 mb-12 lg:text-base text-sm">
          This is a passion project with a few of my friends! We&apos;ve had a great time building it, and plan on continuing to add features and improve the game into the future.
        </p>
        <NextProject path="/kiosk" title="Hospital Kiosk" />
        <br className="lg:block hidden" />
        <Footer></Footer>
      </div>
    </div>
  );
}