import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Info */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Let's Build the Future
                  <span className="block mt-2 bg-gradient-secondary bg-clip-text text-transparent">
                    Together
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Partner with DCx for data-driven solutions that drive sustainable impact across the Mekong region.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Headquarters</div>
                    <div className="text-muted-foreground">Phnom Penh, Cambodia</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">contact@dcx.com.kh</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Connect</div>
                    <div className="text-muted-foreground">Schedule a consultation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - CTA Card */}
            <Card className="p-8 space-y-6 animate-scale-in bg-gradient-hero border-0 text-primary-foreground shadow-glow">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Ready to Transform?</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Explore how DCx can accelerate your digital transformation journey with cutting-edge data analytics, 
                  AI innovation, and blockchain solutions.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 group"
                >
                  Request Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="w-full text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Download Business Plan
                </Button>
              </div>

              <div className="pt-6 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/80">
                  <span className="font-semibold">Dedicated to Data</span>
                  <span className="block mt-1">DCx Co., Ltd. • 2025-2035</span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
