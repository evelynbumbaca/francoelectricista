// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import zonas from './src/data/zonas.json';

// El dominio final. Si algún día cambia, se cambia acá y se actualizan
// solos el sitemap, los canonical y las etiquetas para compartir en redes.
const SITIO = 'https://francoelectricista.com.ar';

// Las zonas marcadas con "indexar": false no van al sitemap. Así el archivo
// que le mandamos a Google coincide siempre con lo que las páginas dicen
// de sí mismas: si una página pide no ser indexada, no se la ofrecemos.
const zonasFuera = zonas
  .filter((z) => z.pagina && z.indexar === false)
  .map((z) => `/zonas/${z.slug}`);

export default defineConfig({
  site: SITIO,
  integrations: [
    sitemap({
      filter: (page) =>
        // /gracias no se indexa: es la página de destino de una conversión.
        !page.includes('/gracias') &&
        !zonasFuera.some((ruta) => page.includes(ruta)),
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
