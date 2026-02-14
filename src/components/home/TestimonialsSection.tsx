import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import maxMontrey from "@/assets/founders/max-montrey.jpg";
import vinithaT from "@/assets/founders/vinitha-thiyagarajan.jpg";
import abhraBanerjee from "@/assets/founders/abhra-banerjee.jpg";
import lalitG from "@/assets/founders/lalit-gautam.png";

const testimonials = [
  {
    quote: "We learned a ton from MARL – from overall business tactics, product alignment, market fitting, and legal aspects. We felt very encouraged to participate and the discussions were open, resulting in more learning. We were given very constructive feedback on both our progress and our plans at SportsTrace, and we were able to expand our network both during the program and as a result of the program.",
    name: "Max Montrey",
    title: "Founder of SportsTrace",
    img: maxMontrey,
  },
  {
    quote: "As a long-term mentor and supporter of MARL, I am intrigued by their strong ethos of working hand-in-hand with founding teams and guiding them through the journey. Their hands-on guidance, strong focus on mobility and related sectors, entrepreneurial experience, excellent corporate and mentor network differentiates them from players.",
    name: "Pratik Budhdev",
    title: "Investment Director, Volvo",
    img: null,
  },
  {
    quote: "In just a few months with MARL 5G, we've already made substantial progress. Their mentors provide actionable insights from their own entrepreneurial journeys, and their robust investor network is highly aligned with our specific focus. The GTM framework they offer stands out for its efficacy, streamlining our path to market.",
    name: "Hans Hansen",
    title: "Founder of Brand3D",
    img: null,
  },
  {
    quote: "Partnering with MARL 5G has been a transformative experience for our startup. Their invaluable guidance, coupled with their knack for introducing us to the right people, has propelled us forward. They're not just investors; they're visionary mentors who provide the inspiration and resources to turn dreams into reality.",
    name: "Vinitha Thiyagarajan",
    title: "Founder of PerceiveNow",
    img: vinithaT,
  },
  {
    quote: "If you want practical hands-on training and mentorship on how to launch & scale up your start up in the 5G ecosystem, don't look elsewhere—MARL should be your automatic choice.",
    name: "Abhra Banerjee",
    title: "Founder of Cleanomatics",
    img: abhraBanerjee,
  },
  {
    quote: "MARL was a very productive journey for us, the best thing about the program is two entrepreneurs founders turn investor, Prakash, and Amir, they know what founders want, they have cherry-picked the session according to our needs, to the point, I recommend to all the founders working in 5G or deep tech technology.",
    name: "Lalit Gautam",
    title: "Founder of SenseGrass",
    img: lalitG,
  },
  {
    quote: "MARL is not your typical accelerator. Amir and Prakash are true partners — thoughtful, responsive, and deeply invested in your success. During the critical early stages, they offer insights that shape foundational decisions and help you move faster, smarter, and with greater conviction.",
    name: "Samantha Tenus",
    title: "CEO, Digipalz",
    img: null,
  },
  {
    quote: "MARL Accelerator has been a game-changer for us at AIOHub. Their visionary guidance and extensive network have transformed our company, making us more agile and competitive. The mentors and partners are super friendly with extensive experience in the industry that helped us cover a lot of gaps as a beginning startup.",
    name: "Vladimir Rigenco",
    title: "AioHub Founder",
    img: null,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            WHAT OUR COMMUNITY IS SAYING
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
            >
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                {t.img ? (
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-foreground font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.title}</p>
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
                  i === current ? "bg-primary w-6" : "bg-foreground/20"
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
