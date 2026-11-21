import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Star, FileText, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    category: 'Patent Licensing & Deep Tech R&D',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Patent Licensing & Deep Tech R&D',
    'Civic Infrastructure (TN Volunteers)',
    'Keynote & Speaking Invitations',
    'Clinical AI / Academic Collaboration',
    'Media & Press Interview'
  ];

  const checklistItems = [
    {
      title: "Direct Access to Primary Inventor & Founder",
      desc: "No institutional gatekeepers or intermediaries; direct correspondence with Nethra Neha DS."
    },
    {
      title: "Rapid Turnaround on IP & Technical Dossiers",
      desc: "Full patent specifications, grants, and technical documentation available for verified partners."
    },
    {
      title: "Proven Scale Across 38 Revenue Districts",
      desc: "Demonstrated execution across Tamil Nadu Volunteers infrastructure and commercial deployments."
    },
    {
      title: "Sovereign Multi-National Portfolio",
      desc: "7 registered inventions across the UK IPO, CIPO Canada, IP India, and DPMA Germany."
    }
  ];

  const reviewers = [
    { name: "Tamil Nadu Volunteers", role: "State Executive Body", initials: "TN", bg: "bg-blue-600" },
    { name: "UK IPO Registry", role: "Design Grant Office", initials: "UK", bg: "bg-indigo-600" },
    { name: "CIPO Canada", role: "Precision Oncology IP", initials: "CA", bg: "bg-emerald-600" },
    { name: "National Press", role: "207+ Verified Outlets", initials: "PR", bg: "bg-cyan-600" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[${formState.category}] ${formState.subject || `Inquiry from ${formState.name}`}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nCategory: ${formState.category}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0a0c10] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact 8 Split Form Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Editorial Checklist & Institutional Reviewers (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Header / Eyebrow */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2f6bff]/10 border border-[#2f6bff]/20 text-[#2f6bff] text-xs font-mono font-semibold mb-3 uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Dialogue &bull; Inquiries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.05] font-display">
                Initiate Direct Collaboration
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                For academic research collaborations, patent licensing inquiries, civic technology initiatives, or keynote invitations with Nethra Neha DS.
              </p>
            </div>

            {/* Checklist of Value Props */}
            <div className="space-y-4 pt-2">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="mt-0.5 p-1 rounded-full bg-[#2f6bff]/10 border border-[#2f6bff]/30 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#2f6bff]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reviewers & Social Proof Bar */}
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

            {/* Quick Contact Links */}
            <div className="pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Direct Desk</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-white hover:text-[#2f6bff] font-semibold transition-colors mt-0.5 block truncate"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Telephone / Signal</span>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="text-slate-300 hover:text-[#2f6bff] font-semibold transition-colors mt-0.5 block"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact 8 Interactive Form Card (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0d1017] border border-white/10 p-6 sm:p-9 shadow-2xl relative">
            
            <div className="mb-6 pb-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                  Official Contact Form
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Direct dispatch to Nethra Neha DS executive office
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#2f6bff]/10 border border-[#2f6bff]/20 text-[#2f6bff] text-[11px] font-mono font-bold">
                24h Response
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category Selector */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Nature of Inquiry:
                </label>
                <select
                  value={formState.category}
                  onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080a0f] border border-white/10 text-xs text-white focus:outline-none focus:border-[#2f6bff] transition-colors font-mono"
                >
                  {categories.map((c) => (
                    <option key={c} value={c} className="bg-[#0d1017] text-white">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Two-Column Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Dr. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080a0f] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#2f6bff] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Official Email:
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080a0f] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#2f6bff] transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Subject / Organization:
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="e.g. Healthcare AI Patent Licensing Evaluation"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080a0f] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#2f6bff] transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Detailed Transmission:
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Outline the scope of collaboration, technical requirements, or keynote date..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080a0f] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#2f6bff] transition-colors leading-relaxed"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2f6bff] hover:bg-[#2558d9] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>

                <a
                  href="/documents/Nethra-Neha-DS-CV.docx"
                  download
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#141822] hover:bg-[#1a202d] border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#2f6bff]" />
                  <span>Download CV (.docx)</span>
                </a>
              </div>

              {/* Success Notification */}
              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Your email client has been dispatched with the pre-filled inquiry.</span>
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
