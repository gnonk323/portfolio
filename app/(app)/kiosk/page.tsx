import { ExclamationCircleIcon, LightBulbIcon, BoltIcon, RocketLaunchIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/Footer";
import NextProject from "@/components/NextProject";
import SectionHeader from "@/components/SectionHeader";

export default function Kiosk() {
  const technologies: string[] = [
    "Typescript",
    "React.js",
    "Node.js",
    "Material UI",
    "Prisma",
    "PostgreSQL",
    "Express",
    "Axios",
    "AWS",
    "Docker",
    "Git",
    "Taiga",
    "Figma"
  ]
  return (
    <div className="min-h-screen">
      <div className={"lg:ml-64 lg:mt-0 mt-24 lg:py-10 lg:px-48 p-6 min-h-screen"}>
        <div className="lg:flex lg:flex-row block justify-between items-center">
          <div className="lg:mb-0 mb-2">
            <h1 className="lg:text-5xl text-4xl font-semibold">Hospital Kiosk App</h1>
            <h2 className="lg:text-xl text-sm text-neutral-400">For Mass General Brigham and Women&apos;s Hospital</h2>
          </div>
          <div className="flex gap-3 lg:text-base text-sm">
            <a href="/bwh-report.pdf" target="_blank" className="hover:underline">Report</a>
            <p>|</p>
            <a href="/bwh-user-manual.pdf" target="_blank" className="hover:underline">User Manual</a>
          </div>
        </div>
        <img src="/images/bwhMOCK.png" alt="" className="max-w-[80%] mx-auto" />
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
        <SectionHeader icon={<ExclamationCircleIcon />}>BACKGROUND</SectionHeader>
        <p className="lg:text-base text-sm">
        This project was developed during the Software Engineering course (CS3733) at WPI taught by Professor Wilson Wong, in collaboration with Brigham and Women&apos;s Hospital in Boston, MA. Software Engineering is a rigorous 7-week course, during which development teams of 10 students meet week-to-week application requirements, presenting their progress each week, resulting in a finished hospital kiosk application by term&apos;s end. Students take on various roles, such as Product Owner, Project Manager, Scrum Master, and more. The goal of the course is to provide students with as close to real-world development experience as possible. At the end of the term, our final presentations were watched by representatives from BWH, to take ideas in UI/UX design, functionality, and features.
        </p>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <SectionHeader icon={<LightBulbIcon />}>APPROACH</SectionHeader>
        <p className="lg:text-base text-sm">
          Each team used the Agile software development approach, with weekly sprints. Upon receiving the application requirements for the week, our team met to convert the requirements into epics, which were then broken down into user stories. We used planning poker to weight each story, breaking them down into sub-tasks if necessary. The team met daily for a scrum meeting, led by our scrum master. The team was loosely broken up into front-end, back-end, and algorithms developers, where over time I became one of the lead engineers for the front-end team. At the end of each sprint, we held a retrospective meeting where we discussed what went well, what went wrong, what we could have done better, and gave shout-outs to team members that went the extra mile.
        </p>
        <div className="lg:flex justify-between mt-8 h-16 hidden">
          <div className="bg-[#007FFF] bg-opacity-35 rounded-md flex justify-center items-center w-[20%] text-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
            Requirements
          </div>
          <div className="text-3xl font-bold flex items-center cursor-default">
            -&gt;
          </div>
          <div className="bg-[#007FFF] bg-opacity-35 rounded-md flex justify-center items-center w-[20%] text-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
            Planning
          </div>
          <div className="text-3xl font-bold flex items-center cursor-default">
            -&gt;
          </div>
          <div className="bg-[#007FFF] bg-opacity-35 rounded-md flex justify-center items-center w-[20%] text-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
            Development
          </div>
          <div className="text-3xl font-bold flex items-center cursor-default">
            -&gt;
          </div>
          <div className="bg-[#007FFF] bg-opacity-35 rounded-md flex justify-center items-center w-[20%] text-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
            Retrospective
          </div>
        </div>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <SectionHeader icon={<BoltIcon />}>FEATURES</SectionHeader>
        <div className="flex items-center">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#007FFF] text-[#007FFF] font-bold lg:text-base text-sm">1</span>
          <p className="text-[#007FFF] font-semibold lg:text-lg ml-2">Hospital Pathfinding</p>
        </div>
        <div className="ml-4 border-l-2 border-[#007FFF] pl-6 my-6">
          <div className="flex justify-center mb-4">
            <img src="/images/kiosk/pathfinding-demo.gif" alt="Pathfinding demo" className="w-full rounded-md" />
          </div>
          <p className="lg:text-base text-sm">
            One of the main features of the application was that it had to be able to give the user directions from one point of the hospital to another, using a pathing algorithm of their choice. It also had to provide text directions, guiding the user down hallways, telling them which way to turn, and which elevators and stairways they should use. My team implemented an additional feature which allows the user to scan a QR code containing the directions, so they can follow along on their phone.
          </p>
        </div>
        <div className="flex items-center">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#007FFF] text-[#007FFF] font-bold lg:text-base text-s">2</span>
          <p className="text-[#007FFF] font-semibold lg:text-lg ml-2">Service Requests</p>
        </div>
        <div className="ml-4 border-l-2 border-[#007FFF] pl-6 my-6">
          <div className="flex justify-center mb-4">
            <img src="/images/kiosk/dashboard-demo.gif" alt="Dashboard demo" className="w-full rounded-md" />
          </div>
          <p className="lg:text-base text-sm">
            The other core requirement of the application was the ability for a logged-in staff member to be able to use the kiosk to make a service request of their choice, as well as view any active service requests. Our group chose to follow a dashboard approach to making and viewing service requests. The user picks the service request they’d like to make using the dropdown menu at the top of the form on the right, fills out the form, and submits it to the hospital’s system (not actually). Upon their submission, the active request appears in the table on the left, which is complete with sorting and filtering capabilities. The staff member can also choose to expand the active requests table.
          </p>
        </div>
        <div className="flex items-center">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#007FFF] text-[#007FFF] font-bold lg:text-base text-sm">3</span>
          <p className="text-[#007FFF] font-semibold lg:text-lg ml-2">Map Editing</p>
        </div>
        <div className="ml-4 border-l-2 border-[#007FFF] pl-6 my-6">
          <div className="flex justify-center mb-4">
            <img src="/images/kiosk/map-edit.png" alt="Table with map node information" className="w-full rounded-md" />
          </div>
          <p className="lg:text-base text-sm">
            When logged in, admins (not just any staff members) are able to delete all of the map nodes and edges and upload new nodes and edges. They are also able to interact directly with the map, where they can drag nodes and edges, delete individual nodes and edges, and edit the location of nodes by changing their X and Y coordinates.
          </p>
        </div>
        <div className="flex items-center">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#007FFF] text-[#007FFF] font-bold lg:text-base text-sm">4</span>
          <p className="text-[#007FFF] font-semibold lg:text-lg ml-2">Statistics</p>
        </div>
        <div className="ml-4 border-l-2 border-[#007FFF] pl-6 my-6">
          <div className="flex justify-center mb-4">
            <img src="/images/kiosk/stats.png" alt="Statistics page with graphs" className="w-full rounded-md" />
          </div>
          <p className="lg:text-base text-sm">
            Staff members can view a statistics page, where they can find a wide variety of information breaking down the distribution of the number of requests. There are bar charts showing the number of requests by type, priority, status, and user, and a pie chart showing the percentage of requests by any of those same parameters.
          </p>
        </div>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <SectionHeader icon={<RocketLaunchIcon />}>TAKEAWAYS</SectionHeader>
        <div className="dark:bg-neutral-800 bg-neutral-400 rounded-md p-4 grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4">
          <div className="dark:bg-neutral-700 bg-neutral-300 rounded-md p-3">
            <p className="font-semibold mb-1">Full-stack Development</p>
            <p className="text-sm">Although I focused on front-end, I spent time interacting with the back-end and I got a lot of valuable experience with creating full-stack features.</p>
          </div>
          <div className="dark:bg-neutral-700 bg-neutral-300 rounded-md p-3">
            <p className="font-semibold mb-1">Leadership</p>
            <p className="text-sm">I didn&apos;t start out a lead developer, but by the end of the term I had taken a leadership role. Team members came to me with questions, and I was able to develop my leadership skills.</p>
          </div>
          <div className="dark:bg-neutral-700 bg-neutral-300 rounded-md p-3">
            <p className="font-semibold mb-1">Agile Development</p>
            <p className="text-sm">This was my first time using the Agile methodology for software development, and the fast paced nature of 1-week sprints was overwhelming at times, but effective.</p>
          </div>
        </div>
        <p className="lg:text-base text-sm">
          All in all, this project was an incredible learning experience for me! It was the first time I took on a large full-stack application like this, and working in a team this large on a software development project was a first too. I got the chance to take on a leadership role, and I learned a lot about the Agile software development process. I also learned a lot about the importance of communication in a team, and how to work with people who have different skill sets and backgrounds than me. I&apos;ve known I have a passion for front-end development for a while, and this was a great opportunity to throw myself into a large UI undertaking. Overall, I’m really proud of the work we did!
        </p>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <NextProject path="/dct" title="Data Collection Tool" />
        <br />
      </div>
    </div>
  );
}