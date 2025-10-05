import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "TransLRPL",
    description: "An LLM-based NLP system designed to improve translation for low-resource programming languages using data augmentation and back-translation techniques.",
    technologies: ["Python", "PyTorch", "Transformers", "NLP"],
    liveUrl: "",
    githubUrl: "https://github.com/akshatchhabra/TransLRPL"
  },
  {
    title: "The Temple of Light",
    description: "A puzzle game that teaches fundamental optics concepts through interactive light-based challenges using mirrors and lenses.",
    technologies: ["C#", "Unity", "Game Development"],
    liveUrl: "",
    githubUrl: "https://github.com/akshatchhabra/the_temple_of_light"
  },
  {
    title: "Shakespeare it!",
    description: "An LLM-powered text style transfer system that transforms modern English into Shakespearean-style writing using a fine-tuned T5-base model.",
    technologies: ["Python", "Transformers", "NLP", "PyTorch"],
    liveUrl: "",
    githubUrl: "https://github.com/akshatchhabra/shakespeare-it"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Code2 className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {/* <Button asChild size="sm" className="gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button> */}
                  <Button asChild size="sm" variant="outline" className="gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
