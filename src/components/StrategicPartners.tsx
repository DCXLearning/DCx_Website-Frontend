import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Handshake } from "lucide-react";
import type { AppLanguage } from "@/components/Header";
import { apiLangFromApp } from "@/lib/i18n";
import {
    partnersStaticCards,
    partnersStaticHeading,
    type StaticPartnerHeading,
    type StaticPartnerItem,
} from "@/lib/partnersStatic";

const API_BASE_URL = (
    import.meta.env.VITE_API_BASE_URL || "http://31.97.188.135:8000"
).replace(/\/+$/, "");

const API_TOKEN = import.meta.env.VITE_API_TOKEN || "";

type StrategicPartnersProps = {
    language: AppLanguage;
};

type TopicField = {
    title: string;
    value: string;
};

type ApiPartnerTopic = {
    id: number;
    title: string;
    details: string;
    fields?: TopicField[];
    tags?: string[];
};

type PartnersApiResponse = {
    results?: {
        topics?: ApiPartnerTopic[];
    };
};

type Partner = {
    id: number;
    name: string;
    tagline: string;
    description: string;
    tags: string[];
    url?: string;
};

const mapStaticPartners = (items: StaticPartnerItem[]): Partner[] =>
    items.map((item) => ({
        id: item.id,
        name: item.name,
        tagline: item.tagline,
        description: item.description,
        tags: item.tags,
        url: item.url,
    }));

const StrategicPartners = ({ language }: StrategicPartnersProps) => {
    const apiLang = apiLangFromApp(language);

    const staticHeading = useMemo<StaticPartnerHeading>(
        () => partnersStaticHeading[language] || partnersStaticHeading.en,
        [language]
    );

    const staticPartners = useMemo(
        () => mapStaticPartners(partnersStaticCards[language] || partnersStaticCards.en),
        [language]
    );

    const [partners, setPartners] = useState<Partner[]>(staticPartners);
    const [loading, setLoading] = useState(false);

    // cache for EN/KM API result
    const apiCacheRef = useRef<Record<string, Partner[]>>({});

    useEffect(() => {
        // all non-en/km languages use static only
        if (language !== "en" && language !== "km") {
            setPartners(staticPartners);
            setLoading(false);
            return;
        }

        // if cached, use cached data instantly
        if (apiCacheRef.current[language]) {
            setPartners(apiCacheRef.current[language]);
            setLoading(false);
            return;
        }

        const controller = new AbortController();

        const fetchPartners = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `${API_BASE_URL}/api/v1/partners-card/1/${apiLang}`,
                    {
                        headers: {
                            Accept: "application/json",
                            Authorization: API_TOKEN,
                        },
                        signal: controller.signal,
                    }
                );

                if (!res.ok) {
                    throw new Error(`Partners API failed: ${res.status}`);
                }

                const data: PartnersApiResponse = await res.json();
                const topics = data?.results?.topics || [];

                const mapped: Partner[] = topics.map((topic) => {
                    const websiteField = topic.fields?.find((f) => f.title === "Website URL");
                    const subtitleField =
                        topic.fields?.find((f) => f.title === "Subtitle_en") ||
                        topic.fields?.find((f) => f.title === "Subtitle_km");

                    return {
                        id: topic.id,
                        name: topic.title,
                        tagline: subtitleField?.value?.replace(/^"+|"+$/g, "") || "",
                        description: topic.details,
                        tags: topic.tags || [],
                        url: websiteField?.value || "#",
                    };
                });

                apiCacheRef.current[language] = mapped;
                setPartners(mapped);
            } catch (error) {
                console.error("Partners API error:", error);
                setPartners(staticPartners);
            } finally {
                setLoading(false);
            }
        };

        fetchPartners();

        return () => controller.abort();
    }, [language, apiLang, staticPartners]);

    return (
        <section id="partners" className="py-15 bg-muted/30">
            <div className="container px-4">
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm">
                        <Handshake className="h-4 w-4" />
                        {staticHeading.badge}
                    </div>

                    <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                        {staticHeading.title}
                    </h2>

                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {staticHeading.description}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {partners.map((p) => (
                        <Card
                            key={p.id}
                            className="relative overflow-hidden p-8 border-border/60 bg-background rounded-2xl shadow-sm h-full"
                        >
                            <div className="absolute inset-x-0 top-0 h-2 bg-primary" />

                            <div className="flex h-full flex-col">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                                        {!!p.tagline && (
                                            <p className="text-sm italic text-muted-foreground">
                                                {p.tagline}
                                            </p>
                                        )}
                                    </div>

                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {p.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {p.tags.map((tag, idx) => (
                                            <span
                                                key={`${p.id}-${idx}-${tag}`}
                                                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 mt-auto">
                                    <Button variant="outline" className="w-full rounded-xl" asChild>
                                        <a href={p.url || "#"} target="_blank" rel="noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            {staticHeading.visitWebsite}
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {loading && (
                    <p className="text-center text-sm text-muted-foreground mt-6">
                        Loading...
                    </p>
                )}
            </div>
        </section>
    );
};

export default StrategicPartners;