import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-deep mb-6">
              TAKE YOUR STARTUP TO THE NEXT LEVEL
            </h2>
            <p className="text-navy-deep/70 leading-relaxed mb-4">
              MARL 5G is an early-stage accelerator fund for startups developing DeepTech products and services for enterprise customers using 5G technology. It aims to create a community of investors, founders, and corporate venture teams in sectors like Mobility, AR/VR, Autonomous, Robotics, and Logistics.
            </p>
            <p className="text-navy-deep/80 leading-relaxed mb-6 font-medium">
              We back visionary founders solving complex problems in Deep-Tech from day 1.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/marl/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-deep/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-navy-deep">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com/AcceleratorMarl" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-deep/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-navy-deep">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {founders.slice(0, 6).map((founder, i) => (
                <div key={i} className="bg-muted rounded-xl overflow-hidden border border-border">
                  <div className="aspect-square bg-gradient-to-br from-navy-deep to-navy flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-white/15">
                      {founder.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div className="p-2">
                    <h3 className="text-navy-deep font-semibold text-[10px]">{founder.name}</h3>
                    <p className="text-muted-foreground text-[10px]">{founder.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const founders = [
  { name: "Max Montrey", company: "SportsTrace" },
  { name: "Srinivas K. Pai", company: "Pace Robotics" },
  { name: "Matthew Gill", company: "Enhance-VR Inc." },
  { name: "Vinitha Thiyagarajan", company: "Perceive Now" },
  { name: "Victor Martin", company: "Macco" },
  { name: "Shay Williams", company: "The Merch Kit" },
];

export default AboutSection;
