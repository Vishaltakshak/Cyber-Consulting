import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-[7rem] pb-16 text-white bg-gradient-to-br from-[#1A0038] via-40% via-[#0A2D5F] to-[#0A1C3A]">
      
      {/* --- EXTENDED PURPLE LEFT SIDE --- */}
      <div className="absolute -top-40 -left-40 w-[550px] h-[1400px] bg-[#7246FD] blur-[200px] opacity-40" />
      <div className="absolute top-0 -left-20 w-[450px] h-[1300px] bg-[#8b66ff] blur-[260px] opacity-30" />
      <div className="absolute top-20 left-0 w-[350px] h-[1200px] bg-[#a98dff] blur-[300px] opacity-25" />

      {/* BLUE GLOW RIGHT SIDE (unchanged) */}
      <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-[#2d7ce4] blur-[290px] opacity-10" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

      {/* ✔ CSS GRID (visible but subtle) */}
      <div className="absolute inset-0 opacity-[0.2] bg-[length:55px_55px] bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)]" />

      
      <div className="relative z-10 h-[80vh] flex flex-col items-center justify-center mx-auto text-center px-6 md:px-12 flex flex-col items-center">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Secure. Defend.{" "}
          <span
            className="
              bg-clip-text text-transparent 
              bg-gradient-to-r 
              from-[#9a7dff]  
              to-[#261955]
            "
            style={{ backgroundSize: "200%" }}
          >
            Transform.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mt-4 max-w-3xl leading-relaxed">
          Cyber solutions engineered to protect environments where
          <br />
          <span className="font-semibold text-[#c4afff]">
            failure is not an option.
          </span>
        </p>

        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <Link to="/contact-us">
            <button className="px-7 py-3 rounded-lg font-semibold bg-[#7246FD] hover:bg-[#6038d2] shadow-[0_0_25px_#7246FD]/40 transition">
              Get a Demo
            </button>
          </Link>

          <Link to="/about-us">
            <button className="px-7 py-3 rounded-lg font-semibold border border-white/60 hover:bg-white hover:text-[#0A2D5F] transition">
              Learn More
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
