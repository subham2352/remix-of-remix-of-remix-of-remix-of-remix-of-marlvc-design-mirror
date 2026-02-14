const highlights = [
  { title: "$500K", subtitle: "PERKS & BENEFITS" },
  { title: "12 WEEK", subtitle: "TAILORED PROGRAM" },
  { title: "15+", subtitle: "INVESTOR MEETINGS" },
  { title: "$50K*", subtitle: "PRE-SEED INVESTMENT" },
  { title: "$150K**", subtitle: "PRE-SEED INVESTMENT" },
];

const ProgramHighlights = () => {
  const items = [...highlights, ...highlights, ...highlights, ...highlights];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep">
          Program Highlights
        </h2>
        <p className="text-navy-deep/60 mt-3 max-w-2xl">
          Our program is designed to fast-track the growth of promising startups and equip them with the tools, knowledge, and resources they need to succeed in today's competitive market.
        </p>
      </div>

      <div className="flex whitespace-nowrap marquee">
        {items.map((item, i) => (
          <div
            key={i}
            className="inline-block mx-3 w-64 flex-shrink-0 bg-navy-deep rounded-xl p-6 text-center"
          >
            <div className="text-primary font-display text-3xl font-bold mb-1">{item.title}</div>
            <div className="text-white/70 font-semibold text-xs uppercase tracking-wider">{item.subtitle}</div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-8">
        <p className="text-navy-deep/40 text-xs">
          *The $15K program fee is deducted from the initial investment, with no out-of-pocket cost to founders.
        </p>
        <p className="text-navy-deep/40 text-xs mt-1">
          **Companies may be eligible for a follow-on SAFE investment of $100K, upon meeting the minimum revenue milestone.
        </p>
      </div>
    </section>
  );
};

export default ProgramHighlights;
