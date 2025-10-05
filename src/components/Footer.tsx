import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-secondary/20 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/akshatchhabra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/akshatchhabra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            {/* <a
              href="mailto:your.email@example.com"
              className="text-foreground/60 hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a> */}
          </div>
          <p className="text-foreground/60 text-sm text-center">
            © {new Date().getFullYear()} Akshat Chhabra. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
