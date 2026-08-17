# Lo que falta para publicar

Esta es la lista de lo que hay que completar. Está ordenada por lo que más
mueve la aguja. Cada cosa dice **quién** la resuelve y **dónde** se carga.

Mientras un dato falte, en el sitio se ve un **cartel naranja entre llaves**
en el lugar exacto donde va. Cuando lo cargues, el cartel desaparece solo.

---

## 1. Fotos — hay puestas, pero son provisorias

**Estado: las nueve fotos están cargadas y el sitio ya se ve completo.**
Pero son fotos de relleno, no trabajos de Franco. Sirven para ver cómo
queda el sitio y para mostrárselo a él, **no para publicar**.

Cómo se dieron cuenta: las nueve tienen exactamente el mismo tamaño
(1536x1024), no traen ningún dato de cámara, fecha ni lugar, y el plano de
la foto de obra 4 no es un plano de verdad —las líneas no cierran y no
tiene cotas ni rótulo—. Son imágenes generadas.

**Por qué importa igual que se vean bien:** el público principal del sitio
son estudios de arquitectura, y es gente que mira fotos de obra todo el
día. Una foto que no cierra la detectan enseguida, y el costo no es que no
les guste: es que dejan de creer el resto del sitio, incluida la matrícula.

Hay que reemplazarlas por fotos reales de Franco, con estos nombres, en
`src/images/` (el archivo nuevo pisa al viejo, no hay que tocar código):

- [ ] **`hero.webp`** — la foto grande de arriba de todo.
      Obra terminada o jardín iluminado de noche. **Apaisada. No un
      retrato.** Es la primera imagen que alguien ve del trabajo de Franco.
- [ ] **`iluminacion-1.webp`** — jardín completo de noche, árboles
      iluminados desde abajo. **Que sea la mejor de todas: es la que se
      muestra más grande.**
- [ ] **`iluminacion-2.webp`** — detalle de un artefacto embutido en piso o
      cantero.
- [ ] **`iluminacion-3.webp`** — camino, escalera, borde de pileta o galería
      con luz a ras del piso.
- [ ] **`servicio-obra.webp`** — interior de una obra nueva, para el
      bloque «Obra y proyecto» de «Qué hago».
- [ ] **`servicio-instalaciones.webp`** — un trabajo en una casa habitada
      (artefacto colocado, tira de luz, tablero nuevo), para el bloque
      «Instalaciones y reformas».
- [ ] **`matriculado.webp`** — planos, un certificado o el instrumento de
      medición, para «Por qué un matriculado».
- [ ] **`retrato.webp`** — **la más urgente de todas.** Hoy hay una cara que
      no es la de Franco, arriba del texto "Soy Franco, electricista
      matriculado". Con las fotos de jardín se puede discutir; con esta no:
      es la cara de otra persona presentada como él. Alcanza una foto
      tomada con el celular, en la obra y con ropa de trabajo.

> **La galería son tres fotos y no más.** Tres fotos buenas se ven caras;
> cuatro con una de relleno se ven baratas, y este es el bloque que
> sostiene todo el sitio.

> **Cómo sacarlas:** las de jardín, de noche y con trípode o apoyando el
> celular en algo firme. Sin flash. Si el celular tiene "modo noche",
> usarlo. Sacar varias del mismo lugar y elegir después.

> **Tamaño:** cuanto más grandes, mejor. Al menos 1600 píxeles de ancho.
> El sitio las achica y las optimiza solo.

> **Mientras tanto, el sitio no está en Google.** El archivo
> `public/_headers` lo mantiene fuera de las búsquedas mientras viva en
> la dirección de pruebas. No conectar el dominio propio hasta que estén
> las fotos reales.

---

## 2. Datos de contacto que faltan

Se cargan todos en `src/data/sitio.js`.

- [ ] **Correo electrónico** (`{EMAIL}` en el sitio).
      Si todavía no hay uno del dominio, conviene crear
      `franco@francoelectricista.com.ar` cuando se compre el dominio: da
      mucha más seriedad que un Gmail suelto.
- [x] **Años de oficio: cargado.** Dice "más de 25 años", en la fila de
      datos de arriba de todo y en la sección "Cómo trabajo".
      Se edita en `aniosOficio`. Ojo: ahí va **solo la cantidad**, porque
      el sitio le agrega la palabra "años" al lado. Es decir "más de 25",
      no "más de 25 años".
- [x] **En cuánto respondés: apagado a propósito.** La línea que iba
      debajo de los botones no se muestra. Si algún día Franco confirma en
      cuánto responde, se escribe en `compromisoRespuesta` (en
      `src/data/sitio.js`) y vuelve sola. Poner solo lo que pueda cumplir
      siempre: prometer una respuesta rápida y no cumplirla es peor que no
      prometer nada.
- [ ] **Link del perfil de Google del negocio** (`{URL_PERFIL_GOOGLE}`).
      Ver el punto 3.

Ya están cargados y verificados: teléfono, WhatsApp, horario y localidad.

---

## 3. Perfil de Google del negocio

Esto es lo que hace que Franco aparezca en el mapa cuando alguien busca
"electricista en San Fernando". **Para el público que busca en Google, esto
importa más que el sitio mismo.** Es gratis.

- [ ] Crear el perfil en [business.google.com](https://business.google.com)
- [ ] Categoría: **Electricista**
- [ ] Marcarlo como **negocio que atiende a domicilio**, sin dirección
      pública (Franco no tiene local al público)
- [ ] Zonas de servicio: **San Fernando, Nordelta, Benavídez, Pilar,
      Escobar**
- [ ] Horario: **lunes a viernes, 8 a 18**
- [ ] Cargar las mismas fotos del punto 1
- [ ] Pegar el link del perfil en `src/data/sitio.js`
- [ ] Pedirles a los clientes de confianza que dejen una reseña

> **Clave: escribir el nombre, el teléfono y la localidad EXACTAMENTE igual
> que en el sitio.** "Franco Electricista", "+54 11 5830-8361", "San
> Fernando". Cualquier variación entre el sitio y Google debilita las dos
> señales.

---

## 4. Dominio y publicación

- [ ] Comprar **francoelectricista.com.ar** (se compra en
      [nic.ar](https://nic.ar); cuesta muy poco por año)
- [ ] Publicar el sitio en Netlify, Vercel o Cloudflare Pages (gratis)
- [ ] Apuntar el dominio al sitio publicado
- [ ] Verificar que entre por **https** (el candadito). Los tres servicios
      lo hacen solos y gratis.
- [ ] Dar de alta el sitio en
      [Google Search Console](https://search.google.com/search-console) y
      cargar el sitemap: `francoelectricista.com.ar/sitemap-index.xml`
- [ ] Después de conectar el dominio, comprobar que la versión de pruebas
      quedó bloqueada para Google y la definitiva no. En una terminal:
      `curl -I https://francoelectricista.pages.dev/` tiene que mostrar
      `x-robots-tag: noindex, nofollow`, y
      `curl -I https://francoelectricista.com.ar/` **no** tiene que
      mostrarlo. Eso lo hace el archivo `public/_headers`, que está atado
      al dominio de pruebas y deja de aplicarse solo.
- [ ] **Cuando haya dos o tres zonas publicadas**, sacar la línea
      `"indexar": false` de San Fernando en `src/data/zonas.json`.
      Hoy esa página está oculta para Google a propósito: siendo la única,
      compite con la página principal por las mismas búsquedas en lugar de
      sumar. Con varias zonas cargadas, cada una apunta a una búsqueda
      distinta y conviene activarlas todas.

---

## 5. Detalles que quedan pendientes

- [ ] **Imagen para compartir en redes** (`public/og.png`).
      Ahora hay una hecha con tipografía, que funciona bien. Cuando haya
      una buena foto de jardín iluminado, conviene rehacerla con esa foto:
      cuando alguien pasa el link por WhatsApp, la foto convence más que
      el texto.
- [ ] **Revisar los textos alternativos de las fotos** una vez cargadas.
      Cada foto tiene una descripción escrita de antemano; cuando estén las
      fotos reales, conviene ajustarla a lo que realmente se ve.
      (Las dos de «Qué hago» se editan en `servicios.json`, campo `alt`.)
- [x] **Velocidad con las fotos puestas: medida y en orden.**
      Con señal 4G lenta el sitio abre en 1,3 segundos en pantalla grande
      y en 0,6 en celular (el límite que nos pusimos era 2 segundos).
      La foto de arriba de todo se sirve en AVIF y con calidad bajada a 42,
      porque va debajo de un velo oscuro y no necesita resolución completa:
      pesa 43 KB en pantalla grande y 9 KB en celular.
      **Volver a medir cuando entre la foto real**, que va a pesar más:
      con `npm run build` y mirando el tamaño de `dist/_astro/`.

---

## Cosas que se decidieron a propósito y conviene no cambiar

- **No dice "urgencias" ni "24 horas" en ningún lado.** Franco atiende de
  lunes a viernes. Prometer otra cosa trae llamadas que no puede atender.
- **No aparece el número de matrícula**, solo el texto "Electricista
  matriculado".
- **No se menciona electricidad industrial**, porque no es un trabajo que
  Franco haga.
- **No hay formulario de contacto.** En este rubro nadie los completa: todos
  escriben por WhatsApp. El botón de WhatsApp ya lleva el mensaje escrito.
- **No hay rastreadores ni publicidad de terceros**, por eso el sitio no
  necesita el cartel de cookies. Si algún día se quiere medir visitas, en
  el archivo `src/layouts/Base.astro` hay dos líneas comentadas listas para
  activar (Plausible o Umami), que también son sin cookies.
