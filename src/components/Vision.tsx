import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Lightbulb } from "lucide-react";
import type { AppLanguage } from "@/components/Header";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://31.97.188.135:8000"
).replace(/\/+$/, "");

const API_TOKEN = import.meta.env.VITE_API_TOKEN || "";

type VisionProps = {
  language: AppLanguage;
};

type HeaderTopic = {
  id: number;
  title: string;
  details: string;
};

type HeaderResponse = {
  route: string;
  results: {
    msg: string;
    section_id: number;
    section_title: string;
    type: number;
    topics_count: number;
    topics: HeaderTopic[];
  };
};

type SectionHeading = {
  title: string;
  description: string;
};

const fallbackHeading: Record<"en" | "km", SectionHeading> = {
  en: {
    title: "Vision 2035",
    description:
      "Our strategic roadmap to become the regional innovation hub for digital transformation and data intelligence",
  },
  km: {
    title: "ចក្ខុវិស័យ 20350",
    description:
      "ផែនទីបង្ហាញផ្លូវយុទ្ធសាស្ត្ររបស់យើង ដើម្បីក្លាយជាមជ្ឈមណ្ឌលនវានុវត្តន៍តំបន់សម្រាប់ការបម្លែងឌីជីថល និងភាពវៃឆ្លាតទិន្នន័យ",
  },
};

const phaseText = {
  en: {
    phases: [
      {
        period: "2025-2027",
        title: "Digitalization & Integration",
        description:
          "Upgrade internal systems, launch DCx Academy, and consolidate platforms for Fisheries, Agriculture, and Health data integration.",
      },
      {
        period: "2028-2030",
        title: "Intelligence & AI Expansion",
        description:
          "Integrate machine learning models, real-time analytics dashboards, and develop regional digital partnerships across Vietnam and Thailand.",
      },
      {
        period: "2031-2035",
        title: "Decentralization & Growth",
        description:
          "Implement blockchain-based traceability, decentralized data hubs, and establish DCx as a regional digital transformation leader in ASEAN.",
      },
    ],
    stats: {
      ebitda: "Target EBITDA Margin by 2035",
      revenue: "Projected Revenue 2035",
      years: "Strategic Growth Years",
    },
  },
  km: {
    phases: [
      {
        period: "2025-2027",
        title: "ឌីជីថលកម្ម និងសមាហរណកម្ម",
        description:
          "ធ្វើបច្ចុប្បន្នភាពប្រព័ន្ធខាងក្នុង បើកដំណើរការ DCx Academy និងបង្រួបបង្រួមវេទិកាសម្រាប់ការរួមបញ្ចូលទិន្នន័យផ្នែកជលផល កសិកម្ម និងសុខាភិបាល។",
      },
      {
        period: "2028-2030",
        title: "ការពង្រីកភាពវៃឆ្លាត និង AI",
        description:
          "រួមបញ្ចូលម៉ូដែល machine learning ផ្ទាំងគ្រប់គ្រងវិភាគទិន្នន័យពេលវេលាពិត និងអភិវឌ្ឍភាពជាដៃគូឌីជីថលក្នុងតំបន់។",
      },
      {
        period: "2031-2035",
        title: "ការវិមជ្ឈការ និងកំណើន",
        description:
          "អនុវត្តដំណោះស្រាយតាមដានដោយ blockchain មជ្ឈមណ្ឌលទិន្នន័យវិមជ្ឈការ និងបង្កើត DCx ជាអ្នកដឹកនាំការបម្លែងឌីជីថលក្នុងតំបន់អាស៊ាន។",
      },
    ],
    stats: {
      ebitda: "គោលដៅ EBITDA នៅឆ្នាំ 2035",
      revenue: "ចំណូលព្យាករណ៍ឆ្នាំ 2035",
      years: "ឆ្នាំកំណើនយុទ្ធសាស្ត្រ",
    },
  },
} as const;

const Vision = ({ language }: VisionProps) => {
  const [heading, setHeading] = useState<SectionHeading>(fallbackHeading.en);

  const apiLang: "en" | "km" = language === "km" ? "km" : "en";
  const text = apiLang === "km" ? phaseText.km : phaseText.en;

  const phases = [
    {
      ...text.phases[0],
      icon: Target,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      ...text.phases[1],
      icon: Lightbulb,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      ...text.phases[2],
      icon: TrendingUp,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  useEffect(() => {
    const controller = new AbortController();

    const fetchVisionHeader = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/header/${apiLang}`, {
          method: "GET",
          signal: controller.signal,
          headers: {
            Accept: "application/json",
            Authorization: API_TOKEN,
          },
        });

        const raw = await res.text();
        console.log("Vision header response:", raw);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${raw}`);
        }

        const data: HeaderResponse = JSON.parse(raw);
        const visionTopic =
          data?.results?.topics?.find((topic) => topic.id === 679) ?? null;

        if (visionTopic) {
          setHeading({
            title: visionTopic.title || fallbackHeading[apiLang].title,
            description: visionTopic.details || fallbackHeading[apiLang].description,
          });
        } else {
          setHeading(fallbackHeading[apiLang]);
        }
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        console.error("Failed to fetch vision header:", error);
        setHeading(fallbackHeading[apiLang]);
      }
    };

    if (API_TOKEN) {
      fetchVisionHeader();
    } else {
      console.error("Missing VITE_API_TOKEN in .env");
      setHeading(fallbackHeading[apiLang]);
    }

    return () => controller.abort();
  }, [apiLang]);

  return (
    <section id="vision" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            {heading.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {heading.description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <Card
                key={phase.period}
                className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in-up border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`p-4 rounded-xl ${phase.bgColor} shrink-0`}>
                    <Icon className={`w-8 h-8 ${phase.color}`} />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                      <span
                        className={`text-sm font-bold ${phase.color} px-3 py-1 rounded-full ${phase.bgColor} border border-current/20`}
                      >
                        {phase.period}
                      </span>
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="p-8 bg-gradient-hero border-0 text-primary-foreground animate-scale-in">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-5xl font-bold">60%</div>
                <div className="text-sm opacity-90">{text.stats.ebitda}</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">$7.5M</div>
                <div className="text-sm opacity-90">{text.stats.revenue}</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">10+</div>
                <div className="text-sm opacity-90">{text.stats.years}</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;