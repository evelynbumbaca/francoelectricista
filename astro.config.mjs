// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// El dominio final. Si algún día cambia, se cambia acá y se actualizan
// solos el sitemap, los canonical y las etiquetas para compartir en redes.
const SITIO = 'https://francoelectricista.com.ar';

export default defineConfig({
  site: SITIO,
  integrations: [
    sitemap({
      // /gracias no se indexa: es la página de destino de una conversión.
      filter: (page) => !page.includes('/gracias'),
    }),
  ],
  build: {
    // Un solo archivo CSS en lugar de varios chunks: menos pedidos, mejor LCP.
    inlineStylesheets: 'auto',
  },
  image: {
    // Formatos modernos para las fotos que cargue Franco más adelante.
    formats: ['avif', 'webp'],
  },
});
