import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Are you ready to build next-gen tech?
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Application deadline March 20th, 2026 for Cohort 13th
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 text-lg h-14 rounded-full">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
