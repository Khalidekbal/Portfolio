import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const emailAddress = 'khalidekbal03@gmail.com';
  const phoneNumber = '+20 1140070356';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative tech-dots bg-white/60">
      {/* Background glow */}
      <div className="absolute right-1/4 bottom-10 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono text-cyan-700 mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-600" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let’s Build Intelligent Machines Together
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Whether you have an inquiry regarding robotics engineering, embedded firmware, CAD prototyping, or collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Quick Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Email Card with Copy button */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 relative group overflow-hidden shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-200">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-mono transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs text-slate-400 font-mono">DIRECT INBOX</span>
              <a
                href={`mailto:${emailAddress}`}
                className="block text-base sm:text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors mt-0.5 break-all"
              >
                {emailAddress}
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Typically responds within 24 hours.
              </p>
            </div>

            {/* Phone & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="p-2 rounded-xl bg-teal-50 text-teal-700 border border-teal-200 w-fit mb-3">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-400 font-mono">PHONE / WHATSAPP</span>
                <a
                  href={`tel:${phoneNumber}`}
                  className="block text-sm font-bold text-slate-800 hover:text-teal-700 transition-colors mt-0.5 font-mono"
                >
                  {phoneNumber}
                </a>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 w-fit mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs text-slate-400 font-mono">LOCATION</span>
                <span className="block text-sm font-bold text-slate-800 mt-0.5">
                  Giza / Cairo, Egypt
                </span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-mono text-slate-400">ENGINEERING PROFILES</span>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/khalidekbal03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-500 hover:text-cyan-700 text-xs text-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/khalidekbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:text-blue-700 text-xs text-slate-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1.5">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1.5">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@organization.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1.5">
                  SUBJECT / DOMAIN
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mechatronics Project Collaboration / Opportunity"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 mb-1.5">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Share details regarding your technical requirements, project timeline, or questions..."
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 transition-all placeholder:text-slate-400 custom-scrollbar resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-700 text-white font-bold text-sm shadow-md shadow-cyan-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Status alerts */}
              {submitStatus === 'success' && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been prepared. You can also reach out directly at {emailAddress}.</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
