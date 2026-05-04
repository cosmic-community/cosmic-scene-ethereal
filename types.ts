export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

export interface Artwork extends CosmicObject {
  type: 'artworks';
  metadata: {
    title?: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    ai_prompt?: string;
    aspect_ratio?: string;
    resolution?: string;
    artist?: Artist;
    style_tags?: StyleTag[];
  };
}

export interface Artist extends CosmicObject {
  type: 'artists';
  metadata: {
    name?: string;
    bio?: string;
    profile_image?: {
      url: string;
      imgix_url: string;
    };
    specialty?: string;
  };
}

export interface StyleTag extends CosmicObject {
  type: 'style-tags';
  metadata: {
    name?: string;
    description?: string;
    color?: string;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}