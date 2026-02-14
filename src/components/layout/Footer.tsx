import { Link } from "react-router-dom";
import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">V</span>
              </div>
              <span className="text-white font-display font-bold text-xl tracking-tight">
                VENTURE<span className="text-primary">LAB</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Investing in the next generation of founders reshaping the world of enterprise technology.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider">Programs</h4>
            <div className="space-y-2">
              <Link to="/programs" className="block text-sm hover:text-white transition-colors">Accelerator Program</Link>
              <Link to="/verticals" className="block text-sm hover:text-white transition-colors">Investment Verticals</Link>
              <Link to="/demo-day" className="block text-sm hover:text-white transition-colors">Demo Day</Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider">Company</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm hover:text-white transition-colors">About Us</Link>
              <Link to="/portfolio" className="block text-sm hover:text-white transition-colors">Portfolio</Link>
              <Link to="/resources" className="block text-sm hover:text-white transition-colors">Resources</Link>
            </div>
          </div>

          {/* Apply */}
          <div className="space-y-4">
            <h4 className="text-white font-display font-semibold text-sm uppercase tracking-wider">Get Started</h4>
            <div className="space-y-2">
              <Link to="/apply" className="block text-sm hover:text-white transition-colors">Apply Now</Link>
              <a href="mailto:hello@venturelab.com" className="block text-sm hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2026 VentureLab. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
