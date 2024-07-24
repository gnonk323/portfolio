import { ExclamationCircleIcon, LightBulbIcon, BoltIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import Footer from "@/app/components/Footer";

export default function Kiosk() {
  return (
    <div className="min-h-screen">
      <div className={"lg:ml-64 lg:py-10 lg:px-32 p-6 min-h-screen"}>
        <div className="lg:flex lg:flex-row block justify-between items-center">
          <div className="lg:mb-0 mb-2">
            <h1 className="lg:text-5xl text-4xl font-semibold">Hospital Kiosk App</h1>
            <h2 className="lg:text-xl text-neutral-400">For Mass General Brigham and Women's Hospital</h2>
          </div>
          <div className="flex gap-3 lg:text-base text-sm">
            <a href="/bwh-report.pdf" target="_blank" className="hover:text-neutral-400 transition-colors">Report</a>
            <p>|</p>
            <a href="/bwh-user-manual.pdf" target="_blank" className="hover:text-neutral-400 transition-colors">User Manual</a>
          </div>
        </div>
        <img src="/images/bwhMOCK.png" alt="" />
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <div className="flex items-center mb-4 gap-2">
          <ExclamationCircleIcon className="text-[#007FFF] h-5 w-5" />
          <h2 className={"text-lg text-[#007FFF] font-semibold"}>BACKGROUND</h2>
        </div>
        <p>
        This project was developed during the Software Engineering course (CS3733) at WPI taught by Professor Wilson Wong, in collaboration with Brigham and Women’s Hospital in Boston, MA. Software Engineering is a rigorous 7-week course, during which development teams of 10 students meet week-to-week base application requirements, presenting their progress each week, resulting in a finished hospital kiosk application by term’s end. Students take on various roles, such as Product Owner, Project Manager, Scrum Master, and more. The goal of the course is to provide students with as close to real-world development experience as possible. At the end of the term, our final presentations were watched by representatives from BHW, to take ideas in UI/UX design, functionality, and features.
        </p>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <div className="flex items-center mb-4 gap-2">
          <LightBulbIcon className="text-[#007FFF] h-5 w-5" />
          <h2 className={"text-lg text-[#007FFF] font-semibold"}>APPROACH</h2>
        </div>
        <p>
        Each team used the Agile software development approach, with weekly sprints. Upon receiving the application requirements for the week, our team met to convert the requirements into epics, which were then broken down into user stories. We used planning poker to weight each story, breaking them down into sub-tasks if necessary. The team met daily for a scrum meeting, led by our scrum master. The team was loosely broken up into front-end and back-end developers, where over time I became one of the lead engineers for the front-end team. At the end of each sprint, we held a retrospective meeting where we discussed what went well, what went wrong, what we could have done better, and gave shout-outs to team members that went the extra mile.
        </p>
        <div className="lg:flex justify-between mt-8 hidden">
          <div className="border-2 border-[#FF6B6B] bg-[#FF6B6B] bg-opacity-35 rounded-md p-8 w-[20%] text-center text-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
            Requirements
          </div>
          <div className="text-5xl font-bold flex items-center cursor-default">
            -&gt;
          </div>
          <div className="border-2 border-[#FFD93D] bg-[#FFD93D] bg-opacity-35 rounded-md p-8 w-[20%] text-center text-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
            Planning
          </div>
          <div className="text-5xl font-bold flex items-center cursor-default">
            -&gt;
          </div>
          <div className="border-2 border-[#007FFF] bg-[#007FFF] bg-opacity-35 rounded-md p-8 w-[20%] text-center text-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
            Development
          </div>
          <div className="text-5xl font-bold flex items-center cursor-default">
            -&gt;
          </div>
          <div className="border-2 border-[#6BCB77] bg-[#6BCB77] bg-opacity-35 rounded-md p-8 w-[20%] text-center text-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-default">
            Retrospective
          </div>
        </div>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <div className="flex items-center mb-4 gap-2">
          <BoltIcon className="text-[#007FFF] h-5 w-5" />
          <h2 className={"text-lg text-[#007FFF] font-semibold"}>FEATURES</h2>
        </div>
        <div className="flex items-center">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#007FFF] text-[#007FFF] font-bold">1</span>
          <p className="text-[#007FFF] font-semibold text-lg ml-2">Hospital Pathfinding</p>
        </div>
        <div className="ml-4 border-l-2 border-[#007FFF] pl-6 my-6">
          <div className="flex justify-center mb-4">
            <img src="/images/kiosk/pathfinding-demo.gif" alt="Pathfinding demo" className="w-full rounded-md" />
          </div>
          <p>
          One of the main features of the application was that it had to be able to give the user directions from one point of the hospital to another, using a pathing algorithm of their choice. It also had to provide text directions, guiding the user down hallways, telling them which way to turn, and which elevators and stairways they should use. My team implemented an additional feature which allows the user to scan a QR code containing the directions, so they can follow along on their phone.
          </p>
        </div>
        <div className="flex items-center">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#007FFF] text-[#007FFF] font-bold">2</span>
          <p className="text-[#007FFF] font-semibold text-lg ml-2">Service Requests</p>
        </div>
        <div className="ml-4 border-l-2 border-[#007FFF] pl-6 my-6">
          <div className="flex justify-center mb-4">
            <img src="/images/kiosk/dashboard-demo.gif" alt="Dashboard demo" className="w-full rounded-md" />
          </div>
          <p>
          The other core requirement of the application was the ability for a logged-in staff member to be able to use the kiosk to make a service request of their choice, as well as view any active service requests. Our group chose to follow a dashboard approach to making and viewing service requests. The user picks the service request they’d like to make using the dropdown menu at the top of the form on the right, fills out the form, and submits it to the hospital’s system (not actually). Upon their submission, the active request appears in the table on the left, which is complete with sorting and filtering capabilities. The staff member can also choose to expand the active requests table.
          </p>
        </div>
        <div className="flex items-center">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#007FFF] text-[#007FFF] font-bold">3</span>
          <p className="text-[#007FFF] font-semibold text-lg ml-2">Map Editing</p>
        </div>
        <div className="ml-4 border-l-2 border-[#007FFF] pl-6 my-6">
          <div className="flex justify-center mb-4">
            <img src="/images/kiosk/map-edit.png" alt="Table with map node information" className="w-full rounded-md" />
          </div>
          <p>
          When logged in, admins (not just any staff members) are able to delete all of the map nodes and edges and upload new nodes and edges. They are also able to interact directly with the map, where they can drag nodes and edges, delete individual nodes and edges, and edit the location of nodes by changing their X and Y coordinates.
          </p>
        </div>
        <div className="flex items-center">
          <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#007FFF] text-[#007FFF] font-bold">4</span>
          <p className="text-[#007FFF] font-semibold text-lg ml-2">Statistics</p>
        </div>
        <div className="ml-4 border-l-2 border-[#007FFF] pl-6 my-6">
          <div className="flex justify-center mb-4">
            <img src="/images/kiosk/stats.png" alt="Statistics page with graphs" className="w-full rounded-md" />
          </div>
          <p>
          Staff members can view a statistics page, where they can find a wide variety of information breaking down the distribution of the number of requests. There are bar charts showing the number of requests by type, priority, status, and user, and a pie chart showing the percentage of requests by any of those same parameters.
          </p>
        </div>
        <hr className={"h-px lg:my-12 my-6 dark:bg-neutral-700 bg-neutral-300 border-0"} />
        <div className="flex items-center mb-4 gap-2">
          <RocketLaunchIcon className="text-[#007FFF] h-5 w-5" />
          <h2 className={"text-lg text-[#007FFF] font-semibold"}>TAKEAWAYS</h2>
        </div>
        <div className="bg-neutral-800 rounded-md p-4 grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4">
          <div className="bg-neutral-700 rounded-md p-3">
            <p className="font-semibold mb-1">Full-stack Development</p>
            <p className="text-sm text-neutral-300">Although I focused on front-end, I spent time interacting with the back-end and I got a lot of valuable experience with creating full-stack features.</p>
          </div>
          <div className="bg-neutral-700 rounded-md p-3">
            <p className="font-semibold mb-1">Leadership</p>
            <p className="text-sm text-neutral-300">I didn't start out a lead developer, but by the end of the term I had taken a leadership role. Team members came to me with questions, and I was able to develop my leadership skills.</p>
          </div>
          <div className="bg-neutral-700 rounded-md p-3">
            <p className="font-semibold mb-1">Agile Development</p>
            <p className="text-sm text-neutral-300">This was my first time using the Agile methodology for software development, and the fast paced nature of 1-week sprints was overwhelming at times, but effective.</p>
          </div>
        </div>
        <p>
          All in all, this project was an incredible learning experience for me! It was the first time I took on a large full-stack application like this, and working in a team this large on a software development project was a first too. I got the chance to take on a leadership role, and I learned a lot about the Agile software development process. I also learned a lot about the importance of communication in a team, and how to work with people who have different skill sets and backgrounds than me. I've known I have a passion for front-end development for a while, and this was a great opportunity to throw myself into a large UI undertaking. Overall, I’m really proud of the work we did!
        </p>
        <br />
        <br />
        <a href="/dct">
          <div className="flex justify-between bg-[#007FFF] rounded-md p-4 hover:bg-[#0065CC] cursor-pointer transition-colors lg:text-base text-sm items-center">
            <p className="text-neutral-200 font-semibold">Next Project: Data Collection Tool</p>
            <div className="flex items-center text-neutral-200">
              <p>Read More</p>
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