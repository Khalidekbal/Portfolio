import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Award, FileText } from 'lucide-react';
import { Certificate } from '../data/certificates';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.35, bounce: 0.2 }}
          className="relative w-full max-w-3xl max-h-[88vh] bg-[#0c101e] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/70 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-100 text-sm sm:text-base">
                  {certificate.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {certificate.issuer} • {certificate.issueDate}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href={certificate.filePath}
                download
                className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                title="Download original document"
              >
                <Download className="w-4 h-4" />
              </a>
              <a
                href={certificate.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Viewer Area */}
          <div className="flex-1 bg-slate-950 p-4 overflow-y-auto flex items-center justify-center min-h-[320px]">
            {certificate.mediaType === 'image' ? (
              <img
                src={certificate.filePath}
                alt={certificate.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg border border-slate-800 shadow-xl"
              />
            ) : (
              <div className="w-full h-[65vh]">
                <iframe
                  src={`${certificate.filePath}#toolbar=0`}
                  title={certificate.title}
                  className="w-full h-full rounded-lg border border-slate-800"
                />
              </div>
            )}
          </div>

          {/* Description Footer */}
          <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-900/60 text-xs text-slate-300">
            <p>{certificate.description}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-cyan-300 border border-slate-700/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
