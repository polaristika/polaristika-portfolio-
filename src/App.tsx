/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Briefcase, 
  User, 
  Star, 
  Mail, 
  Phone,
  MapPin,
  Camera,
  Coffee,
  PenTool,
  MessageSquare
} from "lucide-react";

export default function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pb-24 font-sans">
      
      {/* Glossy Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 texture-metal px-4 py-3 flex justify-center gap-2 md:gap-6 rounded-none border-t-0 border-l-0 border-r-0">
        <button onClick={() => scrollTo('about')} className="btn-glossy px-4 py-2 text-sm font-bold flex items-center gap-2">
          <User className="w-4 h-4" /> <span className="hidden sm:inline">About Me</span>
        </button>
        <button onClick={() => scrollTo('past-work')} className="btn-glossy px-4 py-2 text-sm font-bold flex items-center gap-2">
          <Briefcase className="w-4 h-4" /> <span className="hidden sm:inline">Past Work</span>
        </button>
        <button onClick={() => scrollTo('featured')} className="btn-glossy px-4 py-2 text-sm font-bold flex items-center gap-2">
          <Star className="w-4 h-4" /> <span className="hidden sm:inline">Featured Projects</span>
        </button>
        <button onClick={() => scrollTo('connect')} className="btn-glossy px-4 py-2 text-sm font-bold flex items-center gap-2">
          <Mail className="w-4 h-4" /> <span className="hidden sm:inline">Connect Me</span>
        </button>
      </nav>

      <main className="max-w-5xl mx-auto pt-24 px-4 space-y-16">
        
        {/* Hero Section: Leather Portfolio Cover */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="texture-leather rounded-xl p-8 md:p-16 text-center max-w-3xl mx-auto"
        >
          <div className="border-4 border-double border-[#5c3a21] p-8 rounded-lg bg-[#3b2514]">
            <h1 className="text-5xl md:text-7xl font-serif font-bold debossed-text mb-4 tracking-wider uppercase">
              Polaristika
            </h1>
            <div className="h-1 w-32 mx-auto bg-[#2a1b12] rounded-full shadow-[0_1px_1px_rgba(255,255,255,0.2)] mb-6"></div>
            <p className="text-xl font-serif text-[#a07b5a] italic">
              Custom Portfolios • Crafted with Care
            </p>
          </div>
        </motion.section>

        {/* About Me: Lined Paper on Desk */}
        <section id="about" className="scroll-mt-24">
          <div className="texture-paper p-8 md:p-12 max-w-2xl mx-auto relative transform -rotate-1">
            {/* Paperclip */}
            <div className="absolute -top-6 -left-2 w-12 h-20 border-4 border-gray-400 rounded-full rounded-b-none border-b-0 shadow-md transform -rotate-12 z-10"></div>
            <div className="absolute -top-2 -left-0 w-8 h-16 border-4 border-gray-400 rounded-full rounded-t-none border-t-0 shadow-md transform -rotate-12 z-10"></div>
            
            <h2 className="text-4xl font-handwriting font-bold text-blue-800 mb-6 pl-8">About Me</h2>
            
            <div className="font-handwriting text-2xl text-gray-800 leading-[2rem] pl-8 space-y-4">
              <p>
                Hello there! I'm Polaristika, a digital craftsman who loves bringing ideas to life. 
                I specialize in creating highly customizable, unique portfolios for clients who want to showcase their work.
              </p>
              <p>
                Whether you're an artist, developer, or agency, I build tangible, aesthetic digital spaces tailored exactly to your personal brand.
              </p>
              <div className="flex gap-4 pt-4 text-blue-700">
                <span className="flex items-center gap-1"><Coffee className="w-5 h-5"/> Coffee Addict</span>
                <span className="flex items-center gap-1"><PenTool className="w-5 h-5"/> Portfolio Designer</span>
              </div>
              <p className="text-right pt-8 text-3xl font-bold text-blue-900">
                - Polaristika
              </p>
            </div>
          </div>
        </section>

        {/* Past Work: Corkboard with Polaroids */}
        <section id="past-work" className="scroll-mt-24">
          <div className="texture-cork p-8 md:p-12">
            <div className="texture-metal inline-block px-6 py-2 mb-8 shadow-lg transform -rotate-2">
              <h2 className="text-2xl font-sans font-bold text-gray-800 uppercase tracking-widest text-shadow-sm">Past Work</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-4">
              {/* Polaroid 1 */}
              <div className="polaroid relative transform rotate-3">
                <div className="pin"></div>
                <img src="/Screenshot 2026-02-27 213153.png" alt="Taxi Service Website" className="w-full h-auto border border-gray-200" referrerPolicy="no-referrer" />
                <p className="font-handwriting text-xl text-center mt-4 text-gray-700">Taxi Service Web</p>
              </div>
              
              {/* Polaroid 2 */}
              <div className="polaroid relative transform -rotate-2 mt-4 md:mt-0">
                <div className="pin bg-blue-500"></div>
                <img src="/Screenshot 2026-02-27 213236.png" alt="Client Portfolio" className="w-full h-auto border border-gray-200" referrerPolicy="no-referrer" />
                <p className="font-handwriting text-xl text-center mt-4 text-gray-700">Client Portfolio</p>
              </div>

              {/* Polaroid 3 */}
              <div className="polaroid relative transform rotate-1 mt-4 md:mt-0">
                <div className="pin bg-green-500"></div>
                <img src="/Screenshot 2026-02-27 213350.png" alt="Sabmohmaya Portfolio" className="w-full h-auto border border-gray-200" referrerPolicy="no-referrer" />
                <p className="font-handwriting text-xl text-center mt-4 text-gray-700">Sabmohmaya Port</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects: Metallic Dashboard / Screens */}
        <section id="featured" className="scroll-mt-24">
          <div className="texture-metal p-6 md:p-10">
            <div className="flex items-center justify-between mb-8 border-b-2 border-gray-400 pb-4 shadow-[0_1px_0_rgba(255,255,255,0.8)]">
              <h2 className="text-2xl font-sans font-bold text-gray-800 uppercase tracking-widest">Featured Projects</h2>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-inner"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-inner"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-inner"></div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Project 1: Taxi Service */}
              <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-inner border border-gray-600 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/2 border-4 border-gray-800 rounded shadow-lg bg-black p-2">
                  <img src="/Screenshot 2026-02-27 213153.png" alt="Taxi Service Project" className="w-full h-auto opacity-90 object-contain aspect-video" referrerPolicy="no-referrer" />
                </div>
                <div className="w-full md:w-1/2 text-gray-300 font-typewriter space-y-4">
                  <h3 className="text-xl font-bold text-green-400">&gt; TAXI_SERVICE.exe</h3>
                  <p className="text-sm leading-relaxed">
                    A professional and responsive website built for The Faridabad Taxi Service, 
                    focusing on clear navigation, fast load times, and booking conversions.
                  </p>
                  <a href="https://www.thefaridabadtaxiservice.com/" target="_blank" rel="noopener noreferrer" className="btn-glossy px-4 py-2 text-xs font-sans font-bold uppercase mt-4 inline-block">View Details</a>
                </div>
              </div>

              {/* Project 2: Sabmohmaya Portfolio */}
              <div className="bg-[#1a1a1a] p-4 rounded-lg shadow-inner border border-gray-600 flex flex-col md:flex-row-reverse gap-6 items-center">
                <div className="w-full md:w-1/2 border-4 border-gray-800 rounded shadow-lg bg-black p-2">
                  <img src="/Screenshot 2026-02-27 213350.png" alt="Sabmohmaya Portfolio" className="w-full h-auto opacity-90 object-contain aspect-video" referrerPolicy="no-referrer" />
                </div>
                <div className="w-full md:w-1/2 text-gray-300 font-typewriter space-y-4">
                  <h3 className="text-xl font-bold text-green-400">&gt; SABMOHMAYA.app</h3>
                  <p className="text-sm leading-relaxed">
                    A custom-built digital experience for the "Sabmohmaya" brand. 
                    This project focuses on creating a unique, immersive aesthetic that perfectly 
                    captures the client's vision, utilizing smooth animations and a tailored layout.
                  </p>
                  <a href="http://sabmohmaya.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-glossy px-4 py-2 text-xs font-sans font-bold uppercase mt-4 inline-block">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Me: Physical Business Card */}
        <section id="connect" className="scroll-mt-24 pb-12">
          <div className="relative max-w-md mx-auto">
            {/* Card Shadow */}
            <div className="absolute inset-0 bg-black/40 transform translate-y-4 translate-x-2 blur-sm rounded-sm"></div>
            
            {/* The Card */}
            <div className="relative bg-[#f4f1ea] p-8 border border-gray-300 rounded-sm transform rotate-1">
              {/* Card Texture/Noise */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
              
              <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
                <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-widest uppercase">Polaristika</h2>
                <p className="text-sm font-sans text-gray-600 tracking-widest mt-1">Custom Portfolio Creator</p>
              </div>
              
              <div className="space-y-6 font-sans text-gray-800 py-4">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center text-white shadow-inner border-2 border-gray-800">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Discord</p>
                    <span className="font-typewriter text-xl font-bold bg-gray-200 px-3 py-1 rounded shadow-inner">polaristika</span>
                  </div>
                </div>
                <p className="text-center font-handwriting text-xl text-gray-600 mt-4">
                  Reach out to start building your dream portfolio!
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-300 flex justify-center gap-4">
                <button 
                  className="btn-glossy px-6 py-2 text-sm font-bold"
                  onClick={() => {
                    navigator.clipboard.writeText('polaristika');
                    alert('Discord ID copied to clipboard!');
                  }}
                >
                  Copy Discord ID
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
