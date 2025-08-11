export default function UnderTheHood() {
  return (
    <div className="min-h-screen">
      <div className="lg:ml-64 lg:py-10 lg:px-48 lg:mt-0 mt-24 p-6 min-h-screen">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="lg:text-5xl text-3xl font-semibold">Under the Hood</h1>
            <h2 className="lg:text-xl text-sm text-neutral-400">The technologies that power the website in front of you!</h2>
          </div>
        </div>
        <br />
        <div>
          <p className="lg:text-base text-sm">
            This site is built with <code className='inline-code'>Next.js</code> using the App Router, written in <code className='inline-code'>TypeScript</code>, and styled with <code className='inline-code'>Tailwind CSS</code>. It&apos;s hosted on <code className='inline-code'>Vercel</code>, and deployed automatically from <code className='inline-code'>GitHub</code>. I aim to keep the stack simple, modern, and fast.
          </p>
        </div>
        <br />
        <a
          href="https://github.com/gnonk323/portfolio"
          target="_blank"
          className="lg:text-base text-sm rounded-md bg-[#007FFF] hover:bg-blue-600 transition-colors px-3 py-2 font-bold text-white inline-flex items-center gap-2"
        >
          <svg role="img" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          Check out the complete source code on GitHub!
        </a>
      </div>
    </div>
  );
}