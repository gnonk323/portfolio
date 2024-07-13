export default function Navbar() {
  return (
    <div>
      <div
        className={"lg:hidden flex flex-row justify-between w-screen top-0 p-6 border-b dark:border-neutral-700 border-neutral-300"}>
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
                <a href={"/gustave-montana-resume.pdf"} target={"_blank"} className={"text-xl font-bold"}>Resume</a>
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
                <a href="mailto:gmmontana@wpi.edu">Email</a>
              </li>
              <li className={"mb-1"}>
                <a href="https://www.linkedin.com/in/gustave-montana/">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/gnonk323">GitHub</a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  );
}