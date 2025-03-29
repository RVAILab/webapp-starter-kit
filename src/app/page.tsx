import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <div className="mb-4">
            <Image
              src="/rvai-logo.png"
              alt="RVAI Lab Logo"
              width={180}
              height={60}
              priority
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-center sm:text-left">
            ✨ Vibe Coding Starter Kit
          </h1>
          <p className="text-lg text-muted-foreground text-center sm:text-left max-w-[600px]">
            Your friendly launchpad for building awesome web apps with Cursor and AI assistance. Perfect for beginners and pros alike!
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <a 
              href="https://rvailab.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline flex items-center gap-1"
            >
              <span>👨‍💻</span> Join our events and programs
            </a>
            <a 
              href="https://vibe-coding-workflow.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline flex items-center gap-1"
            >
              <span>✍️</span> Learn Vibe Coding Fundamentals
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px]">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow">
            <h3 className="text-xl font-semibold mb-2">🚀 Ready to Roll</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This starter kit has everything you need - no complicated setup!
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Next.js with App Router</li>
              <li>TypeScript for fewer bugs</li>
              <li>Tailwind & Shadcn UI for pretty things</li>
              <li>Clerk for easy login stuff</li>
              <li>Neon PostgreSQL & Drizzle for data</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow">
            <h3 className="text-xl font-semibold mb-2">🏄‍♂️ Getting Started</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Just a few simple steps and you're coding with vibes:
            </p>
            <ol className="list-decimal list-inside text-sm space-y-1">
              <li>Edit <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono">src/app/page.tsx</code></li>
              <li>Add your own magical features</li>
              <li>Save and watch the changes happen</li>
              <li>Deploy to the internet with Vercel</li>
              <li>Show off to your friends!</li>
            </ol>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[800px]">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow">
            <h3 className="text-xl font-semibold mb-2">🤖 Build with AI</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Leverage agentic AI directly in Cursor to build features fast:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Ask AI to create components for you</li>
              <li>Generate database schemas with a prompt</li>
              <li>Debug code with AI assistance</li>
              <li>Learn as you build with explanations</li>
              <li>Refactor code using natural language</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow">
            <h3 className="text-xl font-semibold mb-2">🔒 Security Best Practices</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Keep your app safe while you build:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Never commit API keys to public repos</li>
              <li>Use <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono">.env.local</code> for secrets (it's gitignored)</li>
              <li>Validate all user inputs</li>
              <li>Use Clerk to handle auth securely</li>
              <li>Keep dependencies updated</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy to the Internet
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="https://github.com/RVAILab/webapp-starter-kit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check GitHub Repo
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://rvailab.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Rogue Valley AI Lab
        </a>
      </footer>
    </div>
  );
}
