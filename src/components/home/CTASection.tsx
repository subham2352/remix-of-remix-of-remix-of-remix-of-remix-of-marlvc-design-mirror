import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-deep via-navy to-navy-deep relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-4">Applications Open</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Are you ready to build<br />
            <span className="text-primary">next-gen tech?</span>
          </h2>
          <p className="text-white/50 text-lg mb-4">Application Deadline: March 31, 2026</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 text-lg h-14">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
