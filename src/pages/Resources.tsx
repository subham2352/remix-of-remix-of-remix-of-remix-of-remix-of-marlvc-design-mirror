import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Download, ExternalLink } from "lucide-react";

const articles = [
  { title: "The State of Enterprise AI in 2026", category: "AI", date: "Feb 10, 2026", readTime: "5 min read" },
  { title: "How to Build a Winning Pitch Deck", category: "Fundraising", date: "Feb 5, 2026", readTime: "8 min read" },
  { title: "Cybersecurity Trends Every Founder Should Know", category: "Cybersecurity", date: "Jan 28, 2026", readTime: "6 min read" },
  { title: "Scaling Your Startup: From 0 to 100 Customers", category: "Growth", date: "Jan 20, 2026", readTime: "7 min read" },
  { title: "The Future of Autonomous Logistics", category: "Logistics", date: "Jan 15, 2026", readTime: "4 min read" },
  { title: "AR/VR in the Enterprise: Use Cases That Work", category: "AR / VR", date: "Jan 8, 2026", readTime: "6 min read" },
];

const resources = [
  { title: "Pitch Deck Template", type: "PDF", desc: "Our proven pitch deck structure used by 45+ portfolio companies" },
  { title: "Financial Model Starter", type: "Excel", desc: "SaaS financial model template with key metrics" },
  { title: "Founder's Fundraising Guide", type: "PDF", desc: "Step-by-step guide to raising your first round" },
];

const Resources = () => {
  return (
    <Layout>
      <section className="bg-navy-deep py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-teal font-display text-sm uppercase tracking-[0.3em] mb-4">Resources</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Insights & <span className="text-primary">Resources</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Stay ahead with our latest insights, guides, and tools for enterprise tech founders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-deep mb-10">
            Latest <span className="text-primary">Articles</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-muted rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-navy-deep to-navy flex items-center justify-center">
                  <BookOpen className="text-white/10 group-hover:text-primary/20 transition-colors" size={40} />
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{article.category}</span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-navy-deep mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-xs text-muted-foreground">{article.date}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-navy-deep">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10">
            Free <span className="text-primary">Downloads</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs bg-teal/20 text-teal px-2 py-1 rounded-full">{r.type}</span>
                  <Download className="text-white/30 group-hover:text-primary transition-colors" size={18} />
                </div>
                <h3 className="text-white font-semibold mb-2">{r.title}</h3>
                <p className="text-white/50 text-sm">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
