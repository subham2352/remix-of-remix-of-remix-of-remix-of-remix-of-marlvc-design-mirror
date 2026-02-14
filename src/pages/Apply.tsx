import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const steps = ["Company Info", "Founder Details", "Your Pitch"];

const Apply = () => {
  const [step, setStep] = useState(0);
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <Layout>
      <section className="bg-gradient-to-br from-teal to-teal/80 py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Apply Now
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              If you are a driven founder working on frontier technology in the DeepTech sector we would like to hear from you. Take your company to the next level by participating in our program.
            </p>
            <div className="mt-8">
              <a
                href="https://www.f6s.com/marl-accelerator-spring-2026-cohort/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-teal font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Apply on F6S
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex justify-between mb-3">
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    i <= step ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step 1 */}
          {step === 0 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-navy-deep">Company Name</Label>
                <Input placeholder="Enter your company name" className="border-border" />
              </div>
              <div className="space-y-2">
                <Label className="text-navy-deep">Website</Label>
                <Input placeholder="https://yourcompany.com" className="border-border" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-navy-deep">Industry Vertical</Label>
                  <Input placeholder="e.g., AI, Robotics" className="border-border" />
                </div>
                <div className="space-y-2">
                  <Label className="text-navy-deep">Founding Year</Label>
                  <Input placeholder="e.g., 2024" className="border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-navy-deep">Location</Label>
                <Input placeholder="City, Country" className="border-border" />
              </div>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-navy-deep">First Name</Label>
                  <Input placeholder="John" className="border-border" />
                </div>
                <div className="space-y-2">
                  <Label className="text-navy-deep">Last Name</Label>
                  <Input placeholder="Doe" className="border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-navy-deep">Email</Label>
                <Input type="email" placeholder="john@company.com" className="border-border" />
              </div>
              <div className="space-y-2">
                <Label className="text-navy-deep">Role</Label>
                <Input placeholder="CEO & Co-Founder" className="border-border" />
              </div>
              <div className="space-y-2">
                <Label className="text-navy-deep">LinkedIn Profile</Label>
                <Input placeholder="https://linkedin.com/in/..." className="border-border" />
              </div>
            </motion.div>
          )}

          {/* Step 3 */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-navy-deep">One-Line Description</Label>
                <Input placeholder="Describe your company in one sentence" className="border-border" />
              </div>
              <div className="space-y-2">
                <Label className="text-navy-deep">Problem You're Solving</Label>
                <Textarea placeholder="What problem does your company solve?" className="border-border min-h-[100px]" />
              </div>
              <div className="space-y-2">
                <Label className="text-navy-deep">Your Solution</Label>
                <Textarea placeholder="How does your product/service solve this problem?" className="border-border min-h-[100px]" />
              </div>
              <div className="space-y-2">
                <Label className="text-navy-deep">Traction</Label>
                <Textarea placeholder="Describe your current traction (users, revenue, partnerships, etc.)" className="border-border min-h-[80px]" />
              </div>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            <Button
              variant="outline"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="border-border"
            >
              Previous
            </Button>
            {step < steps.length - 1 ? (
              <Button
                onClick={() => setStep((s) => s + 1)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              >
                Next
              </Button>
            ) : (
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Submit Application
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
