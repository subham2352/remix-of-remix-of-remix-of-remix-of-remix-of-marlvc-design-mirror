import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { mentors } from "@/data/mentorsData";

const Mentors = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-teal to-teal/80 py-32 lg:py-44">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Our Mentors</h1>
            <p className="text-white/90 text-lg leading-relaxed font-medium">
              Our mentors are experienced founders, investors, and industry leaders who provide guidance and support to our cohort companies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {mentors.map((mentor, i) => (
              <div key={i} className="group text-center">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-3 border-2 border-border group-hover:border-primary transition-colors">
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add("bg-gradient-to-br", "from-primary", "to-teal", "flex", "items-center", "justify-center");
                        parent.innerHTML = `<span class="text-white font-bold text-2xl">${mentor.name.charAt(0)}</span>`;
                      }
                    }}
                  />
                </div>
                <h3 className="font-display font-bold text-navy-deep text-sm">{mentor.name}</h3>
                <p className="text-muted-foreground text-xs mb-2">{mentor.company}</p>
                {mentor.linkedin && (
                  <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex w-7 h-7 rounded-full bg-navy-deep/10 hover:bg-primary hover:text-white transition-colors items-center justify-center text-navy-deep/50">
                    <Linkedin size={12} />
                  </a>
                )}
              </div>
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

export default Mentors;
