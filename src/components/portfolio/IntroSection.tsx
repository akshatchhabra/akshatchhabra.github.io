import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin } from 'lucide-react';

export default function IntroSection() {
  return (
    <section id="intro" className="py-24 md:py-32 bg-primary/5">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6">
        <div className="space-y-6 text-center">
          <Avatar className="mx-auto h-48 w-48">
            <AvatarImage src="https://placehold.co/200x200.png" alt="Akshat Chhabra" data-ai-hint="person headshot"/>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Akshat Chhabra
            </h1>
            <p className="font-headline text-2xl font-semibold text-primary">
              Software Engineer
            </p>
          </div>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            I am a passionate and creative software engineer with a knack for building beautiful,
            user-centric applications. I love turning complex problems into simple, elegant solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Contact Me</Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
           <div className="flex justify-center space-x-4 mt-4">
              <a href="https://github.com/akshatchhabra" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Github className="h-7 w-7" /></a>
              <a href="https://www.linkedin.com/in/akshatchhabra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin className="h-7 w-7" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
