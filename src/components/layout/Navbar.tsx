import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Programs",
    href: "/programs",
    dropdown: [
      { label: "Accelerator", href: "/programs" },
      { label: "Studio", href: "/programs#studio" },
      { label: "FAQs", href: "/programs#faqs" },
    ],
  },
  { label: "Verticals", href: "/verticals" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Our Team", href: "/about" },
      { label: "Our Mentors", href: "/about#mentors" },
      { label: "Our Partners", href: "/about#partners" },
    ],
  },
  { label: "Demo Day", href: "/demo-day" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "Blog", href: "/resources" },
      { label: "Podcast", href: "/resources#podcast" },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">M</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-navy-deep font-display font-bold text-xl tracking-[0.15em]">MARL</span>
              <span className="text-navy-deep/50 text-[10px] tracking-[0.1em]">accelerator</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-navy-deep/70 hover:text-navy-deep"
                  )}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} className="opacity-50" />}
                </Link>
                {link.dropdown && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-border py-2 min-w-[180px] z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-navy-deep/70 hover:text-primary hover:bg-muted transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-navy-deep p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium rounded-md transition-colors",
                    location.pathname === link.href
                      ? "text-primary bg-muted"
                      : "text-navy-deep/70 hover:text-navy-deep hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-6 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-navy-deep/50 hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full">
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
