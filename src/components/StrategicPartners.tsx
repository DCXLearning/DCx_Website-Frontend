import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Handshake } from "lucide-react";

type Partner = {
    name: string;
    tagline: string;
    description: string;
    tags: string[];
    url?: string;
};

const partners: Partner[] = [
    {
        name: "Data CoLabX",
        tagline: "“The Power of Data to Drive Innovation & Growth”",
        description:
            "A collaborative data science platform powering innovation and growth through advanced analytics, research partnerships, and capacity building across the Mekong region.",
        tags: ["Data Science", "Collaborative Research", "Innovation"],
        url: "#",
    },
    {
        name: "ADIC — Analyzing Development Issues Centre",
        tagline: "“Remember Your Grassroots”",
        description:
            "Inclusive grassroots research and development project solutions — from the bottom, up. Specializing in stakeholder engagement, data management, and strategic project design.",
        tags: ["Grassroots Research", "Stakeholder Engagement", "Project Design"],
        url: "#",
    },
    {
        name: "Dichi Academy",
        tagline: "“Innovative Tech Talent Training”",
        description:
            "Innovative tech talent training with industry-leading, skill-based programs designed for the 21st-century digital economy. Building the next generation of tech leaders in Cambodia.",
        tags: ["Tech Training", "Digital Skills", "Entrepreneurship"],
        url: "#",
    },
];

const StrategicPartners = () => {
    return (
        <section id="partners" className="py-15 bg-muted/30">
            <div className="container px-4">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm">
                        <Handshake className="h-4 w-4" />
                        Consortium
                    </div>

                    <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
                        Strategic Partners
                    </h2>

                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Working together with trusted partners across data, development, and digital education
                        to deliver lasting impact
                    </p>
                </div>

                {/* ✅ Cards (same height) */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {partners.map((p) => (
                        <Card
                            key={p.name}
                            className="relative overflow-hidden p-8 border-border/60 bg-background rounded-2xl shadow-sm h-full"
                        >
                            {/* top blue line */}
                            <div className="absolute inset-x-0 top-0 h-2 bg-primary" />

                            {/* ✅ flex column + full height */}
                            <div className="flex h-full flex-col">
                                {/* content */}
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                                        <p className="text-sm italic text-muted-foreground">{p.tagline}</p>
                                    </div>

                                    <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {p.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* ✅ push button to bottom */}
                                <div className="pt-6 mt-auto">
                                    <Button variant="outline" className="w-full rounded-xl" asChild>
                                        <a href={p.url || "#"} target="_blank" rel="noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Visit Website
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicPartners;