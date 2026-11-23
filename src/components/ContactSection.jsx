import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, MapPin, Phone } from 'lucide-react';

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

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-24 bg-[#0a0c10] border-b border-[var(--border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout: Contact & Executive Verification */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Executive Directory & Profiles (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header & Eyebrow */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2f6bff]/10 border border-[#2f6bff]/20 text-[#2f6bff] text-xs font-mono font-semibold mb-3 uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Dialogue &bull; Inquiries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] tracking-tight leading-[1.05] font-display">
                Initiate Direct Contact
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                For academic research collaborations, patent licensing inquiries, civic technology initiatives, or keynote invitations with Nethra Neha DS.
              </p>
            </div>

            {/* Official Executive Directory */}
            <div className="p-6 rounded-2xl bg-[#0d1017] border border-[var(--border)] shadow-xl space-y-5">
              <h3 className="text-xs font-mono font-bold text-[var(--foreground)] uppercase tracking-wider border-b border-[var(--border)] pb-2.5">
                Executive Directory
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold block">
                    Executive Desk
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-[var(--foreground)] hover:text-[#2f6bff] text-xs font-bold transition-colors mt-0.5 block truncate"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold block">
                    Academic / Research Correspondence
                  </span>
                  <a
                    href={`mailto:${personalInfo.secondaryEmail}`}
                    className="text-[var(--text-secondary)] hover:text-[#2f6bff] text-xs transition-colors mt-0.5 block truncate"
                  >
                    {personalInfo.secondaryEmail}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold block">
                    Direct Telephone
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-[var(--text-secondary)] hover:text-[#2f6bff] text-xs transition-colors mt-0.5 block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-semibold block">
                    Geographic Coordinates
                  </span>
                  <div className="text-[var(--text-secondary)] text-xs mt-0.5">
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Prominent LinkedIn and GitHub Profiles (Replaced duplicate CV download button) */}
            <div className="p-5 rounded-2xl bg-[#0d1017] border border-[var(--border)] shadow-xl space-y-3">
              <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                Verified Digital Profiles
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface)] hover:bg-[#2f6bff]/10 border border-[var(--border)] hover:border-[#2f6bff]/40 text-[var(--foreground)] hover:text-[#2f6bff] transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#2f6bff]/10 flex items-center justify-center text-[#2f6bff] group-hover:bg-[#2f6bff] group-hover:text-white transition-colors shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold leading-tight">LinkedIn</div>
                    <div className="text-[10px] text-[var(--text-muted)] truncate">Connect with Nethra</div>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface)] hover:bg-[#2f6bff]/10 border border-[var(--border)] hover:border-[#2f6bff]/40 text-[var(--foreground)] hover:text-[#2f6bff] transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#2f6bff]/10 flex items-center justify-center text-[#2f6bff] group-hover:bg-[#2f6bff] group-hover:text-white transition-colors shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                    </svg>
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold leading-tight">GitHub</div>
                    <div className="text-[10px] text-[var(--text-muted)] truncate">View Repositories</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Dispatch Formal Communication Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0d1017] border border-[var(--border)] p-6 sm:p-9 shadow-2xl relative">
            
            <div className="mb-6 pb-4 border-b border-[var(--border)] flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[var(--foreground)] font-display">
                  Dispatch Formal Communication
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                  Directly addressed to Nethra Neha DS Executive Desk.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#2f6bff]/10 border border-[#2f6bff]/20 text-[#2f6bff] text-[11px] font-mono font-bold">
                Direct Dispatch
              </span>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-blue-950/20 border border-[#2f6bff]/30 text-center space-y-3 font-mono">
                <CheckCircle2 className="w-10 h-10 text-[#2f6bff] mx-auto" />
                <div className="text-base font-bold text-[var(--foreground)]">Launching Mail Client...</div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Your operating system email client has been prepared with your formal dispatch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Dr. / Prof. / Full Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#080a0f] border border-[var(--border)] text-xs text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2f6bff] transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5 uppercase tracking-wider">
                      Official Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#080a0f] border border-[var(--border)] text-xs text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2f6bff] transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5 uppercase tracking-wider">
                    Inquiry Domain
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Patent Licensing / AI Research Collaboration / Keynote Invitation"
                    className="w-full px-4 py-3 rounded-xl bg-[#080a0f] border border-[var(--border)] text-xs text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2f6bff] transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1.5 uppercase tracking-wider">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Detail the scope of research, governance, or technical inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-[#080a0f] border border-[var(--border)] text-xs text-[var(--foreground)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#2f6bff] transition-colors font-mono leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2f6bff] hover:bg-[#2558d9] text-white font-bold text-xs uppercase font-mono tracking-wider shadow-sm transition-all active:scale-98"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span className="text-white">Transmit Dispatch to Executive Desk</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
