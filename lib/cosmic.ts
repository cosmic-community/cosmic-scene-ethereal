import { createBucketClient } from '@cosmicjs/sdk';
import { Artwork, Artist, StyleTag, hasStatus } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getAllArtworks(): Promise<Artwork[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'artworks' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Artwork[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch artworks');
  }
}

export async function getArtworkBySlug(slug: string): Promise<Artwork | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'artworks', slug })
      .depth(1);
    return response.object as Artwork;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch artwork');
  }
}

export async function getAllArtists(): Promise<Artist[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'artists' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Artist[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch artists');
  }
}

export async function getArtistBySlug(slug: string): Promise<Artist | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'artists', slug })
      .depth(1);
    return response.object as Artist;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch artist');
  }
}

export async function getArtworksByArtist(artistId: string): Promise<Artwork[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'artworks', 'metadata.artist': artistId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Artwork[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch artworks by artist');
  }
}

export async function getAllStyleTags(): Promise<StyleTag[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'style-tags' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as StyleTag[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch style tags');
  }
}

export async function getStyleTagBySlug(slug: string): Promise<StyleTag | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'style-tags', slug })
      .depth(1);
    return response.object as StyleTag;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null;
    throw new Error('Failed to fetch style tag');
  }
}

export async function getArtworksByStyleTag(tagId: string): Promise<Artwork[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'artworks', 'metadata.style_tags': tagId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Artwork[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return [];
    throw new Error('Failed to fetch artworks by style tag');
  }
}