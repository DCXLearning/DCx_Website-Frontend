import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Lightbulb } from "lucide-react";

const phases = [
  {
    period: "2025-2027",
    title: "Digitalization & Integration",
    icon: Target,
    description: "Upgrade internal systems, launch DCx Academy, and consolidate platforms for Fisheries, Agriculture, and Health data integration.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    period: "2028-2030",
    title: "Intelligence & AI Expansion",
    icon: Lightbulb,
    description: "Integrate machine learning models, real-time analytics dashboards, and develop regional digital partnerships across Vietnam and Thailand.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    period: "2031-2035",
    title: "Decentralization & Growth",
    icon: TrendingUp,
    description: "Implement blockchain-based traceability, decentralized data hubs, and establish DCx as a regional digital transformation leader in ASEAN.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Vision 2035
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our strategic roadmap to become the regional innovation hub for digital transformation and data intelligence
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
                      <span className={`text-sm font-bold ${phase.color} px-3 py-1 rounded-full ${phase.bgColor} border border-current/20`}>
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

        {/* Financial Highlights */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="p-8 bg-gradient-hero border-0 text-primary-foreground animate-scale-in">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-5xl font-bold">60%</div>
                <div className="text-sm opacity-90">Target EBITDA Margin by 2035</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">$7.5M</div>
                <div className="text-sm opacity-90">Projected Revenue 2035</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold">10+</div>
                <div className="text-sm opacity-90">Strategic Growth Years</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;
