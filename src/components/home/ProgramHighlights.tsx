const highlights = [
  { title: "$500K", subtitle: "Perks & Benefits", description: "Access to cloud credits, tools, and services" },
  { title: "12 Weeks", subtitle: "Tailored Program", description: "Intensive curriculum designed for growth" },
  { title: "15+", subtitle: "Investor Meetings", description: "Direct access to top-tier VCs" },
  { title: "$50K", subtitle: "Pre-Seed Investment", description: "Non-dilutive funding to get started" },
  { title: "100+", subtitle: "Mentor Hours", description: "One-on-one mentorship sessions" },
  { title: "Global", subtitle: "Network Access", description: "Connect with founders worldwide" },
];

const ProgramHighlights = () => {
  const items = [...highlights, ...highlights];

  return (
    <section className="py-16 bg-navy-deep overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-10">
        <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-3">Program Benefits</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          What You <span className="text-primary">Get</span>
        </h2>
      </div>

      <div className="flex whitespace-nowrap marquee">
        {items.map((item, i) => (
          <div
            key={i}
            className="inline-block mx-3 w-72 flex-shrink-0 bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="text-primary font-display text-3xl font-bold mb-1">{item.title}</div>
            <div className="text-white font-semibold text-sm mb-2">{item.subtitle}</div>
            <p className="text-white/50 text-xs whitespace-normal">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramHighlights;
