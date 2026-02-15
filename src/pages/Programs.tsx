import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Palette } from "lucide-react";

const programs = [
  {
    icon: Rocket,
    title: "Accelerator",
    desc: "Our flagship 12-week program for early-stage enterprise tech founders. Includes $50K investment, mentorship, and Demo Day access.",
    href: "/programs/accelerator",
  },
  {
    icon: Palette,
    title: "Studio",
    desc: "A flexible, tailored program for founders who need hands-on support, mentorship, and resources outside the traditional cohort model.",
    href: "/programs/studio",
  },
];

const Programs = () => {
  return (
    <Layout>
      <section className="bg-navy-deep py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-4">What We Offer</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Our Programs</h1>
            <p className="text-white/60 text-lg leading-relaxed">
              We offer two distinct programs tailored to founders at different stages. Explore the right path for your startup journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={p.href}
                  className="block bg-muted rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <p.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display font-bold text-navy-deep text-xl mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                  <span className="text-primary font-semibold text-sm">Learn More →</span>
                </Link>
              </motion.div>
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

export default Programs;
