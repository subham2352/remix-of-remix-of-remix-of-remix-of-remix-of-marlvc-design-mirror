import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-deep mb-6">
              Empowering the Next Wave of <span className="text-primary">Innovation</span>
            </h2>
            <p className="text-navy-deep/70 leading-relaxed mb-4">
              We are a venture capital firm and accelerator dedicated to investing in early-stage enterprise technology companies. Our mission is to identify, fund, and support the most promising founders building transformative solutions.
            </p>
            <p className="text-navy-deep/70 leading-relaxed mb-6">
              With a network of 60+ corporate partners, 150+ VC connections, and 80+ industry mentors, we provide founders with the resources, guidance, and connections they need to scale.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-deep/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-navy-deep">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-deep/10 hover:bg-primary hover:text-white transition-colors flex items-center justify-center text-navy-deep">
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-gradient-to-br from-navy-deep to-navy rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-[16px] border-l-primary border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1" />
                </div>
                <p className="text-white/50 text-sm">Watch Our Story</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
