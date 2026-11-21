import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle, FileText } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#0b0f19] border-t border-[#1e293b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#064e3b] border border-[#059669] text-[#a7f3d0] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Mail className="w-4 h-4 text-[#34d399]" />
            Direct Communication &amp; Executive Office
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Connect with Nethra Neha DS
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Interested in research collaborations, speaking engagements, deep-tech partnerships, or Annexra Technologies initiatives? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Information Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#121a2d] border border-[#263654] border-t-4 border-t-[#059669] space-y-5 shadow-md">
              <h3 className="text-base sm:text-lg font-extrabold text-white font-display">
                Executive Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                
                {/* Primary Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#064e3b] border border-[#059669] flex items-center justify-center text-[#34d399] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide block">Executive Mail</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white font-bold hover:text-[#34d399] transition-colors block text-xs sm:text-sm"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Secondary Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1120] border border-[#1e2a42] flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide block">Personal / Academic Mail</span>
                    <a
                      href={`mailto:${personalInfo.secondaryEmail}`}
                      className="text-slate-200 hover:text-[#34d399] transition-colors block text-xs sm:text-sm"
                    >
                      {personalInfo.secondaryEmail}
                    </a>
                  </div>
                </div>

                {/* Direct Phone / WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#064e3b] border border-[#059669] flex items-center justify-center text-[#34d399] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide block">Direct Phone &amp; WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-white font-bold hover:text-[#34d399] transition-colors block text-xs sm:text-sm font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0b1120] border border-[#1e2a42] flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wide block">Headquarters &amp; Location</span>
                    <span className="text-white block text-xs sm:text-sm font-sans font-medium">{personalInfo.location}</span>
                  </div>
                </div>

              </div>

              {/* Social Channels & Resume Actions */}
              <div className="pt-4 border-t border-[#202c44] flex flex-col sm:flex-row gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0b1120] hover:bg-[#18233a] border border-[#1e2a42] text-xs font-bold text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-[#0a66c2]" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.77c-.92 0-1.67.75-1.67 1.67a1.67 1.67 0 0 0 1.67 1.67c.92 0 1.67-.75 1.67-1.67 0-.92-.75-1.67-1.67-1.67Z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0b1120] hover:bg-[#18233a] border border-[#1e2a42] text-xs font-bold text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-slate-300" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                  <span>GitHub Profile</span>
                </a>
              </div>

              {/* Download CV Document */}
              <a
                href="/documents/Nethra-Neha-DS-CV.docx"
                download
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#064e3b] hover:bg-[#065f46] border border-[#059669] text-xs font-bold text-white transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#34d399]" />
                <span>Download Official Curriculum Vitae (.docx)</span>
              </a>

            </div>

          </div>

          {/* Right Column: Direct Messaging Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121a2d] border border-[#263654] shadow-md">
              <h3 className="text-base sm:text-xl font-extrabold text-white font-display mb-1">
                Send an Executive Dispatch
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Your transmission routes directly to <strong className="text-[#34d399] font-mono">ceo@annexra.in</strong>.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#064e3b] border border-[#059669] text-white text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 text-[#34d399]" />
                  <span>Mail client initiated. We look forward to connecting with you!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Dr. Ramesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0b1120] border border-[#1e2a42] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#059669] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. ramesh@institution.org"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0b1120] border border-[#1e2a42] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#059669] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase">
                    Subject / Discussion Purpose
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Patent Licensing / Annexra Collaboration / Keynote Invite"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1120] border border-[#1e2a42] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#059669] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-200 mb-1.5 uppercase">
                    Message Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide context regarding your organization, inquiry, or partnership proposal..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0b1120] border border-[#1e2a42] text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#059669] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#059669] hover:bg-[#047857] active:scale-[0.99] text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message to Nethra Neha DS</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
