import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated map video - matches marlvc.com */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[80%] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain opacity-60"
        >
          <source src="/marl-map.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl md:text-[5.5rem] lg:text-[7rem] font-medium leading-[1.05] mb-8 tracking-tight">
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
            <p className="text-navy-deep/80 text-base md:text-lg max-w-xl leading-relaxed font-medium">
              We invest in next generation of founders{" "}
              <span className="text-primary font-semibold">re-shaping</span> the world of enterprise.
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
