import Header from '@/components/portfolio/Header';
import IntroSection from '@/components/portfolio/IntroSection';
import EducationSection from '@/components/portfolio/EducationSection';
import WorkExperienceSection from '@/components/portfolio/WorkExperienceSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import TeachingSection from '@/components/portfolio/TeachingSection';
// import BlogSection from '@/components/portfolio/BlogSection';
import Footer from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <IntroSection />
        <EducationSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <TeachingSection />
        {/* <BlogSection /> */}
      </main>
      <Footer />
    </div>
  );
}
