import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';

if (!DB_URI) {
  throw new Error('Missing environment variable DB_URI');
}

const client = new MongoClient(DB_URI);
await client.connect();
const database = client.db('anime');

// Animes

export async function getAnimes() {
  const docs = await database.collection('animes').find({}).toArray();
  return docs.map(({ _id, ...rest }) => ({
    id: _id.toString(),
    ...rest
  }));
}

export async function getAnimeBySlug(slug) {
  const doc = await database.collection('animes').findOne({ slug });
  if (!doc) return null;
  const { _id, ...rest } = doc;
  return {
    id: _id.toString(),
    ...rest
  };
}

// Characters

export async function getCharactersByAnime(animeSlug) {
  const docs = await database
    .collection('characters')
    .find({ animeSlug })
    .toArray();

  return docs.map(({ _id, ...rest }) => ({
    id: _id.toString(),
    ...rest
  }));
}

export async function getCharacterById(id) {
  if (!ObjectId.isValid(id)) return null;
  const doc = await database
    .collection('characters')
    .findOne({ _id: new ObjectId(id) });
  if (!doc) return null;
  const { _id, ...rest } = doc;
  return {
    id: _id.toString(),
    ...rest
  };
}

export async function createCharacter(char) {
  const res = await database.collection('characters').insertOne(char);
  return res.insertedId.toString();
}

export async function deleteCharacter(id) {
  await database.collection('characters').deleteOne({ _id: new ObjectId(id) });
  return id;
}

// Watchlist

export async function getWatchlist() {
  const docs = await database.collection('animetowatch').find({}).toArray();
  return docs.map(({ _id, ...rest }) => ({
    id: _id.toString(),
    ...rest
  }));
}

export async function createWatchEntry(entry) {
  const res = await database.collection('animetowatch').insertOne(entry);
  return res.insertedId.toString();
}

// Default-Export

export default {
  getAnimes,
  getAnimeBySlug,
  getCharactersByAnime,
  getCharacterById,
  createCharacter,
  deleteCharacter,
  getWatchlist,
  createWatchEntry
};
