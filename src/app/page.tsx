
"use client"

import { FC } from 'react';
import HeroSection from '@/app/components/HeroSection';
import StorySection from '@/app/components/StorySection';
import EventDetailsSection from '@/app/components/EventDetailsSection';
import GallerySection from '@/app/components/Gifts';
import RsvpSection from '@/app/components/RsvpSection';
import FooterSection from '@/app/components/FooterSection';
import Music from '@/app/components/Music';

export default function QuinceaneraInvitation() {
  const scrollToStory = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      
      <HeroSection onScrollClick={scrollToStory} />
      <StorySection />
      <EventDetailsSection />
      <GallerySection />
      <RsvpSection />
      <FooterSection />
      <Music />
    </div>
  );
}