import { ExclamationCircleIcon, XCircleIcon, PuzzlePieceIcon, MagnifyingGlassIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import Footer from "@/app/components/Footer";

export default function DCT() {
  return (
    <div className="min-h-screen">
      <div className="lg:ml-64 lg:py-10 lg:px-48 p-6 min-h-screen">
        <h1 className="lg:text-5xl text-3xl font-semibold">Data Collection Tool</h1>
        <h2 className="lg:text-xl text-sm text-neutral-400">Everything a WPI student needs for their IQP research, all in one place</h2>
        <img src="/images/mqpMOCK.png" alt="" className="max-w-[80%] mx-auto" />
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <div className="flex items-center mb-4 gap-2">
          <ExclamationCircleIcon className="text-[#007FFF] lg:h-5 lg:w-5 h-4 w-4" />
          <h2 className={"lg:text-lg text-[#007FFF] font-semibold"}>BACKGROUND</h2>
        </div>
        <p className="lg:text-base text-sm">
          This project is my capstone, or <a className="text-[#007FFF] font-semibold hover:text-[#0065CC] cursor-pointer transition-colors" href="https://www.wpi.edu/project-based-learning/project-based-education/major-qualifying-project">Major Qualifying Project (MQP)</a> for my Computer Science BS degree. It is being developed during the summer of 2024, into the first term of the fall semester. I am working on a team of 5, using the Agile methodology for software development.
        </p>
        <div className="rounded-md bg-neutral-700 lg:p-4 p-2 lg:my-12 my-6">
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
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <div className="flex items-center mb-4 gap-2">
          <XCircleIcon className="text-[#007FFF] lg:h-5 lg:w-5 h-4 w-4" />
          <h2 className={"lg:text-lg text-[#007FFF] font-semibold"}>THE PROBLEM</h2>
        </div>
        <p className="lg:text-base text-sm">
          The IQP is a research project, and so it requires students to collect qualitative and quantitative data, conduct interviews, and distribute surveys to complete their reports. However, each project varies greatly, in terms of geographical location, subject matter, objective, and of course, research methods. During my IQP in Monteverde, Costa Rica, my group used an array of softwares and websites to conduct our research. This proved complicated and frustrating at times.
        </p>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <div className="flex items-center mb-4 gap-2">
          <PuzzlePieceIcon className="text-[#007FFF] lg:h-5 lg:w-5 h-4 w-4" />
          <h2 className={"lg:text-lg text-[#007FFF] font-semibold"}>THE SOLUTION</h2>
        </div>
        <p className="lg:text-base text-sm">
          To solve this problem, my group set out to create an app versatile enough to consolidate most, if not all, of any IQP group&apos;s research needs into one application. Students will be able to log in, create or join a team, and collaboratively conduct their research. The app&apos;s features will include the ability to create custom, reusable data collection structures which we call forms, a suite of interview tools which includes built in recording and AI transcription and summarization, and more, the ability to geotag data collection entries and view them on a map and an offline mode where entries can be cached locally until internet connection is available. 
        </p>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <div className="flex items-center mb-4 gap-2">
          <MagnifyingGlassIcon className="text-[#007FFF] lg:h-5 lg:w-5 h-4 w-4" />
          <h2 className={"lg:text-lg text-[#007FFF] font-semibold"}>UX RESEARCH</h2>
        </div>
        <p className="lg:text-base text-sm">
          Before jumping into writing code, we had to conduct some research of our own. As a group, we reviewed 20 previous IQP reports to quantify which research methods were most commonly used, so we would be able to focus our app on the best areas. To minimize error, we peer reviewed each other&apos;s findings to ensure accuracy of our findings.
        </p>
        <div className="bg-neutral-800 rounded-md lg:my-8 my-4 p-4 grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4">
          <div className="bg-neutral-700 rounded-md p-3">
            <p className="text-center font-semibold text-neutral-300 mb-1">Interviews</p>
            <p className="text-6xl text-center text-[#007FFF] font-bold">95%</p>
          </div>
          <div className="bg-neutral-700 rounded-md p-3">
            <p className="text-center font-semibold text-neutral-300 mb-1">Qualitative Data</p>
            <p className="text-6xl text-center text-[#007FFF] font-bold">95%</p>
          </div>
          <div className="bg-neutral-700 rounded-md p-3">
            <p className="text-center font-semibold text-neutral-300 mb-1">Quantitative Data</p>
            <p className="text-6xl text-center text-[#007FFF] font-bold">55%</p>
          </div>
        </div>
        <p className="lg:text-base text-sm">
          We also researched other existing data collection apps, to see what features they had and didn&apos;t have. We found that existing apps lacked features important to IQP students, while having extraneous features geared towards other types of users.
        </p>
        <p className="font-black text-center text-[#007FFF] lg:my-8 my-4 lg:text-2xl text-lg">Our app will be designed specifically for the WPI IQP experience!</p>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <div className="flex items-center mb-4 gap-2">
          <LightBulbIcon className="text-[#007FFF] lg:h-5 lg:w-5 h-4 w-4" />
          <h2 className={"lg:text-lg text-[#007FFF] font-semibold"}>APPROACH</h2>
        </div>
        <p className="lg:text-base text-sm">
          We are using the Agile methodology, with 2-week sprints. We meet every other day for scrum, due to group availability during the summer, in addition to a weekly meeting with our project advisor where we present our progress, ask any questions, and receive important guidance.
        </p>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <div className="rounded-md bg-red-400 bg-opacity-35 p-4 border border-red-400">
          <h3 className="font-semibold lg:text-base text-sm">This project is still under construction. If it sounds interesting to you, please reach out and we can talk about it in more detail!</h3>
        </div>
        <br />
        <a href="/tictactoe">
          <div className="flex justify-between bg-[#007FFF] rounded-md p-4 hover:bg-[#0065CC] cursor-pointer transition-colors lg:text-base text-sm items-center group">
            <p className="text-neutral-200 font-semibold">Next Project: &apos;Endless&apos; TicTacToe</p>
            <div className="flex items-center text-neutral-200 transform transition-transform duration-300 group-hover:translate-x-1">
              <p className="lg:text-sm text-xs text-right">Read More</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
        <br />
        <Footer />
      </div>
    </div>
  );
}