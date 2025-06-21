import { ExclamationCircleIcon, MagnifyingGlassIcon, LightBulbIcon, KeyIcon, BoltIcon, EyeIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/Footer";
import NextProject from "@/components/NextProject";
import SectionHeader from "@/components/SectionHeader";

export default function DCT() {
  const technologies: string[] = [
    "Typescript",
    "Node.js",
    "React.js",
    "Express",
    "Postgres",
    "TypeORM",
    "AssemblyAI",
    "Shadcn",
    "OpenStreetMap",
    "Nominatim",
    "AWS",
    "Docker",
    "Git",
    "Jira",
    "Figma"
  ];

  return (
    <div className="min-h-screen">
      <div className="lg:ml-64 lg:py-10 lg:px-48 lg:mt-0 mt-24 p-6 min-h-screen">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="lg:text-5xl text-3xl font-semibold">Data Collection Tool</h1>
            <h2 className="lg:text-xl text-sm text-neutral-400">Everything a WPI student needs for their IQP research, all in one place</h2>
          </div>
          <a href="https://digital.wpi.edu/concern/student_works/m613n290d?locale=en" target="_blank" className="hover:underline">Report</a>
        </div>
        <img src="/images/mqpMOCK.png" alt="" className="max-w-[80%] mx-auto" />
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <SectionHeader icon={<CodeBracketIcon />}>TECHNOLOGY STACK</SectionHeader>
        <div className="flex flex-wrap">
          {technologies.map((tech: string, index: number) => {
            return (
              <div key={index} className="border border-neutral-600 rounded-full dark:bg-neutral-700 bg-neutral-300 font-semibold px-4 py-2 mr-2 mb-2 lg:text-base text-sm">{tech}</div>
            )
          })}
        </div>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <p className="lg:text-base text-sm">
          This project is my capstone, or <a className="text-[#007FFF] font-semibold hover:text-[#0065CC] cursor-pointer transition-colors" href="https://www.wpi.edu/project-based-learning/project-based-education/major-qualifying-project">Major Qualifying Project (MQP)</a> for my Computer Science BS degree. It is a comprehensive data collecton application built for the WPI study abroad research project program, called the Interactive Qualifying Project (IQP). It was developed during the summer of 2024, into the first term of the fall semester. I worked on a team of 5, using the Agile methodology for software development.
        </p>
        <div className="rounded-md dark:bg-neutral-700 bg-neutral-200 lg:p-4 p-2 lg:my-12 my-6">
          <svg className="w-8 mb-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z" fill="#007FFF"/>
          </svg>
          <p className="font-semibold lg:text-lg text-center lg:mx-4 mx-2">
            The <a className="text-[#007FFF] font-bold hover:text-[#0065CC] cursor-pointer transition-colors" href="https://www.wpi.edu/project-based-learning/project-based-education/interactive-qualifying-project" target="_blank">Interactive Qualifying Project (IQP)</a> is one of the most distinctive elements of the WPI Plan and WPI&apos;s signature project-based curriculum, giving every WPI student the experience of working in interdisciplinary teams to solve a problem or need that lies at the intersection of science and society. Unlike an academic course, this nine-credit-hour requirement involves students working in teams, with students not in their major, to tackle an issue that relates science, engineering, and technology to society.
          </p>
          <div className="flex justify-between items-center mt-2 mx-2">
            <p className="text-sm italic">WPI Website</p>
            <svg className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z" fill="#007FFF"/></svg>
          </div>
        </div>
        <div className="grid grid-cols-3 text-center">
          <div>
            <p className="font-extrabold text-3xl md:text-5xl">1,200</p>
            <p className="font-light text-xs md:text-sm">Students / Year</p>
          </div>
          <div>
            <p className="font-extrabold text-3xl md:text-5xl">50+</p>
            <p className="font-light text-xs md:text-sm">Global Project Centers</p>
          </div>
          <div>
            <p className="font-extrabold text-3xl md:text-5xl">31</p>
            <p className="font-light text-xs md:text-sm">Countries</p>
          </div>
        </div>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <SectionHeader icon={<ExclamationCircleIcon />}>BACKGROUND</SectionHeader>
        <p className="lg:text-base text-sm">
          The IQP is a research project, and so it requires students to collect qualitative and quantitative data, conduct interviews, and distribute surveys to complete their reports. However, each project varies greatly, in terms of geographical location, subject matter, objective, and of course, research methods. During my IQP in Monteverde, Costa Rica, my group used an array of softwares and websites to conduct our research. This proved complicated and frustrating at times.
        </p>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <SectionHeader icon={<KeyIcon />}>PROJECT GOAL</SectionHeader>
        <p className="md:text-3xl font-semibold">Design and build an app versatile enough to consolidate most, if not all, of any IQP group&apos;s research needs into one application.</p>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <SectionHeader icon={<MagnifyingGlassIcon />}>UX RESEARCH</SectionHeader>
        <p className="lg:text-base text-sm">
          Before jumping into writing code, we had to conduct some research of our own. As a group, we reviewed 20 previous IQP reports to quantify which research methods were most commonly used, so we would be able to focus our app on the best areas. To minimize error, we peer reviewed each other&apos;s work to ensure accuracy of our findings.
        </p>
        <div className="lg:my-8 my-4 p-4 grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4">
          <div className="dark:bg-neutral-700 bg-neutral-200 rounded-md p-3">
            <p className="text-center font-semibold mb-1">Interviews</p>
            <p className="text-6xl text-center text-[#007FFF] font-bold">95%</p>
          </div>
          <div className="dark:bg-neutral-700 bg-neutral-200 rounded-md p-3">
            <p className="text-center font-semibold mb-1">Qualitative Data</p>
            <p className="text-6xl text-center text-[#007FFF] font-bold">95%</p>
          </div>
          <div className="dark:bg-neutral-700 bg-neutral-200 rounded-md p-3">
            <p className="text-center font-semibold mb-1">Quantitative Data</p>
            <p className="text-6xl text-center text-[#007FFF] font-bold">55%</p>
          </div>
        </div>
        <p className="lg:text-base text-sm">
          We also researched other existing data collection apps, to see what features they had and didn&apos;t have. We found that existing apps lacked features important to IQP students, while having extraneous features geared towards other types of users.
        </p>
        <p className="font-black text-center text-[#007FFF] lg:my-8 my-4 lg:text-2xl text-lg">Our app is designed specifically for the WPI IQP experience!</p>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <SectionHeader icon={<LightBulbIcon />}>APPROACH</SectionHeader>
        <p className="lg:text-base text-sm">
          We used the Agile methodology, with 2-week sprints. We met every other day for scrum due to group availability during the summer, in addition to a weekly meeting with our project advisor where we presented our progress, asked any questions, and received important guidance.
        </p>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <SectionHeader icon={<BoltIcon />}>FEATURES</SectionHeader>
        <p className="lg:text-base text-sm">
          Students can log in, create or join a group, and collabortively conduct their research. Each group is generated with a random access code which students need to join a group.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 mt-4 gap-2">
          <p className="lg:text-base text-sm rounded-md dark:bg-neutral-800 bg-neutral-200 p-4">Create custom reusable data structures called forms for data and interview collection.</p>
          <p className="lg:text-base text-sm rounded-md dark:bg-neutral-800 bg-neutral-200 p-4">A suite of interview tools which includes built-in recording and AI transcription and summarization.</p>
          <p className="lg:text-base text-sm rounded-md dark:bg-neutral-800 bg-neutral-200 p-4">The ability to geotag your data collection entries and view them on the map page.</p>
          <p className="lg:text-base text-sm rounded-md dark:bg-neutral-800 bg-neutral-200 p-4">An offline mode where entries can be cached locally until internet connection is available.</p>
        </div>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <SectionHeader icon={<EyeIcon />}>DESIGN</SectionHeader>
        <h2 className="font-semibold mb-1">Create DCT</h2>
        <video autoPlay loop muted playsInline className="rounded-md">
          <source src="/images/dct/create-account.mp4" />
        </video>
        <p className="mt-2 text-xs lg:text-sm text-neutral-500 dark:text-neutral-400">Once logged in, if a user is not already in a project they can join one or create a new one.</p>
        <br />
        <h2 className="font-semibold mb-1">Create Form</h2>
        <video autoPlay loop muted playsInline className="rounded-md">
          <source src="/images/dct/create-form.mp4" />
        </video>
        <p className="mt-2 text-xs lg:text-sm text-neutral-500 dark:text-neutral-400">A form is a reusable data structure. They are usable by anyone in the project and are the main method of data collection.</p>
        <br />
        <h2 className="font-semibold mb-1">Geotagged Entries</h2>
        <video autoPlay loop muted playsInline className="rounded-md">
          <source src="/images/dct/map-page.mp4" />
        </video>
        <p className="mt-2 text-xs lg:text-sm text-neutral-500 dark:text-neutral-400">Every entry can be geotagged with the user&apos;s current location or a custom location. Entries can be viewed on the map.</p>
        <br />
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div>
            <h2 className="font-semibold mb-1">Manage Team</h2>
            <img src="/images/dct/manage-team.png" alt="Manage Team Page" className="rounded-md" />
          </div>
          <div>
            <h2 className="font-semibold mb-1">Project Overview</h2>
            <img src="/images/dct/project-overview.png" alt="Project Overview Page" className="rounded-md" />
          </div>
          <div>
            <h2 className="font-semibold mb-1">Dashboard</h2>
            <img src="/images/dct/dashboard.png" alt="Dashboard" className="rounded-md" />
          </div>
          <div>
            <h2 className="font-semibold mb-1">Help Modal</h2>
            <img src="/images/dct/help-modal.png" alt="Help Modal" className="rounded-md" />
          </div>
        </div>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        {/* <div className="rounded-md bg-red-400 bg-opacity-35 p-4 border border-red-400">
          <h3 className="font-semibold lg:text-base text-sm">This project is still under construction. If it sounds interesting to you, please reach out and we can talk about it in more detail!</h3>
        </div> */}
        <NextProject path="/tictactoe" title="'Endless' TicTacToe" />
        <br />
      </div>
    </div>
  );
}