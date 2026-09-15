import React from 'react';
import { motion } from 'framer-motion';
import { Cog, Zap, Brain, CheckCircle2, Award, Compass, Cpu, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Mechanical Design & Kinematics',
      icon: Cog,
      iconColor: 'text-cyan-700',
      borderColor: 'border-cyan-200 hover:border-cyan-400',
      bgColor: 'bg-cyan-50',
      description:
        'Precision 3D modeling in SolidWorks, multi-body kinematics, actuator sizing, and Design for Additive Manufacturing (DFAM) with over 1,000 production hours.',
      technologies: ['SolidWorks', 'Fusion 360', 'DFAM', 'FEA Simulation', 'Actuator Sizing']
    },
    {
      title: 'Electronics & Embedded Systems',
      icon: Zap,
      iconColor: 'text-blue-700',
      borderColor: 'border-blue-200 hover:border-blue-400',
      bgColor: 'bg-blue-50',
      description:
        'Low-level firmware development in Modern C++ and C on STM32 and ESP32 with FreeRTOS. Micro-ROS communication, sensor fusion, and high-voltage EV battery management.',
      technologies: ['Embedded C/C++', 'FreeRTOS', 'ESP32 / STM32', 'Micro-ROS', 'Sensor Fusion']
    },
    {
      title: 'Biomechatronics & Control',
      icon: Brain,
      iconColor: 'text-emerald-700',
      borderColor: 'border-emerald-200 hover:border-emerald-400',
      bgColor: 'bg-emerald-50',
      description:
        'Biological signal acquisition (surface EMG), analog and digital Butterworth/notch filtering, time-domain feature extraction, and real-time gesture classification for prosthetic actuators.',
      technologies: ['sEMG Telemetry', 'DSP Filtering', 'Pattern Classification', 'PID Control Loops', 'Bionic Prosthetics']
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-white/60">
      {/* Background ambient light shape */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-700 mb-3 shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>ENGINEERING PROFILE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging Physical Mechanisms & Embedded Intelligence
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Dedicated to crafting resilient mechatronic systems that integrate mechanical kinematics, real-time deterministic firmware, and human-machine biomechanical interfaces.
          </p>
        </div>

        {/* Two-Column About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left: Profile Photo with Glowing Border */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group">
              {/* Outer Glow aura */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 opacity-40 blur-xl group-hover:opacity-70 transition duration-500" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white border-2 border-slate-200 p-2 shadow-xl">
                <img
                  src="/images/profile.jpg"
                  alt="Khalid Mohamed"
                  className="w-72 sm:w-80 h-96 object-cover object-top rounded-xl group-hover:scale-[1.02] transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=600&h=800&q=80';
                  }}
                />

                {/* Floating pill over image */}
                <div className="absolute bottom-5 left-5 right-5 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-xs flex items-center justify-between shadow-md">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-slate-800 font-semibold">Ain Shams Univ.</span>
                  </div>
                  <span className="text-cyan-700 font-mono text-[11px] font-semibold">Class of 2027</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Under Photo */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-6">
              <div className="text-center p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="block text-lg sm:text-xl font-bold text-cyan-700 font-mono">1,000+</span>
                <span className="text-[10px] sm:text-xs text-slate-500">Print Hours</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="block text-lg sm:text-xl font-bold text-teal-700 font-mono">Formula</span>
                <span className="text-[10px] sm:text-xs text-slate-500">EV Powertrain</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="block text-lg sm:text-xl font-bold text-blue-700 font-mono">R&D</span>
                <span className="text-[10px] sm:text-xs text-slate-500">El Sewedy</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Biography Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed"
          >
            <div className="p-6 rounded-2xl glass-panel relative overflow-hidden bg-white/90">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <span>The Engineering Philosophy</span>
              </h3>
              <p>
                I am a Mechatronics & Automation engineer driven by a passion for creating physical machines that perceive, compute, and act with precision. My work operates at the convergence of structural CAD design, deterministic real-time firmware, and bio-inspired robotics.
              </p>
              <p className="mt-3">
                From formulating battery pack safety strategies in the <strong className="text-cyan-800">ASU EV Racing Team</strong> to architecting smart meter telemetry during my R&D internship at <strong className="text-teal-800">El Sewedy Electrometer</strong>, I prioritize reliability, clean modular architectures, and rigorous validation through SIL/HIL simulation and physical prototypes.
              </p>
              <p className="mt-3">
                My biomechatronics research focuses on demystifying human-machine interfaces—capturing muscle action micro-potentials via <strong className="text-emerald-800">surface EMG (sEMG)</strong> and applying digital signal processing to translate biological intent into fluid prosthetic kinematics.
              </p>
            </div>

            {/* Quick checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800">Deterministic Real-Time Firmware (FreeRTOS)</span>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800">Micro-ROS Distributed Multi-Agent Control</span>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800">High-Fidelity CAD & Additive Prototyping</span>
              </div>
              <div className="flex items-start space-x-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800">Digital Signal Processing & Biomechanics</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Three Pillars of Technical Competence
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Holistic mastery across the physical, computational, and neurological engineering domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl bg-white ${pillar.borderColor} border transition-all duration-300 hover:-translate-y-1 relative group shadow-sm hover:shadow-md`}
                >
                  <div className={`w-12 h-12 rounded-xl ${pillar.bgColor} flex items-center justify-center mb-5 border border-slate-200/80 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {pillar.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-mono text-slate-700 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
