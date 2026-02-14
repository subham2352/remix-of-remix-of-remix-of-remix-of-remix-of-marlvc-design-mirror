import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const team = [
  { name: "Amir Khan", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/amirkhan177/" },
  { name: "Prakash Goswami", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/pgoswami/" },
  { name: "Daniela Lugo", role: "Community Manager", linkedin: "https://www.linkedin.com/in/daniela-lugo-iturriza-6073b9152" },
  { name: "Jeffrey Bekiares", role: "General Counsel", linkedin: "https://www.linkedin.com/in/jeffrey-bekiares-69b60761/" },
];

const About = () => {
  return (
    <Layout>
      {/* Teal gradient hero */}
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

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep mb-4">Our Team</h2>
            <p className="text-navy-deep/60 max-w-2xl mx-auto">
              We roll up our sleeves and work closely with the startups in our portfolio. Meet our dedicated team who is ready to support you every step of the way.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-navy-deep to-navy flex items-center justify-center mb-4">
                  <span className="text-3xl font-display font-bold text-white/15">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display font-bold text-navy-deep">{member.name}</h3>
                <p className="text-navy-deep/50 text-sm mb-3">{member.role}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex w-8 h-8 rounded-full bg-navy-deep/10 hover:bg-primary hover:text-white transition-colors items-center justify-center text-navy-deep/50">
                  <Linkedin size={14} />
                </a>
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

export default About;
