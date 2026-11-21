import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeStrip from './components/MarqueeStrip';
import PatentShowcase from './components/PatentShowcase';
import TrajectorySection from './components/TrajectorySection';
import ProjectsSection from './components/ProjectsSection';
import LeadershipSection from './components/LeadershipSection';
import CredentialsAndHonors from './components/CredentialsAndHonors';
import MediaNewsroom from './components/MediaNewsroom';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileQuickNav from './components/MobileQuickNav';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f8fafc] flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300 pb-16 md:pb-0 relative antialiased">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MarqueeStrip />
        <PatentShowcase />
        <TrajectorySection />
        <ProjectsSection />
        <LeadershipSection />
        <CredentialsAndHonors />
        <MediaNewsroom />
        <ContactSection />
      </main>
      <Footer />
      <MobileQuickNav />
    </div>
  );
}
