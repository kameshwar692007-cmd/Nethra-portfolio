import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PatentShowcase from './components/PatentShowcase';
import JourneySection from './components/JourneySection';
import MediaNewsroom from './components/MediaNewsroom';
import LeadershipSection from './components/LeadershipSection';
import ProjectsSection from './components/ProjectsSection';
import CredentialsAndHonors from './components/CredentialsAndHonors';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PatentShowcase />
        <JourneySection />
        <MediaNewsroom />
        <LeadershipSection />
        <ProjectsSection />
        <CredentialsAndHonors />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
