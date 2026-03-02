import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Cpu, Network } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/85" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Icon Set */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <Database className="w-12 h-12 text-secondary animate-float" />
            <Cpu className="w-12 h-12 text-accent animate-float" style={{ animationDelay: '0.5s' }} />
            <Network className="w-12 h-12 text-secondary animate-float" style={{ animationDelay: '1s' }} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Driving Digital Transformation
            <span className="block mt-2 bg-gradient-secondary bg-clip-text text-transparent">
              Across the Mekong Region and Southeast Asia
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            DCx Co., Ltd. is a pioneering data consultancy specializing in AI innovation, 
            blockchain solutions, and digital transformation for agriculture, health, and climate sectors.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="group">
              Explore Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              View Vision 2035
            </Button>
          </div>

          {/* Stats */}
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl whitespace-nowrap font-bold text-secondary">2025-2035</div>
              <div className="text-sm text-primary-foreground/80">Strategic Period</div>
            </div>
            <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-bold text-accent">4</div>
              <div className="text-sm text-primary-foreground/80">Core Services</div>
            </div>
            <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary">3</div>
              <div className="text-sm text-primary-foreground/80">Regional Markets</div>
            </div>
            <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
              <div className="text-4xl md:text-5xl font-bold text-accent">$7.5M</div>
              <div className="text-sm text-primary-foreground/80">Target Revenue 2035</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
