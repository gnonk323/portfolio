import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div
        className={"z-[49] lg:hidden h-24 flex flex-row justify-between w-screen fixed top-0 py-5 px-6 border-b dark:bg-neutral-900 bg-white dark:border-neutral-700 border-neutral-300"}>
        <a href={"/"}>
          <h1 className={"text-xl font-extrabold text-[#007FFF]"}>Gustave<br/>Montana</h1>
        </a>
        <div className={"flex items-center gap-4"}>
          <a href="/about" className={"text-sm font-semibold"}>About Me</a>
          <a href="/gustave-montana-resume.pdf" target="_blank" className={"text-sm font-semibold"}>Resume</a>
          <DropdownMenu>
            <DropdownMenuTrigger><Bars3Icon className="h-5 w-5" /></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Work</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={"https://invoicecloud.net/"} target="_blank">
                <DropdownMenuItem>InvoiceCloud</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Projects</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={"/kiosk"}>
                <DropdownMenuItem>Hospital Kiosk</DropdownMenuItem>
              </Link>
              <Link href={"/dct"}>
                <DropdownMenuItem>Data Collection Tool</DropdownMenuItem>
              </Link>
              <Link href={"/tictactoe"}>
                <DropdownMenuItem>&apos;Endless&apos; TicTacToe</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Contact Me</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={"mailto:gmmontana@wpi.com"} target="_blank">
                <DropdownMenuItem>Email</DropdownMenuItem>
              </Link>
              <Link href={"https://www.linkedin.com/in/gustave-montana/"} target="_blank">
                <DropdownMenuItem>LinkedIn</DropdownMenuItem>
              </Link>
              <Link href={"https://github.com/gnonk323"} target="_blank">
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <aside
        className={"lg:block hidden w-64 h-screen p-10 border-r dark:border-neutral-700 border-neutral-300 fixed"}>
        <nav>
          <a href="/" className={"text-6xl font-black font-serif text-[#007FFF] hover:text-[#0065CC] cursor-pointer transition-colors"}>GM</a>
          <div className="mt-6">
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
                <a href="/kiosk">Hospital Kiosk</a>
              </li>
              <li className={"mb-1"}>
                <a href={"/dct"}>Data Collection Tool</a>
              </li>
              <li>
                <a href="/tictactoe">&apos;Endless&apos; TicTacToe</a>
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
                <a href="https://www.linkedin.com/in/gustave-montana/" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/gnonk323" target="_blank">GitHub</a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  );
}