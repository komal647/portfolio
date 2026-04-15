import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Command Center", href: "#command-center" },
  { label: "Certifications", href: "#certifications" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "The Lab", href: "#the-lab" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="font-mono text-lg font-bold text-primary text-glow">
          &gt;_CYBERFOLIO
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button className="neon-flicker animate-pulse-glow font-mono" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="glass border-t border-border md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button className="neon-flicker font-mono" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
