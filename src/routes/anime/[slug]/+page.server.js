import db from '$lib/server/db.server.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const animeDoc = await db.getAnimeBySlug(params.slug);
  if (!animeDoc) throw error(404, 'Anime not found');

  const charDocs = await db.getCharactersByAnime(params.slug);

  return {
    anime: {
      id:    animeDoc.id,
      slug:  animeDoc.slug,
      title: animeDoc.title,
      image: animeDoc.image
    },
    characters: charDocs
  };
}

export const actions = {};
