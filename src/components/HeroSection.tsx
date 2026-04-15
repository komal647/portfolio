import { useState, useEffect } from "react";

const HeroSection = () => {
  const fullText = "Securing the digital frontier.";
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayed(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="w-full max-w-3xl">
        {/* Terminal Window */}
        <div className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "hsl(45, 93%, 47%)" }} />
            <span className="h-3 w-3 rounded-full bg-primary" />
            <span className="ml-4 font-mono text-xs text-muted-foreground">root@cyberfolio:~</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 md:p-10">
            <div className="mb-2 font-mono text-sm text-muted-foreground">$ whoami</div>
            <h1 className="mb-4 font-mono text-3xl font-bold text-primary text-glow md:text-5xl">
              LAKSHMI KOMAL UNNAM
            </h1>

            <div className="mb-2 font-mono text-sm text-muted-foreground">$ cat mission.txt</div>
            <p className="mb-6 font-mono text-lg text-foreground md:text-xl">
              {displayed}
              <span
                className={`ml-1 inline-block w-3 border-b-2 border-primary ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              >
                &nbsp;
              </span>
            </p>

            {/* Status badge */}
            <div className="mb-8 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-sm font-semibold text-primary">Status: Active</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#the-lab"
                className="neon-flicker inline-flex items-center rounded-md border border-primary bg-primary/10 px-6 py-3 font-mono text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:glow-emerald"
              >
                View My Work
              </a>
              <a
                href="#footer"
                className="neon-flicker inline-flex items-center rounded-md border border-border bg-secondary px-6 py-3 font-mono text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
