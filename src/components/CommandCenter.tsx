import { Shield, Crosshair, Search } from "lucide-react";

const domains = [
  /*
  {
    title: "Offensive Security",
    icon: Crosshair,
    description: "Penetration testing, vulnerability assessment, and red team operations to identify and exploit security weaknesses.",
    tools: ["Nmap", "Burp Suite", "Metasploit"],
  },
  */
  {
    title: "Defensive Operations",
    icon: Shield,
    description: "Security monitoring, incident response, and threat hunting to protect digital infrastructure.",
    tools: ["Splunk", "Snort"],
  },
  {
    title: "Digital Forensics",
    icon: Search,
    description: "Evidence acquisition, malware analysis, and digital investigation to uncover cyber threats.",
    tools: ["Wireshark", "Volatility"],
  },
];

const CommandCenter = () => {
  return (
    <section id="command-center" className="px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-4 font-mono text-sm text-primary">// COMMAND_CENTER</div>
        <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
          Primary <span className="text-primary text-glow">Operations</span>
        </h2>
        <p className="mb-12 max-w-xl text-muted-foreground">
          Core cybersecurity domains and the arsenal of tools used to secure, test, and investigate digital systems.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:glow-emerald"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <domain.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-mono text-lg font-bold text-foreground">{domain.title}</h3>
              <p className="mb-6 text-sm text-muted-foreground">{domain.description}</p>
              <div className="flex flex-wrap gap-2">
                {domain.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs text-primary"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommandCenter;
