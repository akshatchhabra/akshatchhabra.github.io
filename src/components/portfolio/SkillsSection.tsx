import Section from './Section';
import { 
  Code, 
  Database, 
  Server, 
  Cog,
  CodeXml,
  AppWindow,
  FlaskConical,
  Box,
  Coffee,
  Network,
  FileJson,
  DatabaseZap,
  GitFork,
  Languages,
  Cloud,
  Triangle,
  GitBranch
} from 'lucide-react';

const skillsData = [
  {
    category: 'Languages',
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'JavaScript', icon: <Triangle className="h-4 w-4 fill-foreground" /> },
      { name: 'Java', icon: <Coffee className="h-4 w-4" /> },
      { name: 'Python', icon: <FileJson className="h-4 w-4" /> }, // Using FileJson as a general script icon
      { name: 'Kotlin', icon: <Network className="h-4 w-4" /> }, // Using Network as Kotlin is often used for Android/backend
      { name: 'C++', icon: <Code className="h-4 w-4" /> },
      { name: 'HTML/CSS', icon: <CodeXml className="h-4 w-4" /> },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <Cog className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Node.js', icon: <Server className="h-4 w-4" /> }, // Server icon for backend Node.js
      { name: 'Django', icon: <AppWindow className="h-4 w-4" /> },
      { name: 'Flask', icon: <FlaskConical className="h-4 w-4" /> }, // Flask icon is perfect for Flask
      { name: 'Express', icon: <Server className="h-4 w-4" /> },
    ],
  },
  {
    category: 'Databases',
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'MySQL', icon: <Database className="h-4 w-4" /> }, // Generic Database icon
      { name: 'MongoDB', icon: <DatabaseZap className="h-4 w-4" /> }, // Database with lightning for NoSQL/speed
    ],
  },
  {
    category: 'Platforms & DevOps',
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: [
      { name: 'Docker', icon: <Box className="h-4 w-4" /> },
      { name: 'Google Cloud Platform (GCP)', icon: <Cloud className="h-4 w-4" /> }, // Cloud icon is appropriate
      { name: 'CI/CD', icon: <GitBranch className="h-4 w-4" /> },
    ],
  },
];


export default function SkillsSection() {
  return (
    <Section id="skills" title="Technical Skills" className="bg-primary/5">
      <div className="max-w-4xl mx-auto space-y-12">
        {skillsData.map((categoryData) => (
          <div key={categoryData.category}>
            <h3 className="flex items-center gap-3 font-headline text-2xl font-semibold mb-6">
              {categoryData.icon}
              {categoryData.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {categoryData.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-primary/10 hover:shadow-md hover:-translate-y-px"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
