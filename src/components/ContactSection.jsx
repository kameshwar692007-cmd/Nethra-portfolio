import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Star, FileText, ArrowUpRight } from 'lucide-react';

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
      `Name: ${formState.name}\nEmail: ${formState.email}\nDomain: ${formState.subject}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const reviewers = [
    { name: "Tamil Nadu Volunteers", role: "State Executive Body", initials: "TN", bg: "bg-blue-600" },
    { name: "UK IPO Registry", role: "Design Grant Office", initials: "UK", bg: "bg-indigo-600" },
    { name: "CIPO Canada", role: "Precision Oncology IP", initials: "CA", bg: "bg-emerald-600" },
    { name: "National Press", role: "207+ Verified Outlets", initials: "PR", bg: "bg-cyan-600" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0a0c10] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout: Previous Content in Modern Contact 8 Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Executive Directory & Verification (5 cols) */}
          <div className="lg:col-span-5 space-y-7">
            
            {/* Header & Eyebrow */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2f6bff]/10 border border-[#2f6bff]/20 text-[#2f6bff] text-xs font-mono font-semibold mb-3 uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Dialogue &bull; Inquiries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05] font-display">
                Initiate Direct Contact
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                For academic research collaborations, patent licensing inquiries, civic technology initiatives, or keynote invitations with Nethra Neha DS.
              </p>
            </div>

            {/* Official Executive Directory (Previous Content Retained) */}
            <div className="p-6 rounded-2xl bg-[#0d1017] border border-white/10 shadow-xl space-y-5">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2.5">
                Executive Directory
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                    Executive Desk
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-white hover:text-[#2f6bff] text-xs font-bold transition-colors mt-0.5 block truncate"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                    Academic / Research Correspondence
                  </span>
                  <a
                    href={`mailto:${personalInfo.secondaryEmail}`}
                    className="text-slate-300 hover:text-[#2f6bff] text-xs transition-colors mt-0.5 block truncate"
                  >
                    {personalInfo.secondaryEmail}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                    Direct Telephone
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-slate-300 hover:text-[#2f6bff] text-xs transition-colors mt-0.5 block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                    Geographic Coordinates
                  </span>
                  <div className="text-slate-300 text-xs mt-0.5">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Reviewers & Endorsement Social Proof Card */}
            <div className="p-5 rounded-2xl bg-[#0d1017] border border-white/10 shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                {/* Avatar Stack */}
                <div className="flex -space-x-2 overflow-hidden">
                  {reviewers.map((rev, i) => (
                    <div
                      key={i}
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full ring-2 ring-[#0d1017] text-[10px] font-bold text-white font-mono ${rev.bg}`}
                      title={`${rev.name} - ${rev.role}`}
                    >
                      {rev.initials}
                    </div>
                  ))}
                </div>

                {/* Rating & Outlets */}
                <div className="text-xs">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Verified across <strong className="text-white">207+ Publications</strong>
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-1 border-t border-white/5 font-sans">
                &ldquo;Engineering grassroots innovation into sovereign, certified digital infrastructure across 38 districts.&rdquo;
              </p>
            </div>

            {/* Download Curriculum Vitae */}
            <div>
              <a
                href="/documents/Nethra-Neha-DS-CV.docx"
                download
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#141824] hover:bg-[#1a2030] border border-white/15 text-white font-bold text-xs uppercase font-mono tracking-wider transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#2f6bff]" />
                <span>Download Curriculum Vitae (.docx)</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Dispatch Formal Communication Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0d1017] border border-white/10 p-6 sm:p-9 shadow-2xl relative">
            
            <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Dispatch Formal Communication
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Directly addressed to Nethra Neha DS Executive Desk.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#2f6bff]/10 border border-[#2f6bff]/20 text-[#2f6bff] text-[11px] font-mono font-bold">
                Direct Dispatch
              </span>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-blue-950/20 border border-[#2f6bff]/30 text-center space-y-3 font-mono">
                <CheckCircle2 className="w-10 h-10 text-[#2f6bff] mx-auto" />
                <div className="text-base font-bold text-white">Launching Mail Client...</div>
                <p className="text-xs text-slate-300">
                  Your operating system email client has been prepared with your formal dispatch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Dr. / Prof. / Full Name"
                      className="w-full px-4 py-3 rounded-lg bg-[#080a0f] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#2f6bff] transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                      Official Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-3 rounded-lg bg-[#080a0f] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#2f6bff] transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Inquiry Domain
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Patent Licensing / AI Research Collaboration / Keynote Invitation"
                    className="w-full px-4 py-3 rounded-lg bg-[#080a0f] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#2f6bff] transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Detail the scope of research, governance, or technical inquiry..."
                    className="w-full px-4 py-3 rounded-lg bg-[#080a0f] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#2f6bff] transition-colors font-mono leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2f6bff] hover:bg-[#2558d9] text-white font-bold text-xs uppercase font-mono tracking-wider shadow-sm transition-all active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Dispatch to Executive Desk</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
