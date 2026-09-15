import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, ShieldCheck, Mail, GraduationCap, Briefcase, Award, Phone, MapPin, CheckCircle2, Wrench, Cpu, Code, Globe, Github, Linkedin } from 'lucide-react';

interface ResumeViewerProps {
  cvUrl?: string;
}

export const ResumeViewer: React.FC<ResumeViewerProps> = ({
  cvUrl = '/cv/Khalid_Mohamed_CV.pdf'
}) => {
  return (
    <section id="cv" className="py-24 px-4 sm:px-6 relative tech-dots bg-slate-50/60">
      {/* Background ambient light glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-700 mb-3 shadow-xs">
            <FileText className="w-3.5 h-3.5 text-cyan-600" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Curriculum Vitae
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Verified academic background, professional engineering internships, and mechatronics technical capabilities.
          </p>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={cvUrl}
              download="Khalid_Mohamed_CV.pdf"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-cyan-600/20 hover:from-cyan-500 hover:to-teal-500 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF (CV)</span>
            </a>

            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium text-xs sm:text-sm shadow-xs transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4 text-slate-500" />
              <span>View PDF in New Tab</span>
            </a>
          </div>
        </div>

        {/* Formatted Web Document Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden"
        >
          {/* Document Top Bar */}
          <div className="px-6 py-3.5 bg-slate-100/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-2 font-mono text-slate-700 font-semibold">
                Curriculum Vitae — Khalid Mohamed Ekbal
              </span>
            </div>

            <div className="flex items-center space-x-2 text-emerald-700 font-mono text-[11px] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Ain Shams University Mechatronics & Automation</span>
            </div>
          </div>

          {/* Web CV Document Body */}
          <div className="p-6 sm:p-12 space-y-10 bg-white text-slate-800">
            {/* CV Header */}
            <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Khalid Mohamed Ekbal
                </h3>
                <p className="text-base sm:text-lg text-cyan-700 font-semibold mt-1">
                  Aspiring Mechatronics & Automation Engineer
                </p>
                <p className="text-sm text-slate-600 mt-2 max-w-xl leading-relaxed">
                  Hands-on experience in embedded systems, real-time control, EV powertrain architectures, and 3D printing prototyping.
                </p>
              </div>

              {/* Contact Information Badges */}
              <div className="flex flex-col space-y-2 text-xs font-mono text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200 shrink-0 w-full md:w-auto">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-600" />
                  <span>01140070356 (+20)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-teal-600" />
                  <a href="mailto:khalidekbal03@gmail.com" className="hover:text-cyan-700">
                    khalidekbal03@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Giza, Egypt</span>
                </div>
                <div className="flex items-center space-x-3 pt-1 border-t border-slate-200">
                  <a
                    href="https://github.com/Khalidekbal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-700 hover:text-cyan-800 font-semibold flex items-center space-x-1"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.linkedin.com/in/khalid-mohamed-ekbal-7a85b1365"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800 font-semibold flex items-center space-x-1"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center space-x-2 border-b-2 border-slate-200 pb-2 mb-4">
                <GraduationCap className="w-5 h-5 text-cyan-700" />
                <h4 className="text-base font-bold uppercase tracking-wider text-slate-900 font-mono">
                  Education
                </h4>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div>
                  <span className="font-bold text-slate-900 text-base">
                    Bachelor of Engineering in Mechatronics & Automation
                  </span>
                  <span className="block text-slate-600 text-xs sm:text-sm mt-0.5">
                    Ain Shams University — Faculty of Engineering
                  </span>
                </div>
                <span className="mt-2 sm:mt-0 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-mono font-semibold">
                  Expected 2027
                </span>
              </div>
            </div>

            {/* Internships Section */}
            <div>
              <div className="flex items-center space-x-2 border-b-2 border-slate-200 pb-2 mb-4">
                <Briefcase className="w-5 h-5 text-teal-700" />
                <h4 className="text-base font-bold uppercase tracking-wider text-slate-900 font-mono">
                  Internships
                </h4>
              </div>
              <div className="space-y-6">
                {/* El Sewedy Electrometer */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="font-bold text-slate-900 text-base">
                        Research & Development (R&D) Intern
                      </span>
                      <span className="text-cyan-700 font-semibold block text-sm">
                        El Sewedy Electrometer
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      07/2026 - Present
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside leading-relaxed">
                    <li>
                      <strong className="text-slate-900">Embedded Firmware & Hardware Design:</strong> Analyzed smart meter architectures, focusing on RTOS implementation, low-power MCU optimization, and industrial communication protocols (RF, GPRS, PLC), alongside ultrasonic flowmeter integration and PCB design principles (DFM/DFT, EMC compliance).
                    </li>
                    <li>
                      <strong className="text-slate-900">Systems Testing & Product Lifecycle:</strong> Mapped end-to-end product development from 3D CAD mechanical modeling to full-stack software integration (ASP.NET Core, Angular), while applying ISTQB-aligned testing frameworks for REST APIs, performance load testing, and system validation.
                    </li>
                  </ul>
                </div>

                {/* GB Academy */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="font-bold text-slate-900 text-base">
                        Automotive Mechanical Advanced Trainee
                      </span>
                      <span className="text-teal-700 font-semibold block text-sm">
                        GB Academy (Ghabbour Auto)
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      08/2024 - 09/2024
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside leading-relaxed">
                    <li>Completed rigorous hands-on training on engine operations, transmission systems, and hydraulic braking.</li>
                    <li>Acquired practical diagnostic and mechanical teardown knowledge of key automotive components through intensive practical sessions.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <div className="flex items-center space-x-2 border-b-2 border-slate-200 pb-2 mb-4">
                <Wrench className="w-5 h-5 text-blue-700" />
                <h4 className="text-base font-bold uppercase tracking-wider text-slate-900 font-mono">
                  Experience
                </h4>
              </div>
              <div className="space-y-6">
                {/* Freelance 3D Printing Business */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="font-bold text-slate-900 text-base">
                        Founder & 3D Printing Specialist
                      </span>
                      <span className="text-blue-700 font-semibold block text-sm">
                        Freelance 3D Printing Business
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      09/2025 – Present
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside leading-relaxed">
                    <li>
                      <strong className="text-slate-900">Prototyping & Client Consultation:</strong> Designed and manufactured custom prototypes tailored to precise customer specifications and functional requirements.
                    </li>
                    <li>
                      <strong className="text-slate-900">Design for Additive Manufacturing (DFAM):</strong> Modeled and modified parts using SolidWorks, strategically designing around 3D printing limitations to ensure structural integrity and manufacturability.
                    </li>
                    <li>
                      <strong className="text-slate-900">Production & Material Selection:</strong> Successfully managed a production volume of over 1,000 printing hours, expertly matching client mechanical and environmental needs with the most suitable printing materials.
                    </li>
                    <li>
                      <strong className="text-slate-900">Process Optimization:</strong> Calibrated advanced slicer settings to optimize print quality, minimize failure rates, and reduce material waste.
                    </li>
                  </ul>
                </div>

                {/* ASU EV Racing Team */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <span className="font-bold text-slate-900 text-base">
                        EV Powertrain Member
                      </span>
                      <span className="text-cyan-700 font-semibold block text-sm">
                        ASU EV Racing Team (Ain Shams University)
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      11/2024 – 05/2026
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside leading-relaxed">
                    <li>
                      <strong className="text-slate-900">Battery Systems & Safety:</strong> Studied EV battery pack configurations, cell interconnections, and fuse protection strategies to ensure reliability and safety.
                    </li>
                    <li>
                      <strong className="text-slate-900">Battery Management Systems (BMS):</strong> Gained knowledge of suitable BMS architectures for monitoring, balancing, and protecting battery cells.
                    </li>
                    <li>
                      <strong className="text-slate-900">Modeling & Testing:</strong> Built MATLAB models for battery sizing and conducted tests to determine capacity, efficiency, and dynamic behavior of the battery.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Engineering Projects Section */}
            <div>
              <div className="flex items-center space-x-2 border-b-2 border-slate-200 pb-2 mb-4">
                <Cpu className="w-5 h-5 text-indigo-700" />
                <h4 className="text-base font-bold uppercase tracking-wider text-slate-900 font-mono">
                  Key Engineering Projects
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 text-sm block">
                    AMR Medical Robot (Autonomous Mobile Robot)
                  </span>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Semi-autonomous medical robot with complete mechanical, electrical, and software integration. Implementing ROS 2 on Raspberry Pi for navigation, RTOS PID control on ESP32, sensor fusion (IMU + encoders), and Wi-Fi GUI.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 text-sm block">
                    7-DOF Robotic Arm (ROS 2 & Micro-ROS)
                  </span>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Designed a 7-degree-of-freedom robotic manipulator with MoveIt 2 coordinated motion planning. Integrated micro-ROS communication between high-level ROS 2 and RTOS-based low-level actuator controllers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 text-sm block">
                    Automated Production Line (PLC-Based Control)
                  </span>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Industrial production line encompassing feeding, machining, assembly, and sorting. Programmed Siemens S7-1500 PLC with HMI interface and fault detection validated through SIL/HIL simulation in Factory I/O.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 text-sm block">
                    Smart Flowmeter System (Cup-Anemometer)
                  </span>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Designed high-accuracy (92%+) cup-anemometer flowmeter including parametric Excel modeling, 3D CAD assembly in SolidWorks, and embedded optical sensor integration for IoT telemetry.
                  </p>
                </div>
              </div>
            </div>

            {/* Courses & Training */}
            <div>
              <div className="flex items-center space-x-2 border-b-2 border-slate-200 pb-2 mb-4">
                <Award className="w-5 h-5 text-amber-700" />
                <h4 className="text-base font-bold uppercase tracking-wider text-slate-900 font-mono">
                  Courses & Specialized Programs
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block">Embedded Systems Course</span>
                  <span className="text-slate-500 font-mono">Robotics Corner (2025)</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block">EV Powertrain Academy</span>
                  <span className="text-slate-500 font-mono">ASU Racing Team (2024)</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block">Machine Learning Course</span>
                  <span className="text-slate-500 font-mono">StepsTowardsProgress (2024)</span>
                </div>
              </div>
            </div>

            {/* Skills & Competencies */}
            <div>
              <div className="flex items-center space-x-2 border-b-2 border-slate-200 pb-2 mb-4">
                <Code className="w-5 h-5 text-cyan-700" />
                <h4 className="text-base font-bold uppercase tracking-wider text-slate-900 font-mono">
                  Technical Skills & Languages
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Programming & Firmware:</span>
                  <span className="text-slate-700 leading-relaxed">
                    C, C++, Python, Embedded C, Modern C++, Arduino, Machine Vision, ROS 2, Micro-ROS, FreeRTOS.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Simulation & CAD:</span>
                  <span className="text-slate-700 leading-relaxed">
                    MATLAB, SIMULINK, Ansys, Autodesk Inventor, Fusion 360, SolidWorks, Factory I/O, TIA Portal.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Productivity & Prototyping:</span>
                  <span className="text-slate-700 leading-relaxed">
                    MS Excel, MS Office, 3D Prototyping & DFM, Slicer Optimization, PCB Basics.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Languages:</span>
                  <span className="text-slate-700 leading-relaxed">
                    <strong>Arabic:</strong> Native | <strong>English:</strong> Intermediate.
                  </span>
                </div>
              </div>
            </div>
          </div>

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
