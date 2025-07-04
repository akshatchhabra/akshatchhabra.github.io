import Section from './Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const educationData = [
  {
    institution: 'University of Masschusetts Amherst',
    degree: 'M.S. in Computer Science',
    years: '2022 - 2024',
    details: 'Data Science Concentration',
  },
  {
    institution: 'Vellore Institute of Technology, Vellore',
    degree: 'B.Tech. Information Technology',
    years: '2016 - 2020',
  },
];

export default function EducationSection() {
  return (
    <Section id="education" title="Education" className="bg-background">
      <div className="mx-auto max-w-4xl space-y-8">
        {educationData.map((edu, index) => (
          <Card key={index} className="shadow-lg transition-all hover:shadow-xl">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <CardTitle className="font-headline">{edu.institution}</CardTitle>
                <span className="text-sm font-medium text-primary flex-shrink-0">{edu.years}</span>
              </div>
              <CardDescription className="font-headline font-semibold text-lg pt-1">{edu.degree}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{edu.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
