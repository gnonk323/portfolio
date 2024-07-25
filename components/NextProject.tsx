export default function NextProject({path, title}: {path: string, title: string}) {
  return (
    <a href={path}>
          <div className="flex justify-between bg-[#007FFF] rounded-md p-4 hover:bg-[#0065CC] cursor-pointer transition-colors lg:text-base text-sm items-center group">
            <p className="text-neutral-200 font-semibold">Next Project: {title}</p>
            <div className="flex items-center text-neutral-200 transform transition-transform duration-300 group-hover:translate-x-1">
              <p className="lg:text-sm text-xs text-right">Read More</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
  );
}