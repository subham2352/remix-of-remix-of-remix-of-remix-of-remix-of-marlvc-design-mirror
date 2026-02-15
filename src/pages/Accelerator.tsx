import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, DollarSign, Users, Lightbulb, Rocket } from "lucide-react";

const timeline = [
  { week: "Week 1-2", title: "Onboarding & Assessment", desc: "Deep-dive into your business, product, and market. Set goals and milestones." },
  { week: "Week 3-4", title: "Product & Market Fit", desc: "Refine your value proposition and validate product-market fit with industry experts." },
  { week: "Week 5-6", title: "Growth Strategy", desc: "Develop go-to-market strategy, sales playbooks, and growth frameworks." },
  { week: "Week 7-8", title: "Fundraising Prep", desc: "Pitch deck refinement, financial modeling, and investor targeting." },
  { week: "Week 9-10", title: "Investor Meetings", desc: "Curated introductions to 15+ VC partners and strategic investors." },
  { week: "Week 11-12", title: "Demo Day & Launch", desc: "Showcase your company to 200+ investors, partners, and industry leaders." },
];

const benefits = [
  { icon: DollarSign, title: "$50K Pre-Seed Investment", desc: "Non-dilutive funding to accelerate growth" },
  { icon: Users, title: "Mentorship Network", desc: "80+ industry mentors and advisors" },
  { icon: Lightbulb, title: "$500K in Perks", desc: "Cloud credits, tools, and services" },
  { icon: Rocket, title: "Demo Day Access", desc: "Present to 200+ investors and partners" },
];

const Accelerator = () => {
  return (
    <Layout>
      <section className="bg-navy-deep py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-4">Accelerator Program</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              12-Week <span className="text-primary">Accelerator</span> Program
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Our flagship program is designed to help early-stage enterprise tech founders build, scale, and raise funding.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep mb-12">
            Program <span className="text-primary">Benefits</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-bold text-navy-deep mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">
            Program <span className="text-primary">Timeline</span>
          </h2>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-primary font-display font-bold text-sm">{item.week}</span>
                </div>
                <div className="w-px bg-white/20 relative flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary absolute -left-[5px] top-1" />
                </div>
                <div className="pb-8">
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep mb-8">
              Eligibility <span className="text-primary">Criteria</span>
            </h2>
            <div className="text-left space-y-4">
              {[
                "Early-stage enterprise technology company",
                "Working product or MVP",
                "Full-time founding team (2+ members)",
                "Less than $2M in total funding raised",
                "Scalable business model with clear market opportunity",
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

export default Accelerator;
