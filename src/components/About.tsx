import React, { useMemo, useState } from "react";

/* ================= IMAGE IMPORTS ================= */
import sovann from "@/assets/team/dane.png";
import virak from "@/assets/team/virat.png";
import lina from "@/assets/team/Chhc (2).png";
import mai from "@/assets/team/ratana.png";
import rattana from "@/assets/team/Leanghour.jpg";
import duc from "@/assets/team/vichea.jpg";
import khamlaImg from "@/assets/team/sela.jpg";
import aungImg from "@/assets/team/photo_2024-08-14_11-27-02.jpg";

/* ================= TYPES ================= */
type TeamCategory = "All" | "Head Office" | "Country Office" | "Project Based";
type TeamBadge = Exclude<TeamCategory, "All">;

type TeamMember = {
    id: number;
    name: string;
    role: string;

    /** for filter tabs */
    category: TeamBadge;

    /** multiple badges */
    badges: TeamBadge[];

    description: string; // short
    more?: string; // long
    projects?: string[];
    imageUrl?: string; // Vite => string URL
};

/* ================= DATA ================= */
const teamMembers: TeamMember[] = [
    // ====== Head Office ======
    {
        id: 1,
        name: "Dr. So Dane",
        role: "Founder & Regional Executive Director",
        category: "Head Office",
        badges: ["Head Office"],
        description: "With over 25 years of experience in data systems With over 25 years of experience in data systems...",
        more:
            "With over 25 years of experience in data systems and international development, Dr. Dane founded DCx to bridge the digital divide across the Mekong region.",
        projects: ["Mekong Fisheries Data Platform", "Climate Resilience Data Hub"],
        imageUrl: sovann,
    },
    {
        id: 2,
        name: "Virath",
        role: "Senior Product Manager",
        category: "Head Office",
        badges: ["Head Office"],
        description: "Leads DCx’s technology vision...",
        more:
            "Leads DCx’s technology vision and delivery. Experienced in product strategy, roadmap planning, and stakeholder coordination.",
        projects: ["Digital Platforms", "Product Roadmaps"],
        imageUrl: virak,
    },
    {
        id: 3,
        name: "Chamroeun",
        role: "General Coordinator",
        category: "Head Office",
        badges: ["Head Office"],
        description: "Oversees operational excellence...",
        more:
            "Oversees operational excellence across DCx offices, supporting planning, coordination, and delivery with partners.",
        projects: ["Operations Excellence", "Regional Coordination"],
        imageUrl: lina,
    },
    {
        id: 4,
        name: "Ratana",
        role: "Junior Software Developer",
        category: "Head Office",
        badges: ["Head Office"],
        description: "Supports development and system implementation...",
        more:
            "Supports software development, testing, and implementation across internal products and partner systems.",
        projects: ["Web Apps", "API Integration"],
        imageUrl: mai,
    },
    {
        id: 5,
        name: "LeangHour",
        role: "Junior Software Developer",
        category: "Head Office",
        badges: ["Head Office"],
        description: "Assists with frontend and backend development...",
        more:
            "Assists with feature development and maintenance across platforms, with focus on quality and delivery speed.",
        projects: ["UI Components", "Backend Services"],
        imageUrl: rattana,
    },

    // ====== Country Office (with photos) ======
    {
        id: 6,
        name: "Vichea",
        role: "Junior Software Developer",
        category: "Country Office",
        badges: ["Country Office"],
        description: "Supports DCx Vietnam delivery and implementation...",
        more:
            "Supports delivery and implementation activities, assisting in software tasks and project coordination.",
        projects: ["Country Delivery", "Implementation Support"],
        imageUrl: duc,
    },
    {
        id: 7,
        name: "OrngkeaSela",
        role: "Intern",
        category: "Country Office",
        badges: ["Country Office"],
        description: "Supports Laos office activities and data tasks...",
        more:
            "Supports Laos office activities including documentation, data tasks, and coordination support.",
        projects: ["Field Support", "Data Entry"],
        imageUrl: khamlaImg,
    },
    {
        id: 8,
        name: "Nimol",
        role: "Intern",
        category: "Country Office",
        badges: ["Country Office"],
        description: "Supports Myanmar activities and coordination...",
        more:
            "Supports Myanmar country activities with operational and program coordination assistance.",
        projects: ["Program Support"],
        imageUrl: aungImg,
    },

    // ====== Country Office (initials only) ======
    {
        id: 9,
        name: "Khamla Phommachak",
        role: "Managing Director, Laos",
        category: "Country Office",
        badges: ["Country Office"],
        description:
            "Heads DCx Laos operations with deep expertise in rural development data systems and cross-border collaboration",
        projects: ["Rural Data Systems", "Cross-border Collaboration"],
    },
    {
        id: 10,
        name: "Aung Zaw Win",
        role: "Managing Director, Myanmar",
        category: "Country Office",
        badges: ["Country Office"],
        description:
            "Directs DCx Myanmar with a focus on resilient data infrastructure and community-based monitoring programs",
        projects: ["Resilient Data Infrastructure", "Community Monitoring"],
    },
    {
        id: 11,
        name: "Siriporn Chaiyasit",
        role: "Managing Director, Thailand",
        category: "Country Office",
        badges: ["Country Office"],
        description:
            "Manages DCx Thailand’s strategic partnerships and innovation programs, leveraging Thailand’s tech ecosystem",
        projects: ["Strategic Partnerships", "Innovation Programs"],
    },

    // ====== Project Based (2 badges) ======
    {
        id: 12,
        name: "Carlo Reyes",
        role: "Senior Data Analyst",
        category: "Project Based",
        badges: ["Country Office", "Project Based"],
        description:
            "Specializes in coastal and fisheries data analytics with 8 years of field experience across the Visayas and Mindanao",
        projects: ["Coastal Analytics", "Fisheries Data"],
    },
    {
        id: 13,
        name: "Dewi Hartono",
        role: "Blockchain & Supply Chain Lead",
        category: "Project Based",
        badges: ["Country Office", "Project Based"],
        description:
            "Leads blockchain-based traceability solutions with expertise in agricultural supply chains and sustainability certification",
        projects: ["Indonesia Palm Oil Traceability Platform", "Digital Agriculture Extension System"],
    },
    {
        id: 14,
        name: "Ahmad Razak",
        role: "Urban Resilience Specialist",
        category: "Project Based",
        badges: ["Country Office", "Project Based"],
        description:
            "Expert in IoT-based urban monitoring and predictive analytics for disaster risk reduction in rapidly urbanizing contexts",
        projects: ["Urban Monitoring", "Disaster Risk Reduction"],
    },
];

/* ================= HELPERS ================= */
function getInitials(name: string) {
    const parts = name.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? "";
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
    return (first + last).toUpperCase();
}

function Tabs({
    value,
    onChange,
}: {
    value: TeamCategory;
    onChange: (v: TeamCategory) => void;
}) {
    const tabs: TeamCategory[] = ["All", "Head Office", "Country Office", "Project Based"];

    return (
        <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center rounded-full bg-slate-100 p-1">
                {tabs.map((t) => {
                    const active = value === t;
                    return (
                        <button
                            key={t}
                            type="button"
                            onClick={() => onChange(t)}
                            className={[
                                "rounded-full px-5 py-2 text-sm font-semibold transition",
                                active ? "bg-blue-700 text-white shadow-sm" : "text-slate-600 hover:text-slate-900",
                            ].join(" ")}
                        >
                            {t}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function Badge({ label }: { label: TeamBadge }) {
    const cls =
        label === "Head Office"
            ? "bg-blue-50 text-blue-700"
            : label === "Country Office"
                ? "bg-slate-100 text-slate-700"
                : "bg-emerald-50 text-emerald-700";

    return (
        <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${cls}`}>
            {label}
        </span>
    );
}

/* ================= CARD ================= */
function TeamCard({ m }: { m: TeamMember }) {
    const [open, setOpen] = useState(false);
    const expandedText = m.more ?? m.description;

    return (
        <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            {/* pb-10 makes space for absolute button */}
            <div className="flex h-full flex-col items-center text-center pb-10">
                {/* avatar */}
                <div className="mb-4 h-20 w-20 overflow-hidden rounded-full bg-slate-100 ring-4 ring-white">
                    {m.imageUrl ? (
                        <img src={m.imageUrl} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-sm font-extrabold text-blue-700">
                            {getInitials(m.name)}
                        </div>
                    )}
                </div>

                <h3 className="text-[15px] font-semibold text-slate-900">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold text-blue-700">{m.role}</p>

                {/* badges */}
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {m.badges.map((b, idx) => (
                        <Badge key={`${b}-${idx}`} label={b} />
                    ))}
                </div>

                {/* body */}
                <div className="mt-4 w-full flex-1">
                    <p className={`text-xs leading-relaxed text-slate-500 ${open ? "" : "line-clamp-2"}`}>
                        {open ? expandedText : m.description}
                    </p>

                    {open && (m.projects?.length ?? 0) > 0 && (
                        <div className="mt-6 border-t border-slate-100 pt-5">
                            <div className="text-[11px] font-bold tracking-widest text-slate-400">PROJECTS</div>

                            <div className="mt-3 flex flex-wrap justify-center gap-2">
                                {m.projects!.map((p, idx) => (
                                    <span
                                        key={idx}
                                        className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700"
                                    >
                                        {p}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ✅ button always bottom center */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold text-blue-700 hover:underline"
            >
                {open ? "Show less" : "Read more"}
            </button>
        </div>
    );
}

/* ================= MAIN ================= */
export default function AboutTeamSection() {
    const [filter, setFilter] = useState<TeamCategory>("All");

    const filtered = useMemo(() => {
        if (filter === "All") return teamMembers;
        return teamMembers.filter((m) => m.category === filter);
    }, [filter]);

    return (
        <section id="about" className="bg-white py-20">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-center text-4xl font-extrabold text-blue-700 md:text-5xl">
                    About DCx &amp; Our Team
                </h2>

                <p className="mx-auto mt-4 max-w-4xl text-center text-base text-slate-500 md:text-lg">
                    A regionally integrated team designed for localized impact and cross-border collaboration
                    across the Mekong and Southeast Asia
                </p>

                <Tabs value={filter} onChange={setFilter} />

                <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((m) => (
                        <TeamCard key={m.id} m={m} />
                    ))}
                </div>
            </div>
        </section>
    );
}