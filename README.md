# Cosmic Scene Ethereal Gallery

![App Preview](https://imgix.cosmicjs.com/801cea50-47d9-11f1-a330-bd8a29342713-autopilot-photo-1596005554384-d293674c91d7-1777913490796.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A breathtaking gallery showcasing ethereal cosmic artwork, divine scenes, and celestial beings. Built with Next.js and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🎨 Stunning artwork gallery with cinematic presentation
- 👤 Artist profiles with specialties and portfolios
- 🏷️ Style tag exploration and filtering
- 🌌 Dark cosmic theme with ethereal aesthetics
- 📱 Fully responsive design
- ⚡ Optimized images with imgix
- 🔮 Detailed AI prompt and metadata displays

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f8ce4f28e1bd1510595b5f&clone_repository=69f8cf3a28e1bd1510595b9e)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Cosmic scene, ethereal milk ocean, blue celestial being with four arms resting on giant multi-headed white serpent, pink lotus flower blooming from navel, elderly sage with four heads on lotus, golden divine architecture, rays of light, ultra detailed, cinematic, 8k --ar 9:16"

### Code Generation Prompt

> Build a Next.js application for a website called "Cosmic scene, ethereal". The content is managed in Cosmic CMS with the following object types: artworks, artists, style-tags. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) - React framework with App Router
- [Cosmic SDK](https://www.cosmicjs.com/docs) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Imgix](https://www.imgix.com) - Image optimization

## Getting Started

### Prerequisites

- Bun (or Node.js 18+)
- A Cosmic account with bucket configured

### Installation

```bash
bun install
bun run dev
```

Visit `http://localhost:3000` to see the gallery.

## Cosmic SDK Examples

```typescript
// Fetch all artworks with related data
const { objects } = await cosmic.objects
  .find({ type: 'artworks' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a specific artist
const { object } = await cosmic.objects
  .findOne({ type: 'artists', slug: 'artist-slug' })
  .depth(1)
```

## Cosmic CMS Integration

This app uses three content types:
- **Artworks**: AI-generated cosmic scenes with prompts and metadata
- **Artists**: Creator profiles with specialties
- **Style Tags**: Categorization with color coding

## Deployment Options

Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Set environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`.

<!-- README_END -->