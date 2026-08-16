/**
 * LAS FOTOS DEL SITIO
 *
 * Cómo funciona, en simple: todas las fotos van en la carpeta
 * `src/images/`. Este archivo las busca por el nombre del archivo.
 *
 * Si la foto está, el sitio la muestra (achicada y optimizada sola).
 * Si no está, el sitio muestra el cartel de "falta esta foto".
 * No hay que tocar nada de código: alcanza con copiar el archivo.
 *
 * Nombres que el sitio busca:
 *   hero.jpg              → la foto grande de arriba de todo
 *   iluminacion-1.jpg     → galería de iluminación de jardín (1 a 4)
 *   iluminacion-2.jpg
 *   iluminacion-3.jpg
 *   iluminacion-4.jpg
 *   retrato.jpg           → la foto de Franco, en "Sobre Franco"
 *   (las obras usan el nombre que se escriba en obras.json)
 *
 * Sirven .jpg, .jpeg, .png, .webp y .avif.
 */

const archivos = import.meta.glob('../images/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}', {
  eager: true,
});

const porNombre = new Map();

for (const [ruta, modulo] of Object.entries(archivos)) {
  const nombre = ruta.split('/').pop();
  if (nombre) porNombre.set(nombre.toLowerCase(), modulo.default);
}

/**
 * Devuelve la foto si existe, o `null` si todavía no fue cargada.
 * @param {string} nombre nombre del archivo, por ejemplo "hero.jpg"
 */
export function buscarFoto(nombre) {
  if (!nombre) return null;
  const buscado = String(nombre).trim().toLowerCase();
  if (porNombre.has(buscado)) return porNombre.get(buscado);

  // La extensión no importa: si el sitio busca "hero.jpg" y el archivo que
  // hay se llama "hero.webp" o "hero.png", lo encuentra igual. Así nadie
  // tiene que renombrar una foto para que aparezca. También funciona si en
  // obras.json se escribe el nombre sin extensión.
  const sinExtension = buscado.replace(/\.[a-z0-9]+$/, '');
  for (const extension of ['jpg', 'jpeg', 'png', 'webp', 'avif']) {
    const conExtension = `${sinExtension}.${extension}`;
    if (porNombre.has(conExtension)) return porNombre.get(conExtension);
  }
  return null;
}
