import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer II",
    company: "Akamai Technologies",
    period: "September 2025 - Present",
    description: "Developing AI agents and chatbots to automate processes and enhance efficiency across Akamai’s infrastructure.",
    highlights: [
        "Built AI-powered agents to automate internal workflows, saving significant operational time.",
        "Leveraged generative AI to enhance process accuracy and reduce manual intervention.",
        "Collaborated cross-functionally to deploy production-ready automation solutions."
    ],
  },
  {
    title: "Software Engineer",
    company: "OpenReview",
    period: "February 2024 - February 2025",
    description: "Built scalable data pipelines and tools that improved reviewer-paper matching, automated profile management, and integrated plagiarism detection for thousands of conferences.",
    highlights: [
        "Processed 7M+ publications and 3.4M researcher profiles per pipeline run to update publication data and imporve paper matching performance.",
        "Integrated plagiarism detection across 1,500+ conferences.",
        "Reduced customer support workload by 90% via automated profile merging APIs."
    ],
  },
  {
    title: "Data Scientist Intern",
    company: "Microsoft",
    period: "January 2023 - February 2023",
    description: "Open-sourced and automated testing tools for IVRs and chatbots, reducing support workload and streamlining CI/CD processes.",
    highlights: [
        "Decreased support workload by 70% through open-source testing tools.",
        "Implemented CI/CD pipelines to automate builds and streamline testing.",
        "Contributed to conversational AI and natural language understanding tools."
    ],
  },
  {
    title: "Software Engineer",
    company: "JPMorgan Chase & Co.",
    period: "August 2020 - January 2022",
    description: "Enhanced mobile app performance, UI consistency, and API reliability while receiving recognition for outstanding delivery and innovation.",
    highlights: [
        "Improved Android app size by 10% and consolidated reusable UI components.",
        "Increased API reliability from 98% to 99% using Python-based performance tracking.",
        "Awarded Transformer Award for outstanding delivery and performance."
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "JPMorgan Chase & Co.",
    period: "January 2020 - June 2020",
    description: "Developed stress-testing mobile applications that increased app reliability and cut issue resolution time in half.",
    highlights: [
        "Boosted mobile app reliability from 99% to 99.5%.",
        "Captured video recordings of potential crashes to accelerate debugging by 50%.",
        "Received Guards of the Fort Award for initiative and contribution."
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-2xl">{exp.title}</CardTitle>
                  <span className="text-sm text-muted-foreground font-medium">
                    {exp.period}
                  </span>
                </div>
                <CardDescription className="text-base font-medium text-primary">
                  {exp.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/70">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
