import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeStrip from './components/MarqueeStrip';
import PatentShowcase from './components/PatentShowcase';
import TrajectorySection from './components/TrajectorySection';
import TiltedFeatureCards from './components/quarry/TiltedFeatureCards';
import ProjectsSection from './components/ProjectsSection';
import LeadershipSection from './components/LeadershipSection';
import CredentialsAndHonors from './components/CredentialsAndHonors';
import MediaNewsroom from './components/MediaNewsroom';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileQuickNav from './components/MobileQuickNav';

export default function App() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  // Global smooth scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#0a0c10] text-[#f8fafc] flex flex-col font-sans selection:bg-[#2f6bff] selection:text-white pb-16 md:pb-0 relative antialiased">
      {/* Cinematic Branded Preloader */}
      <Preloader onComplete={() => setLoaderComplete(true)} />

      {/* Desktop Context-Aware Interactive Custom Cursor */}
      <CustomCursor />

      {/* Thin Global Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#2f6bff] origin-left z-[9999] pointer-events-none"
      />

      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <MarqueeStrip />
        <PatentShowcase />
        <TrajectorySection />
        <TiltedFeatureCards />
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
