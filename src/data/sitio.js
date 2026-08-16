/**
 * DATOS DEL NEGOCIO
 *
 * Todo lo que se repite en varios lugares del sitio vive acá: el teléfono,
 * el horario, la localidad. Se cambia una vez y cambia en todos lados.
 *
 * OJO con el nombre, el teléfono y la localidad: tienen que estar escritos
 * EXACTAMENTE IGUAL acá, en el perfil de Google y en las redes. Si en un
 * lado dice "Franco Electricista" y en otro "Electricidad Franco", Google
 * los lee como dos negocios distintos y el sitio pierde posicionamiento.
 */

export const NEGOCIO = {
  // El nombre, tal cual va a figurar en Google. No cambiarlo suelto.
  nombre: 'Franco Electricista',

  telefono: '+54 11 5830-8361',
  // El mismo número sin espacios ni guiones, para el link de "Llamar".
  telefonoLink: '+541158308361',

  // TODO: falta el correo. Cuando lo tengamos, se reemplaza esta línea
  // por el correo real, por ejemplo: correo: 'franco@francoelectricista.com.ar'
  correo: '{EMAIL}',

  localidad: 'San Fernando',
  provincia: 'Buenos Aires',
  pais: 'AR',

  horarioTexto: 'Lunes a viernes, horario comercial',
  horario: { desde: '08:00', hasta: '18:00' },

  // TODO: falta el link del perfil de Google del negocio.
  perfilGoogle: '{URL_PERFIL_GOOGLE}',

  // Años de oficio. Se escribe tal cual va a leerse, porque el sitio le
  // agrega la palabra "años" al lado: acá va "más de 25", no "25 años".
  aniosOficio: 'más de 25',

  // TODO: falta confirmar con Franco en cuánto responde. Va debajo de los
  // botones de arriba de todo. Por ejemplo: 'Respondo el mismo día'.
  // Si se deja entre comillas vacías (''), la línea no aparece.
  // No poner acá nada que no se vaya a cumplir siempre.
  compromisoRespuesta: '{COMPROMISO_RESPUESTA}',
};

/** Mensaje que aparece ya escrito cuando alguien abre el WhatsApp. */
const TEXTO_WHATSAPP =
  'Hola Franco, te escribo desde tu web. Quería consultarte por: ';

/**
 * Arma el link de WhatsApp. Si se le pasa un tema, lo agrega al final del
 * mensaje: así Franco sabe desde qué parte del sitio le escribieron.
 */
export function linkWhatsapp(tema = '') {
  const base = 'https://wa.me/5491158308361?text=';
  return base + encodeURIComponent(TEXTO_WHATSAPP + tema);
}

/** El link de WhatsApp genérico, sin tema. */
export const WHATSAPP = linkWhatsapp();
