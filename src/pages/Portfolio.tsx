import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const companies = [
  { name: "RoboFlow AI", founder: "Alex Chen", vertical: "Robotics", cohort: "2025" },
  { name: "LogiChain", founder: "Sarah Johnson", vertical: "Logistics", cohort: "2025" },
  { name: "CyberShield", founder: "Marcus Williams", vertical: "Cybersecurity", cohort: "2025" },
  { name: "MoveX", founder: "Priya Patel", vertical: "Mobility", cohort: "2024" },
  { name: "ARvision", founder: "David Kim", vertical: "AR / VR", cohort: "2024" },
  { name: "FinStack", founder: "Emma Rodriguez", vertical: "AI", cohort: "2024" },
  { name: "HealthBridge", founder: "James Liu", vertical: "AI", cohort: "2023" },
  { name: "CleanGrid", founder: "Aisha Mohammed", vertical: "Robotics", cohort: "2023" },
  { name: "SecureNet", founder: "Tom Baker", vertical: "Cybersecurity", cohort: "2023" },
  { name: "AutoFleet", founder: "Lisa Wang", vertical: "Mobility", cohort: "2024" },
  { name: "DataMesh", founder: "Ryan O'Brien", vertical: "AI", cohort: "2025" },
  { name: "VRCollab", founder: "Nina Volkov", vertical: "AR / VR", cohort: "2025" },
];

const filters = ["All", "Robotics", "Logistics", "AI", "Cybersecurity", "Mobility", "AR / VR"];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? companies : companies.filter((c) => c.vertical === active);

  return (
    <Layout>
      <section className="bg-navy-deep py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-4">Our Investments</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-primary">Portfolio</span> Companies
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              We've backed 45+ companies across our focus verticals. Here are some of the founders we're proud to support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  active === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                className="group bg-muted rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-navy-deep to-navy flex items-center justify-center">
                  <span className="text-5xl font-display font-bold text-white/10 group-hover:text-primary/20 transition-colors">
                    {company.name.charAt(0)}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-navy-deep text-sm">{company.name}</h3>
                  <p className="text-muted-foreground text-xs">{company.founder}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{company.vertical}</span>
                    <span className="text-xs bg-teal/10 text-teal px-2 py-0.5 rounded-full">{company.cohort}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
