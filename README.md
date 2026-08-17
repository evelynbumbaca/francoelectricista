# francoelectricista.com.ar

Este es el sitio web de Franco, electricista matriculado de zona norte.

Este archivo está escrito para que lo pueda usar **cualquiera, sin saber
programar**. Explica cómo cambiar los textos, cómo cambiar las fotos y
cómo sumar una zona nueva. Si algo no está acá, no lo toques y preguntá.

---

## Lo primero: la regla de oro

Todo lo que se edita seguido está en **dos carpetas**:

```
src/data/      ← los textos y los datos (teléfono, obras, zonas)
src/images/    ← las fotos
```

**Si no estás seguro, no toques nada fuera de esas dos carpetas.**

---

## Cómo ver el sitio en tu computadora

Esto hace falta una sola vez, para probar los cambios antes de publicarlos.

1. Instalá **Node.js** desde [nodejs.org](https://nodejs.org) (la versión que
   dice "LTS"). Se instala como cualquier programa: siguiente, siguiente,
   listo.

2. Abrí la carpeta del proyecto en una terminal y escribí, una sola vez:

   ```
   npm install
   ```

3. Después, cada vez que quieras ver el sitio:

   ```
   npm run dev
   ```

   Te va a mostrar una dirección tipo `http://localhost:4321`. Copiala en el
   navegador y ahí está el sitio. Mientras eso esté abierto, **cada cambio
   que guardes se ve al instante en la pantalla**.

4. Para cerrarlo, apretá `Ctrl + C` en la terminal.

---

## Los carteles naranjas que dicen que falta algo

Cuando entres al sitio vas a ver **carteles naranjas con texto entre
llaves**, así: `{FOTO_HERO}`, `{EMAIL}`, `{AÑOS}`.

Eso no es un error. Son **los datos que todavía faltan**, y están a la vista
a propósito, para que no se olviden. **Cuando cargues el dato de verdad, el
cartel desaparece solo.** No hay que borrarlo a mano.

La lista completa de lo que falta está en el archivo `CHECKLIST.md`.

---

## Cambiar el teléfono, el correo, el horario

Todo eso está en un solo archivo: **`src/data/sitio.js`**

Ahí vas a ver algo así:

```js
export const NEGOCIO = {
  nombre: 'Franco Electricista',
  telefono: '+54 11 5830-8361',
  telefonoLink: '+541158308361',
  correo: '{EMAIL}',
  ...
};
```

Para cambiar algo, reemplazá **solo lo que está entre comillas**. Por
ejemplo, para poner el correo:

```js
  correo: 'franco@francoelectricista.com.ar',
```

Fijate que quede la coma al final y las comillas a los dos lados. Eso es
importante: si falta una comilla, el sitio no arranca.

> **La línea `compromisoRespuesta`** es una frase chiquita que puede
> aparecer debajo de los botones de arriba de todo, del tipo "Respondo el
> mismo día". **Hoy está vacía a propósito, así que no se muestra.** Si se
> escribe algo entre las comillas, aparece sola. Poner solo algo que se
> pueda cumplir siempre.

> **Cuidado con el teléfono.** Hay dos líneas: `telefono` es el que se ve
> escrito, y `telefonoLink` es el mismo número pero **sin espacios ni
> guiones**, que es el que usa el botón de llamar. Si cambiás uno, cambiá
> el otro.

> **El nombre, el teléfono y la localidad tienen que estar escritos
> exactamente igual acá, en el perfil de Google y en las redes.** Si en un
> lado dice "Franco Electricista" y en otro "Electricidad Franco", Google
> los toma como dos negocios distintos y el sitio aparece peor en las
> búsquedas.

---

## Cargar las fotos

Todas las fotos van en la carpeta **`src/images/`**. Nada más que copiar el
archivo ahí adentro, con el nombre exacto que corresponde:

| Nombre del archivo           | Dónde aparece                                   |
| ---------------------------- | ----------------------------------------------- |
| `hero.jpg`                   | Fondo de la primera pantalla                    |
| `iluminacion-1.jpg`          | Galería de iluminación de jardín (la más grande)|
| `iluminacion-2.jpg`          | Galería de iluminación                          |
| `iluminacion-3.jpg`          | Galería de iluminación                          |
| `servicio-obra.jpg`          | «Qué hago» → Obra y proyecto                    |
| `servicio-instalaciones.jpg` | «Qué hago» → Instalaciones y reformas           |
| `matriculado.jpg`            | «Por qué un matriculado»                        |
| `retrato.jpg`                | La foto de Franco, en «Cómo trabajo»            |

**No hace falta tocar nada más.** Copiás la foto con ese nombre y el cartel
naranja desaparece solo.

Consejos para las fotos:

- **Subilas grandes**, de al menos 1600 píxeles de ancho. El sitio las
  achica y las optimiza solo.
- Las de **iluminación tienen que ser de noche**. Es cuando se ve el
  trabajo. **Son tres, y son tres a propósito**: tres fotos buenas se ven
  caras, cuatro con una de relleno se ven baratas.
- La de arriba de todo (`hero.jpg`) **no es un retrato**: va una obra
  terminada o un jardín iluminado. El retrato va abajo, en "Sobre Franco".
  Esta foto se usa como **fondo de la primera pantalla**, con el texto
  encima, así que conviene una donde el lado izquierdo sea tranquilo (sin
  detalles importantes ahí), porque es la zona que queda tapada por el
  título. Si un día no está el archivo, el sitio vuelve solo al diseño con
  la foto en un recuadro.
- Sirven `.jpg`, `.png`, `.webp` y `.avif`. **La extensión no importa**:
  si el archivo se llama `hero.png` o `hero.webp`, el sitio lo encuentra
  igual. Lo que tiene que coincidir es el nombre, no el final.
- **Para cambiar una foto, copiá la nueva encima con el mismo nombre.**
  No hay que tocar nada de código.

---

## Cambiar las fotos de «Qué hago»

Cada uno de los dos bloques de esa sección tiene su foto. Se eligen en
**`src/data/servicios.json`**, en la línea `foto`:

```json
"foto": "servicio-obra.webp",
"alt": "Interior de una casa nueva sin amueblar, con la iluminación encendida.",
```

Para cambiarlas hay dos caminos. El más simple: copiar la foto nueva en
`src/images/` **con el mismo nombre** que ya está escrito ahí, y listo. El
otro: poner el archivo con el nombre que quieras y escribir ese nombre en
la línea `foto`.

La línea `alt` describe lo que se ve en la foto. Sirve para Google y para
quien no puede ver la imagen, así que conviene actualizarla si la foto
cambia.

---

## Sumar una zona nueva

Las zonas están en **`src/data/zonas.json`**. Hoy están así:

```json
[
  {
    "nombre": "San Fernando",
    "slug": "san-fernando",
    "pagina": true,
    "indexar": false,
    "titulo": "...",
    "descripcion": "...",
    "entrada": "...",
    "detalle": "..."
  },
  { "nombre": "Nordelta", "slug": "nordelta", "pagina": false },
  ...
]
```

Hay dos cosas distintas acá:

**1. Que la zona figure en la lista "Dónde trabaja".**
Con que esté el `nombre` ya alcanza. Aparece en el sitio y Google la lee.

**2. Que la zona tenga su propia página.**
Cambiá `"pagina": false` por `"pagina": true`. Con eso solo, el sitio le
arma una página entera en `francoelectricista.com.ar/zonas/nordelta/`, con
textos genéricos que ya están escritos.

> **Una cosa importante sobre Google.** San Fernando tiene una línea que
> dice `"indexar": false`. Eso quiere decir: la página existe y funciona,
> pero le pedimos a Google que **no** la muestre en las búsquedas.
>
> ¿Por qué? Porque hoy es la única página de zona, y compite con la página
> principal por las mismas búsquedas: las dos hablan de San Fernando y las
> dos dicen casi lo mismo. Cuando dos páginas de un mismo sitio compiten
> entre sí, Google no sabe cuál mostrar y termina mostrando peor a las dos.
>
> **Cuando tengas por lo menos dos o tres zonas publicadas con textos
> propios, borrá esa línea** (o cambiala por `"indexar": true`). Ahí sí
> cada página apunta a una búsqueda distinta y suman en vez de competir.

Si además querés escribirle textos propios (que siempre funciona mejor),
agregale estas cuatro líneas, copiando cómo está San Fernando:

- **`titulo`**: lo que aparece en la pestaña del navegador y en Google.
  Que no pase de 60 letras.
- **`descripcion`**: el resumen que Google muestra abajo del título.
  Unas 150 letras.
- **`entrada`**: el primer párrafo de la página.
- **`detalle`**: el segundo párrafo.

**El `slug` es la dirección web de la zona**: tiene que ir todo en
minúsculas, sin acentos y con guiones en lugar de espacios.
Por ejemplo: `san-fernando`, `benavidez`, `pilar`.

---

## Cambiar los textos de las secciones

Los servicios están en **`src/data/servicios.json`** y funcionan igual que
las obras: cada servicio es un bloque entre llaves.

El resto de los textos (el título grande de arriba, la explicación de
iluminación de jardín, la de "Por qué un matriculado") están en los archivos
de la carpeta `src/components/`. Ahí ya hay código mezclado con el texto,
así que **si no estás cómodo, pedile a alguien que lo haga**. El texto está
siempre entre `>` y `<`, así:

```html
<h2 class="titulo-2">Qué hago</h2>
```

Se cambia solamente `Qué hago`. Todo lo demás se deja igual.

---

## Publicar el sitio en internet

El sitio es **estático**: son archivos sueltos, no necesita base de datos ni
servidor especial. Eso lo hace barato (gratis, en general) y muy rápido.

Para generar los archivos finales:

```
npm run build
```

Eso crea una carpeta `dist/`. Esa carpeta es el sitio terminado.

Lo más simple es conectar este proyecto a **Netlify**, **Vercel** o
**Cloudflare Pages**. Cualquiera de los tres es gratis para un sitio así, y
una vez conectados **se actualizan solos cada vez que subís un cambio**.

Cuando lo publiques, revisá que el dominio configurado sea el correcto: está
en el archivo `astro.config.mjs`, en la línea que dice
`https://francoelectricista.com.ar`.

---

## Un archivo que conviene no borrar

En la carpeta `public/` hay un archivo que se llama `_headers`. Sirve para
que Google **no** muestre en las búsquedas la versión de pruebas del sitio
(la dirección que termina en `.pages.dev`), que todavía tiene los carteles
naranjas de datos faltantes.

Está atado a esa dirección de pruebas, así que cuando conectemos
`francoelectricista.com.ar` deja de aplicarse solo. No hay que acordarse de
borrar nada, pero tampoco hay que borrar el archivo.

---

## Cosas que NO hay que hacer

- **No pongas "urgencias" ni "24 horas" en ningún lado.** Franco atiende de
  lunes a viernes en horario comercial. Prometer otra cosa trae llamadas
  que no puede atender y clientes enojados.
- **No pongas el número de matrícula.** Alcanza con "Electricista
  matriculado".
- **No inventes obras, clientes ni reseñas.** Es lo primero que un
  arquitecto detecta, y es exactamente el público al que le habla el sitio.
- **No uses fotos bajadas de internet.** Se nota, y arruina la confianza que
  el sitio está tratando de construir. Mejor un cartel naranja que dice que
  falta la foto, que una foto que no es de Franco.
- **No borres las carpetas `node_modules` ni `dist`** si no sabés qué son
  (aunque si las borrás no pasa nada grave: se vuelven a crear).

---

## Cómo está hecho, en dos líneas

Está hecho con **Astro**, que genera páginas estáticas. No usa librerías de
diseño ni carga nada de servidores ajenos: las tipografías están adentro del
proyecto y no hay rastreadores de terceros. Por eso **no necesita cartel de
cookies** y carga muy rápido incluso con mala señal.

```
src/
  pages/          las páginas (inicio, zonas, gracias)
  components/     los bloques que arman las páginas
  data/           LOS TEXTOS Y DATOS ← acá se edita
  images/         LAS FOTOS ← acá se copian
  styles/         los colores y tamaños
  layouts/        la estructura común a todas las páginas
public/           el logo, la imagen para compartir y las tipografías
```
