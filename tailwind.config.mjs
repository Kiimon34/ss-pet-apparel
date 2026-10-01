/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          50: '#FAF8F5',  // Clean neutral background
          100: '#F3EFEA', // Surface & card background
          200: '#E6E0D8', // Dividers & borders
        },
        brand: {
          sun: '#F59E0B',   // Honey amber CTA button & badge color
          coral: '#F43F5E', // Notification & alert color
          navy: '#0F172A',  // High-contrast headline & copy color
          muted: '#64748B', // Meta copy & subtitles
        },
      },
    },
  },
  plugins: [],
};
