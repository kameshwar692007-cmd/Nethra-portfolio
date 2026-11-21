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
    <section id="contact" className="py-16 sm:py-20 bg-[#0a0c10] border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>06 // DIRECT DIALOGUE &bull; INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05] font-display">
            Initiate Direct Contact
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            For academic research collaborations, patent licensing inquiries, civic technology initiatives, or keynote invitations with Nethra Neha DS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Official Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0d1017] border border-white/[0.1] space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white font-display">
                Executive Directory
              </h3>

              <div className="space-y-5 text-sm font-mono">
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Executive Desk (Annexra)</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-white hover:text-cyan-400 text-sm font-semibold transition-colors block mt-1"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Academic / Research Correspondence</div>
                  <a
                    href={`mailto:${personalInfo.secondaryEmail}`}
                    className="text-slate-300 hover:text-cyan-400 text-sm transition-colors block mt-1"
                  >
                    {personalInfo.secondaryEmail}
                  </a>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Direct Telephone</div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-slate-300 hover:text-cyan-400 text-sm transition-colors block mt-1"
                  >
                    {personalInfo.phone}
                  </a>
                </div>

                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Geographic Coordinates</div>
                  <div className="text-slate-300 text-sm mt-1">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <a
                  href="/documents/Nethra-Neha-DS-CV.docx"
                  download
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase font-mono tracking-wider transition-all shadow-sm active:scale-98"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Curriculum Vitae (.docx)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0d1017] border border-white/[0.1] shadow-2xl">
              <h3 className="text-xl font-bold text-white font-display mb-1">
                Dispatch Formal Communication
              </h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                Directly addressed to Nethra Neha DS and Annexra Executive Office.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-cyan-950/20 border border-cyan-500/30 text-center space-y-3 font-mono">
                  <CheckCircle className="w-10 h-10 text-cyan-400 mx-auto" />
                  <div className="text-base font-bold text-white">Launching Mail Client...</div>
                  <p className="text-xs text-slate-300">Your operating system email client has been prepared with your dispatch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Dr. / Prof. / Full Name"
                        className="w-full px-4 py-3 rounded-lg bg-[#12151c] border border-white/[0.08] text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Official Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#12151c] border border-white/[0.08] text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Inquiry Domain</label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Patent Licensing / AI Research Collaboration / Keynote Invitation"
                      className="w-full px-4 py-3 rounded-lg bg-[#12151c] border border-white/[0.08] text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Message Details</label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Detail the scope of research, governance, or technical inquiry..."
                      className="w-full px-4 py-3 rounded-lg bg-[#12151c] border border-white/[0.08] text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase font-mono tracking-wider shadow-sm transition-all active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Dispatch to Executive Desk</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
