import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};


const AboutPage = () => {
  return (
 
    <div
      className="w-full min-h-screen text-slate-200 overflow-x-hidden" 
      style={{
        background:
          "radial-gradient(circle at top left, #4A2FBD 0%, #222677ff 40%, #0A1C3C 80%, #050E1A 100%)",
      }}
    >
      
      <section className="relative w-full h-screen
       flex flex-col items-center justify-center text-center text-white overflow-hidden px-6">
       
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none">
          <div className="w-full h-full rounded-full bg-purple-700 opacity-20 blur-[150px]"></div>
          <div className="absolute inset-20 w-auto h-auto rounded-full border-[1px] border-purple-400 opacity-30 animate-pulse"></div>
          <div className="absolute inset-40 w-auto h-auto rounded-full border-[1px] border-purple-500 opacity-20"></div>
        </div>

        <motion.div
          className="relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Pioneers in
            <br />
            Proactive Defense.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl max-w-2xl mx-auto text-slate-300"
          >
            We're not just a cybersecurity firm. We are researchers and threat
            hunters, engineering the next generation of defense.
          </motion.p>
        </motion.div>
      </section>

      {/* --- 2. CORE PILLARS SECTION (3-Card Layout) --- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Card 1: Research */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              Research & Development
            </h3>
            <p className="text-slate-300">
              Through relentless R&D, we push the boundaries and seek innovative
              ways to bridge the gap between offense and defense.
            </p>
          </motion.div>

          {/* Card 2: Threat Hunting */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              Active Threat Hunting
            </h3>
            <p className="text-slate-300">
              We don't wait for threats to emerge. We actively hunt them,
              wielding cutting-edge solutions like precision weapons.
            </p>
          </motion.div>

          {/* Card 3: ASM */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              Attack Surface Management
            </h3>
            <p className="text-slate-300">
              We meticulously craft unique strategies to shield organizations
              from the most advanced threats and exposures.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          className="flex flex-col md:flex-row gap-10 md:gap-16 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Vision */}
          <motion.div variants={fadeInUp} className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed border-l-4 border-blue-400 pl-6">
              To make cutting-edge cybersecurity products in India, for the
              world.
            </p>
          </motion.div>

          {/* Commitment */}
          <motion.div variants={fadeInUp} className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Commitment
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Your security is our top priority. We are committed to
              transparency, accountability, and continuous improvement. Our
              client-centric approach provides customized solutions that align
              with your specific challenges and objectives.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;