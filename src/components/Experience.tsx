import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight, GraduationCap } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative bg-white/70">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-700 mb-3 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-cyan-600" />
            <span>EXPERIENCE & TIMELINE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering Journey
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Professional internships, client additive manufacturing projects, and formula student electric powertrain development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
          {experienceData.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Node icon indicator */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-cyan-600" />
                </div>

                {/* Content Card */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-50 text-cyan-700 border border-cyan-200">
                      {item.type}
                    </span>
                    <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mt-1">
                    {item.role}
                  </h3>

                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-cyan-700 font-semibold mt-0.5">
                    <span>{item.organization}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 font-normal flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-2">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-2 text-xs sm:text-sm text-slate-700 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0 mt-1.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
