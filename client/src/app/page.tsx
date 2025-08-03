import HeroSection from '@/components/HeroSection';

export default async function Home() {
  const headline = (
    <>
      <h1>Barrel</h1>
      <h1>Your</h1>
      <h1>Happiness</h1>
    </>
  );
  return (
    <div>
      <HeroSection headline={headline} />
    </div>
  );
}
