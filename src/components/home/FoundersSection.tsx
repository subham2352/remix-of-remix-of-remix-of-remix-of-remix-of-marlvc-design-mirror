import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const founders = [
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
  { name: "Ashutosh Srivastava", company: "WeConvert" },
  { name: "Ricardo Ortiz Sordo", company: "Logiety" },
  { name: "Ewelina Robaczek", company: "Vouchery.io" },
  { name: "Michael Du", company: "Advanced Robotics" },
  { name: "Bart Slowik", company: "SylLab Systems Inc" },
  { name: "Valentin Prijilevschi", company: "TechSelf" },
  { name: "Fatima Awan", company: "Finiite Technologies Inc" },
  { name: "Samir Hassan", company: "Knowtified" },
  { name: "Nathalie Taquet", company: "eBottli Inc" },
  { name: "Michael Bingham", company: "Xiris Corp." },
  { name: "Michael Gurevich", company: "TecTransit" },
  { name: "Volker Dahm", company: "SafeDeploy" },
  { name: "Tara Robinson", company: "Tracksracks" },
  { name: "B Bhushan Mishra", company: "Fleksa" },
  { name: "Havish Sreenath", company: "Infliction Labs" },
  { name: "Steve Scully", company: "Thaddeus Medical System" },
  { name: "Nida Sahar", company: "Nife Labs" },
  { name: "Lalit Gautam", company: "SenseGrass" },
  { name: "Mithun Adith", company: "SpotKwik" },
  { name: "Aparna Pujar", company: "Zeemple" },
  { name: "Rohit Sharma", company: "AiTS" },
  { name: "Navin Jethani", company: "DisplayRide" },
];

const FoundersSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy-deep">
            MEET OUR COMMUNITY OF FOUNDERS
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {founders.slice(0, 18).map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <Link
                to="/portfolio"
                className="group block bg-muted rounded-xl overflow-hidden hover:shadow-lg transition-all border border-border hover:border-primary/30"
              >
                <div className="aspect-square bg-gradient-to-br from-navy-deep to-navy flex items-center justify-center overflow-hidden">
                  {(founder as any).img ? (
                    <img src={(founder as any).img} alt={founder.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  ) : (
                    <span className="text-3xl font-display font-bold text-white/15 group-hover:text-primary/25 transition-colors">
                      {founder.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="text-navy-deep font-semibold text-xs">{founder.name}</h3>
                  <p className="text-muted-foreground text-xs">{founder.company}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
