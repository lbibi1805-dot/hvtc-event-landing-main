"use client"
import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [imageSrc, setImageSrc] = useState('/images/head.jpg');

  const updateImageSource = () => {
    if (window.innerWidth <= 640) {
      setImageSrc('/images/mobileHead.jpg');
    } else {
      setImageSrc('/images/mainNew.png');
    }
  };

  useEffect(() => {
    updateImageSource();
    window.addEventListener('resize', updateImageSource);
    return () => {
      window.removeEventListener('resize', updateImageSource);
    };
  }, []);

  return (
    <section className="relative overflow-hidden mt-16 h-screen max-w-screen">
      <div className="absolute inset-0 z-0">
        <img
          id="background-image"
          src={imageSrc}
          alt="Background"
          className="object-fit object-center w-full h-full"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-80 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              {/* Additional content can go here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
