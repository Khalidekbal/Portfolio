import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl?: string;
}

export const CVModal: React.FC<CVModalProps> = ({
  isOpen,
  onClose,
  cvUrl = '/cv/Khalid_Mohamed_CV.pdf',
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.35, bounce: 0.2 }}
          className="relative w-full max-w-4xl h-[88vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-200">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Curriculum Vitae</h3>
                <p className="text-xs text-slate-500">Khalid Mohamed Ekbal — Mechatronics & Automation</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href={cvUrl}
                download="Khalid_Mohamed_CV.pdf"
                className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600 text-white font-medium text-xs sm:text-sm hover:bg-cyan-500 transition-colors shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Body */}
          <div className="flex-1 bg-slate-100 p-2 sm:p-4 overflow-hidden relative">
            <iframe
              src={`${cvUrl}#toolbar=1&navpanes=0`}
              title="Khalid Mohamed CV Preview"
              className="w-full h-full rounded-lg border border-slate-200 shadow-sm"
            />
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
            <span>Direct contact: khalidekbal03@gmail.com</span>
            <span>Ain Shams University Mechatronics & Automation</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
