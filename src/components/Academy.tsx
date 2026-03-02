import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, BookOpen, Brain, Shield } from "lucide-react";
import academyImage from "@/assets/service-academy.png";

const programs = [
  {
    icon: Brain,
    title: "Data Science & Analytics",
    description: "Master statistical analysis, data visualization, and predictive modeling",
    duration: "12 weeks",
  },
  {
    icon: BookOpen,
    title: "Digital Systems Development",
    description: "Full-stack development, database design, and cloud architecture",
    duration: "16 weeks",
  },
  {
    icon: Shield,
    title: "AI & Machine Learning",
    description: "Deep learning, neural networks, and intelligent automation",
    duration: "14 weeks",
  },
  {
    icon: Award,
    title: "Blockchain Technology",
    description: "Smart contracts, distributed systems, and decentralized applications",
    duration: "10 weeks",
  },
];

const Academy = () => {
  return (
    <section id="academy" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <GraduationCap className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">DCx Academy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Building Digital Capacity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering the next generation of data scientists, engineers, and digital leaders across the Mekong region
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={academyImage}
                alt="DCx Academy"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 text-primary-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-semibold">500+ Trained</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-semibold">Industry Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card
                  key={program.title}
                  className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in-up border-border/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-5">
                    <div className="p-3 rounded-lg bg-accent/10 w-fit">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-bold text-xl leading-tight">{program.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <span className="text-sm font-semibold text-primary">
                        Duration: {program.duration}
                      </span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="max-w-4xl mx-auto p-12 text-center bg-gradient-primary border-0 animate-scale-in">
          <div className="text-primary-foreground space-y-6">
            <h3 className="text-3xl font-bold">Ready to Build Your Digital Future?</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join our next cohort and gain the skills needed to drive digital transformation in your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="shadow-elegant">
                View Programs
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                Apply Now
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Academy;