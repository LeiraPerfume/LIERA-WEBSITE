"use client";

import { MiniNavbar } from "@/components/ui/mini-navbar";
import Footer from "@/components/Footer";
import { AboutHeroSection } from "@/components/ui/about-hero-section";
import { AboutSecondSection } from "@/components/ui/about-second-section";
import { AboutFeaturesSection } from "@/components/ui/about-features-section";

export default function AboutPage() {
  return (
    <>
      <MiniNavbar />
      <main className="min-h-screen">
        <div className="relative z-10">
          <div className="bg-white">
            <div className="pt-24">
              <AboutHeroSection 
                imageSrc="/images/white.JPEG" 
                imageAlt="Leira - Feel good inside and out"
              />
              <AboutSecondSection 
                imageSrc="/images/black.JPEG" 
                imageAlt="Leira - Made for modern women"
                smallHeading="MADE FOR MODERN WOMEN"
                mainHeading="Designed for You"
                description="Whether it's a long workday, a special moment, or everyday self-care, Leira fits seamlessly into your routine. Our products are made for women who value self-love, hygiene, and confidence — without compromise."
                closingLine="Because taking care of yourself is not a luxury, it's a necessity."
              />
              <AboutFeaturesSection 
                imageSrc="/images/brown.JPEG" 
                imageAlt="Leira Product Features"
              />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

