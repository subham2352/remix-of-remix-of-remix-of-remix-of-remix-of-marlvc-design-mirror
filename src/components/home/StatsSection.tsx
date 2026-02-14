import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Corporate Partners", value: 60, suffix: "+" },
  { label: "Follow-on VC Partners", value: 150, suffix: "+" },
  { label: "Industry Mentors", value: 80, suffix: "+" },
  { label: "Portfolio Companies", value: 45, suffix: "+" },
];

const useCountUp = (end: number, duration: number, start: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);
  return count;
};

const StatCard = ({ label, value, suffix, index }: { label: string; value: number; suffix: string; index: number }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center p-8"
    >
      <div className="font-display text-5xl md:text-6xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <p className="text-white/60 font-medium text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-3">Why Partner With Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            Our <span className="text-primary">Impact</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
