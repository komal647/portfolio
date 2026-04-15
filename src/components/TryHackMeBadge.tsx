import { ExternalLink } from "lucide-react";

const TryHackMeBadge = () => {
  return (
    <section id="tryhackme" className="px-6 py-24">
      <div className="container mx-auto">
        <div className="mb-4 font-mono text-sm text-primary">// TRYHACKME PROFILE</div>
        <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
          Live <span className="text-primary text-glow">Stats</span>
        </h2>
        <p className="mb-8 max-w-xl text-muted-foreground">
          Real-time progress from my TryHackMe training profile.
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
            <iframe
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=4780481"
              className="h-[85px] w-[325px] border-none overflow-hidden"
              scrolling="no"
              title="TryHackMe Profile Badge"
              loading="lazy"
            />
          </div>

          <a
            href="https://tryhackme.com/p/komal7"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-flicker inline-flex items-center gap-2 rounded-md border border-primary/30 px-5 py-2.5 font-mono text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:glow-emerald"
          >
            <ExternalLink className="h-4 w-4" />
            View Full Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default TryHackMeBadge;
