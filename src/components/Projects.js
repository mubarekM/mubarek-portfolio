const projects = [
  {
    title: "AI-Powered Evangadi Forum",
    description:
      "A community Q&A platform that pairs peer expertise with AI-generated draft answers, semantic vector search, and automated answer-quality evaluation for faster, more durable learning. In the live demo the PDF knowledge base is switched off; it runs locally.",
    tags: ["React", "Node.js", "MySQL", "Vector Search", "Gemini API", "JWT"],
    live: "https://evangadi-ai-forum-rose.vercel.app",
    github: "https://github.com/mubarekM/evangadi-ai-forum",
  },
  {
    title: "English with Nafyad",
    description:
      "An online English learning platform with step-by-step live classes, a structured curriculum, class schedules, and student enrollment for real-world and academic English.",
    tags: ["React", "TanStack", "Vite", "Supabase"],
    live: "https://nafyadi.vercel.app",
    github: "https://github.com/mubarekM/nafyadi",
  },
  {
    title: "ChatGPT Clone",
    description:
      "A full-stack AI chat app. Users talk to an assistant focused on programming and IT topics, and their conversation history is saved to and loaded from a database.",
    tags: ["React", "Node.js", "Express", "MySQL", "Gemini API"],
    live: "https://mubarek-chatgpt-clone.vercel.app",
    github: "https://github.com/mubarekM/mubarek-mustefa-ai",
  },
  {
    title: "Netflix Clone",
    description:
      "A fully responsive web app that recreates the Netflix interface, with dynamic movie rows, a promotional banner, and API-driven content.",
    tags: ["React", "Vite", "CSS", "REST API"],
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
          <div className="relative">
            <h4 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300">
              {p.title}
            </h4>
            <p className="mt-2 text-sm leading-normal">{p.description}</p>
            {(p.live || p.github) && (
              <div className="mt-3 flex gap-4">
                {p.live && <LinkText href={p.live}>Live site</LinkText>}
                {p.github && <LinkText href={p.github}>GitHub</LinkText>}
              </div>
            )}
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
        </li>
      ))}
    </ul>
  );
}
