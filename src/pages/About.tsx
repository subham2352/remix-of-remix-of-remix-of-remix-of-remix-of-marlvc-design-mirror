import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, UserCheck, Handshake } from "lucide-react";

const sections = [
  { icon: Users, title: "Our Team", desc: "Meet the dedicated team behind MARL Accelerator.", href: "/team" },
  { icon: UserCheck, title: "Our Mentors", desc: "Experienced founders, investors, and industry leaders guiding our companies.", href: "/mentors" },
  { icon: Handshake, title: "Our Partners", desc: "Our extensive ecosystem of corporations, VCs, and service providers.", href: "/partners" },
];

const About = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-teal to-teal/80 py-32 lg:py-44">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              MARL ACCELERATOR FAMILY
            </h1>
            <p className="text-white/90 text-lg leading-relaxed font-medium">
              Starting a company as a first-time founder can be an exhilarating and exciting journey! We know first-hand the incredible challenges and opportunities that come with building a business from the ground up. With our extensive experience as founders, we are fully equipped to support and guide you every step of the way, from Day 0 and beyond!
            </p>
            <p className="text-white/80 text-lg leading-relaxed mt-4">
              Let's take on the world together and make your startup dream a reality with Marl Accelerator
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={s.href}
                  className="block bg-muted rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-display font-bold text-navy-deep text-lg mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                  <span className="text-primary font-semibold text-sm">View →</span>
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

export default About;
