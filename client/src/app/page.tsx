import HeroSection from '@/components/HeroSection';
import { InfoBlock } from '@/components/InfoBlock';

export default async function Home() {
  const headline = (
    <>
      <h1>Barrel</h1>
      <h1>Your</h1>
      <h1>Happiness</h1>
    </>
  );

  const InfoBlockData = {
    theme: 'turquoise',
    reversed: false,
    image: {
      url: '/info-blocks/tent.png',
      alternativeText: 'Info Image',
    },
    headline: 'Surf Adventure Awaits',
    content: `At Sam’s Surfcamp, we invite you to embark on an unforgettable surfing adventure. Nestled in the heart of [Location] our surf camp offers an exhilarating experience for beginners, intermediate surfers, and seasoned wave riders alike.

Dive into the world of surfing with our expert instructors who have years of experience and a deep passion for the sport. Whether you're a first-time surfer looking to catch your first wave or a seasoned pro seeking to enhance your skills, our dedicated team is here to guide you every step of the way.

Immerse yourself in the natural beauty of our surf camp's surroundings. Picture yourself waking up to the sound of crashing waves and feeling the warm sand beneath your feet. With pristine beaches and a vibrant coastal atmosphere, [Location] sets the perfect stage for your surf adventure.`,
    cta: {
      text: 'Sign Up',
      href: '/signup',
      isExternal: false,
    },
  };

  return (
    <div>
      <HeroSection headline={headline} />
      <InfoBlock {...InfoBlockData} />
    </div>
  );
}
