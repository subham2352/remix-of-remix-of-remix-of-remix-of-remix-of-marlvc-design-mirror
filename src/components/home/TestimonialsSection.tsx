import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The accelerator program completely transformed how we approached our go-to-market strategy. The mentorship was invaluable.",
    name: "Alex Chen",
    title: "CEO, RoboFlow AI",
  },
  {
    quote: "Access to the investor network alone was worth it. We closed our Series A within 3 months of graduating the program.",
    name: "Sarah Johnson",
    title: "Founder, LogiChain",
  },
  {
    quote: "The curriculum is incredibly well-structured. Every week brought new insights that directly impacted our growth trajectory.",
    name: "Marcus Williams",
    title: "CEO, CyberShield",
  },
  {
    quote: "Being part of this community means having a support system of founders who truly understand the journey.",
    name: "Priya Patel",
    title: "Co-Founder, MoveX",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            What Founders <span className="text-primary">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
            >
              <Quote className="mx-auto text-primary/30 mb-6" size={40} />
              <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center text-white font-bold">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">{testimonials[current].name}</p>
                  <p className="text-white/50 text-sm">{testimonials[current].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-primary w-6" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
