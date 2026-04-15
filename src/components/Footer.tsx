import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-border px-6 py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="font-mono text-sm text-muted-foreground">
          &gt;_ Lakshmi Komal Unnam © {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/lakshmi-komal-unnam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:lakshmikomal647@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
