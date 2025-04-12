import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import LogosSection from '../components/LogosSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import CaseStudySection from '../components/CaseStudySection';
import TestimonialSection from '../components/TestimonialSection';
import TeamSection from '../components/CoreFeatures';
import ContactSection from '../components/ContactSection';
import Faqs from '@/components/FAQS';
import Header from '@/components/Navbar';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <LogosSection />
        <ServicesSection />
        <CaseStudySection />
        <ProcessSection />
        <TeamSection />
        <Faqs />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
