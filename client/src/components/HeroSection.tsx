// src/components/HeroSection.jsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type HeroSectionProps = {
  theme?: string;
  headline: React.ReactNode;
  imageSrc?: string;
  logoSrc?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function HeroSection({
  theme = 'turquoise',
  headline,
  imageSrc = '/assets/hero-home.png',
  logoSrc = '/assets/logo.svg',
  buttonText = 'BOOK NOW',
  buttonHref = '/events',
}: HeroSectionProps) {
  return (
    <section className="hero">
      {/* Background Image */}
      <div className="hero__background">
        <Image
          src={imageSrc || '/assets/hero-home.png'}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className={`hero-headline hero-headline--${theme}`}>
        {headline || <h1>Welcome to our Surfcamp</h1>}
        <button className={` btn btn--medium  btn--${theme}`}>
          <Link href={buttonHref}>{buttonText}</Link>
        </button>
      </div>

      {/* Logo */}
      <div className={`hero__logo hero-logo--${theme}`}>
        <Image src={logoSrc} alt="Logo" width={120} height={60} />
      </div>
    </section>
  );
}
