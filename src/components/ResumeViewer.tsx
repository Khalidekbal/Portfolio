import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, ShieldCheck, Mail, GraduationCap, Briefcase } from 'lucide-react';

interface ResumeViewerProps {
  cvUrl?: string;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({
  cvUrl = '/cv/Khalid_Mohamed_CV.pdf'
}) => {
  return (
    <section id="cv" className="py-24 px-4 sm:px-6 relative tech-dots bg-slate-50/50">
      {/* Background ambient light glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-700 mb-3 shadow-sm">
            <FileText className="w-3.5 h-3.5 text-cyan-600" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Curriculum Vitae & Academic Credentials
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Visible directly below without download requirements. You can also save an offline copy or view in fullscreen.
          </p>

          {/* Action buttons bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={cvUrl}
              download="Khalid_Mohamed_CV.pdf"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-600/20 hover:from-cyan-500 hover:to-teal-500 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF</span>
            </a>

            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-medium text-xs sm:text-sm shadow-sm transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4 text-slate-500" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>

        {/* Embedded Interactive PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden"
        >
          {/* Top Bar of Viewer */}
          <div className="px-6 py-3.5 bg-slate-100/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-slate-600 font-medium hidden sm:inline">
                Khalid_Mohamed_Ekbal_Resume.pdf
              </span>
            </div>

            <div className="flex items-center space-x-4 text-slate-600">
              <span className="flex items-center space-x-1.5 font-mono text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Ain Shams Mechatronics</span>
              </span>
              <span className="hidden md:inline text-slate-300">|</span>
              <span className="hidden md:inline font-mono text-[11px]">Updated 2026</span>
            </div>
          </div>

          {/* Inline PDF Frame */}
          <div className="w-full h-[750px] sm:h-[900px] bg-slate-50 relative">
            <iframe
              src={`${cvUrl}#toolbar=1&navpanes=0`}
              title="Khalid Mohamed Resume"
              className="w-full h-full border-none"
            />
          </div>

          {/* Mobile Notice Fallback */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <span>
              Direct contact: <strong>khalidekbal03@gmail.com</strong> • +20 1140070356
            </span>
            <a
              href={cvUrl}
              download="Khalid_Mohamed_CV.pdf"
              className="text-cyan-700 hover:text-cyan-800 font-semibold underline flex items-center space-x-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tap here if PDF does not load on mobile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
