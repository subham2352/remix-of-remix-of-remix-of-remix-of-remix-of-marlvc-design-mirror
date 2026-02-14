import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Bot, Truck, Brain, Shield, Car, Glasses } from "lucide-react";

const verticals = [
  { icon: Bot, name: "Robotics", color: "from-primary/20 to-primary/5", desc: "Industrial automation, autonomous systems, collaborative robots, and robotic process automation.", areas: ["Industrial Automation", "Autonomous Systems", "Collaborative Robots", "RPA"] },
  { icon: Truck, name: "Logistics", color: "from-teal/20 to-teal/5", desc: "Supply chain optimization, last-mile delivery, warehouse automation, and fleet management.", areas: ["Supply Chain", "Last-Mile Delivery", "Warehouse Automation", "Fleet Management"] },
  { icon: Brain, name: "Artificial Intelligence", color: "from-primary/20 to-primary/5", desc: "Machine learning platforms, NLP, computer vision, and AI-powered enterprise solutions.", areas: ["ML Platforms", "NLP", "Computer Vision", "Enterprise AI"] },
  { icon: Shield, name: "Cybersecurity", color: "from-teal/20 to-teal/5", desc: "Threat detection, identity management, cloud security, and zero-trust architectures.", areas: ["Threat Detection", "Identity Management", "Cloud Security", "Zero Trust"] },
  { icon: Car, name: "Mobility", color: "from-primary/20 to-primary/5", desc: "Electric vehicles, autonomous driving, micro-mobility, and connected transportation.", areas: ["Electric Vehicles", "Autonomous Driving", "Micro-Mobility", "Connected Transport"] },
  { icon: Glasses, name: "AR / VR", color: "from-teal/20 to-teal/5", desc: "Spatial computing, virtual collaboration, immersive training, and mixed reality enterprise tools.", areas: ["Spatial Computing", "Virtual Collaboration", "Immersive Training", "Mixed Reality"] },
];

const Verticals = () => {
  return (
    <Layout>
      <section className="bg-navy-deep py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-4">Investment Focus</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-primary">Verticals</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              We invest across six key technology verticals that are transforming enterprise operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verticals.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-muted rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5`}>
                  <v.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy-deep mb-3">{v.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{v.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {v.areas.map((area, j) => (
                    <span key={j} className="text-xs bg-navy-deep/5 text-navy-deep/70 px-3 py-1 rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Verticals;
