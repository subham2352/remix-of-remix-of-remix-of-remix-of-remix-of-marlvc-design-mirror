import Layout from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const companies = [
  { name: "Advanced Robotics", desc: "Developing a Robotic system to help pharmacy store owners autonomously dispense medications", cohort: "Cohort 1" },
  { name: "AgenQ", desc: "AI-Powered assistant that integrates into enterprise software to guide users step-by-step through complex workflows", cohort: "Cohort 12" },
  { name: "AgileAI Labs", desc: "AI-Assisted Software Defect Prevention Platform that automates the SDLC process", cohort: "Cohort 12" },
  { name: "Agpreneur", desc: "Supports African farmers with AI-driven farming insights and input-based credit", cohort: "Cohort 11" },
  { name: "Aikenist", desc: "AI tech platform to optimize end-to-end Radiology process including scan acquisition and analysis", cohort: "Cohort 11" },
  { name: "AIOHub", desc: "AI-powered matchmaking system that delivers a personalized gaming experience", cohort: "Cohort 9" },
  { name: "AiTS", desc: "Simplifying AI deployment in the EDGE with effective software toolset and integrated platform", cohort: "Cohort 8" },
  { name: "AllayAI", desc: "Healthcare partner powered by AI to reduce administrative burdens and ensure clear communication", cohort: "Cohort 12" },
  { name: "Anthromind", desc: "Provides data needed for LLM finetuning or training, synthetic or vetted by subject matter experts", cohort: "Cohort 12" },
  { name: "Arishti Cyber Tech", desc: "Secure quantum-powered messaging platform for consent-based communication", cohort: "Cohort 12" },
  { name: "Aryav", desc: "Atmospheric water generating machine which generates pure, alkaline and mineral rich drinking water from air", cohort: "Cohort 10" },
  { name: "Awayr AI", desc: "Builds domain-specific software products for modeling human-machine interaction", cohort: "Cohort 5" },
  { name: "BAGGR", desc: "All-in-one multi-carrier shipping & logistics platform for e-com businesses", cohort: "Cohort 10" },
  { name: "Baja AI", desc: "On-demand personal transportation service with electric quad-cycles for door-to-door commutes", cohort: "Cohort 9" },
  { name: "Beepy", desc: "Online platform for ideal moving services with real-time quotation", cohort: "Cohort 7" },
  { name: "BetaLife", desc: "Leveraging AI to optimize and bolster timely access to life-saving products across Africa", cohort: "Cohort 10" },
  { name: "BLDX", desc: "AI-powered construction SaaS platform for project scheduling, document management, and progress tracking", cohort: "Cohort 12" },
  { name: "Brand3D", desc: "Bridging the gap between 2D and immersive 3D experiences", cohort: "Cohort 7" },
  { name: "Brick", desc: "AI-native platform transforming how real estate investors source, analyze, and close deals", cohort: "Cohort 12" },
  { name: "Buildly.io", desc: "Helps teams build products fast with translation of non-technical requirements to technical tasks", cohort: "Cohort 8" },
  { name: "bundleIQ", desc: "AI-powered knowledge assistant helping people access valuable insights as they work", cohort: "Cohort 7" },
  { name: "Buzzable", desc: "AI-powered event engagement platform connecting sponsors, organizers, and attendees", cohort: "Cohort 11" },
  { name: "Casy", desc: "Full self-driving project management system designed for small teams—no PM needed", cohort: "Cohort 12" },
  { name: "Choira Music Tech", desc: "Digital eco-system for musicians to collaborate online and create industry-level music", cohort: "Cohort 8" },
  { name: "Cleanomatics", desc: "Door-step on-demand laundry services for Millennials & Gen-Z", cohort: "Cohort 3" },
  { name: "CodeData", desc: "AI-powered recommendation and optimization platform for manufacturing operations", cohort: "Cohort 11" },
  { name: "Concussion Rx", desc: "AI-powered concussion care with 99% accurate subtyping and treatment plans", cohort: "Cohort 12" },
  { name: "CUSHY Technologies", desc: "Multi-layer AI agents tailored for crypto marketing and analytics", cohort: "Cohort 12" },
  { name: "Databloom AI", desc: "Leading contributor to Apache Wayang, working on AI-focused data mesh platform", cohort: "Cohort 7" },
  { name: "Digipalz", desc: "Gamified platform that teaches kids cyber safety through interactive simulations", cohort: "Cohort 11" },
  { name: "Digital Keys", desc: "Complete end-to-end 5G IoT smart access control solutions for industrial use", cohort: "Cohort 6" },
  { name: "DisplayRide", desc: "Purpose-designed solution for ride-share safety leveraging AI/ML", cohort: "Cohort 9" },
  { name: "eBottli Inc", desc: "IoT solution platform to improve food and wine traceability in the supply chain", cohort: "Cohort 2" },
  { name: "EinMind", desc: "AI powered medical coding platform for healthcare providers", cohort: "Cohort 11" },
  { name: "Enhance-VR Inc.", desc: "Virtual training platform reduces lost-time accidents in warehouses through VR", cohort: "Cohort 1" },
  { name: "EventXR", desc: "AI-powered 3D/AR visualization platform transforming the wedding industry", cohort: "Cohort 12" },
  { name: "FeatherCloud", desc: "AI-based robot focused on cleaning public areas with UV-C tech", cohort: "Cohort 6" },
  { name: "Finiite Technologies Inc.", desc: "AI/computer vision platform enabling personalized online retail experience", cohort: "Cohort 4" },
  { name: "Fleksa", desc: "Digital marketing and ordering solutions for brick and mortar restaurants", cohort: "Cohort 10" },
  { name: "FlyUpav", desc: "Autonomous aerial vehicle technology", cohort: "Cohort 4" },
  { name: "GabbGlobal", desc: "Metaverse for language learning with complete immersive programs", cohort: "Cohort 8" },
  { name: "Gear App", desc: "Real-time mobile barcoding inventory asset tracker with AI and blockchain", cohort: "Cohort 11" },
  { name: "GynEcho", desc: "AI-powered fetal ultrasound solution making prenatal care accessible anywhere", cohort: "Cohort 12" },
  { name: "HouseStay", desc: "Curated selection of fully furnished turnkey apartments for 30+ night rentals", cohort: "Cohort 5" },
  { name: "HyperSpec", desc: "High precision 3D maps and Digital Twins for Geospatial B2B", cohort: "Cohort 6" },
  { name: "I-ness", desc: "Enterprise platform creating data twins of commercial buildings using sensor systems", cohort: "Cohort 5" },
  { name: "Infiction Labs", desc: "Autonomous robotic solutions for cleaning and maintaining solar power plants", cohort: "Cohort 10" },
  { name: "JustiGuide", desc: "AI-powered platform expediting the immigration process for US citizenship seekers", cohort: "Cohort 11" },
  { name: "Ketchel Axle", desc: "Innovative electric axle systems for heavy-duty vehicles", cohort: "Cohort 10" },
  { name: "Knowtified", desc: "AI & augmented reality platform for enterprise learning, safety and knowledge transfer", cohort: "Cohort 3" },
  { name: "KrosAI", desc: "AI-powered multilingual APIs and voice agents for low-resource languages", cohort: "Cohort 12" },
  { name: "Labops", desc: "AI-powered platform for the medical industry providing tailored health advice", cohort: "Cohort 11" },
  { name: "Lantern", desc: "AI search intelligence platform for brand visibility across AI engines like ChatGPT", cohort: "Cohort 12" },
  { name: "Livert", desc: "Platform to group online purchases for free and ecological delivery", cohort: "Cohort 7" },
  { name: "Logiety", desc: "SaaS platform to ease imports/exports between USMCA partners and Latin America", cohort: "Cohort 6" },
  { name: "Macco", desc: "Robot-as-a-service for the hospitality industry", cohort: "Cohort 2" },
  { name: "MachPhy Solutions", desc: "Helping businesses save money on cold chain operations", cohort: "Cohort 9" },
  { name: "Mesina Labs", desc: "Platform to create and launch voice agents for non-English languages", cohort: "Cohort 12" },
  { name: "MiniMines Cleantech", desc: "Sustainably recycling Lithium Ion batteries to close the supply chain loop", cohort: "Cohort 9" },
  { name: "Mobbit", desc: "Online platform for ideal moving services with real-time quotation", cohort: "Cohort 7" },
  { name: "Nexuscale", desc: "Autonomous AI platform handling the entire sales cycle with 17 AI agents", cohort: "Cohort 12" },
  { name: "Nife Labs", desc: "Enterprise application deployment and orchestration platform aggregating CDNs and ISPs", cohort: "Cohort 9" },
  { name: "NULLZEC", desc: "Enterprise AI browser preventing cyberattacks through total isolation", cohort: "Cohort 12" },
  { name: "Omnia", desc: "Marketplace for AR creators to share work, find clients and other creators", cohort: "Cohort 6" },
  { name: "Pace Robotics", desc: "Modular Autonomous Robots as a service for construction—plastering, putty and painting", cohort: "Cohort 1" },
  { name: "Parrots Inc.", desc: "AI/ML platform giving smart voice and telecare to people with neurological disorders", cohort: "Cohort 4" },
  { name: "PCI Oasis", desc: "AI-driven compliance solution for PCI 6.4.3 and 11.6.1 standards", cohort: "Cohort 12" },
  { name: "Perceive Now", desc: "AI dashboard for business and research intelligence from millions of scholarly outputs", cohort: "Cohort 2" },
  { name: "pixmap", desc: "Machine Learning & Computer Vision algorithms providing visual attention insights", cohort: "Cohort 6" },
  { name: "RUN Technologies", desc: "Logistics tech building robust rider infrastructure for last-mile delivery", cohort: "Cohort 10" },
  { name: "SafeDeploy", desc: "Fault-free software update platform tracking software reliability in real time", cohort: "Cohort 10" },
  { name: "Salezilla", desc: "AI-powered outbound marketing campaigns and sales data generation", cohort: "Cohort 8" },
  { name: "SensAble", desc: "AI and wearables enhancing accessibility for the blind and visually impaired", cohort: "Cohort 11" },
  { name: "SenseGrass", desc: "Soil Intelligence Platform with patented Autonomous rover + AI for crop optimization", cohort: "Cohort 8" },
  { name: "SitePace.ai", desc: "Digital twins of construction projects using 360-camera for virtual management", cohort: "Cohort 9" },
  { name: "Splitz", desc: "Platform helping artists track their work and revenue in one place", cohort: "Cohort 8" },
  { name: "SportsTrace", desc: "AI-powered sports analytics platform", cohort: "Cohort 1" },
  { name: "Storychat", desc: "Mobile platform for interactive AI storytelling with crypto-based monetization", cohort: "Cohort 12" },
  { name: "Supista", desc: "AI-powered ERP automating business processes with real-time dashboards", cohort: "Cohort 12" },
  { name: "SylLab Systems Inc.", desc: "Embedded compliance for enterprise data security through Cryptography-as-a-Service", cohort: "Cohort 7" },
  { name: "Tausi", desc: "Beauty tech platform leveraging AI for personalized beauty and grooming services", cohort: "Cohort 10" },
  { name: "TeamCal AI", desc: "AI Powered Scheduling Software for Enterprise", cohort: "Cohort 9" },
  { name: "TecTransit", desc: "ML-based Intelligent Dispatching Solution for the transportation industry", cohort: "Cohort 10" },
  { name: "TechSelf", desc: "Self-service technology platform", cohort: "Cohort 7" },
  { name: "Thaddeus Medical Systems", desc: "First small, portable, smart medical cooler and freezer for last mile transport", cohort: "Cohort 11" },
  { name: "The Merch Kit", desc: "All-in-one platform for merchandising support and creation", cohort: "Cohort 3" },
  { name: "Tracksracks", desc: "Digital platform helping fashion companies manage and track their samples", cohort: "Cohort 11" },
  { name: "TTC Chile", desc: "Stock Control App using AI to calculate quantity and volume via photos", cohort: "Cohort 11" },
  { name: "Venditi.ai", desc: "AI-driven insurtech platform streamlining sales and personalizing follow-ups", cohort: "Cohort 12" },
  { name: "VizenAnalytics", desc: "Cloud-based advanced planning supply chain software for motor vehicle and food industries", cohort: "Cohort 8" },
  { name: "Volt", desc: "B2B AI SaaS deploying autonomous sales & support agents with human-like avatars", cohort: "Cohort 12" },
  { name: "Vouchery.io", desc: "AI-Powered marketing platform automating personalised marketing promotions", cohort: "Cohort 6" },
  { name: "Wan-AI", desc: "Network optimization solutions for operators facing declining profitability", cohort: "Cohort 9" },
  { name: "WeConvert", desc: "Conversion optimization platform", cohort: "Cohort 7" },
  { name: "Willow Technologies", desc: "Drone-based yard management system automating inventory tracking and space optimization", cohort: "Cohort 12" },
  { name: "WTD Now", desc: "Real-time AI tracking for nightlife, restaurants, and events discovery", cohort: "Cohort 12" },
  { name: "Xiris Corp.", desc: "Real-time video monitoring platform with AI threat identification for cities", cohort: "Cohort 2" },
  { name: "Zeemple", desc: "AI powered elder care monitoring system with voice integration", cohort: "Cohort 9" },
  { name: "ZeroTB", desc: "AI-powered tuberculosis detection and management platform", cohort: "Cohort 10" },
];

const cohorts = ["Show all", "Cohort 1", "Cohort 2", "Cohort 3", "Cohort 4", "Cohort 5", "Cohort 6", "Cohort 7", "Cohort 8", "Cohort 9", "Cohort 10", "Cohort 11", "Cohort 12", "Studio"];

const historyStats = [
  { label: "Companies", value: 96 },
  { label: "Cohorts", value: 11 },
  { label: "Total Portfolio Value", value: 163, prefix: "$", suffix: "M" },
  { label: "Female Founders", value: 28 },
  { label: "People of Color (POCs)", value: 46 },
  { label: "Immigrant Founders", value: 43 },
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
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const filtered = active === "Show all" ? companies : companies.filter((c) => c.cohort === active);

  return (
    <Layout>
      {/* Teal gradient hero */}
      <section className="relative py-32 lg:py-44 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(var(--teal)) 0%, hsl(var(--teal) / 0.75) 100%)" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-wide">
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep mb-12 text-center uppercase">OUR HISTORY</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {historyStats.map((stat, i) => (
              <HistoryStatCard key={i} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Cohort Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {cohorts.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "px-4 py-2.5 rounded-[10px] text-sm font-light transition-all",
                  active === f
                    ? "bg-primary text-white"
                    : "bg-navy-deep text-white/90 hover:bg-primary"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((company) => (
                <motion.div
                  key={company.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-[15px] overflow-hidden cursor-pointer"
                  style={{
                    boxShadow: "0 0.8px 2.4px -0.6px rgba(0,0,0,0.05), 0 2.4px 7.2px -1.25px rgba(0,0,0,0.05), 0 6.4px 19px -1.9px rgba(0,0,0,0.05), 0 20px 60px -2.5px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Logo area */}
                  <div className="aspect-square bg-[#fafafa] flex items-center justify-center p-6 relative overflow-hidden">
                    <span className="text-5xl font-display font-bold text-navy-deep/10 select-none">
                      {company.name.charAt(0)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold text-navy-deep text-lg mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {company.name}
                    </h3>
                    <div className="min-h-[80px] max-h-[80px] overflow-hidden mb-3">
                      <p className="text-navy-deep/60 text-sm leading-relaxed">
                        {company.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <ul className="list-none m-0 p-0">
                        <li className="bg-teal/10 text-teal text-xs text-center rounded-[10px] px-2 py-1">
                          {company.cohort}
                        </li>
                      </ul>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCard(expandedCard === company.name ? null : company.name);
                        }}
                        className="text-primary hover:text-primary/70 text-sm font-medium transition-colors"
                      >
                        Read More
                      </button>
                    </div>
                  </div>

                  {/* Expanded Read More content */}
                  <AnimatePresence>
                    {expandedCard === company.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-2 border-t border-border">
                          <p className="text-navy-deep/70 text-sm leading-relaxed">
                            {company.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
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
      <div className="font-display text-4xl font-bold text-primary">
        {prefix}{count}{suffix}
      </div>
    </div>
  );
};

export default Portfolio;
