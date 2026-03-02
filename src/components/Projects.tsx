import { Card } from "@/components/ui/card";
import { MapPin, Users, TrendingUp, Calendar } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Data Analytics", "Digital Systems", "Project Consulting", "Research"] as const;
type Category = typeof categories[number];

const projects = [
  {
    title: "Mekong Fisheries Data Platform",
    location: "Cambodia, Laos, Vietnam, Philippines",
    year: "2023-2024",
    description: "Developed a comprehensive fisheries monitoring and data management system for the Mekong River Commission, enabling real-time catch data collection and analysis across four countries.",
    metrics: [
      { label: "Communities Reached", value: "2,500+" },
      { label: "Data Points Collected", value: "1.2M" },
      { label: "Fishers Trained", value: "8,000" },
    ],
    partners: ["Mekong River Commission", "FAO", "WorldFish"],
    category: "Data Analytics",
  },
  {
    title: "Digital Agriculture Extension System",
    location: "Myanmar, Indonesia, Malaysia",
    year: "2022-2024",
    description: "Designed and deployed a mobile-first agricultural extension platform connecting smallholder farmers with real-time market prices, weather data, and expert advisory services.",
    metrics: [
      { label: "Farmers Registered", value: "45,000" },
      { label: "Income Increase", value: "32%" },
      { label: "Advisory Sessions", value: "180K" },
    ],
    partners: ["USAID", "Local Agricultural Ministries"],
    category: "Digital Systems",
  },
  {
    title: "Regional Health M&E Framework",
    location: "Vietnam, Cambodia, Philippines",
    year: "2023-2025",
    description: "Built an integrated monitoring and evaluation system for maternal and child health programs, enabling cross-border health data sharing and coordinated response mechanisms.",
    metrics: [
      { label: "Health Centers", value: "340" },
      { label: "Beneficiaries", value: "500K+" },
      { label: "Response Time", value: "-45%" },
    ],
    partners: ["WHO", "UNICEF", "Ministry of Health"],
    category: "Project Consulting",
  },
  {
    title: "Climate Resilience Data Hub",
    location: "Southeast Asia (6 Countries)",
    year: "2024-Ongoing",
    description: "Creating a regional climate data repository and decision-support system for disaster risk reduction, integrating satellite imagery, ground sensors, and community-based monitoring.",
    metrics: [
      { label: "Data Sources", value: "85+" },
      { label: "Early Warnings", value: "150" },
      { label: "Policy Briefs", value: "24" },
    ],
    partners: ["ASEAN", "ADB", "Climate Analytics"],
    category: "Research",
  },
  {
    title: "Philippines Coastal Resource Management",
    location: "Philippines (Visayas, Mindanao)",
    year: "2023-2024",
    description: "Implemented a digital coastal resource mapping and community-based management system for marine protected areas, integrating GIS data with local governance frameworks.",
    metrics: [
      { label: "MPAs Mapped", value: "120+" },
      { label: "Fisherfolk Engaged", value: "15,000" },
      { label: "Biodiversity Index", value: "+28%" },
    ],
    partners: ["DENR", "BFAR", "Conservation International"],
    category: "Data Analytics",
  },
  {
    title: "Indonesia Palm Oil Traceability Platform",
    location: "Indonesia (Sumatra, Kalimantan)",
    year: "2022-2024",
    description: "Developed blockchain-enabled supply chain traceability system for sustainable palm oil certification, connecting smallholders to international markets with verified sustainability credentials.",
    metrics: [
      { label: "Smallholders Onboarded", value: "8,500" },
      { label: "Hectares Certified", value: "45K" },
      { label: "Premium Access", value: "92%" },
    ],
    partners: ["RSPO", "IDH", "Rainforest Alliance"],
    category: "Digital Systems",
  },
  {
    title: "Malaysia Urban Resilience Initiative",
    location: "Malaysia (Kuala Lumpur, Penang, Johor)",
    year: "2024-Ongoing",
    description: "Designing integrated urban flood management and early warning systems using IoT sensors, predictive analytics, and community alert networks for major Malaysian cities.",
    metrics: [
      { label: "Sensors Deployed", value: "450" },
      { label: "Alert Coverage", value: "3.2M" },
      { label: "Response Time", value: "-60%" },
    ],
    partners: ["NADMA", "World Bank", "UN-Habitat"],
    category: "Research",
  },
  {
    title: "ASEAN Youth Skills Digital Platform",
    location: "Philippines, Indonesia, Malaysia, Vietnam",
    year: "2023-2025",
    description: "Built a regional digital learning platform for youth workforce development, offering certified courses in data analytics, digital marketing, and sustainable agriculture practices.",
    metrics: [
      { label: "Youth Enrolled", value: "125K" },
      { label: "Courses Completed", value: "340K" },
      { label: "Employment Rate", value: "78%" },
    ],
    partners: ["ASEAN Secretariat", "ILO", "Microsoft"],
    category: "Project Consulting",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Projects & Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Delivering measurable impact through data-driven solutions across the Mekong region and Southeast Asia — in partnership with leading development organizations
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg bg-muted p-1 gap-1 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden group hover:shadow-elegant transition-all duration-300 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 space-y-6">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-base">{project.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center space-y-1">
                      <div className="flex items-center justify-center gap-1">
                        <TrendingUp className="w-4 h-4 text-secondary" />
                        <span className="text-xl font-bold text-primary">{metric.value}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Partners */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">Partners:</span>
                    {project.partners.map((partner, idx) => (
                      <span
                        key={partner}
                        className="text-sm text-foreground/80"
                      >
                        {partner}{idx < project.partners.length - 1 ? "," : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "12", label: "Countries Served" },
            { value: "30+", label: "Partner Organizations" },
            { value: "2M+", label: "Lives Impacted" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-muted/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
