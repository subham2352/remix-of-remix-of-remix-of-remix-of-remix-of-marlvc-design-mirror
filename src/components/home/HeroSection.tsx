import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import WorldMap from "./WorldMap";

const HeroSection = () => {
  return (
    <section className="relative bg-white min-h-[90vh] flex items-center overflow-hidden">
      <WorldMap />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] mb-8">
              <span className="text-navy-deep block">FOUNDERS</span>
              <span className="text-primary block">INVESTING IN</span>
              <span className="text-navy-deep block">FOUNDERS</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-end justify-between mt-16"
          >
            <p className="text-navy-deep/80 text-lg md:text-xl max-w-xl leading-relaxed">
              We invest in next generation of founders{" "}
              <span className="text-primary font-medium">re-shaping</span> the world of enterprise.
            </p>
            <a href="#invest-in" className="hidden md:flex items-center gap-2 text-navy-deep/50 hover:text-navy-deep transition-colors text-sm">
              <ArrowDown size={16} />
              Scroll down
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
