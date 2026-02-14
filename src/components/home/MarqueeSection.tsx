const row1 = ["ROBOTICS", "VIRTUAL AND AUGMENTED REALITY", "LOGISTICS"];
const row2 = ["MOBILITY", "NEXT-GEN ARTIFICIAL INTELLIGENCE", "CYBERSECURITY"];

const MarqueeSection = () => {
  const items1 = [...row1, ...row1, ...row1, ...row1, ...row1, ...row1];
  const items2 = [...row2, ...row2, ...row2, ...row2, ...row2, ...row2];

  return (
    <section id="invest-in" className="py-16 bg-white overflow-hidden">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-deep text-center mb-12">
        WE INVEST IN
      </h2>
      <div className="mb-4">
        <div className="flex whitespace-nowrap marquee">
          {items1.map((item, i) => (
            <span key={`a-${i}`} className="inline-flex items-center text-teal font-display text-2xl md:text-4xl font-bold mx-4 tracking-wide">
              <span className="w-3 h-3 rounded-full bg-teal inline-block mr-4" />
              {item}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="flex whitespace-nowrap marquee-reverse">
          {items2.map((item, i) => (
            <span key={`b-${i}`} className="inline-flex items-center text-teal font-display text-2xl md:text-4xl font-bold mx-4 tracking-wide">
              <span className="w-3 h-3 rounded-full bg-teal inline-block mr-4" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
