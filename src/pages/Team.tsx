import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import amirKhan from "@/assets/team/amir-khan.avif";
import prakashGoswami from "@/assets/team/prakash-goswami.avif";
import danielaLugo from "@/assets/team/daniela-lugo.jpg";
import jeffreyBekiares from "@/assets/team/jeffrey-bekiares.avif";

const team = [
  { name: "Amir Khan", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/amirkhan177/", img: amirKhan },
  { name: "Prakash Goswami", role: "Managing Partner", linkedin: "https://www.linkedin.com/in/pgoswami/", img: prakashGoswami },
  { name: "Daniela Lugo", role: "Community Manager", linkedin: "https://www.linkedin.com/in/daniela-lugo-iturriza-6073b9152", img: danielaLugo },
  { name: "Jeffrey Bekiares", role: "General Counsel", linkedin: "https://www.linkedin.com/in/jeffrey-bekiares-69b60761/", img: jeffreyBekiares },
];

const Team = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-teal to-teal/80 py-32 lg:py-44">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-white/90 text-lg leading-relaxed font-medium">
              We roll up our sleeves and work closely with the startups in our portfolio. Meet our dedicated team who is ready to support you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
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
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
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

export default Team;
