import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { certificatesData, Certificate } from '../data/certificates';
import { CertificateModal } from './CertificateModal';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 relative bg-white/70">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-700 mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-cyan-600" />
            <span>CREDENTIALS & SPECIALIZATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Verified Certifications
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Formal training in Modern C++, EV Powertrain architecture, automotive systems engineering, and machine learning.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-200 p-5 flex flex-col justify-between hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/10 hover:-translate-y-1 relative shadow-xs"
            >
              {/* Media Thumbnail Container */}
              <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200 mb-4 flex items-center justify-center group-hover:border-cyan-300 transition-colors">
                {cert.mediaType === 'image' ? (
                  <img
                    src={cert.filePath}
                    alt={cert.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-2 p-4 text-center">
                    <div className="p-3 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-200">
                      <FileText className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-mono text-cyan-700 font-semibold">PDF Certificate Document</span>
                  </div>
                )}

                {/* Hover overlay preview badge */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-2xs">
                  <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-cyan-600 text-white text-xs font-bold shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Credential</span>
                  </span>
                </div>
              </div>

              {/* Certificate Information */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5 font-mono">
                    <span className="text-cyan-700 font-semibold">{cert.issuer}</span>
                    <span>{cert.issueDate}</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base group-hover:text-cyan-700 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-600 border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-500 border border-slate-200">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
