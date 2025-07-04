import Section from './Section';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const projectsData = [
  {
    title: 'TransLRPL',
    description: 'Developed an LLM-based NLP system to enhance the translation of low-resource programming languages in collaboration with IBM Research. Implemented data augmentation techniques, including back-translation, to counter the lack of training data and improve translation accuracy.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'PyTorch', 'HuggingFace', 'LLM'],
    repoUrl: 'https://github.com/akshatchhabra/TransLRPL',
    aiHint: "code editor",
  },
  {
    title: 'The Temple of Light',
    description: 'A puzzle game with the primary goal of imparting fundamental optics concepts to children, it involved solving puzzles that required the strategic arrangement of mirrors and lenses to precisely guide light in the intended direction. The game was written in C# and developed using the Unity Game Engine.',
    image: 'https://placehold.co/600x400.png',
    tags: ['C#', 'Unity'],
    repoUrl: 'https://github.com/akshatchhabra/the_temple_of_light',
    aiHint: "ecommerce website"
  },
  {
    title: 'Shakespeare It!',
    description: 'Built an LLM-powered text style transfer system that transforms modern text into Shakespearean-style writing. Fine-tuned a T5-base transformer model on a non-parallel dataset using inverse paraphrasing to achieve stylistic transformation. (Krishna et. al, 2020)',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'PyTorch', 'HuggingFace', 'LLM'],
    repoUrl: 'https://github.com/akshatchhabra/shakespeare-it',
    aiHint: "mobile app"
  },
];

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader className="p-0">
              <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover" data-ai-hint={project.aiHint}/>
            </CardHeader>
            <CardContent className="flex-1 p-6 space-y-4">
              <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
              </div>
            </CardContent>
            <CardFooter className="p-6 bg-muted/50">
              <div className="flex w-full justify-end gap-4">
                <Button asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Repository
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
