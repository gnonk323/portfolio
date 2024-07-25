import { ChatBubbleLeftIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen">
      <div className={"lg:ml-64 lg:py-10 lg:px-24 p-6 min-h-screen"}>
        <div className="flex items-center">
          <div>
            <div className="flex gap-2 items-center mb-4">
              <ChatBubbleLeftIcon className="h-5 w-5 text-[#007FFF]" />
              <h2 className={"text-lg text-[#007FFF] font-semibold"}>ABOUT ME</h2>
            </div>
            <p className={"lg:text-2xl text-lg"}>
              I am a Computer Science student at Worcester Polytechnic Institute, graduating in the Spring of 2025, and
              looking to start my career in software engineering.
              Throughout my various project experiences, I&apos;ve found a passion for front-end development and UI/UX
              design.
              I am currently working as a Software Development Intern at InvoiceCloud for the Summer of 2024.
            </p>
          </div>
          <img src="/images/gustave-montana.jpg" alt="headshot" className={"rounded-full lg:size-52 ml-12 border-solid border-2 border-blue-500 shadow-md hidden lg:block"} />
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
            <div className="flex gap-2 items-center">
              <AcademicCapIcon className="h-5 w-5 text-[#007FFF]" />
              <h2 className={"text-lg text-[#007FFF] font-semibold"}>EDUCATION</h2>
            </div>
            <div>
              <h3 className="lg:text-3xl text-2xl font-semibold mb-4">Worcester Polytechnic Institute</h3>
              <p className="lg:text-2xl text-xl"><span className="lg:text-lg text-base text-[#007FFF] font-black mr-3">MAJOR</span>Computer Science</p>
              <p className="lg:text-2xl text-xl"><span className="lg:text-lg text-base text-[#007FFF] font-black mr-3">MINOR</span>Data Science</p>
            </div>
            <p className="italic text-neutral-400">Graduating May 2025</p>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
