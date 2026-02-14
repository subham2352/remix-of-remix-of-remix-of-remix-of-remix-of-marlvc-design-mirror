import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const founders = [
  { name: "Alex Chen", company: "RoboFlow AI", role: "CEO & Co-Founder" },
  { name: "Sarah Johnson", company: "LogiChain", role: "Founder" },
  { name: "Marcus Williams", company: "CyberShield", role: "CEO" },
  { name: "Priya Patel", company: "MoveX", role: "Co-Founder" },
  { name: "David Kim", company: "ARvision", role: "CTO & Co-Founder" },
  { name: "Emma Rodriguez", company: "FinStack", role: "CEO" },
  { name: "James Liu", company: "HealthBridge", role: "Founder" },
  { name: "Aisha Mohammed", company: "CleanGrid", role: "CEO & Co-Founder" },
];

const FoundersSection = () => {
  return (
    <section className="py-20 bg-navy-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-3">Our Community</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            Meet Our <span className="text-primary">Founders</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to="/portfolio"
                className="group block bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-primary/30"
              >
                <div className="aspect-square bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-white/10 group-hover:text-primary/20 transition-colors">
                    {founder.name.charAt(0)}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm">{founder.name}</h3>
                  <p className="text-primary text-xs font-medium">{founder.company}</p>
                  <p className="text-white/40 text-xs mt-1">{founder.role}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/portfolio" className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">
            View All Portfolio Companies →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
