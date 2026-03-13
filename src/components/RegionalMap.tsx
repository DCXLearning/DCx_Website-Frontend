"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import type { AppLanguage } from "@/components/Header";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    ZoomControl,
    useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const API_BASE_URL = (
    import.meta.env.VITE_API_BASE_URL || "http://31.97.188.135:8000"
).replace(/\/+$/, "");

const API_TOKEN = import.meta.env.VITE_API_TOKEN || "";

type Region = "All Countries" | "Mekong Countries" | "Maritime Southeast Asia";

type RegionalPresenceSectionProps = {
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

type CountryMarker = {
    name: string;
    city: string;
    lat: number;
    lng: number;
    code: string;
    region: Region;
    serviceTitle: {
        en: string;
        km: string;
    };
    serviceDescription: {
        en: string;
        km: string;
    };
};

const fallbackHeading: Record<"en" | "km", SectionHeading> = {
    en: {
        title: "Regional Presence",
        description:
            "Serving the Mekong region and all of Southeast Asia with localized expertise and regional integration across multiple countries.",
    },
    km: {
        title: "វត្តមានក្នុងតំបន់",
        description:
            "ផ្តល់សេវាកម្មទូទាំងតំបន់មេគង្គ និងអាស៊ីអាគ្នេយ៍ ដោយមានជំនាញមូលដ្ឋាន និងសមាហរណកម្មតំបន់នៅក្នុងប្រទេសជាច្រើន។",
    },
};

const tabText = {
    en: {
        all: "All Countries",
        mekong: "Mekong Countries",
        maritime: "Maritime Southeast Asia",
    },
    km: {
        all: "ប្រទេសទាំងអស់",
        mekong: "ប្រទេសមេគង្គ",
        maritime: "អាស៊ីអាគ្នេយ៍តំបន់សមុទ្រ",
    },
} as const;

const COUNTRIES: CountryMarker[] = [
    {
        name: "Cambodia",
        city: "Phnom Penh",
        lat: 11.5564,
        lng: 104.9282,
        code: "kh",
        region: "Mekong Countries",
        serviceTitle: {
            en: "Headquarters & Innovation Hub",
            km: "ទីស្នាក់ការកណ្តាល និងមជ្ឈមណ្ឌលនវានុវត្តន៍",
        },
        serviceDescription: {
            en: "Leading digital transformation initiatives across government ministries and development projects.",
            km: "ដឹកនាំគំនិតផ្តួចផ្តើមបម្លែងឌីជីថលនៅតាមក្រសួង និងគម្រោងអភិវឌ្ឍន៍។",
        },
    },
    {
        name: "Brunei",
        city: "Bandar Seri Begawan",
        lat: 4.9031,
        lng: 114.9398,
        code: "bn",
        region: "Maritime Southeast Asia",
        serviceTitle: {
            en: "Energy & Digital Services",
            km: "សេវាថាមពល និងឌីជីថល",
        },
        serviceDescription: {
            en: "Digital government services and energy sector data management solutions.",
            km: "សេវារដ្ឋាភិបាលឌីជីថល និងដំណោះស្រាយគ្រប់គ្រងទិន្នន័យវិស័យថាមពល។",
        },
    },
    {
        name: "China",
        city: "Lancang-Mekong Region",
        lat: 21.0285,
        lng: 100.8032,
        code: "cn",
        region: "Mekong Countries",
        serviceTitle: {
            en: "Upper Mekong Integration",
            km: "សមាហរណកម្មមេគង្គខាងលើ",
        },
        serviceDescription: {
            en: "Strategic collaboration for cross-border data systems and regional connectivity.",
            km: "កិច្ចសហការយុទ្ធសាស្ត្រសម្រាប់ប្រព័ន្ធទិន្នន័យឆ្លងដែន និងការតភ្ជាប់តំបន់។",
        },
    },
    {
        name: "Indonesia",
        city: "Jakarta",
        lat: -6.2088,
        lng: 106.8456,
        code: "id",
        region: "Maritime Southeast Asia",
        serviceTitle: {
            en: "Supply Chain & Sustainability",
            km: "ខ្សែសង្វាក់ផ្គត់ផ្គង់ និងចីរភាព",
        },
        serviceDescription: {
            en: "Blockchain traceability platforms for sustainable agriculture and palm oil certification.",
            km: "ប្រព័ន្ធតាមដាន Blockchain សម្រាប់កសិកម្មប្រកបដោយចីរភាព និងវិញ្ញាបនបត្រប្រេងដូង។",
        },
    },
    {
        name: "Laos",
        city: "Vientiane",
        lat: 17.9757,
        lng: 102.6331,
        code: "la",
        region: "Mekong Countries",
        serviceTitle: {
            en: "Regional Partnership",
            km: "ភាពជាដៃគូតំបន់",
        },
        serviceDescription: {
            en: "Cross-border agricultural and environmental data integration.",
            km: "សមាហរណកម្មទិន្នន័យកសិកម្ម និងបរិស្ថានឆ្លងដែន។",
        },
    },
    {
        name: "Malaysia",
        city: "Kuala Lumpur",
        lat: 3.139,
        lng: 101.6869,
        code: "my",
        region: "Maritime Southeast Asia",
        serviceTitle: {
            en: "Urban Resilience & IoT",
            km: "ភាពធន់ទីក្រុង និង IoT",
        },
        serviceDescription: {
            en: "Integrated urban flood management, early warning systems, and smart city analytics.",
            km: "ការគ្រប់គ្រងទឹកជំនន់ទីក្រុង ប្រព័ន្ធព្រមានមុន និងវិភាគទីក្រុងឆ្លាតវៃ។",
        },
    },
    {
        name: "Myanmar",
        city: "Yangon",
        lat: 16.8661,
        lng: 96.1951,
        code: "mm",
        region: "Mekong Countries",
        serviceTitle: {
            en: "Digital Infrastructure",
            km: "ហេដ្ឋារចនាសម្ព័ន្ធឌីជីថល",
        },
        serviceDescription: {
            en: "Expanding digital transformation and data analytics capabilities.",
            km: "ពង្រីកសមត្ថភាពបម្លែងឌីជីថល និងវិភាគទិន្នន័យ។",
        },
    },
    {
        name: "Philippines",
        city: "Manila",
        lat: 14.5995,
        lng: 120.9842,
        code: "ph",
        region: "Maritime Southeast Asia",
        serviceTitle: {
            en: "Coastal & Marine Data Systems",
            km: "ប្រព័ន្ធទិន្នន័យឆ្នេរ និងសមុទ្រ",
        },
        serviceDescription: {
            en: "Digital coastal resource management, fisheries monitoring, and community-based marine protection.",
            km: "ការគ្រប់គ្រងធនធានឆ្នេរឌីជីថល ការតាមដានជលផល និងការពារសមុទ្រដោយសហគមន៍។",
        },
    },
    {
        name: "Singapore",
        city: "Singapore",
        lat: 1.3521,
        lng: 103.8198,
        code: "sg",
        region: "Maritime Southeast Asia",
        serviceTitle: {
            en: "Finance & Technology Hub",
            km: "មជ្ឈមណ្ឌលហិរញ្ញវត្ថុ និងបច្ចេកវិទ្យា",
        },
        serviceDescription: {
            en: "Fintech partnerships, regional data governance frameworks, and innovation networking.",
            km: "ភាពជាដៃគូ Fintech ក្របខណ្ឌអភិបាលកិច្ចទិន្នន័យតំបន់ និងបណ្តាញនវានុវត្តន៍។",
        },
    },
    {
        name: "Timor-Leste",
        city: "Dili",
        lat: -8.5569,
        lng: 125.5603,
        code: "tl",
        region: "Maritime Southeast Asia",
        serviceTitle: {
            en: "Emerging Data Systems",
            km: "ប្រព័ន្ធទិន្នន័យកំពុងរីកចម្រើន",
        },
        serviceDescription: {
            en: "Supporting data infrastructure development and capacity building for the newest Southeast Asian nation.",
            km: "គាំទ្រការអភិវឌ្ឍហេដ្ឋារចនាសម្ព័ន្ធទិន្នន័យ និងការកសាងសមត្ថភាព។",
        },
    },
    {
        name: "Vietnam",
        city: "Ho Chi Minh City",
        lat: 10.8231,
        lng: 106.6297,
        code: "vn",
        region: "Mekong Countries",
        serviceTitle: {
            en: "Strategic Partnership Zone",
            km: "តំបន់ភាពជាដៃគូយុទ្ធសាស្ត្រ",
        },
        serviceDescription: {
            en: "Developing cross-border data systems and agricultural value chain solutions.",
            km: "អភិវឌ្ឍប្រព័ន្ធទិន្នន័យឆ្លងដែន និងដំណោះស្រាយខ្សែសង្វាក់តម្លៃកសិកម្ម។",
        },
    },
];

function flagIcon(code: string) {
    return L.divIcon({
        className: "",
        html: `
      <div style="
        width:42px;
        height:42px;
        border-radius:9999px;
        background:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        box-shadow:0 10px 20px rgba(0,0,0,0.15);
        border:2px solid #fff;
      ">
        <img
          src="https://flagcdn.com/w80/${code}.png"
          style="width:34px;height:34px;border-radius:9999px;object-fit:cover"
        />
      </div>
    `,
        iconSize: [42, 42],
        iconAnchor: [21, 42],
        popupAnchor: [0, -42],
    });
}

function FlyToCountry({
    country,
    markerRefs,
}: {
    country: CountryMarker | null;
    markerRefs: React.MutableRefObject<Record<string, L.Marker | null>>;
}) {
    const map = useMap();

    useEffect(() => {
        if (!country) return;

        map.flyTo([country.lat, country.lng], 6, {
            duration: 1.5,
        });

        const marker = markerRefs.current[country.code];
        if (marker) {
            setTimeout(() => {
                marker.openPopup();
            }, 700);
        }
    }, [country, map, markerRefs]);

    return null;
}

export default function RegionalPresenceSection({
    language,
}: RegionalPresenceSectionProps) {
    const [activeTab, setActiveTab] = useState<Region>("All Countries");
    const [heading, setHeading] = useState<SectionHeading>(fallbackHeading.en);
    const [selectedCountry, setSelectedCountry] = useState<CountryMarker | null>(null);

    const markerRefs = useRef<Record<string, L.Marker | null>>({});

    const apiLang: "en" | "km" = language === "km" ? "km" : "en";
    const center: [number, number] = [10, 105];
    const labels = apiLang === "km" ? tabText.km : tabText.en;

    const tabs: Array<{ label: string; value: Region }> = [
        { label: labels.all, value: "All Countries" },
        { label: labels.mekong, value: "Mekong Countries" },
        { label: labels.maritime, value: "Maritime Southeast Asia" },
    ];

    useEffect(() => {
        const controller = new AbortController();

        const fetchRegionalHeader = async () => {
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

                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}: ${raw}`);
                }

                const data: HeaderResponse = JSON.parse(raw);
                const regionalTopic =
                    data?.results?.topics?.find((topic) => topic.id === 680) ?? null;

                if (regionalTopic) {
                    setHeading({
                        title: regionalTopic.title || fallbackHeading[apiLang].title,
                        description: regionalTopic.details || fallbackHeading[apiLang].description,
                    });
                } else {
                    setHeading(fallbackHeading[apiLang]);
                }
            } catch (error) {
                if (error instanceof Error && error.name === "AbortError") return;
                console.error("Failed to fetch regional header:", error);
                setHeading(fallbackHeading[apiLang]);
            }
        };

        if (API_TOKEN) {
            fetchRegionalHeader();
        } else {
            setHeading(fallbackHeading[apiLang]);
        }

        return () => controller.abort();
    }, [apiLang]);

    const filtered = useMemo(() => {
        if (activeTab === "All Countries") return COUNTRIES;
        return COUNTRIES.filter((c) => c.region === activeTab);
    }, [activeTab]);

    const icons = useMemo(() => {
        const m = new Map<string, L.DivIcon>();
        for (const c of COUNTRIES) {
            m.set(c.code, flagIcon(c.code));
        }
        return m;
    }, []);

    useEffect(() => {
        if (!filtered.find((c) => c.code === selectedCountry?.code)) {
            setSelectedCountry(null);
        }
    }, [filtered, selectedCountry]);

    const handleShowOnMap = (country: CountryMarker) => {
        setSelectedCountry(country);

        const mapSection = document.getElementById("regional-map");
        if (mapSection) {
            mapSection.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    return (
        <section id="presence" className="w-full bg-[#f5f7fb] py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
                        {heading.title}
                    </h2>

                    <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                        {heading.description}
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-gray-200/70 backdrop-blur p-1.5 rounded-full shadow-inner flex-wrap gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.value}
                                type="button"
                                onClick={() => setActiveTab(tab.value)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === tab.value
                                        ? "bg-blue-800 text-white shadow"
                                        : "text-gray-600 hover:text-blue-800"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    id="regional-map"
                    className="bg-white rounded-2xl border p-2 border-gray-200 shadow-lg overflow-hidden mb-10"
                >
                    <div className="h-[520px] w-full">
                        <MapContainer
                            center={center}
                            zoom={5}
                            zoomControl={false}
                            scrollWheelZoom
                            className="h-full w-full rounded-2xl"
                        >
                            <ZoomControl position="topleft" />

                            <TileLayer
                                attribution="&copy; OpenStreetMap contributors"
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <FlyToCountry country={selectedCountry} markerRefs={markerRefs} />

                            {filtered.map((c) => (
                                <Marker
                                    key={c.code}
                                    position={[c.lat, c.lng]}
                                    icon={icons.get(c.code)!}
                                    ref={(ref) => {
                                        markerRefs.current[c.code] = ref;
                                    }}
                                >
                                    <Popup>
                                        <div className="min-w-[180px]">
                                            <div className="text-sm font-semibold">{c.name}</div>
                                            <div className="text-xs text-gray-500 mt-1">{c.city}</div>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filtered.map((country) => {
                        const isActive = selectedCountry?.code === country.code;

                        return (
                            <button
                                key={country.code}
                                type="button"
                                onClick={() => handleShowOnMap(country)}
                                className={`text-left bg-white rounded-2xl p-5 shadow-sm transition-all border cursor-pointer hover:shadow-md hover:-translate-y-0.5 ${isActive
                                        ? "border-blue-400 ring-2 ring-blue-200"
                                        : "border-gray-200"
                                    }`}
                            >
                                <div className="flex items-start gap-3 mb-4">
                                    <img
                                        src={`https://flagcdn.com/w80/${country.code}.png`}
                                        alt={country.name}
                                        className="w-10 h-10 rounded-full object-cover border border-gray-300"
                                    />

                                    <div>
                                        <h3 className="text-[15px] font-bold text-gray-900 leading-tight">
                                            {country.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">{country.city}</p>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-4">
                                    <h4 className="text-sm font-semibold text-blue-700 mb-3">
                                        {country.serviceTitle[apiLang]}
                                    </h4>

                                    <p className="text-sm text-gray-600 leading-6">
                                        {country.serviceDescription[apiLang]}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}