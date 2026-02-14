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
import genMale1 from "@/assets/founders/gen-male-1.jpg";
import genMale2 from "@/assets/founders/gen-male-2.jpg";
import genMale3 from "@/assets/founders/gen-male-3.jpg";
import genMale4 from "@/assets/founders/gen-male-4.jpg";
import genFemale1 from "@/assets/founders/gen-female-1.jpg";
import genFemale2 from "@/assets/founders/gen-female-2.jpg";

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
  { name: "Ashutosh Srivastava", company: "WeConvert", img: genMale1 },
  { name: "Ricardo Ortiz Sordo", company: "Logiety", img: genMale2 },
  { name: "Ewelina Robaczek", company: "Vouchery.io", img: genFemale1 },
  { name: "Michael Du", company: "Advanced Robotics", img: genMale3 },
  { name: "Bart Slowik", company: "SylLab Systems Inc", img: genMale4 },
  { name: "Fatima Awan", company: "Finiite Technologies Inc", img: genFemale2 },
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
          {founders.map((founder, i) => (
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
                  <img src={founder.img} alt={founder.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
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
