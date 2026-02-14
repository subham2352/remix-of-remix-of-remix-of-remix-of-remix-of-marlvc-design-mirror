import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const rotatingWords = ["FOUNDERS", "INNOVATORS", "BUILDERS", "DISRUPTORS"];

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-navy-deep min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-deep opacity-90" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-6">
              Venture Capital & Accelerator
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-2">
              INVESTING IN
            </h1>
            <div className="h-20 md:h-28 lg:h-32 overflow-hidden">
              <motion.h1
                key={currentWord}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-[0.9]"
              >
                {rotatingWords[currentWord]}
              </motion.h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mt-8 leading-relaxed"
          >
            We invest in the next generation of founders reshaping the world of enterprise technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-4 mt-10"
          >
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 text-base">
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 text-base">
              <Link to="/programs">Our Programs</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
