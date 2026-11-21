import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeStrip from './components/MarqueeStrip';
import PatentShowcase from './components/PatentShowcase';
import JourneySection from './components/JourneySection';
import MediaNewsroom from './components/MediaNewsroom';
import LeadershipSection from './components/LeadershipSection';
import ProjectsSection from './components/ProjectsSection';
import CredentialsAndHonors from './components/CredentialsAndHonors';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileQuickNav from './components/MobileQuickNav';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/25 selection:text-emerald-300 pb-16 md:pb-0">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MarqueeStrip />
        <PatentShowcase />
        <JourneySection />
        <MediaNewsroom />
        <LeadershipSection />
        <ProjectsSection />
        <CredentialsAndHonors />
        <ContactSection />
      </main>
      <Footer />
      {/* Mobile quick action dock */}
      <MobileQuickNav />
    </div>
  );
}
