import db from '$lib/server/db.server.js';

export async function load() {
  const animes = await db.getAnimes();
  return { animes };
}
