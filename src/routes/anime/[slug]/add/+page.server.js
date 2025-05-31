import db from '$lib/server/db.js';
import { error, fail, redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const anime = await db.getAnimeBySlug(params.slug);
  if (!anime) throw error(404, 'Anime not found');
  return { anime };
}

export const actions = {
  default: async ({ request, params }) => {
    const form        = await request.formData();
    const name        = form.get('name')?.trim();
    const ageRaw      = form.get('age');
    const age         = ageRaw ? Number(ageRaw) : null;
    const role        = form.get('role')?.trim();
    const description = form.get('description')?.trim();
    const tier        = form.get('tier');
    const image       = form.get('image')?.trim() || '';

    if (!name || !tier) {
      return fail(400, { error: 'Name and tier are required.' });
    }

    await db.createCharacter({
      animeSlug:   params.slug,
      name,
      age,
      role,
      description,
      tier,
      image
    });

    throw redirect(303, `/anime/${params.slug}`);
  }
};
