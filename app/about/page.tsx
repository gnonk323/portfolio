import {mapIncludes} from "yaml/dist/compose/util-map-includes";

export default function About() {
  return (
    <main>
      <div className={"lg:ml-64 lg:py-10 lg:px-24 p-6 min-h-screen"}>
        <h1 className={"lg:text-5xl text-2xl text-[#007FFF] font-extrabold mb-8"}>About Me</h1>
        <div className={"flex lg:flex-row flex-col gap-10"}>
          <img src="/gustave-montana.jpg" alt="headshot" className={"rounded-full lg:size-64 hidden lg:block"}/>
          <div>
            <h2 className={"text-lg text-[#007FFF] font-semibold"}>BIO</h2>
            <br/>
            <p className={"lg:text-base text-sm"}>
              I am a Computer Science student at Worcester Polytechnic Institute, graduating in the Spring of 2024, and
              looking to start my career in software engineering.
              Throughout my various project experiences, I&apos;ve found a passion for front-end development and UI/UX
              design.
              I am currently working as a Software Development Intern at InvoiceCloud for the Summer of 2024.
            </p>
            <br/>
            <p className={"lg:text-base text-sm"}>
              I&apos;ve loved computers ever since I can remember, and I started programming in my freshman year of high
              school, after building my first PC. When I found out
              that I could make a career out of it, I never looked back. I am always looking for new opportunities to
              learn and grow as a developer.
            </p>
            <br/>
            <p className={"lg:text-base text-sm"}>
              I find that front-end development is located at perfect place at the intersection of creativity and logic,
              and I love the opportunity to create something
              new and unique while simultaneously solving problems and thinking logically.
            </p>
          </div>
        </div>
        <hr className={"h-px mt-12 mb-6 dark:bg-neutral-700 bg-neutral-300 border-0"}/>
      </div>
    </main>
  )
}