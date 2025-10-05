import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Photo */}
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Akshat
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
             I'm a Software Developer
            </p>
            <p className="text-lg text-foreground/80 mb-8 max-w-xl">
              I’m passionate about building elegant, impactful applications and sharing knowledge. 
              From AI agents to large-scale data pipelines, I create solutions that make technology smarter and more accessible.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="gap-2">
                <a href="https://github.com/akshatchhabra" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href="https://linkedin.com/in/akshatchhabra" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              {/* <Button asChild size="lg" variant="outline" className="gap-2">
                <a href="mailto:your.email@example.com">
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
