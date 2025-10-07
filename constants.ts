
import type { ScriptData } from './types';

export const scriptData: ScriptData = {
  title: "Limpias tu casa, pero... ¿limpias tu cuerpo por dentro? 🤔",
  introduction: {
    greeting: "¡Qué tal, equipo MK Fuxion! ¡Panas, me llegó esta idea y la he pulido para que quede bacán! Es justo el tipo de contenido que va a hacer que la gente se detenga a pensar y, más importante, a actuar.",
    strategy: "La estrategia es simple pero poderosa: vamos a contrastar la limpieza externa, que todos damos por sentada, con la interna, que la mayoría olvida. Crearemos esa \"incomodidad constructiva\" para que vean la necesidad de un detox y posicionemos nuestro pack estrella como la solución perfecta."
  },
  summary: "Crearemos un guion de TikTok de 1 minuto que genere conciencia sobre la importancia de la limpieza digestiva, presentando el pack Detox de MK Fuxion (Prunex 1 + Flora Liv) como el hábito esencial para sentirse bien por dentro y por fuera.",
  audio: [
    { time: "Segundos 0-5", description: "Sonido \"satisfying\" de limpieza (cepillo, agua, etc.)." },
    { time: "Segundos 6-30", description: "Música de fondo que genere misterio o reflexión." },
    { time: "Segundos 31-58", description: "Música optimista y motivacional." }
  ],
  protagonistNote: "(El video puede ser protagonizado por Miyako para darle un toque más directo y analítico)",
  scenes: [
    {
      time: "0-5 segundos",
      duration: [0, 5],
      title: "HOOK VISUAL IMPACTANTE",
      visual: "Cortes rápidos: 1. Un trapo de cocina sucio siendo escurrido. 2. Un cepillo de dientes viejo. 3. Un desagüe de ducha con cabellos.",
      onScreenText: "Si esto te da asco..."
    },
    {
      time: "6-15 segundos",
      duration: [6, 15],
      title: "EL GIRO / LA PREGUNTA INCÓMODA",
      visual: "(Aparece Miyako en pantalla, con una expresión seria y directa, apuntando hacia su abdomen).",
      voice: "\"Somos súper aseados con lo que se ve, ¿verdad? Limpiamos lo que nos daría asco si se acumula... Pero seamos honestos, pana...\"\n(Miyako se toca el abdomen)",
      onScreenText: "¿CUÁNDO FUE LA ÚLTIMA VEZ QUE LIMPIASTE ESTO?"
    },
    {
      time: "16-30 segundos",
      duration: [16, 30],
      title: "CREANDO CONCIENCIA DEL PROBLEMA",
      visual: "(Miyako sigue en cámara, usando sus manos para gesticular acumulación interna).",
      voice: "\"Por años, tu cuerpo acumula desechos y toxinas en el colon. De ahí viene la hinchazón, la pesadez, la falta de energía... Tu sistema digestivo está pidiendo a gritos un reseteo\".",
      keywords: ["TOXINAS", "HINCHAZÓN", "CANSANCIO"]
    },
    {
      time: "31-48 segundos",
      duration: [31, 48],
      title: "LA SOLUCIÓN DEFINITIVA: MK FUXION",
      visual: "(El ambiente cambia. Música positiva. Miyako sonríe y muestra las cajas de Prunex 1 y Flora Liv).\n\n(Corte a una taza con agua caliente donde se prepara Prunex 1).\n\n(Corte a un vaso con agua fría donde se prepara Flora Liv).",
      voice: "\"¡Pero tranqui! Dejar tu cuerpo 'posi' por dentro es un hábito saludable y necesario. Este es el pack de inicio perfecto.\"\n\n\"Paso 1: Por la noche, Prunex 1. Un té de guindón que promueve la limpieza efectiva de tu colon, aliviando el estreñimiento. ¡Saca todo lo que tu cuerpo no necesita!\"\n\n\"Paso 2: Por la mañana, Flora Liv. Con 10 mil millones de probióticos, regenera tu flora intestinal para mejorar la digestión y asimilar mejor los nutrientes \"."
    },
    {
      time: "49-58 segundos",
      duration: [49, 58],
      title: "LLAMADO A LA ACCIÓN (INTERACCIÓN)",
      visual: "(Miyako sostiene ambos productos, mirando a la cámara con seguridad).",
      voice: "\"Limpiar tu cuerpo por dentro no es un lujo, es salud. ¿Estás listo para sentir la diferencia?\"",
      onScreenText: "Si quieres tu pack Detox, comenta la palabra \"RESET\" y te ayudamos a empezar."
    }
  ],
  caption: {
    text: "Cuidas el exterior, ¡es hora de cuidar tu interior! ✨ Dale a tu cuerpo el reseteo que necesita con nuestro pack Detox. ¡Prepárate para sentirte más ligero y con más energía! 💪",
    hashtags: "#MKFuxion #SaludPlenaConMK #DetoxMK #LimpiezaInterna #Prunex #FloraLiv #SaludDigestiva #Bienestar #Ecuador"
  },
  tasks: [
    {
      name: "Miyako",
      role: "Estrategia y Confianza",
      description: "Pana, este guion es perfecto para tu estilo directo y que genera confianza. Protagonízalo tú para darle ese toque de seriedad y conocimiento."
    },
    {
      name: "Mikaela",
      role: "Creatividad y Conexión",
      description: "Mika, tu misión es estar a cargo del engagement. Responde a todos los comentarios \"RESET\" con un mensaje empático y cercano por DM, iniciando la conversación para el cierre de venta. ¡Tu calidez será clave para convertir a esos interesados en clientes!"
    }
  ],
  closing: "¡Equipo, esta idea es una bomba! Ataca una verdad incómoda y ofrece una solución simple y efectiva. Es el gancho perfecto para educar a nuestra audiencia y crear una necesidad real por un hábito saludable que nosotros podemos proveer. ¡Vamos a grabar y a preparar esos dedos para responder DMs!"
};
