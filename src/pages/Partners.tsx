import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const partners = [
  { name: "Bee Partners", category: "Venture Capital", website: "https://beepartners.vc/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-16-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Berkley SkyDeck", category: "Others, Venture Capital", website: "https://skydeck.berkeley.edu/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-15-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Brex", category: "Service Providers", website: "https://www.brex.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-19-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Cervin Ventures", category: "Venture Capital", website: "https://www.cervin.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-14-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Costanoa Ventures", category: "Venture Capital", website: "https://costanoa.vc/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-13-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "F6S", category: "Corporations, Venture Capital", website: "https://www.f6s.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-31-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "German Accelerator", category: "Others", website: "https://www.germanaccelerator.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-8-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Goodyear", category: "Corporations", website: "https://www.goodyear.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-33-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Homebrew", category: "Venture Capital", website: "https://homebrew.co/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-12-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "InMotion Media", category: "Venture Capital", website: "https://inmotionmm.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-11-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Jaguar Land Rover", category: "Corporations", website: "https://www.jaguarlandrover.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-30-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "NTT", category: "Corporations, Venture Capital", website: "https://group.ntt/en/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-29-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Orrick", category: "Service Providers", website: "https://www.orrick.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-18-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Renault Nissan Mitsubishi", category: "Corporations", website: "https://alliancernm.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-28-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Right Side Capital", category: "Venture Capital", website: "https://www.rightsidecapital.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-10-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Samsung", category: "Corporations", website: "https://www.samsung.com/us/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-27-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Samsung Next", category: "Venture Capital", website: "https://www.samsungnext.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-9-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "ScaleFlex", category: "Others", website: "https://www.scaleflex.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-7-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Silicon Valley Bank", category: "Service Providers", website: "https://www.svb.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-17-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "SK Telecom", category: "Corporations, Venture Capital", website: "https://www.sktelecom.com/index_en.html", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-26-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "SoftBank Telecom", category: "Corporations", website: "https://group.softbank/en/segments/softbank", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-25-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "U.S. Dept of Defense", category: "Corporations", website: "https://www.defense.gov/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-24-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Verizon", category: "Corporations", website: "https://www.verizon.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-22-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Verizon Ventures", category: "Venture Capital", website: "https://www.verizon.com/about", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-23-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Volvo", category: "Corporations, Venture Capital", website: "https://www.volvogroup.com/en/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-21-300x300.png.bv.webp?bv_host=marlvc.com" },
  { name: "Workday", category: "Corporations, Venture Capital", website: "https://www.workday.com/", logo: "https://marlvc.com/wp-content/uploads/al_opt_content/IMAGE/marlvc.com/wp-content/uploads/2025/01/Untitled-design-20-300x300.png.bv.webp?bv_host=marlvc.com" },
];

const partnerCategories = ["Show all", "Corporations", "Venture Capital", "Service Providers", "Others"];

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState("Show all");
  const filteredPartners = activeCategory === "Show all"
    ? partners
    : partners.filter((p) => p.category.includes(activeCategory));

  return (
    <Layout>
      <section className="bg-gradient-to-br from-teal to-teal/80 py-32 lg:py-44">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Our Partners</h1>
            <p className="text-white/90 text-lg leading-relaxed font-medium">
              One of the major strengths of our program is our extensive partners ecosystem. Whether you are a corporation or venture capital firm, our ecosystem provides an opportunity for you to connect and collaborate with our cohort companies and drive mutually beneficial growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {partnerCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-white text-navy-deep/60 hover:text-navy-deep border border-border"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredPartners.map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group bg-white rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="aspect-square bg-white flex items-center justify-center p-6">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-4 border-t border-border">
                  <h3 className="font-display font-bold text-navy-deep text-sm mb-1 flex items-center gap-1">
                    {partner.name}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-xs">{partner.category}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-deep text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Are you ready to build next-gen tech?
          </h2>
          <p className="text-white/50 text-lg mb-8">Application deadline March 20th, 2026 for Cohort 13th</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 rounded-full">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
