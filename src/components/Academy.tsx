import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Brain,
  Shield,
} from "lucide-react";
import type { AppLanguage } from "@/components/Header";
import { apiLangFromApp } from "@/lib/i18n";
import {
  academyHeroImage,
  academyStaticHeading,
  academyStaticPrograms,
  type StaticAcademyHeading,
  type StaticAcademyProgram,
} from "@/lib/academyStatic";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://31.97.188.135:8000"
).replace(/\/+$/, "");

const API_TOKEN = import.meta.env.VITE_API_TOKEN || "";

type AcademyProps = {
  language: AppLanguage;
};

type TopicField = {
  title: string;
  value: string;
};

type ApiAcademyTopic = {
  id: number;
  title: string;
  details: string;
  photo_file?: string | null;
  fields?: TopicField[];
};

type AcademyApiResponse = {
  results?: {
    topics?: ApiAcademyTopic[];
  };
};

type Program = {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  duration: string;
  image?: string;
};

const iconById: Record<number, React.ComponentType<{ className?: string }>> = {
  756: Brain,
  757: BookOpen,
  758: Shield,
  759: Award,
};

const fallbackIconOrder = [Brain, BookOpen, Shield, Award];

const mapStaticPrograms = (items: StaticAcademyProgram[]): Program[] =>
  items.map((item, index) => ({
    id: item.id,
    icon: iconById[item.id] || fallbackIconOrder[index] || Brain,
    title: item.title,
    description: item.description,
    duration: item.duration,
    image: item.image,
  }));

const Academy = ({ language }: AcademyProps) => {
  const apiLang = apiLangFromApp(language);

  const staticHeading = useMemo<StaticAcademyHeading>(
    () => academyStaticHeading[language] || academyStaticHeading.en,
    [language]
  );

  const staticPrograms = useMemo(
    () => mapStaticPrograms(
      academyStaticPrograms[language] || academyStaticPrograms.en
    ),
    [language]
  );

  const [programs, setPrograms] = useState<Program[]>(staticPrograms);
  const [loading, setLoading] = useState(false);

  const cacheRef = useRef<Record<string, Program[]>>({});

  useEffect(() => {
    if (language !== "en" && language !== "km") {
      setPrograms(staticPrograms);
      setLoading(false);
      return;
    }

    if (cacheRef.current[language]) {
      setPrograms(cacheRef.current[language]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchAcademy = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${API_BASE_URL}/api/v1/building-digital-capacity/1/${apiLang}`,
          {
            headers: {
              Accept: "application/json",
              Authorization: API_TOKEN,
            },
            signal: controller.signal,
          }
        );

        if (!res.ok) {
          throw new Error(`Academy API failed: ${res.status}`);
        }

        const data: AcademyApiResponse = await res.json();
        const topics = data?.results?.topics || [];

        const mapped: Program[] = topics
          .slice()
          .reverse()
          .map((topic, index) => {
            const durationField = topic.fields?.find(
              (f) => f.title === "Duration"
            );

            return {
              id: topic.id,
              icon: iconById[topic.id] || fallbackIconOrder[index] || Brain,
              title: topic.title,
              description: topic.details,
              duration: durationField?.value || "",
              image: topic.photo_file || academyHeroImage,
            };
          });

        cacheRef.current[language] = mapped;
        setPrograms(mapped);
      } catch (error) {
        console.error("Academy API error:", error);
        setPrograms(staticPrograms);
      } finally {
        setLoading(false);
      }
    };

    fetchAcademy();

    return () => controller.abort();
  }, [language, apiLang, staticPrograms]);

  return (
    <section id="academy" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <GraduationCap className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">
              {staticHeading.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            {staticHeading.title}
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {staticHeading.description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={academyHeroImage}
                alt={staticHeading.badge}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 text-primary-foreground flex-wrap">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-semibold">
                      {staticHeading.trained}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-semibold">
                      {staticHeading.certified}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card
                  key={program.id}
                  className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-5">
                    <div className="p-3 rounded-lg bg-accent/10 w-fit">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-bold text-xl leading-tight">
                        {program.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <span className="text-sm font-semibold text-primary">
                        {staticHeading.durationLabel}: {program.duration}
                      </span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-primary border-0 animate-scale-in">
          <div className="text-primary-foreground space-y-6">
            <h3 className="text-3xl font-bold">{staticHeading.readyTitle}</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {staticHeading.readyDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="shadow-elegant">
                {staticHeading.viewPrograms}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
              >
                {staticHeading.applyNow}
              </Button>
            </div>
          </div>
        </Card>

        {loading && (
          <p className="text-center text-sm text-muted-foreground mt-6">
            Loading...
          </p>
        )}
      </div>
    </section>
  );
};

export default Academy;