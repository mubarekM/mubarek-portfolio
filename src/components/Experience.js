const jobs = [
  {
    date: "Oct 2025 — Present",
    title: "Third-Year IT & Computer Science Student",
    company: "Kotebe University of Education",
    description:
      "Pursuing a Bachelor of Education in Information Technology and Computer Science, focused on software development and educational frameworks. Authored leadership proposals and initiatives for student unions and peer-learning hubs like the Kotebe English Hub, and built full-stack prototypes and collaborative academic projects with React, Node.js, and modern JavaScript.",
    tags: ["React", "Node.js", "JavaScript", "HTML/CSS", "Git", "VS Code"],
  },
  {
    date: "Mar — Jul 2026",
    title: "Full-Stack & AI Developer",
    company: "Evangadi Tech",
    description:
      "Graduated from the AI-Powered Full-Stack Application Development program. Built full-stack web applications including a Netflix clone, a ChatGPT-style programming assistant, and an AI-enhanced community Q&A forum, using AI APIs, vector search, JWT authentication, and MySQL/MongoDB databases.",
    tags: ["React", "Node.js", "Express", "MongoDB", "MySQL", "JavaScript", "Gemini API", "REST APIs", "JWT", "Bootstrap"],
  },
];

export default function Experience() {
  return (
    <ol>
      {jobs.map((job) => (
        <li key={job.title} className="group relative mb-12">
          <div className="absolute -inset-x-4 -inset-y-4 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50"></div>
          <div className="relative grid gap-2 sm:grid-cols-8 sm:gap-8">
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              {job.date}
            </p>
            <div className="sm:col-span-6">
              <h4 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300">
                {job.title} · {job.company}
              </h4>
              <p className="mt-2 text-sm leading-normal">{job.description}</p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                {job.tags.map((tag) => (
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
    </ol>
  );
}
