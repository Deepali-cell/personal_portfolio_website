import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import ContactSection from "@/app/components/ContactSection";
import CustomCursor from "@/app/components/CustomCursor";
import LoadingScreen from "@/app/components/LoadingScreen";
import ToastProvider from "@/app/components/ToastProvider";
import FloatingSocials from "@/app/components/FloatingSocials";
import ParticleBackground from "./components/ParticaleBackground";
import SkillsSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectSection";
import CertificationsSection from "./components/CertificationSection";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ToastProvider />
      <div className="grain-overlay relative min-h-screen animated-gradient-bg">
        <ParticleBackground />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingSocials />
      </div>
    </>
  );
}
