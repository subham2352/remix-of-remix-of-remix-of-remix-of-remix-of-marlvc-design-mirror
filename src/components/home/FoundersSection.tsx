import { Link } from "react-router-dom";

// Row 1
import maxMontrey from "@/assets/founders/max-montrey.jpg";
import srinivasPai from "@/assets/founders/srinivas-pai.jpg";
import matthewGill from "@/assets/founders/matthew-gill.jpg";
import vinithaT from "@/assets/founders/vinitha-thiyagarajan.jpg";
import victorMartin from "@/assets/founders/victor-martin.jpg";
import shayWilliams from "@/assets/founders/shay-williams.jpg";
import abhraBanerjee from "@/assets/founders/abhra-banerjee.jpg";
import davidHojah from "@/assets/founders/david-hojah.jpg";
import aliSalem from "@/assets/founders/ali-salem.jpg";
import sonerMatt from "@/assets/founders/soner-matt.jpg";
import adamBeal from "@/assets/founders/adam-beal.jpg";
import noamHeimann from "@/assets/founders/noam-heimann.jpg";

// Row 2
import ashutoshS from "@/assets/founders/ashutosh-srivastava.png";
import ricardoO from "@/assets/founders/ricardo-ortiz.png";
import ewelinaR from "@/assets/founders/ewelina-robaczek.png";
import michaelD from "@/assets/founders/michael-du.png";
import bartS from "@/assets/founders/bart-slowik.png";
import valentinP from "@/assets/founders/valentin-prijilevschi.png";
import fatimaA from "@/assets/founders/fatima-awan.png";
import samirH from "@/assets/founders/samir-hassan.png";
import nathalieT from "@/assets/founders/nathalie-taquet.png";
import michaelB from "@/assets/founders/michael-bingham.png";

// Row 3
import michaelG from "@/assets/founders/michael-gurevich.png";
import volkerD from "@/assets/founders/volker-dahm.png";
import taraR from "@/assets/founders/tara-robinson.png";
import bhushanM from "@/assets/founders/bhushan-mishra.png";
import havishS from "@/assets/founders/havish-sreenath.png";
import steveS from "@/assets/founders/steve-scully.png";
import nidaS from "@/assets/founders/nida-sahar.png";
import lalitG from "@/assets/founders/lalit-gautam.png";
import mithunA from "@/assets/founders/mithun-adith.png";
import aparnaP from "@/assets/founders/aparna-pujar.png";
import rohitS from "@/assets/founders/rohit-sharma.png";
import navinJ from "@/assets/founders/navin-jethani.png";

const row1 = [
  { name: "Max Montrey", company: "SportsTrace", img: maxMontrey },
  { name: "Srinivas K. Pai", company: "Pace Robotics", img: srinivasPai },
  { name: "Matthew Gill", company: "Enhance-VR Inc.", img: matthewGill },
  { name: "Vinitha Thiyagarajan", company: "Perceive Now", img: vinithaT },
  { name: "Victor Martin", company: "Macco", img: victorMartin },
  { name: "Shay Williams", company: "The Merch Kit", img: shayWilliams },
  { name: "Abhra Banerjee", company: "Cleanomatics", img: abhraBanerjee },
  { name: "David Hojah", company: "Parrots Inc.", img: davidHojah },
  { name: "Ali Salem", company: "FlyUpav", img: aliSalem },
  { name: "Soner Matt", company: "Haci I-Ness", img: sonerMatt },
  { name: "Adam Beal", company: "Awayr AI", img: adamBeal },
  { name: "Noam Heimann", company: "FeatherCloud", img: noamHeimann },
];

const row2 = [
  { name: "Ashutosh Srivastava", company: "WeConvert", img: ashutoshS },
  { name: "Ricardo Ortiz Sordo", company: "Logiety", img: ricardoO },
  { name: "Ewelina Robaczek", company: "Vouchery.io", img: ewelinaR },
  { name: "Michael Du", company: "Advanced Robotics", img: michaelD },
  { name: "Bart Slowik", company: "SylLab Systems Inc", img: bartS },
  { name: "Valentin Prijilevschi", company: "TechSelf", img: valentinP },
  { name: "Fatima Awan", company: "Finiite Technologies Inc", img: fatimaA },
  { name: "Samir Hassan", company: "Knowtified", img: samirH },
  { name: "Nathalie Taquet", company: "eBottli Inc", img: nathalieT },
  { name: "Michael Bingham", company: "Xiris Corp.", img: michaelB },
];

const row3 = [
  { name: "Michael Gurevich", company: "TecTransit", img: michaelG },
  { name: "Volker Dahm", company: "SafeDeploy", img: volkerD },
  { name: "Tara Robinson", company: "Tracksracks", img: taraR },
  { name: "B Bhushan Mishra", company: "Fleksa", img: bhushanM },
  { name: "Havish Sreenath", company: "Infliction Labs", img: havishS },
  { name: "Steve Scully", company: "Thaddeus Medical System", img: steveS },
  { name: "Nida Sahar", company: "Nife Labs", img: nidaS },
  { name: "Lalit Gautam", company: "SenseGrass", img: lalitG },
  { name: "Mithun Adith", company: "SpotKwik", img: mithunA },
  { name: "Aparna Pujar", company: "Zeemple", img: aparnaP },
  { name: "Rohit Sharma", company: "AiTS", img: rohitS },
  { name: "Navin Jethani", company: "DisplayRide", img: navinJ },
];

type Founder = { name: string; company: string; img: string };

const ScrollRow = ({ founders, direction }: { founders: Founder[]; direction: "left" | "right" }) => {
  // Duplicate for seamless loop
  const items = [...founders, ...founders];
  const animClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="overflow-hidden py-2">
      <div className={`flex gap-4 ${animClass}`} style={{ width: "max-content" }}>
        {items.map((founder, i) => (
          <Link
            key={`${founder.name}-${i}`}
            to="/portfolio"
            className="group flex-shrink-0 w-[160px] md:w-[180px] bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all border border-border hover:border-primary/30"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={founder.img}
                alt={founder.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-3">
              <h3 className="text-foreground font-semibold text-xs truncate">{founder.name}</h3>
              <p className="text-muted-foreground text-xs truncate">{founder.company}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const FoundersSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            MEET OUR COMMUNITY OF FOUNDERS
          </h2>
        </div>
      </div>

      <div className="space-y-2">
        <ScrollRow founders={row1} direction="left" />
        <ScrollRow founders={row2} direction="right" />
        <ScrollRow founders={row3} direction="left" />
      </div>
    </section>
  );
};

export default FoundersSection;
