import qs from 'qs';
import { BASE_URL } from '@/lib/constants';

export async function getInfoBlocksLanding() {
  const query = qs.stringify({
    populate: {
      info_blocks: {
        populate: {
          image: {
            fields: ['url', 'alternativeText'],
          },
          button: true,
        },
      },
    },
  });

  const res = await fetch(`${BASE_URL}/api/infoblocks-landing?${query}`, {
    next: { revalidate: 300 }, // optional: ISR
  });

  if (!res.ok) throw new Error('Failed to fetch InfoBlocksLanding');

  const raw = await res.json();

  // 👇 Debug-Ausgabe
  console.log('📦 Raw Strapi response:');
  console.dir(raw, { depth: null });

  return raw;
}
