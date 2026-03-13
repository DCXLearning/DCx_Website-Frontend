import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Cpu, Network } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import type { AppLanguage } from "@/components/Header";
import { heroUiText, heroStaticContent } from "@/lib/heroStatic";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://31.97.188.135:8000"
).replace(/\/+$/, "");

const API_TOKEN = import.meta.env.VITE_API_TOKEN || "";

type HeroProps = {
  language: AppLanguage;
};

type ApiLang = "en" | "km";

type BannerItem = {
  id: number;
  title: string;
  details: string;
  file: string | null;
  video_type: string | null;
  youtube_link: string | null;
  link_url: string | null;
  icon: string | null;
};

type BannerResponse = {
  msg: string;
  type: number;
  banners_count: number;
  banners: BannerItem[];
};

const Hero = ({ language }: HeroProps) => {
  const [banner, setBanner] = useState<BannerItem | null>(null);
  const [bgLoaded, setBgLoaded] = useState(false);

  const apiLang: ApiLang = language === "km" ? "km" : "en";
  const ui = heroUiText[language] || heroUiText.en;
  const staticContent = heroStaticContent[language] || heroStaticContent.en;

  useEffect(() => {
    const controller = new AbortController();

    if (language !== "en" && language !== "km") {
      setBanner({
        id: 0,
        title: staticContent.title,
        details: staticContent.description,
        file: null,
        video_type: null,
        youtube_link: null,
        link_url: null,
        icon: null,
      });
      return () => controller.abort();
    }

    const fetchBanner = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/banners/1/${apiLang}`, {
          method: "GET",
          signal: controller.signal,
          headers: {
            Accept: "application/json",
            Authorization: API_TOKEN,
          },
        });

        const raw = await res.text();

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${raw}`);
        }

        const data: BannerResponse = JSON.parse(raw);
        setBanner(data?.banners?.[0] ?? null);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        console.error("Failed to fetch banner:", error);
        setBanner({
          id: 0,
          title: staticContent.title,
          details: staticContent.description,
          file: null,
          video_type: null,
          youtube_link: null,
          link_url: null,
          icon: null,
        });
      }
    };

    if (API_TOKEN) {
      fetchBanner();
    } else {
      setBanner({
        id: 0,
        title: staticContent.title,
        details: staticContent.description,
        file: null,
        video_type: null,
        youtube_link: null,
        link_url: null,
        icon: null,
      });
    }

    return () => controller.abort();
  }, [apiLang, language, staticContent.title, staticContent.description]);

  const titleParts = useMemo(() => {
    const title = banner?.title?.trim() || "";
    if (!title) return { line1: "", line2: "" };

    const words = title.split(/\s+/);
    const middle = Math.ceil(words.length / 2);

    return {
      line1: words.slice(0, middle).join(" "),
      line2: words.slice(middle).join(" "),
    };
  }, [banner?.title]);

  const description = banner?.details || "";
  const backgroundImage = banner?.file || heroBackground;

  useEffect(() => {
    setBgLoaded(false);
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setBgLoaded(true);
    img.onerror = () => setBgLoaded(true);
  }, [backgroundImage]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${bgLoaded ? "opacity-100" : "opacity-95"
          }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/85" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="flex items-center justify-center gap-8 mb-6">
            <Database className="w-12 h-12 text-secondary animate-float" />
            <Cpu className="w-12 h-12 text-accent animate-float" style={{ animationDelay: "0.5s" }} />
            <Network className="w-12 h-12 text-secondary animate-float" style={{ animationDelay: "1s" }} />
          </div>

          {banner && (
            <>
              <h1 className="font-khmer text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                {titleParts.line1}
                {titleParts.line2 ? (
                  <span className="block mt-2 text-white">
                    {titleParts.line2}
                  </span>
                ) : null}
              </h1>

              <p className="font-khmer text-xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {description}
              </p>
            </>
          )}

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="group">
              {ui.button1}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            >
              {ui.button2}
            </Button>
          </div>

          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-5xl whitespace-nowrap font-bold text-secondary">2025-2035</div>
              <div className="text-sm text-primary-foreground/80">{ui.stat1}</div>
            </div>
            <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accent">4</div>
              <div className="text-sm text-primary-foreground/80">{ui.stat2}</div>
            </div>
            <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary">3</div>
              <div className="text-sm text-primary-foreground/80">{ui.stat3}</div>
            </div>
            <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: "0.8s" }}>
              <div className="text-4xl md:text-5xl font-bold text-accent">$7.5M</div>
              <div className="text-sm text-primary-foreground/80">{ui.stat4}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;