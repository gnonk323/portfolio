import ProjectCard from "./Components/ProjectCard";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <div className={"lg:hidden flex flex-row justify-between w-screen top-0 p-6 border-b dark:border-neutral-700 border-neutral-300"}>
          <a href={"/"}>
            <h1 className={"text-xl font-extrabold text-[#007FFF]"}>Gustave<br/>Montana</h1>
          </a>
          <div className={"flex items-center gap-4"}>
            <a href="/about" className={"text-sm font-semibold"}>About Me</a>
            <a href="/resume" className={"text-sm font-semibold"}>Resume</a>
          </div>
        </div>
        <aside
          className={"lg:block hidden w-64 h-screen p-10 border-r dark:border-neutral-700 border-neutral-300 fixed"}>
        <nav>
            <a href={"/"}>
              <h1 className={"text-6xl font-black font-serif mb-6 text-[#007FFF]"}>GM</h1>
            </a>
            <div>
              <ul>
                <li className={"mb-2"}>
                  <a href={"/about"} className={"text-xl font-bold"}>About Me</a>
                </li>
                <li>
                  <a href={"/resume"} className={"text-xl font-bold"}>Resume</a>
                </li>
              </ul>
            </div>
            <hr className={"h-px my-6 dark:bg-neutral-700 bg-neutral-300 border-0"}/>
            <div>
              <h2 className={"text-sm font-semibold text-[#007FFF] mb-2"}>WORK</h2>
              <ul>
                <li>
                  <a href="https://invoicecloud.net/" target={"_blank"}>InvoiceCloud</a>
                </li>
              </ul>
            </div>
            <hr className={"h-px my-6 dark:bg-neutral-700 bg-neutral-300 border-0"}/>
            <div>
              <h2 className={"text-sm font-semibold text-[#007FFF] mb-2"}>PROJECTS</h2>
              <ul>
                <li className={"mb-1"}>
                  <a href="/bwh-app">Hospital Kiosk</a>
                </li>
                <li className={"mb-1"}>
                  <a href={"/dct"}>Data Collection Tool</a>
                </li>
                <li>
                  <a href="/tictactoe">No-Tie TicTacToe</a>
                </li>
              </ul>
            </div>
            <hr className={"h-px my-6 dark:bg-neutral-700 bg-neutral-300 border-0"}/>
            <div>
              <h2 className={"text-sm font-semibold text-[#007FFF] mb-2"}>CONTACT ME</h2>
              <ul>
                <li className={"mb-1"}>
                  <a href="">Email</a>
                </li>
                <li className={"mb-1"}>
                  <a href="">LinkedIn</a>
                </li>
                <li>
                  <a href="">GitHub</a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
      <div className={"lg:ml-64 mt- p-10 min-h-screen"}>
        <div>
          <p className={"text-3xl font-semibold"}>
            My name is <span className={"text-[#007FFF] font-extrabold text-4xl"}>Gustave Montana</span> and I&apos;m a
            software engineer from Madison, CT. I am a Senior at
            Worcester Polytechnic Institute studying Computer Science with a minor in Data Science. I have a passion
            for UI/UX design and front-end development, with plenty of experience in full-stack development as well.
            I&apos;m currently interning at InvoiceCloud for the Summer of &apos;24 as a Software Development Intern.
          </p>
        </div>
        <hr className={"h-px mt-12 mb-6 dark:bg-neutral-700 bg-neutral-300 border-0"}/>
        <h2 className={"text-lg text-[#007FFF] font-semibold mb-4"}>MY PROJECTS</h2>
        <div className={"flex lg:flex-row flex-col gap-6 mb-12"}>
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
