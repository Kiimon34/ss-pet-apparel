import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    price: z.number(),
    pattern: z.string(),
    badge: z.string().optional(),
    image: z.string(),
    sizes: z.array(z.string()),
    description: z.string(),
  }),
});

export const collections = {
  products,
};
