import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Jonathan Blake", role: "Managing Partner", bio: "20+ years in venture capital and enterprise technology. Previously at Sequoia Capital and Google Ventures." },
  { name: "Michelle Torres", role: "Managing Partner", bio: "Former CTO at Fortune 500 company. Expert in AI/ML and enterprise software infrastructure." },
  { name: "Robert Kang", role: "Partner, Operations", bio: "Serial entrepreneur with 3 successful exits. Specializes in scaling operations and go-to-market strategy." },
  { name: "Amara Osei", role: "Partner, Investments", bio: "Background in investment banking at Goldman Sachs. Deep expertise in fintech and cybersecurity markets." },
  { name: "Daniel Fischer", role: "VP, Programs", bio: "Built and scaled accelerator programs globally. Former Director at Techstars." },
  { name: "Sofia Andersson", role: "Head of Community", bio: "Community builder with experience at Y Combinator and 500 Global. Connects founders with resources." },
];

const milestones = [
  { year: "2018", event: "VentureLab founded with a mission to support enterprise tech founders" },
  { year: "2019", event: "First cohort of 8 companies graduated the accelerator program" },
  { year: "2020", event: "Launched virtual program format, expanding reach globally" },
  { year: "2021", event: "Surpassed $50M in follow-on funding across portfolio" },
  { year: "2022", event: "Opened new verticals: Cybersecurity and AR/VR" },
  { year: "2023", event: "Portfolio companies reached 500+ enterprise customers combined" },
  { year: "2024", event: "Expanded to 60+ corporate partners and 150+ VC connections" },
  { year: "2025", event: "Launched $25M Fund II focused on deep-tech enterprise solutions" },
];

const About = () => {
  return (
    <Layout>
      <section className="bg-navy-deep py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-4">About Us</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Building the Future, <span className="text-primary">Together</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              We believe great companies are built by exceptional founders with the right support system. Our mission is to be that system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep mb-6">
            Our <span className="text-primary">Mission</span>
          </h2>
          <p className="text-navy-deep/70 text-lg leading-relaxed">
            To identify, invest in, and empower the most promising early-stage enterprise technology founders. We provide capital, mentorship, and a global network to help startups achieve product-market fit and scale rapidly.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep mb-12 text-center">
            Our <span className="text-primary">Team</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-navy-deep to-navy flex items-center justify-center">
                  <span className="text-6xl font-display font-bold text-white/10">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-navy-deep">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex gap-2">
                    <a href="#" className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-muted-foreground">
                      <Linkedin size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-muted-foreground">
                      <Twitter size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-navy-deep">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our <span className="text-primary">Journey</span>
          </h2>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-6"
              >
                <span className="text-primary font-display font-bold text-lg flex-shrink-0 w-14">{m.year}</span>
                <div className="w-px bg-white/20 relative flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary absolute -left-[5px] top-1" />
                </div>
                <p className="text-white/70 text-sm pb-6">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
