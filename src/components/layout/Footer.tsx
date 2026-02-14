import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import marlLogo from "@/assets/marl-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted text-navy-deep/70">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center">
              <img src={marlLogo} alt="MARL Accelerator" className="h-8 w-auto" />
            </Link>
            <div className="flex gap-3 pt-2">
              <a href="https://www.linkedin.com/company/marl/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-navy-deep/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-navy-deep/50">
                <Linkedin size={16} />
              </a>
              <a href="https://twitter.com/AcceleratorMarl" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-navy-deep/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-navy-deep/50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            <p className="text-xs">Made with ❤️ in San Francisco, CA</p>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-navy-deep font-display font-semibold text-sm">Programs</h4>
            <div className="space-y-2">
              <Link to="/programs" className="block text-sm hover:text-primary transition-colors">Accelerator</Link>
              <Link to="/programs#studio" className="block text-sm hover:text-primary transition-colors">Studio</Link>
              <Link to="/programs#faqs" className="block text-sm hover:text-primary transition-colors">FAQs</Link>
            </div>
          </div>



          {/* About Us */}
          <div className="space-y-4">
            <h4 className="text-navy-deep font-display font-semibold text-sm">About Us</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm hover:text-primary transition-colors">Our Team</Link>
              <Link to="/about#mentors" className="block text-sm hover:text-primary transition-colors">Our Mentors</Link>
              <Link to="/about#partners" className="block text-sm hover:text-primary transition-colors">Our Partners</Link>
            </div>
          </div>



        </div>

        <div className="mt-12 pt-8 border-t border-navy-deep/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">Copyright © 2025 Marl Accelerator, LLC</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
