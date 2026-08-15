# Lo que falta para publicar

Esta es la lista de lo que hay que completar. Está ordenada por lo que más
mueve la aguja. Cada cosa dice **quién** la resuelve y **dónde** se carga.

Mientras un dato falte, en el sitio se ve un **cartel naranja entre llaves**
en el lugar exacto donde va. Cuando lo cargues, el cartel desaparece solo.

---

## 1. Fotos — lo más importante de todo

Sin fotos el sitio no convence a nadie, y menos a un estudio de
arquitectura. Es lo primero que hay que resolver.

Las fotos van copiadas en `src/images/`, con estos nombres exactos:

- [ ] **`hero.jpg`** — la foto grande de arriba de todo.
      Obra terminada o jardín iluminado de noche. **Apaisada. No un
      retrato.** Es la primera imagen que alguien ve del trabajo de Franco.
- [ ] **`iluminacion-1.jpg`** — jardín completo de noche, árboles
      iluminados desde abajo. **Que sea la mejor de todas: es la que se
      muestra más grande.**
- [ ] **`iluminacion-2.jpg`** — detalle de un artefacto embutido en piso o
      cantero.
- [ ] **`iluminacion-3.jpg`** — camino, escalera o borde de pileta con luz
      a ras del piso.
- [ ] **`iluminacion-4.jpg`** — galería, quincho o frente de la casa.
      Se muestra ancha, así que conviene una foto bien apaisada.
- [ ] **`retrato.jpg`** — Franco. En la obra y con ropa de trabajo funciona
      mejor que una foto de estudio.

> **Cómo sacarlas:** las de jardín, de noche y con trípode o apoyando el
> celular en algo firme. Sin flash. Si el celular tiene "modo noche",
> usarlo. Sacar varias del mismo lugar y elegir después.

> **Tamaño:** cuanto más grandes, mejor. Al menos 1600 píxeles de ancho.
> El sitio las achica y las optimiza solo.

---

## 2. Obras realizadas

En el sitio hay **cuatro obras de ejemplo**, marcadas con el cartel "Ejemplo
a completar". Están ahí como molde: hay que reemplazarlas por obras reales.

Se cargan en `src/data/obras.json`. Está explicado paso a paso en el
`README.md`.

- [ ] Obra 1 — conviene una **obra nueva** en barrio privado, con el nombre
      del estudio de arquitectura si se puede nombrar.
- [ ] Obra 2 — conviene un caso de **iluminación de jardín** (es lo que
      mejor se ve en foto y lo que más se busca).
- [ ] Obra 3 — conviene una **refacción**, para mostrar que también se
      trabaja sobre casas ya habitadas.
- [ ] Obra 4 — conviene un trabajo con **certificado o plano**, que es lo
      que le interesa ver a un arquitecto.

De cada obra hace falta: barrio, tipo de trabajo, una línea de descripción y
una foto.

> **Importante:** si un cliente pidió no ser nombrado, poné solo el barrio y
> el tipo de obra. Nunca inventar un nombre.

---

## 3. Datos de contacto que faltan

Se cargan todos en `src/data/sitio.js`.

- [ ] **Correo electrónico** (`{EMAIL}` en el sitio).
      Si todavía no hay uno del dominio, conviene crear
      `franco@francoelectricista.com.ar` cuando se compre el dominio: da
      mucha más seriedad que un Gmail suelto.
- [ ] **Años de oficio** (`{AÑOS}` en el sitio, en la sección "Sobre
      Franco"). Es un dato que genera confianza. Poné el número, nada más.
- [ ] **Link del perfil de Google del negocio** (`{URL_PERFIL_GOOGLE}`).
      Ver el punto 4.

Ya están cargados y verificados: teléfono, WhatsApp, horario y localidad.

---

## 4. Perfil de Google del negocio

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

## 5. Dominio y publicación

- [ ] Comprar **francoelectricista.com.ar** (se compra en
      [nic.ar](https://nic.ar); cuesta muy poco por año)
- [ ] Publicar el sitio en Netlify, Vercel o Cloudflare Pages (gratis)
- [ ] Apuntar el dominio al sitio publicado
- [ ] Verificar que entre por **https** (el candadito). Los tres servicios
      lo hacen solos y gratis.
- [ ] Dar de alta el sitio en
      [Google Search Console](https://search.google.com/search-console) y
      cargar el sitemap: `francoelectricista.com.ar/sitemap-index.xml`

---

## 6. Detalles que quedan pendientes

- [ ] **Imagen para compartir en redes** (`public/og.png`).
      Ahora hay una hecha con tipografía, que funciona bien. Cuando haya
      una buena foto de jardín iluminado, conviene rehacerla con esa foto:
      cuando alguien pasa el link por WhatsApp, la foto convence más que
      el texto.
- [ ] **Revisar los textos alternativos de las fotos** una vez cargadas.
      Cada foto tiene una descripción escrita de antemano; cuando estén las
      fotos reales, conviene ajustarla a lo que realmente se ve.
      (En obras se edita en `obras.json`, campo `alt`.)
- [ ] **Volver a medir la velocidad después de cargar las fotos.**
      Hoy el sitio abre en 0,6 segundos con señal 4G lenta. La foto de
      arriba de todo va a ser lo más pesado: conviene que pese menos de
      300 KB una vez subida.

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
