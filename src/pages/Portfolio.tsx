import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const companies = [
  { name: "Advanced Robotics", desc: "Developing a Robotic system to help pharmacy store owners autonomously dispense medications", cohort: "Cohort 1" },
  { name: "AgenQ", desc: "AI-powered customer engagement platform", cohort: "Cohort 12" },
  { name: "AiTS", desc: "AI-powered transportation solutions", cohort: "Cohort 8" },
  { name: "Awayr AI", desc: "AI solutions for spatial computing", cohort: "Cohort 5" },
  { name: "Brand3D", desc: "3D product visualization platform", cohort: "Cohort 7" },
  { name: "Cleanomatics", desc: "Autonomous cleaning solutions", cohort: "Cohort 3" },
  { name: "Digipalz", desc: "Digital education platform", cohort: "Cohort 11" },
  { name: "DisplayRide", desc: "In-vehicle digital display advertising", cohort: "Cohort 9" },
  { name: "eBottli Inc", desc: "AI-powered wine production", cohort: "Cohort 2" },
  { name: "Enhance-VR Inc.", desc: "VR training solutions for enterprises", cohort: "Cohort 1" },
  { name: "FeatherCloud", desc: "Cloud infrastructure optimization", cohort: "Cohort 6" },
  { name: "Finiite Technologies", desc: "AI-powered skincare technology", cohort: "Cohort 4" },
  { name: "Fleksa", desc: "Digital solutions for restaurants", cohort: "Cohort 10" },
  { name: "FlyUpav", desc: "Autonomous aerial vehicle technology", cohort: "Cohort 4" },
  { name: "Haci I-Ness", desc: "Enterprise wellness platform", cohort: "Cohort 5" },
  { name: "Infliction Labs", desc: "AR/VR enterprise solutions", cohort: "Cohort 10" },
  { name: "Knowtified", desc: "Knowledge management platform", cohort: "Cohort 3" },
  { name: "Logiety", desc: "AI-powered logistics optimization", cohort: "Cohort 6" },
  { name: "Macco", desc: "Enterprise communication platform", cohort: "Cohort 2" },
  { name: "Nife Labs", desc: "Edge computing infrastructure", cohort: "Cohort 9" },
  { name: "Pace Robotics", desc: "Industrial robotics solutions", cohort: "Cohort 1" },
  { name: "Parrots Inc.", desc: "AI-powered conversational platform", cohort: "Cohort 4" },
  { name: "Perceive Now", desc: "AI-powered market research", cohort: "Cohort 2" },
  { name: "SafeDeploy", desc: "Secure software deployment", cohort: "Cohort 10" },
  { name: "SenseGrass", desc: "AI-powered precision agriculture", cohort: "Cohort 8" },
  { name: "SpotKwik", desc: "Quick commerce platform", cohort: "Cohort 9" },
  { name: "SportsTrace", desc: "AI-powered sports analytics", cohort: "Cohort 1" },
  { name: "SylLab Systems", desc: "AI language processing systems", cohort: "Cohort 7" },
  { name: "TecTransit", desc: "Smart transit solutions", cohort: "Cohort 10" },
  { name: "TechSelf", desc: "Self-service technology platform", cohort: "Cohort 7" },
  { name: "Thaddeus Medical", desc: "Medical device innovation", cohort: "Cohort 11" },
  { name: "The Merch Kit", desc: "Merchandise management platform", cohort: "Cohort 3" },
  { name: "Tracksracks", desc: "Asset tracking solutions", cohort: "Cohort 11" },
  { name: "Vouchery.io", desc: "Promotional campaign management", cohort: "Cohort 6" },
  { name: "WeConvert", desc: "Conversion optimization platform", cohort: "Cohort 7" },
  { name: "Xiris Corp.", desc: "Machine vision and inspection", cohort: "Cohort 2" },
  { name: "Zeemple", desc: "Enterprise marketplace platform", cohort: "Cohort 9" },
];

const cohorts = ["Show all", "Cohort 1", "Cohort 2", "Cohort 3", "Cohort 4", "Cohort 5", "Cohort 6", "Cohort 7", "Cohort 8", "Cohort 9", "Cohort 10", "Cohort 11", "Cohort 12", "Studio"];

const historyStats = [
  { label: "Companies", value: 70 },
  { label: "Cohorts", value: 12 },
  { label: "Total Portfolio Value", value: 85, prefix: "$", suffix: "M" },
  { label: "Female Founders", value: 25 },
  { label: "People of Color (POCs)", value: 60 },
  { label: "Immigrant Founders", value: 45 },
];

const useCountUp = (end: number, duration: number, start: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);
  return count;
};

const Portfolio = () => {
  const [active, setActive] = useState("Show all");
  const filtered = active === "Show all" ? companies : companies.filter((c) => c.cohort === active);

  return (
    <Layout>
      {/* Teal gradient hero */}
      <section className="bg-gradient-to-br from-teal to-teal/80 py-32 lg:py-44">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              OUR PORTFOLIO
            </h1>
            <p className="text-white/90 text-lg leading-relaxed font-medium">
              We are proud to support founder(s) who are tackling intricate challenges in the fields of Mobility, Autonomy, AR/VR, Robotics, Logistics, Cybersecurity and 5G use cases.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mt-4">
              The list of companies we have previously backed is available below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our History Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep mb-12 text-center">OUR HISTORY</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {historyStats.map((stat, i) => (
              <HistoryStatCard key={i} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Cohort Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {cohorts.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  active === f ? "bg-primary text-primary-foreground" : "bg-white text-navy-deep/60 hover:text-navy-deep border border-border"
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
                transition={{ delay: i * 0.02 }}
                className="group bg-white rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="aspect-square bg-gradient-to-br from-navy-deep to-navy flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-white/10 group-hover:text-primary/20 transition-colors">
                    {company.name.charAt(0)}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-navy-deep text-sm mb-1">{company.name}</h3>
                  <p className="text-muted-foreground text-xs mb-2">{company.desc}</p>
                  <span className="text-xs bg-teal/10 text-teal px-2 py-0.5 rounded-full">{company.cohort}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-deep text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            Are you ready to build next-gen tech?
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Application deadline March 20th, 2026 for Cohort 13th
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 rounded-full">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

const HistoryStatCard = ({ label, value, prefix, suffix, index }: { label: string; value: number; prefix?: string; suffix?: string; index: number }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 1500, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p className="text-navy-deep/50 text-sm mb-2">{label}</p>
      <div className="font-display text-4xl font-bold text-navy-deep">
        {prefix}{count}{suffix}
      </div>
    </div>
  );
};

export default Portfolio;
