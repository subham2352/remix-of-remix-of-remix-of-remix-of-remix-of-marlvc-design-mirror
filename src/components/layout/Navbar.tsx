import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Programs",
    href: "/programs",
  },
  {
    label: "Verticals",
    href: "/verticals",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Demo Day",
    href: "/demo-day",
  },
  {
    label: "Resources",
    href: "/resources",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">V</span>
            </div>
            <span className="text-white font-display font-bold text-xl tracking-tight">
              VENTURE<span className="text-primary">LAB</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy-deep border-t border-white/10">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-white/5"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Link to="/apply" onClick={() => setIsOpen(false)}>Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
