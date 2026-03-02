import {Header} from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Vision from "@/components/Vision";
// import RegionalPresence from "@/components/RegionalPresence";
import Academy from "@/components/Academy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutTeamSection from "@/components/About";
import StrategicPartners from "@/components/StrategicPartners";
import LogoSlider from "@/components/LogoSlider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <AboutTeamSection />
        <Vision />
        {/* <RegionalPresence /> */}
        <StrategicPartners />
        <LogoSlider />
        <Academy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
