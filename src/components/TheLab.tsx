import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import { report } from "process";

const riskColors: Record<string, string> = {
  Critical: "border-destructive/50 bg-destructive/10 text-destructive",
  High: "border-orange-500/50 bg-orange-500/10 text-orange-400",
  Medium: "border-yellow-500/50 bg-yellow-500/10 text-yellow-400",
};

const projects = [
  {
    title: "PhishGuard",
    description: "PhishGuard is a web + mobile based application that helps users to identify phishing websites , mails , sms , QR codes , pdfs etc. ",
    risk: "High",
    tech: ["Typescript", "React", "Node.js", "Firebase", "API keys"],
    link: "https://phishguard7.vercel.app/",
  },
  {
    title: "Traveller's Companion",
    description: "Traveller's Companion is a mobile + web application that helps users to plan their trips and find the best places to visit. This app contains map services that can help users to find transportaion, hotels, restaurants, etc.",
    tech: ["Flutter", "Firebase"],
    link: "",
  },
  {
    title: "Secure Communication Platform",
    description: "Developed an encryption tool where passphrases never leave the device, ensuring local-only decryption.Implemented a Share Token system allowing users to exchange encrypted messages securely via passphrases.",
    tech: ["Python", "AES Encryption", "Flask"],
    link: "https://secure-communicator.vercel.app/",
  },
  /*
  {
    title: "Network Pentest Report",
    description: "Comprehensive penetration test of a simulated enterprise network, identifying critical vulnerabilities and providing remediation strategies.",
    risk: "Critical",
    tech: ["Nmap", "Metasploit", "Burp Suite"],
  },
  {
    title: "Custom Malware Sandbox",
    description: "Isolated analysis environment for dynamic malware behavior analysis with automated reporting and IOC extraction.",
    risk: "High",
    tech: ["Python", "YARA", "Volatility"],
  },
  {
    title: "Vulnerability Scanner",
    description: "Automated vulnerability scanning tool with CVE database integration and risk-prioritized reporting.",
    risk: "Medium",
    tech: ["Python", "Nmap", "PostgreSQL"],
  },
  {
    title: "SIEM Dashboard",
    description: "Real-time security information and event management dashboard with log aggregation and threat alerting.",
    risk: "High",
    tech: ["Splunk", "React", "Node.js"],
  },
  */
];

const TheLab = () => {
  return (
    <section id="the-lab" className="px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-4 font-mono text-sm text-primary">// THE_LAB</div>
        <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
          Project <span className="text-primary text-glow">Gallery</span>
        </h2>
        <p className="mb-12 max-w-xl text-muted-foreground">
          Security research, tools, and projects from the lab. Each classified by risk level and complexity.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:glow-emerald"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-mono text-base font-bold text-foreground">{project.title}</h3>
                <Badge
                  variant="outline"
                  className={`font-mono text-xs ${riskColors[project.risk]}`}
                >
                  {project.risk}
                </Badge>
              </div>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-flicker inline-flex w-fit items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <FileText className="h-3 w-3" />
                  View Project
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex w-fit items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs text-primary opacity-50 cursor-not-allowed"
                >
                  <FileText className="h-3 w-3" />
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheLab;
