import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { headerText } from "@/lib/i18n";

import englishFlag from "@/assets/english.png";
import cambodiaFlag from "@/assets/cambodia.png";
import bruneiFlag from "@/assets/brunei.png";
import chinaFlag from "@/assets/china.png";
import indonesiaFlag from "@/assets/indonesia.png";
import laosFlag from "@/assets/laos.png";
import malaysiaFlag from "@/assets/malaysia.png";
import myanmarFlag from "@/assets/myanmar.png";
import philippinesFlag from "@/assets/Philippines.png";
import singaporeFlag from "@/assets/singapore.png";
import timorFlag from "@/assets/timor-lest.png";
import vietnamFlag from "@/assets/vietnam.png";

export type AppLanguage =
  | "en"
  | "km"
  | "bn"
  | "cn"
  | "id"
  | "la"
  | "my"
  | "mm"
  | "ph"
  | "sg"
  | "tl"
  | "vn";

type Language = {
  code: AppLanguage;
  name: string;
  sub: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", name: "English", sub: "English", flag: englishFlag },
  { code: "km", name: "Cambodia", sub: "ខ្មែរ", flag: cambodiaFlag },
  { code: "bn", name: "Brunei", sub: "Brunei Malay", flag: bruneiFlag },
  { code: "cn", name: "China", sub: "中文", flag: chinaFlag },
  { code: "id", name: "Indonesia", sub: "Bahasa Indonesia", flag: indonesiaFlag },
  { code: "la", name: "Laos", sub: "ລາວ", flag: laosFlag },
  { code: "my", name: "Malaysia", sub: "Malaysia", flag: malaysiaFlag },
  { code: "mm", name: "Myanmar", sub: "Myanmar", flag: myanmarFlag },
  { code: "ph", name: "Philippines", sub: "Philippines", flag: philippinesFlag },
  { code: "sg", name: "Singapore", sub: "Singapore", flag: singaporeFlag },
  { code: "tl", name: "Timor-leste", sub: "Timor Leste", flag: timorFlag },
  { code: "vn", name: "Vietnam", sub: "Vietnam", flag: vietnamFlag },
];

type HeaderProps = {
  language: AppLanguage;
  onLanguageChange: (lang: AppLanguage) => void;
};

export const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const active = languages.find((lang) => lang.code === language) || languages[0];
  const t = headerText[language];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
              <span className="text-xl font-bold text-white">DC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">{t.company}</span>
              <span className="text-xs text-gray-500">{t.subtitle}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-[17px] font-medium hover:text-blue-500">{t.navServices}</a>
            <a href="#about" className="text-[17px] font-medium hover:text-blue-500">{t.navAbout}</a>
            <a href="#vision" className="text-[17px] font-medium hover:text-blue-500">{t.navVision}</a>
            <a href="#presence" className="text-[17px] font-medium hover:text-blue-500">{t.navPresence}</a>
            <a href="#academy" className="text-[17px] font-medium hover:text-blue-500">{t.navAcademy}</a>
          </nav>

          <div className="flex items-center gap-3 relative" ref={ref}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-full hover:bg-gray-100"
            >
              <img src={active.flag} alt={active.name} className="w-5 h-5 rounded-full" />
              <Globe className="w-4 h-4" />
            </button>

            {open && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg overflow-hidden z-50">
                <div className="max-h-64 overflow-y-auto">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 px-4 py-3 hover:bg-gray-100 text-left ${
                        active.code === lang.code ? "bg-gray-50" : ""
                      }`}
                    >
                      <img src={lang.flag} alt={lang.name} className="w-6 h-6 rounded-full" />
                      <div className="flex flex-col">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-xs text-gray-500">{lang.sub}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button className="hidden md:inline-flex">{t.cta}</Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="flex flex-col px-4 py-4 gap-3">
              <a onClick={() => setMobileOpen(false)} href="#services" className="text-sm">{t.navServices}</a>
              <a onClick={() => setMobileOpen(false)} href="#about" className="text-sm">{t.navAbout}</a>
              <a onClick={() => setMobileOpen(false)} href="#vision" className="text-sm">{t.navVision}</a>
              <a onClick={() => setMobileOpen(false)} href="#presence" className="text-sm">{t.navPresence}</a>
              <a onClick={() => setMobileOpen(false)} href="#academy" className="text-sm">{t.navAcademy}</a>
              <Button className="mt-2 w-full">{t.cta}</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};