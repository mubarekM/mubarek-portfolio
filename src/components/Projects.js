import Image from "next/image";

const projects = [
  {
    title: "AI-Powered Evangadi Forum",
    thumb: "/projects/forum.png",
    description:
      "A community Q&A platform that pairs peer expertise with AI-generated draft answers, semantic vector search, and automated answer-quality evaluation for faster, more durable learning. In the live demo the PDF knowledge base is switched off; it runs locally.",
    tags: ["React", "Node.js", "MySQL", "Vector Search", "Gemini API", "JWT"],
    live: "https://evangadi-ai-forum-rose.vercel.app",
    github: "https://github.com/mubarekM/evangadi-ai-forum",
  },
  {
    title: "English with Nafyad",
    thumb: "/projects/nafyad.png",
    description:
      "An online English learning platform with step-by-step live classes, a structured curriculum, class schedules, and student enrollment for real-world and academic English.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    live: "https://nafyadi.vercel.app",
    github: "https://github.com/mubarekM/nafyadi",
  },
  {
    title: "ChatGPT Clone",
    thumb: "/projects/chatgpt.png",
    description:
      "A full-stack AI chat app. Users talk to an assistant focused on programming and IT topics, and their conversation history is saved to and loaded from a database.",
    tags: ["React", "Node.js", "Express", "Supabase", "PostgreSQL", "Gemini API"],
    live: "https://mubarek-chatgpt-clone.vercel.app",
    github: "https://github.com/mubarekM/mubarek-mustefa-ai",
  },
  {
    title: "Netflix Clone",
    thumb: "/projects/netflix.png",
    description:
      "A fully responsive web app that recreates the Netflix interface, with dynamic movie rows, a promotional banner, and API-driven content.",
    tags: ["React", "Vite", "CSS Modules", "TMDB API"],
    live: "https://netflix-clone-ten-pi-10.vercel.app",
    github: "https://github.com/mubarekM/netflix-clone",
  },
];

function LinkText({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-sm font-medium text-slate-300 hover:text-teal-300"
    >
      {children} ↗
    </a>
  );
}

export default function Projects() {
  return (
    <ul>
      {projects.map((p) => (
        <li key={p.title} className="group relative mb-12">
          <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50"></div>
          <div className="relative grid gap-4 sm:grid-cols-8 sm:gap-8">
            <Image
              src={p.thumb}
              alt={`Screenshot of ${p.title}`}
              width={400}
              height={225}
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2 sm:translate-y-1"
            />
            <div className="sm:col-span-6">
              <h4 className="font-medium leading-snug text-slate-200">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-300"
                >
                  {p.title} ↗
                </a>
              </h4>
              <p className="mt-2 text-sm leading-normal">{p.description}</p>
              <div className="mt-3 flex gap-4">
                <LinkText href={p.live}>Live site</LinkText>
                <LinkText href={p.github}>GitHub</LinkText>
              </div>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {p.tags.map((tag) => (
                  <li key={tag} className="mr-1.5 mt-2">
                    <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
