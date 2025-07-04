import { Code, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6" />
          <p className="text-sm">© {new Date().getFullYear()} Electron Portfolio. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Github className="h-5 w-5" /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}
