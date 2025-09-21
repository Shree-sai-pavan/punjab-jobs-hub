import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickLinks from '@/components/QuickLinks';
import FeaturedJobs from '@/components/FeaturedJobs';
import Announcements from '@/components/Announcements';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <QuickLinks />
      <FeaturedJobs />
      <Announcements />
      <Footer />
    </div>
  );
};

export default Index;
