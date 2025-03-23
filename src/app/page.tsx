'use client';

import { 
  HeroSection, 
  AboutSection, 
  CategoriesSection, 
  JudgesSection, 
  SponsorsSection,
  TimelineSection,
  RegistrationSection,
  FAQSection,
  Footer
} from './components/Sections';
import { Navigation } from './components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <TimelineSection />
      <JudgesSection />
      <SponsorsSection />
      <RegistrationSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
