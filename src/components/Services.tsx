import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import type { AppLanguage } from "@/components/Header";
import { apiLangFromApp, servicesText } from "@/lib/i18n";
import {
  servicesStaticCards,
  servicesStaticHeading,
  type StaticServiceItem,
} from "@/lib/servicesStatic";

import analyticsImage from "@/assets/service-analytics.png";
import gisImage from "@/assets/download.jpg";
import digitalImage from "@/assets/service-digital.png";
import consultingImage from "@/assets/service-blockchain.png";
import academyImage from "@/assets/service-academy.png";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://31.97.188.135:8000"
).replace(/\/+$/, "");

const API_TOKEN = import.meta.env.VITE_API_TOKEN || "";

type ServicesProps = {
  language: AppLanguage;
};

type HeaderTopic = {
  id: number;
  title: string;
  details: string;
};

type HeaderResponse = {
  results: {
    topics: HeaderTopic[];
  };
};

type TopicField = {
  title: string;
  value: string;
};

type CardTopic = {
  id: number;
  title: string;
  details: string;
  photo_file?: string;
  fields?: TopicField[];
  tags?: string[];
};

type CardsResponse = {
  results: {
    topics: CardTopic[];
  };
};

type Service = {
  id: number;
  title: string;
  description: string;
  image?: string;
  highlights: string[];
  link?: string;
};

const localImageById: Record<number, string> = {
  675: analyticsImage,
  676: gisImage,
  677: digitalImage,
  684: consultingImage,
  685: academyImage,
};

const Services = ({ language }: ServicesProps) => {
  const apiLang = apiLangFromApp(language);
  const t = servicesText[language];

  const [heading, setHeading] = useState({
    title: "",
    description: "",
  });

  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const mapStaticCards = (cards: StaticServiceItem[]): Service[] =>
      cards.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        highlights: item.highlights,
        link: item.link,
        image: localImageById[item.id],
      }));

    if (language !== "en" && language !== "km") {
      setHeading(servicesStaticHeading[language]);
      setServices(mapStaticCards(servicesStaticCards[language] || []));
      return () => controller.abort();
    }

    const fetchHeader = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/header/${apiLang}`, {
          headers: {
            Accept: "application/json",
            Authorization: API_TOKEN,
          },
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`Header API failed: ${res.status}`);
        }

        const data: HeaderResponse = await res.json();
        const topic = data?.results?.topics?.[0];

        if (topic) {
          setHeading({
            title: topic.title,
            description: topic.details,
          });
        }
      } catch (err) {
        console.error("Header API error:", err);
        setHeading({
          title: "Our Core Services",
          description:
            "Data, digital, research and project consulting services across the Mekong region and Southeast Asia.",
        });
      }
    };

    const fetchCards = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/v1/cards/${apiLang}`, {
          headers: {
            Accept: "application/json",
            Authorization: API_TOKEN,
          },
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`Cards API failed: ${res.status}`);
        }

        const data: CardsResponse = await res.json();

        const mapped: Service[] =
          data?.results?.topics?.map((topic) => {
            const linkField = topic.fields?.find((f) => f.title === "Link URL");

            return {
              id: topic.id,
              title: topic.title,
              description: topic.details,
              image: topic.photo_file || localImageById[topic.id],
              highlights: topic.tags || [],
              link: linkField?.value,
            };
          }) || [];

        setServices(mapped);
      } catch (err) {
        console.error("Cards API error:", err);
        setServices([]);
      }
    };

    fetchHeader();
    fetchCards();

    return () => controller.abort();
  }, [language, apiLang]);

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {heading.title}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {heading.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const spanClass = index < 2 ? "lg:col-span-6" : "lg:col-span-4";

            return (
              <Card
                key={service.id}
                className={`overflow-hidden rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 ${spanClass}`}
              >
                {service.image && (
                  <div className="h-48 md:h-52 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      onError={(e) => {
                        const img = e.currentTarget;
                        const fallback = localImageById[service.id];
                        if (fallback && img.src !== fallback) {
                          img.src = fallback;
                        }
                      }}
                    />
                  </div>
                )}

                <div className="p-7 md:p-8 space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-primary">
                    {service.title}
                  </h3>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-sky-50 text-sky-700 rounded-full border border-sky-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {service.link && (
                    <div className="pt-2">
                      <Button asChild variant="outline" className="rounded-full">
                        <a href={service.link} target="_blank" rel="noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t.visitPortal}
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;