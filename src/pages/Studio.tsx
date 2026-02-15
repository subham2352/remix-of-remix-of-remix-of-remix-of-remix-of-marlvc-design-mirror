import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Palette, Zap, Globe, TrendingUp } from "lucide-react";

const studioFeatures = [
  { icon: Palette, title: "Product Design Sprint", desc: "Rapid prototyping and user testing to validate your product concept" },
  { icon: Zap, title: "Go-to-Market Strategy", desc: "Tailored GTM playbooks and launch planning for your startup" },
  { icon: Globe, title: "Global Network Access", desc: "Connect with investors, partners, and customers worldwide" },
  { icon: TrendingUp, title: "Growth Coaching", desc: "1-on-1 sessions with experienced founders and operators" },
];

const Studio = () => {
  return (
    <Layout>
      <section className="bg-navy-deep py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-4">Studio Program</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              MARL <span className="text-primary">Studio</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              MARL Studio is designed for founders who need a more flexible, tailored approach. We work with select companies outside our traditional cohort model to provide hands-on support, mentorship, and resources.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep mb-12">
            What <span className="text-primary">Studio</span> Offers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-bold text-navy-deep mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep mb-8">
              Who Is <span className="text-primary">Studio</span> For?
            </h2>
            <div className="text-left space-y-4">
              {[
                "Founders building in emerging technology verticals",
                "Companies needing flexible, non-cohort-based support",
                "Teams looking for deep mentorship and strategic guidance",
                "Startups ready to accelerate growth on their own timeline",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <Check className="text-teal flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-navy-deep/80">{item}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-10 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Studio;
