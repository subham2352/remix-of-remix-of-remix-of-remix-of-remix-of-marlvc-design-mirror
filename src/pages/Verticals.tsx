import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Glasses, Truck, Shield, Brain, Bot } from "lucide-react";

const verticals = [
  {
    icon: Car,
    name: "MOBILITY",
    desc: "We're constantly on the go. Whether it's through ride-hailing or bike-sharing, there's always a demand for mobility solutions.",
    stat: "According to GVR, the 5G enterprise market is expected to experience significant growth, with projections estimating that it will reach $125 billion by 2025, up from $105 billion in 2018.",
  },
  {
    icon: Glasses,
    name: "VIRTUAL AND AUGMENTED REALITY",
    desc: "A fresh approach to business operations. From virtual clothing try-ons to enterprise safety training, AR and VR are at the forefront of revolutionizing the way we work in a post-pandemic world.",
    stat: "According to Businesswire, the market for AR and VR is expected to experience significant growth, with projections estimating that it will reach $1,274.4 billion by 2030, up from $37.0 billion in 2019.",
  },
  {
    icon: Truck,
    name: "LOGISTICS",
    desc: "Logistics is an integral aspect of every business, present in every aspect of operations – from warehouse management to material handling equipment.",
    stat: "According to IMARC group, the logistics market is expected to experience significant growth, with projections estimating that it will reach $6.3 trillion by 2024, up from $4.7 trillion in 2018.",
  },
  {
    icon: Shield,
    name: "CYBERSECURITY",
    desc: "As we embrace the next wave of technology, cybersecurity has become increasingly important in safeguarding consumer and enterprise data from potential threats.",
    stat: "According to Grandview Research, the cybersecurity market is expected to experience significant growth, with projections estimating that it will reach $372.04 billion by 2028, up from $179.96 billion in 2021.",
  },
  {
    icon: Brain,
    name: "NEXT-GEN ARTIFICIAL INTELLIGENCE",
    desc: "Artificial intelligence is revolutionizing the way businesses operate. Predictive maintenance uses AI to anticipate equipment failures, preventing costly downtime. Fraud detection AI examines patterns to enhance financial security.",
    stat: "According to a report by MarketsandMarkets, the global AI in business market size was valued at $2.1 billion in 2018 and is projected to reach $9.5 billion by 2024, at a CAGR of 33.2%.",
  },
  {
    icon: Bot,
    name: "ROBOTICS",
    desc: "Robots are transforming industries, automating tasks, and improving efficiency. From manufacturing to healthcare, robotics is rapidly changing the way businesses operate.",
    stat: "Enterprise Robotics Market (International Federation of Robotics): 2021: $16.5 billion → 2026: $22.1 billion.",
  },
];

const Verticals = () => {
  return (
    <Layout>
      {/* Hero with teal gradient */}
      <section className="bg-gradient-to-br from-teal to-teal/80 py-32 lg:py-44">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              INDUSTRY VERTICALS
            </h1>
            <p className="text-white/90 text-lg leading-relaxed font-medium">
              We specialize in backing founders in specific industry sectors where we have a wealth of expertise.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mt-4">
              Our mentors and partners have the knowledge and experience to provide invaluable support to startups in the following sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {verticals.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                    <v.icon className="text-teal" size={32} />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-navy-deep mb-4">{v.name}</h3>
                  <p className="text-navy-deep/70 leading-relaxed mb-4">{v.desc}</p>
                  <p className="text-navy-deep/50 text-sm leading-relaxed">{v.stat}</p>
                </div>
                <div className={`aspect-video bg-gradient-to-br from-teal/20 to-teal/5 rounded-2xl flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <v.icon className="text-teal/30" size={80} />
                </div>
              </motion.div>
            ))}
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

export default Verticals;
