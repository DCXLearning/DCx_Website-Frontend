import { useEffect, useState } from "react";
import { Header, type AppLanguage } from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Vision from "@/components/Vision";
import Academy from "@/components/Academy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutTeamSection from "@/components/About";
import StrategicPartners from "@/components/StrategicPartners";
import LogoSlider from "@/components/LogoSlider";
import RegionalMap from "@/components/RegionalMap";

const PAGE_TITLES: Record<AppLanguage, string> = {
  en: "DCx - Data & Technology",
  km: "ឌីស៊ីអិច - ទិន្នន័យ និងបច្ចេកវិទ្យា",
  bn: "DCx Brunei",
  cn: "DCx 数据与技术",
  id: "DCx Data & Teknologi",
  la: "DCx ຂໍ້ມູນແລະເທັກໂນໂລຢີ",
  my: "DCx Data & Teknologi",
  mm: "DCx Data & Technology",
  ph: "DCx Data & Technology",
  sg: "DCx Data & Technology",
  tl: "DCx Data & Technology",
  vn: "DCx Dữ liệu & Công nghệ",
};

const isValidLanguage = (value: string | null): value is AppLanguage => {
  return [
    "en",
    "km",
    "bn",
    "cn",
    "id",
    "la",
    "my",
    "mm",
    "ph",
    "sg",
    "tl",
    "vn",
  ].includes(value || "");
};

const Index = () => {
  const [language, setLanguage] = useState<AppLanguage>("en");
  const [languageReady, setLanguageReady] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("app-language");

    if (isValidLanguage(savedLanguage)) {
      setLanguage(savedLanguage);
    }

    setLanguageReady(true);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[language];
  }, [language]);

  const handleLanguageChange = (lang: AppLanguage) => {
    setLanguage(lang);
    localStorage.setItem("app-language", lang);
  };

  if (!languageReady) return null;

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={handleLanguageChange} />

      <main>
        <Hero language={language} />
        <Services language={language} />
        <Projects language={language} />
        <AboutTeamSection language={language} />
        <Vision language={language} />
        <RegionalMap language={language} />
        <StrategicPartners language={language} />
        <LogoSlider />
        <Academy language={language} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;