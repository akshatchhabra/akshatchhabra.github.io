import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science (Data Science Concentration)",
    institution: "University of Massachusetts Amherst",
    period: "2022 - 2024",
    description: "GPA: 4.0/4.0",
    achievements: [],
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Vellore Institute of Technology",
    period: "2016 - 2020",
    description: "GPA: 9.07/10",
    achievements: [],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold">Education</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-2xl">{edu.degree}</CardTitle>
                  <span className="text-sm text-muted-foreground font-medium">
                    {edu.period}
                  </span>
                </div>
                <CardDescription className="text-base font-medium text-primary">
                  {edu.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{edu.description}</p>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground/70">{achievement}</span>
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

export default Education;
