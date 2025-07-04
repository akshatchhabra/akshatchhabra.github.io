import Section from './Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const teachingData = [
  {
    institution: 'University of Massachusetts Amherst',
    course: 'Teaching Assistant, COMPSCI 515 - Algorithms, Game Theory, and Fairness,',
    years: 'Fall 2023'
  },
  {
    institution: 'University of Massachusetts Amherst',
    course: 'Teaching Assistant, COMPSCI 514 - Algorithms for Data Science, Spring 2023',
    years: 'Spring 2023'
  },
];

export default function TeachingSection() {
  return (
    <Section id="teaching" title="Teaching">
      <div className="mx-auto max-w-4xl space-y-8">
        {teachingData.map((item, index) => (
          <Card key={index} className="shadow-lg transition-all hover:shadow-xl">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <CardTitle className="font-headline">{item.course}</CardTitle>
                <span className="text-sm font-medium text-primary flex-shrink-0">{item.years}</span>
              </div>
              <CardDescription className="font-headline font-semibold pt-1">{item.institution}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
