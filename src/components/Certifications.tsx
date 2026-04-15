import { useState } from "react";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const certs = [
  {
    name: "Cyber Security course",
    issuer: "Ediglobe",
    date: "2024",
    verifyUrl: "https://drive.google.com/file/d/1hmLjj-Ru-QKb5_JSXmz7p-CM_C-z0bQR/view?usp=drive_link",
    description: "Certificate for successfully completing the Cyber Security course.",
  },
  {
    name: "Cyber Security Internship",
    issuer: "Ediglobe",
    date: "01-10-2024 to 30-11-2024",
    verifyUrl: "https://drive.google.com/file/d/1hF53MvpEUO3S-Ag-Gi77i3j6sR3lI97L/view?usp=drive_link",
    description: "Certificate for successfully completing the Cyber Security Internship and Project submission.",
  },
  {
    name: "Artificial Intelligence course",
    issuer: "Ediglobe",
    date: "2025",
    verifyUrl: "https://drive.google.com/file/d/15-PaNMwE1lwzh4GKQ-n4eQR1vV7wu-eX/view?usp=drive_link",
    description: "Certificate for successfully completing the Artificial Intelligence course.",
  },
  {
    name: "Artificial Intelligence Internship",
    issuer: "Ediglobe",
    date: "01-07-2025 to 30-08-2025",
    verifyUrl: "https://drive.google.com/file/d/1ndUAo4nEP3eLBrc0_19AeKBVTBQ7Mt88/view?usp=drive_link",
    description: "Certificate for successfully completing the Artificial Intelligence Internship and Project submission.",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "CISCO",
    date: "21-10-2025", 
    verifyUrl: "https://drive.google.com/file/d/1go41uhlzbf8YgGMRetjoCKcndxg6y-_N/view?usp=drive_link",
    description: "Successfully achieved student level credential for completing the introduction to Cybersecurity course.",
  },
  {
    name: "Introduction to Cybersecurity certificate",
    issuer: "CISCO",
    date: "21-10-2025", 
    verifyUrl: "https://drive.google.com/file/d/1SJ57ymBBIvhYsjHd4jAcd0ne-JVQfY9L/view?usp=drive_link",
    description: "Certificate for completing the introduction to Cybersecurity course.",
  },
  {
    name: "Vulnerability Scanning and Exploitation certificate",
    issuer: "Devtown",
    date: "06-12-2025", 
    verifyUrl: "https://drive.google.com/file/d/1k96zIqgpJ5fz6tou7cxqLLPaKbeKxbsw/view?usp=drive_link",
    description: "Certificate for successfully completing the 5-days Bootcamp on Vulnerability scanning and Exploitation.",
  },
  {
    name: "Vulnerability Scanning and Exploitation Project completion certificate",
    issuer: "Google Developer Groups - VIT - Ap",
    date: "08-12-2025", 
    verifyUrl: "https://drive.google.com/file/d/1VpxjmdG2q9KUkEhqGfgC_lJSy5fQcCJR/view?usp=drive_link",
    description: "Certificate for participation and Project completion for the 5-days Bootcamp on Vulnerability scanning and Exploitation.",
  },
  {
    name: "Vulnerability Scanning and Exploitation Project completion certificate",
    issuer: "Microsoft Student Chapter - MSIT",
    date: "08-12-2025", 
    verifyUrl: "https://drive.google.com/file/d/1qouNK-3mH9nacqTeROryLKRmyK5yID9j/view?usp=drive_link",
    description: "Certificate for participation and Project completion for the 5-days Bootcamp on Vulnerability scanning and Exploitation.",
  },
  {
    name: "Ethical Hacking Virtual Internship",
    issuer: "Eduskills Academy",
    date: "April-2025 to June-2025", 
    verifyUrl: "https://drive.google.com/file/d/1qouNK-3mH9nacqTeROryLKRmyK5yID9j/view?usp=drive_link",
    description: "Certificate for successfully completeing 10 weeks Ethical Hacking Virtual Internship.",
  },
  {
    name: "Web Exploit Hunting and Bug Bounty Virtual Internship",
    issuer: "Eduskills Academy",
    date: "October-2025 to December-2025", 
    verifyUrl: "https://drive.google.com/file/d/1I8-wdWfN6hYQYG5Qxl1Hdu3Mbm3PbNiO/view?usp=drive_link",
    description: "Certificate for successfully completeing 10 weeks Web Exploit Hunting and Bug Bounty Virtual Internship.",
  },
  {
    name: "AI in Cybersecurity Virtual Internship",
    issuer: "Eduskills Academy",
    date: "January-2026 to March-2026", 
    verifyUrl: "https://drive.google.com/file/d/1DgsL3ZxyHETMpjmXFou_mbVk2srGWZLE/view?usp=drive_link",
    description: "Certificate for successfully completeing 10 weeks AI in Cybersecurity Virtual Internship.",
  },
  {
    name: "CREST CTF 2026",
    issuer: "PCET's Pimpri Chinchwad University, Pune",
    date: "2026", 
    verifyUrl: "https://drive.google.com/file/d/1QO88g6t482G92gmbAa6ftIxZOYfPuSD2/view?usp=drive_link",
    description: "Certificate for participating in CREST CTF 2026 an intensive 8-hour Capture The Flag competition hosted by CREST Cyber Club.",
  },
  {
    name: "Bug Bounty Hunting",
    issuer: "Hacking School",
    date: "18-09-2025", 
    verifyUrl: "https://drive.google.com/file/d/1IhbRYgQCd2a0It8Hnl8rvxKF1D9nSUF4/view?usp=drive_link",
    description: "Certificate of completing Bug Bounty Hunting course by Hacking School.",
  },
  {
    name: "Advent of Cyber 2025",
    issuer: "TryHackMe",
    date: "2025", 
    verifyUrl: "https://drive.google.com/file/d/1LYYW6YK2rY4vVxV8DkVKif0M2IfHYxS2/view?usp=drive_link",
    description: "Certificate of completing 24-cyber security challenges by TryHackMe.",
  },
  {
    name: "Love at First Breach - CTF",
    issuer: "TryHackMe",
    date: "25-02-2026", 
    verifyUrl: "https://drive.google.com/file/d/1VluNGZN67lSzFxlbmmpHukc3TI7d3oT1/view?usp=drive_link",
    description: "Certificate of participation in Love at First Breach - CTF by TryHackMe.",
  },
];

const Certifications = () => {
  const [selected, setSelected] = useState<(typeof certs)[0] | null>(null);

  return (
    <section id="certifications" className="px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-4 font-mono text-sm text-primary">// CERTIFICATIONS</div>
        <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
          Badge <span className="text-primary text-glow">Gallery</span>
        </h2>
        <p className="mb-12 max-w-xl text-muted-foreground">
          Verified credentials demonstrating proficiency across cybersecurity disciplines.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="group flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/50 hover:glow-emerald"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 transition-all group-hover:border-primary group-hover:glow-emerald">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-1 font-mono text-base font-bold text-foreground">{cert.name}</h3>
              <p className="mb-1 text-xs text-muted-foreground">{cert.issuer}</p>
              <p className="mb-4 font-mono text-xs text-primary">{cert.date}</p>
              <Button
                variant="outline"
                size="sm"
                className="neon-flicker border-primary/30 font-mono text-xs text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => setSelected(cert)}
              >
                Verify
              </Button>
            </div>
          ))}
        </div>

        {/* Verification Modal */}
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="border-border bg-card">
            <DialogHeader>
              <DialogTitle className="font-mono text-primary">{selected?.name}</DialogTitle>
              <DialogDescription>{selected?.description}</DialogDescription>
            </DialogHeader>
            <div className="space-y-3 pt-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Issuer:</span> {selected?.issuer}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Year:</span> {selected?.date}
              </p>
              <a
                href={selected?.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-flicker inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-mono text-sm font-semibold text-primary-foreground transition-all hover:glow-emerald"
              >
                <ExternalLink className="h-4 w-4" />
                Verify Credential
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;
