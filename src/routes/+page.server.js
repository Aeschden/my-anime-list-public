import db from '$lib/server/db.js';

export async function load() {
  const animes = await db.getAnimes();
  return { animes };
}
