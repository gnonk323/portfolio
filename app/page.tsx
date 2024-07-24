"use client"

import ProjectCard from "@/app/components/ProjectCard";
import Footer from "@/app/components/Footer";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main>
      <div className={"lg:ml-64 lg:p-10 p-6 min-h-screen"}>
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
        <h2 className={"text-lg text-[#007FFF] font-semibold mb-4"}>MY PROJECTS</h2>
        <div className={"flex lg:flex-row flex-col lg:justify-between gap-10 mb-12"}>
          <ProjectCard title={"Hospital Kiosk"}
                       description={"Kiosk Web App for Brigham and Women's Hospital in Boston, MA. Capable of hospital pathfinding and so much more!"}
                       image={"/bwhMOCK.png"} path={"/bwh"}/>
          <ProjectCard title={"Data Collection Tool"}
                       description={"An app for collecting various types of data in a team, designed for WPI's own IQP study abroad program."}
                       image={"/mqpMOCK.png"} path={"/bwh"}/>
          <ProjectCard title={"'Endless' TicTacToe"}
                       description={"Each player is only allowed have 3 X's or O's on the board at once, making it impossible for the game to end in a tie!"}
                       image={"/tictactoeMOCK.png"} path={"/bwh"}/>
        </div>
        <Footer/>
      </div>
    </main>
  );
}
