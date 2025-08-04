// lib/process-info-blocks.ts
import { BASE_URL } from './constants';

export type ProcessedInfoBlock = {
  id: number;
  headline: string;
  content: string;
  theme: string;
  reversed?: boolean;
  image: {
    url: string;
    alternativeText?: string;
  };
  cta?: {
    href: string;
    text: string;
    isExternal?: boolean;
  };
};

export function processInfoBlocks(raw: any): ProcessedInfoBlock[] {
  const blocks = raw?.data?.info_blocks;

  if (!Array.isArray(blocks)) return [];

  return blocks.map((block: any) => {
    const content = block.text
      ?.map((p: any) => p.children.map((c: any) => c.text).join(' '))
      .join('\n\n');

    return {
      id: block.id,
      headline: block.headline,
      content,
      theme: block.button?.color || 'beige',
      reversed: block.showImageRight ?? false,
      image: {
        url: `${BASE_URL}${block.image?.url ?? ''}`,
        alternativeText: block.image?.alternativeText ?? '',
      },
      cta: block.button
        ? {
            href: `/${block.button.slug}`,
            text: block.button.text,
            isExternal: false,
          }
        : undefined,
    };
  });
}
