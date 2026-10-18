import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const iconClass = "h-6 w-6";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* LEFT SIDE: stays fixed */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <Image src="/avatar.jpg" alt="Photo of Mubarek Mustefa" width={112} height={112} className="mb-6 h-28 w-28 rounded-full object-cover ring-2 ring-teal-300/40" priority />
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Mubarek Mustefa
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              AI-Powered Full-Stack Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              Building intelligent, scalable full-stack web applications with
              React, Node.js, and integrated AI models.
            </p>

            <nav className="hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="group flex items-center py-3">
                      <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <ul className="mt-8 flex items-center gap-5 text-slate-400" aria-label="Social media">
            <li>
              <a href="https://github.com/mubarekM" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-teal-300">
                <svg viewBox="0 0 16 16" fill="currentColor" className={iconClass}>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://t.me/Frm0to1" target="_blank" rel="noreferrer" aria-label="Telegram" className="hover:text-teal-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:mubarekalx@gmail.com" aria-label="Email" className="hover:text-teal-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </li>
          </ul>
        </header>

        {/* RIGHT SIDE: scrolls */}
        <main className="pt-24 lg:w-[52%] lg:py-24">
          <section id="about" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              About
            </h3>
            <p className="mb-4">
              I build full-stack web applications and integrate AI to make them
              smarter. I spend most of my time writing code, building responsive
              interfaces, and connecting intelligent workflows.
            </p>
            <p className="mb-4">
              Learning fast, building practical tools, and keeping things
              scalable is how I approach modern software development.
            </p>
          </section>

          <section id="experience" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Experience
            </h3>
            <Experience />
          </section>

          <section id="projects" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Projects
            </h3>
            <Projects />
          </section>
        <ContactSection />
        </main>
      </div>
    </div>
  );
}
