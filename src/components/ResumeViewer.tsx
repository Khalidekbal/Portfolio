import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, ShieldCheck, Mail, GraduationCap, Briefcase, CheckCircle2, User, Phone, MapPin, Award } from 'lucide-react';

interface ResumeViewerProps {
  cvUrl?: string;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({
  cvUrl = '/cv/Khalid_Mohamed_CV.pdf'
}) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'formatted'>('pdf');

  return (
    <section id="cv" className="py-24 px-4 sm:px-6 relative tech-dots bg-slate-50/50">
      {/* Background ambient light glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-700 mb-3 shadow-xs">
            <FileText className="w-3.5 h-3.5 text-cyan-600" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Curriculum Vitae & Technical Credentials
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Review Khalid Mohamed's full academic background, professional R&D experience, and mechatronics competencies below.
          </p>

          {/* Action buttons & view toggle */}
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
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium text-xs sm:text-sm shadow-xs transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4 text-slate-500" />
              <span>Open in New Tab</span>
            </a>

            {/* View Mode Toggle Buttons */}
            <div className="inline-flex rounded-xl bg-slate-200/80 p-1 border border-slate-300 shadow-2xs">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'pdf'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                PDF Document
              </button>
              <button
                onClick={() => setViewMode('formatted')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'formatted'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Web Document
              </button>
            </div>
          </div>
        </div>

        {/* Embedded Interactive PDF Viewer & Web Document */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden"
        >
          {/* Top Bar */}
          <div className="px-6 py-3.5 bg-slate-100/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-slate-700 font-semibold hidden sm:inline">
                Khalid_Mohamed_Ekbal_CV.pdf
              </span>
            </div>

            <div className="flex items-center space-x-4 text-slate-600">
              <span className="flex items-center space-x-1.5 font-mono text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ain Shams University — Mechatronics & Automation</span>
              </span>
            </div>
          </div>

          {/* Viewer Area */}
          {viewMode === 'pdf' ? (
            <div className="w-full h-[780px] sm:h-[950px] bg-slate-100 relative">
              <object
                data={`${cvUrl}#toolbar=1&navpanes=0`}
                type="application/pdf"
                className="w-full h-full"
              >
                <iframe
                  src={`${cvUrl}#toolbar=1&navpanes=0`}
                  title="Khalid Mohamed Resume"
                  className="w-full h-full border-none"
                >
                  <div className="p-8 text-center bg-white h-full flex flex-col items-center justify-center">
                    <p className="text-slate-700 font-semibold mb-3">
                      Your browser does not support inline PDF viewing.
                    </p>
                    <a
                      href={cvUrl}
                      download="Khalid_Mohamed_CV.pdf"
                      className="px-5 py-2.5 rounded-xl bg-cyan-600 text-white font-semibold text-sm"
                    >
                      Download Khalid Mohamed CV (PDF)
                    </a>
                  </div>
                </iframe>
              </object>
            </div>
          ) : (
            /* Rich Formatted Web Document View */
            <div className="p-6 sm:p-12 max-w-4xl mx-auto space-y-8 bg-white text-slate-800">
              {/* Header */}
              <div className="border-b border-slate-200 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Khalid Mohamed Ekbal
                  </h3>
                  <p className="text-cyan-700 font-medium mt-1">
                    Aspiring Mechatronics & Automation Engineer
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Giza, Egypt • 01140070356 • khalidekbal03@gmail.com
                  </p>
                </div>
                <a
                  href={cvUrl}
                  download="Khalid_Mohamed_CV.pdf"
                  className="px-4 py-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700 font-semibold text-xs flex items-center space-x-1.5 hover:bg-cyan-100"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-3 font-mono">
                  Education
                </h4>
                <div className="flex justify-between items-start text-sm">
                  <div>
                    <span className="font-bold text-slate-900">Bachelor of Engineering in Mechatronics & Automation</span>
                    <span className="block text-slate-600 text-xs">Ain Shams University — Faculty of Engineering</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">Expected 2027</span>
                </div>
              </div>

              {/* Internships */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-3 font-mono">
                  Internships
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-slate-900">Research & Development (R&D) Intern | El Sewedy Electrometer</span>
                      <span className="text-xs font-mono text-slate-500">07/2026 - Present</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed">
                      <li>Analyzed smart meter architectures, focusing on RTOS implementation, low-power MCU optimization, and industrial communication protocols (RF, GPRS, PLC).</li>
                      <li>Ultrasonic flowmeter integration and PCB design principles (DFM/DFT, EMC compliance).</li>
                      <li>Mapped product lifecycle from 3D CAD modeling to full-stack integration with ISTQB-aligned testing.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-slate-900">Automotive Mechanical Advanced Trainee | GB Academy</span>
                      <span className="text-xs font-mono text-slate-500">08/2024 - 09/2024</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed">
                      <li>Completed training on engine operations, transmission systems, and hydraulic braking.</li>
                      <li>Acquired practical mechanical teardown knowledge of key automotive chassis components.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-3 font-mono">
                  Experience
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-slate-900">Founder & 3D Printing Specialist | Freelance 3D Printing Business</span>
                      <span className="text-xs font-mono text-slate-500">09/2025 - Present</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed">
                      <li>Modeled customized parts in SolidWorks using Design for Additive Manufacturing (DFAM).</li>
                      <li>Managed production volume exceeding 1,000+ printing hours, matching mechanical and thermal requirements.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="font-bold text-slate-900">EV Powertrain Member | ASU EV Racing Team (Ain Shams University)</span>
                      <span className="text-xs font-mono text-slate-500">11/2024 - 05/2026</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed">
                      <li>Studied EV battery pack configurations, cell interconnections, and fuse protection strategies.</li>
                      <li>Built MATLAB models for battery sizing, internal resistance, and thermal efficiency.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-3 font-mono">
                  Key Projects
                </h4>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div>
                    <span className="font-bold text-slate-900">AMR Medical Robot (Autonomous Mobile Robot)</span>: ROS 2 on Raspberry Pi, ESP32 FreeRTOS low-level PID control, sensor fusion (IMU + encoders), Wi-Fi GUI.
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">7-DOF Robotic Arm (ROS 2 & Micro-ROS)</span>: Multi-joint kinematics, MoveIt 2 motion planning, distributed micro-ROS RTOS control.
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Automated Production Line (PLC-Based Control)</span>: Siemens S7-1500 PLC, structured automation logic, HMI SCADA, Factory I/O SIL/HIL simulation.
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Smart Flowmeter System</span>: Cup-anemometer fluid flow measurement (92%+ accuracy), SolidWorks 3D CAD, IoT sensor integration.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer Bar */}
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
              <span>Download Official PDF (Khalid_Mohamed_CV.pdf)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
