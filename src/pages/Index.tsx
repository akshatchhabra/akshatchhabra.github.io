import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
// import Teaching from "@/components/Teaching";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      {/* <Teaching /> */}
      <Footer />
    </div>
  );
};

export default Index;
