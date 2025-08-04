import { getInfoBlocksLanding } from '@/data/loaders';
import { processInfoBlocks } from '@/lib/process-info-blocks';
import { InfoBlockRenderer } from '@/components/InfoBlockRenderer';
import HeroSection from '@/components/HeroSection';

export default async function HomePage() {
  const raw = await getInfoBlocksLanding();
  const blocks = processInfoBlocks(raw);

  const headline = (
    <>
      <h1>Barrel</h1>
      <h1>Your</h1>
      <h1>Happiness</h1>
    </>
  );

  return (
    <>
      <HeroSection headline={headline} />
      <InfoBlockRenderer blocks={blocks} />
    </>
  );
}
