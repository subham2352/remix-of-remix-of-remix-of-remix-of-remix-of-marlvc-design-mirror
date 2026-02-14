const verticals = [
  "ROBOTICS", "LOGISTICS", "ARTIFICIAL INTELLIGENCE", "CYBERSECURITY",
  "MOBILITY", "AR / VR", "FINTECH", "HEALTHTECH", "CLEANTECH", "EDTECH"
];

const MarqueeSection = () => {
  const items = [...verticals, ...verticals];

  return (
    <section className="bg-navy py-12 overflow-hidden border-y border-white/5">
      <div className="mb-6">
        <div className="flex whitespace-nowrap marquee">
          {items.map((item, i) => (
            <span key={`a-${i}`} className="inline-flex items-center text-teal font-display text-2xl md:text-3xl font-bold mx-6 tracking-wide">
              {item}
              <span className="ml-6 w-2 h-2 rounded-full bg-primary inline-block" />
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="flex whitespace-nowrap marquee-reverse">
          {items.map((item, i) => (
            <span key={`b-${i}`} className="inline-flex items-center text-white/20 font-display text-2xl md:text-3xl font-bold mx-6 tracking-wide">
              {item}
              <span className="ml-6 w-2 h-2 rounded-full bg-teal/30 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
