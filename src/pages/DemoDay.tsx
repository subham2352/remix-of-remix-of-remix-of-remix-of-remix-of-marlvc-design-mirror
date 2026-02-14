import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Play } from "lucide-react";

const pastEvents = [
  { cohort: "Cohort 7 — Fall 2025", companies: 10, investors: 200, highlight: "3 companies raised Series A within 90 days" },
  { cohort: "Cohort 6 — Spring 2025", companies: 8, investors: 180, highlight: "Portfolio valued at $150M+ combined" },
  { cohort: "Cohort 5 — Fall 2024", companies: 9, investors: 160, highlight: "2 acquisitions completed post-demo day" },
];

const DemoDay = () => {
  return (
    <Layout>
      <section className="bg-navy-deep py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-4">Demo Day</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Where Founders Meet <span className="text-primary">Investors</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Our Demo Day brings together the brightest founders with top-tier investors, corporate partners, and industry leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-deep to-navy rounded-2xl p-8 md:p-12 text-center"
            >
              <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-4">Next Event</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Cohort 8 Demo Day
              </h2>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/60">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  <span className="text-sm">June 15, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-primary" />
                  <span className="text-sm">250+ Attendees</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Register Interest
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep mb-12 text-center">
            Past <span className="text-primary">Events</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <h3 className="font-display font-bold text-navy-deep mb-4">{event.cohort}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Companies</span>
                    <span className="font-semibold text-navy-deep">{event.companies}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Investors Present</span>
                    <span className="font-semibold text-navy-deep">{event.investors}+</span>
                  </div>
                </div>
                <p className="text-sm text-teal font-medium">{event.highlight}</p>
                <button className="mt-4 flex items-center gap-2 text-primary text-sm font-medium hover:underline">
                  <Play size={14} /> Watch Highlights
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DemoDay;
