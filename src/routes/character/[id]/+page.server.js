import db from '$lib/server/db.server.js';
import { error, redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const character = await db.getCharacterById(params.id);
  if (!character) throw error(404, 'Character not found');

  return { character };
}

export const actions = {
  default: async ({ params }) => {
    const character = await db.getCharacterById(params.id);
    if (!character) throw error(404, 'Character not found');
    await db.deleteCharacter(params.id);
    throw redirect(303, `/anime/${character.animeSlug}`);
  }
};