import Section from './Section';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const experienceData = [
  {
    company: 'OpenReview',
    role: 'Software Engineer',
    years: 'February 2024 - February 2025',
    description: '- Designed and deployed a cloud-based sync service using Docker, Google Cloud Compute Engine, and Cloud Run. The pipeline processed over 7M publication records and 3.4M researcher profiles from platforms like DBLP on each run to update and enrich OpenReview data, significantly improving the accuracy and efficiency of reviewer-paper matching.\n - Led plagiarism detection integration for OpenReview, enabling 1500+ conferences to verify submissions. Collaborated cross-functionally with stakeholders to align requirements and independently deliver the solution.\n- Reduced the customer support team’s merge request workload by 90% by enhancing OpenReview APIs with automatic profile merging feature.',
  },
  {
    company: 'Microsoft',
    role: 'Data Science Intern',
    years: 'January 2023 - February 2023',
    description: '- Reduced support workload by 70% by open-sourcing a proprietary testing tool for IVRs (Interactive Voice Response) and chatbots built with Nuance Mix, a conversational AI and natural language understanding (NLU) platform, enabling broader use and contributions.\n- Increased test coverage for the tool from 80% to 98% and implemented CI/CD pipelines to automate testing and streamline builds.',
  },
  {
    company: 'JPMorgan Chase & Co',
    role: 'Software Engineer',
    years: 'August 2020 - January 2022',
    description: '- Reduced app size by 10% and enhanced consistency for Chase and JPM Android apps by spearheading platform improvements and leading a UI uplift initiative to consolidate reusable UI components. Explored Jetpack Compose adoption and contributed to migration planning from a Java/XML codebase to Kotlin-based UI architecture.\n- Increased API reliability from 98% to 99% by identifying potential priority 1 incidents and enhancing monitoring with new metrics, through the end-to-end development of a Python-based performance tracking tool.\n- Awarded Transformer Award for outstanding delivery and performance.',
  },
  {
    company: 'JPMorgan Chase & Co',
    role: 'Software Engineer Intern',
    years: 'January 2020 - June 2020',
    description: '- Boosted reliability for Chase and JPMorgan mobile apps from 99% to 99.5% by developing mobile applications (Android and iOS) for stress testing. Utilized Android and iOS SDK tools to capture video recordings of potential crashes, reducing issue resolution time by 50%.\n- The script also recorded videos of crashes to speed up debugging process. The script helped improve stability percentage from 99% to 99.5%.\n- Awarded Guards of the Fort Award for initiative and contribution.',
  },
];

export default function WorkExperienceSection() {
  return (
    <Section id="experience" title="Work Experience" className="bg-primary/5">
      <div className="mx-auto max-w-4xl space-y-8">
        {experienceData.map((job, index) => (
          <Card key={index} className="shadow-lg transition-all hover:shadow-xl">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <CardTitle className="font-headline">{job.role}</CardTitle>
                <span className="text-sm font-medium text-primary flex-shrink-0">{job.years}</span>
              </div>
              <CardDescription className="font-headline font-semibold text-lg pt-1">{job.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                {job.description.split('\n').map((point, i) => (
                  <li key={i}>{point.trim().replace(/^- /, '')}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
