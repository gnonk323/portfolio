"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bars3Icon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

function NavbarItem({ path, newTab, children }: { path: string, newTab?: boolean, children: React.ReactNode }) {
  const pathname = usePathname()
  const isActive = pathname === path

  return (
    <li className="transition-all hover:translate-x-1 dark:hover:text-neutral-400 hover:text-neutral-500">
      <a
        href={path}
        target={newTab ? "_blank" : "_self"}
        className="flex items-center gap-2 py-0.5"
      >
        {children}
        {isActive && <div className="p-1 rounded-full bg-primary" />}
      </a>
    </li>
  )
}

function NavbarGroup({ children }: { children: React.ReactNode }) {
  return (
    <ul>
      {children}
    </ul>
  )
}

function NavbarTitle({ title }: { title: string }) {
  return <h2 className={"text-sm font-semibold text-primary mb-2"}>{title}</h2>
}

function NavbarSeparator() {
  return <hr className={"h-px my-6 dark:bg-neutral-700 bg-neutral-300 border-0"}/>
}

export default function Navbar() {
  return (
    <>
      <div
        className={"z-[49] lg:hidden h-24 flex flex-row justify-between w-screen fixed top-0 py-5 px-6 border-b dark:bg-neutral-900 bg-white dark:border-neutral-700 border-neutral-300"}>
        <a href={"/"}>
          <h1 className={"text-xl font-extrabold text-primary"}>Gustave<br/>Montana</h1>
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
              <Link href={"/consensus"}>
                <DropdownMenuItem>Consensus</DropdownMenuItem>
              </Link>
              <Link href={"/kiosk"}>
                <DropdownMenuItem>Hospital Kiosk</DropdownMenuItem>
              </Link>
              <Link href={"/dct"}>
                <DropdownMenuItem>Data Collection Tool</DropdownMenuItem>
              </Link>
              <Link href={"/tictactoe"}>
                <DropdownMenuItem>&apos;Endless&apos; TicTacToe</DropdownMenuItem>
              </Link>
              <Link href={"https://random-monkeys.vercel.app/"} target="_blank">
                <DropdownMenuItem>Random Monkeys</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Extras</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={"/adventures"}>
                <DropdownMenuItem>Adventures</DropdownMenuItem>
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
        className={"lg:block hidden w-64 h-screen px-10 py-8 border-r dark:border-neutral-700 border-neutral-300 fixed overflow-y-auto"}>
        <nav>
          <div className="flex justify-between items-center">
            <a href="/" className={"text-6xl font-black font-serif text-primary hover:text-[#0065CC] cursor-pointer transition-colors"}>GM</a>
            <ThemeToggle />
          </div>
          <div className="mt-6">
            <ul className="space-y-2">
              <li>
                <a href={"/about"} className={"text-xl font-bold dark:hover:text-neutral-400 hover:text-neutral-500 transition-colors"}>About Me</a>
              </li>
              <li>
                <a href={"/gustave-montana-resume.pdf"} target={"_blank"} className={"text-xl font-bold dark:hover:text-neutral-400 hover:text-neutral-500 transition-colors"}>Resume</a>
              </li>
            </ul>
          </div>
          <NavbarSeparator />
          <div>
            <NavbarTitle title="WORK" />
            <NavbarGroup>
              <NavbarItem path="https://invoicecloud.net/" newTab>
                InvoiceCloud
              </NavbarItem>
            </NavbarGroup>
          </div>
          <NavbarSeparator />
          <div>
            <NavbarTitle title="PROJECTS" />
            <NavbarGroup>
              <NavbarItem path="/consensus">
                Consensus
              </NavbarItem>
              <NavbarItem path="/kiosk">
                Hospital Kiosk
              </NavbarItem>
              <NavbarItem path="/dct">
                Data Collection Tool
              </NavbarItem>
              <NavbarItem path="/tictactoe">
                &apos;Endless&apos; TicTacToe
              </NavbarItem>
              <NavbarItem path="https://random-monkeys.vercel.app/" newTab>
                Random Monkeys
              </NavbarItem>
            </NavbarGroup>
          </div>
          <NavbarSeparator />
          <div>
            <NavbarTitle title="EXTRAS" />
            <NavbarGroup>
              <NavbarItem path="/adventures">
                Adventures
              </NavbarItem>
              <NavbarItem path="/under-the-hood">
                Under the Hood
              </NavbarItem>
            </NavbarGroup>
          </div>
          <NavbarSeparator />
          <div>
            <NavbarTitle title="CONTACT ME" />
            <NavbarGroup>
              <NavbarItem path="mailto:gmt015@gmail.com">
                <EnvelopeIcon className="h-4 w-4"/>
                Email
              </NavbarItem>
              <NavbarItem path="https://www.linkedin.com/in/gustave-montana/" newTab>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                LinkedIn
              </NavbarItem>
              <NavbarItem path="https://github.com/gnonk323" newTab>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
                GitHub
              </NavbarItem>
            </NavbarGroup>
          </div>
        </nav>
      </aside>
    </>
  );
}