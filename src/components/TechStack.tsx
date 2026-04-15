import { Code, Server, Database } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "Node.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL", "MongoDB"],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-4 font-mono text-sm text-primary">// TECH_STACK</div>
        <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
          Secondary <span className="text-primary text-glow">Skills</span>
        </h2>
        <p className="mb-12 max-w-xl text-muted-foreground">
          Software development proficiencies that complement core cybersecurity operations.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <cat.icon className="h-5 w-5 text-primary" />
                <h3 className="font-mono text-base font-bold text-foreground">{cat.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-3 py-2 text-center font-mono text-xs text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
