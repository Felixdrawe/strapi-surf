import HeroSection from '@/components/HeroSection';




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
      <HeroSection imgSrc="/assets/hero-experience.png" headline={heroHeadline} theme="orange" />
  
    </main>
  );
}

export const revalidate = 300;
