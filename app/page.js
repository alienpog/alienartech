import AboutSection from "@/Components/AboutSection";
import DownloadCv from "@/Components/DownloadCv";
import Education from "@/Components/Education";
import Footer from "@/Components/Footer";
import GetinTouch from "@/Components/GetinTouch";
import HeroSection from "@/Components/HeroSection";
import NavBar from "@/Components/NavBar";
import OnProduction from "@/Components/OnProduction";
import ProjectHighlights from "@/Components/ProjectHighlights";
import Skills from "@/Components/Skills";
import TechnicalExpertise from "@/Components/TechnicalExpertise";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
   <main>
    <NavBar/>
    <HeroSection/>
    <AboutSection/>
    {/* <TechnicalExpertise/> */}
    <ProjectHighlights/>
    <OnProduction/>
    <Testimonials/>
    <Skills/>
    <DownloadCv/>
    {/* <Education/> */}
    <GetinTouch/>
    <Footer/>
   </main>
  );
}
