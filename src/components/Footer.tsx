import { Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-xl font-bold text-secondary-foreground">DC</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-none">DCx Co., Ltd.</span>
                  <span className="text-xs opacity-80">Dedicated to Data</span>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Leading digital transformation and AI innovation across the Mekong region.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Data Analytics & Research</li>
                <li>Digital System Design</li>
                <li>Blockchain Solutions</li>
                <li>DCx Academy</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>About DCx</li>
                <li>Vision 2035</li>
                <li>Regional Presence</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 opacity-80">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Phnom Penh, Cambodia</span>
                </li>
                <li className="flex items-start gap-2 opacity-80">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>contact@dcx.com.kh</span>
                </li>
                <li className="flex items-start gap-2">
                  <Linkedin className="w-4 h-4 mt-0.5 shrink-0 opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
                  <span className="opacity-80 hover:opacity-100 transition-opacity cursor-pointer">Connect on LinkedIn</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
              <div>
                © {currentYear} DCx Co., Ltd. All rights reserved.
              </div>
              <div className="flex gap-6">
                <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
