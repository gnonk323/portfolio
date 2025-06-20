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
          <p>
            This site is built with <code>Next.js</code> using the App Router, written in <code>TypeScript</code>, and styled with <code>Tailwind CSS</code>. It&apos;s hosted on <code>Vercel</code>, and deployed automatically from <code>GitHub</code>. I aim to keep the stack simple, modern, and fast.
          </p>
        </div>
        <br />
        <button className="rounded-md bg-blue-500 hover:bg-blue-600 transition-colors px-3 py-2 font-bold">
          Check out the source code on GitHub!
        </button>
      </div>
    </div>
  );
}