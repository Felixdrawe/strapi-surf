import HeroSection from '@/components/HeroSection';
import { InfoBlock } from '@/components/InfoBlock';

export default async function Home() {
  const heroHeadline = (
    <>
      <h1>barrel.</h1>
      <h1>your.</h1>
      <h1>happiness.</h1>
    </>
  );
  return (
    <main>
      <HeroSection imageSrc="/assets/hero-experience.png" headline={heroHeadline} theme="orange" />
    </main>
  );
}

export const revalidate = 300;
