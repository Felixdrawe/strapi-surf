// components/InfoBlockRenderer.tsx
import { InfoBlock } from '@/components/InfoBlock';
import type { ProcessedInfoBlock } from '@/lib/process-info-blocks';

export function InfoBlockRenderer({ blocks }: { blocks: ProcessedInfoBlock[] }) {
  return (
    <>
      {blocks.map((block) => (
        <InfoBlock
          key={block.id}
          theme={block.theme}
          reversed={block.reversed}
          image={block.image}
          headline={block.headline}
          content={block.content}
          cta={block.cta}
        />
      ))}
    </>
  );
}
