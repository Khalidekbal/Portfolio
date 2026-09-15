import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Cpu, Code, Activity, Sparkles, CheckCircle } from 'lucide-react';
import { skillsData, SkillCategory } from '../data/skills';

export const Skills: React.FC = () => {
  const getIcon = (name: SkillCategory['iconName']) => {
    switch (name) {
      case 'Wrench':
        return Wrench;
      case 'Cpu':
        return Cpu;
      case 'Code':
        return Code;
      case 'Activity':
        return Activity;
      default:
        return Cpu;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative tech-grid">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Engineering Skills Matrix
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Proficiencies across CAD modeling, embedded firmware, robotics middleware, and bioelectric signal processing.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => {
            const Icon = getIcon(category.iconName);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all duration-300 relative overflow-hidden"
              >
                {/* Header of card */}
                <div className="flex items-start space-x-3.5 mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Badges Grid */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/80">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center space-x-1.5 transition-colors ${
                        skill.highlight
                          ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10 font-semibold'
                          : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      )}
                      <span>{skill.name}</span>
                      <span className="text-[10px] text-slate-500 font-sans pl-0.5">
                        • {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
