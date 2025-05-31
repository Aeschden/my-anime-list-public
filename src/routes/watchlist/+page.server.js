import db from '$lib/server/db.server.js';
import { fail } from '@sveltejs/kit';

export async function load() {
  const entries = await db.getWatchlist();
  return { entries };
}

export const actions = {
  default: async ({ request }) => {
    const form   = await request.formData();
    const title  = form.get('title')?.trim();
    const image  = form.get('image')?.trim() || '/images/placeholder.png';
    const type   = form.get('type');
    const status = form.get('status');

    if (!title || !type || !status) {
      return fail(400, { error: 'Title, type and status are required.' });
    }

    const validImage = /^(\/.*|https?:\/\/.*)$/;
    if (image && !validImage.test(image)) {
      return fail(400, { error: 'Image must be a path (/images/…) or full URL.' });
    }

    if (!['series', 'movie'].includes(type)) {
      return fail(400, { error: 'Type must be "series" or "movie".' });
    }
    if (!['ongoing', 'done', 'announced'].includes(status)) {
      return fail(400, { error: 'Status must be ongoing, done or announced.' });
    }

    const id = await db.createWatchEntry({ title, image, type, status });

    return {
      success: true,
      newEntry: { id, title, image, type, status }
    };
  }
};
