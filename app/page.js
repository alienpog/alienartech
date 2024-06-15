import AboutSection from "@/Components/AboutSection";
import Education from "@/Components/Education";
import Footer from "@/Components/Footer";
import GetinTouch from "@/Components/GetinTouch";
import HeroSection from "@/Components/HeroSection";
import NavBar from "@/Components/NavBar";
import ProjectHighlights from "@/Components/ProjectHighlights";
import Skills from "@/Components/Skills";
import TechnicalExpertise from "@/Components/TechnicalExpertise";

export default function Home() {
  return (
   <main>
    <NavBar/>
    <HeroSection/>
    <AboutSection/>
    <TechnicalExpertise/>
    <ProjectHighlights/>
    <Skills/>
    <Education/>
    <GetinTouch/>
    <Footer/>
   </main>
  );
}
