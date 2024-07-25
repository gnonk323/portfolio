"use client"

import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { TypeAnimation } from "react-type-animation";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main>
      <div className={"lg:ml-64 lg:p-10 lg:mt-0 mt-24 p-6 min-h-screen"}>
        <div>
          <TypeAnimation
            sequence={["Hi, I'm Gustave Montana!"]}
            speed={30}
            repeat={1}
            className={"lg:text-7xl text-xl font-mono"}
          />
        </div>
        <br />
        <div>
          <p className="text-xl">
            I&apos;m a Senior studying Computer Sciecne and Data Science at <a href={"https://www.wpi.edu/academics/departments/computer-science"} target={"_blank"} className={"underline decoration-dotted lg:hover:text-neutral-400 transition-colors cursor-pointer"}>Worcester Polytechnic Institute</a>, with a passion for UI/UX design and front-end development.
          </p>
        </div>
        <hr className={"h-px my-6 dark:bg-neutral-700 bg-neutral-300 border-0"}/>
        <div className="flex items-center mb-4 gap-2">
          <ComputerDesktopIcon className="text-[#007FFF] h-5 w-5" />
          <h2 className={"text-lg text-[#007FFF] font-semibold"}>MY PROJECTS</h2>
        </div>
        <div className={"flex lg:flex-row flex-col lg:justify-between gap-10 mb-12"}>
          <ProjectCard title={"Hospital Kiosk"}
                       description={"Kiosk Web App for Brigham and Women's Hospital in Boston, MA. Capable of hospital pathfinding and so much more!"}
                       image={"/images/bwhMOCK.png"} path={"/kiosk"}/>
          <ProjectCard title={"Data Collection Tool"}
                       description={"An app for collecting various types of data in a team, designed for WPI's own IQP study abroad program."}
                       image={"/images/mqpMOCK.png"} path={"/dct"}/>
          <ProjectCard title={"'Endless' TicTacToe"}
                       description={"Each player is only allowed have 3 X's or O's on the board at once, making it impossible for the game to end in a tie!"}
                       image={"/images/tictactoeMOCK.png"} path={"/tictactoe"}/>
        </div>
        <Footer/>
      </div>
    </main>
  );
}
