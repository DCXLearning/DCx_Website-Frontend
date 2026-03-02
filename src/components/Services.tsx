import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import analyticsImage from "@/assets/service-analytics.png";
import gisImage from "@/assets/download.jpg"; // <-- add this image
import digitalImage from "@/assets/service-digital.png";
import consultingImage from "@/assets/service-blockchain.png";
import academyImage from "@/assets/service-academy.png";

type Service = {
  key: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  cta?: { label: string; href: string };
  span: string; // tailwind grid span
};

const services: Service[] = [
  {
    key: "analytics",
    title: "Data Analytics & Research",
    description:
      "Delivering advanced analytics, policy research, and data-driven insights across the Mekong region, Southeast Asia, and globally. We partner with governments, NGOs, and development agencies to enable evidence-based decision making.",
    image: analyticsImage,
    highlights: [
      "Predictive Analytics",
      "Policy Research",
      "Data Visualization",
      "Impact Assessment",
      "Regional Studies",
    ],
    span: "lg:col-span-6",
  },
  {
    key: "gis",
    title: "GIS & Remote Sensing",
    description:
      "Comprehensive geospatial solutions including satellite imagery analysis, spatial data infrastructure, drone mapping, and interactive web-based GIS platforms. Our deployed GeoNode portal delivers maps, datasets, and geostories for development planning.",
    image: gisImage,
    highlights: ["Satellite Imagery", "Spatial Analysis", "Drone Mapping", "GeoNode Platform", "Web GIS"],
    cta: { label: "Visit GIS Portal", href: "#" },
    span: "lg:col-span-6",
  },
  {
    key: "digital",
    title: "Digital System Design",
    description:
      "Full-stack digital transformation solutions for M&E, ERP, and MIS platforms. Working with international partners and consortiums to build scalable systems that serve communities across borders.",
    image: digitalImage,
    highlights: ["System Architecture", "Cloud Solutions", "API Integration", "Cross-border Systems", "Partner Integration"],
    span: "lg:col-span-4",
  },
  {
    key: "consulting",
    title: "Project Consulting",
    description:
      "Strategic consulting services for development projects spanning the Greater Mekong Sub-region and beyond. We collaborate with multilateral organizations and local partners to design and implement impactful initiatives.",
    image: consultingImage,
    highlights: ["Consortium Management", "Stakeholder Engagement", "Project Design", "M&E Frameworks", "Regional Coordination"],
    span: "lg:col-span-4",
  },
  {
    key: "academy",
    title: "DCx Academy",
    description:
      "Building regional capacity through comprehensive training programs. Empowering professionals across Southeast Asia with skills in data science, digital systems, AI, and emerging technologies.",
    image: academyImage,
    highlights: ["Data Science Training", "AI & ML Workshops", "Digital Skills", "Regional Certification", "Partner Programs"],
    span: "lg:col-span-4",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Data, Digital, Research and Project Consulting Services across the Mekong, Southeast Asia, and the globe — working with partners and consortiums for sustainable development impact
          </p>
        </div>

        {/* Layout like screenshot: 2 cards then 3 cards */}
        <div className="grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.key}
              className={[
                "overflow-hidden bg-card border border-border/60 rounded-2xl",
                "shadow-sm hover:shadow-lg transition-all duration-300",
                "group",
                service.span,
              ].join(" ")}
            >
              {/* Image */}
              <div className="relative h-48 md:h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/15 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 text-xs font-medium rounded-full
                                bg-sky-50 text-sky-700 border border-sky-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {service.cta && (
                  <div className="mt-6">
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full border-border/70 hover:bg-muted"
                    >
                      <a href={service.cta.href} className="inline-flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        {service.cta.label}
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;