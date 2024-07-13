import ProjectCard from "@/app/components/ProjectCard";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <div className={"lg:ml-64 lg:p-10 p-6 min-h-screen"}>
        <div>
          <p className={"lg:text-3xl text-xl font-semibold"}>
            My name is <span className={"text-[#007FFF] font-extrabold lg:text-4xl text-2xl"}>Gustave Montana</span> and I&apos;m a
            software engineer from Madison, CT. I am a Senior at <a href={"https://www.wpi.edu/academics/departments/computer-science"} target={"_blank"} className={"underline decoration-dotted cursor-pointer"}>Worcester Polytechnic Institute</a> studying
            Computer Science with a minor in Data Science. I have a passion
            for UI/UX design and front-end development, with plenty of experience in full-stack development as well!
            I&apos;m currently interning at InvoiceCloud for the Summer of &apos;24 as a Software Development Intern.
          </p>
        </div>
        <hr className={"h-px mt-12 mb-6 dark:bg-neutral-700 bg-neutral-300 border-0"}/>
        <h2 className={"text-lg text-[#007FFF] font-semibold mb-4"}>MY PROJECTS</h2>
        <div className={"flex lg:flex-row flex-col lg:gap-6 gap-10 mb-12"}>
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
