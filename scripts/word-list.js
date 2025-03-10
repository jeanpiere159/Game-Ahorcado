const wordList = [
  {
    word: "guitarra",
    hint: "Un instrumento musical de cuerdas.",
  },
  {
    word: "oxígeno",
    hint: "Un gas incoloro e inodoro esencial para la vida.",
  },
  {
    word: "montana",
    hint: "Una gran elevación natural de la superficie terrestre.",
  },
  {
    word: "pintura",
    hint: "Una forma de arte que usa colores sobre una superficie para crear imágenes o expresión.",
  },
  {
    word: "astronomía",
    hint: "El estudio científico de los objetos celestes y los fenómenos del espacio.",
  },
  {
    word: "fútbol",
    hint: "Un deporte popular jugado con un balón esférico.",
  },
  {
    word: "chocolate",
    hint: "Un dulce hecho a base de granos de cacao.",
  },
  {
    word: "mariposa",
    hint: "Un insecto con alas coloridas y un cuerpo delgado.",
  },
  {
    word: "historia",
    hint: "El estudio de los acontecimientos pasados y la civilización humana.",
  },
  {
    word: "pizza",
    hint: "Un plato salado que consiste en una base redonda y plana con ingredientes encima.",
  },
  {
    word: "jazz",
    hint: "Un género musical caracterizado por la improvisación y la sincopación.",
  },
  {
    word: "cámara",
    hint: "Un dispositivo utilizado para capturar y grabar imágenes o videos.",
  },
  {
    word: "diamante",
    hint: "Una piedra preciosa conocida por su brillo y dureza.",
  },
  {
    word: "aventura",
    hint: "Una experiencia emocionante o arriesgada.",
  },
  {
    word: "ciencia",
    hint: "El estudio sistemático de la estructura y el comportamiento del mundo físico y natural.",
  },
  {
    word: "bicicleta",
    hint: "Un vehículo impulsado por el ser humano con dos ruedas.",
  },
  {
    word: "atardecer",
    hint: "El momento en que el sol desaparece bajo el horizonte.",
  },
  {
    word: "café",
    hint: "Una bebida popular con cafeína hecha a partir de granos de café tostados.",
  },
  {
    word: "baile",
    hint: "Un movimiento rítmico del cuerpo, a menudo realizado con música.",
  },
  {
    word: "galaxia",
    hint: "Un vasto sistema de estrellas, gas y polvo unidos por la gravedad.",
  },
  {
    word: "orquesta",
    hint: "Un gran conjunto de músicos que tocan diversos instrumentos.",
  },
  {
    word: "volcán",
    hint: "Una montaña o colina con una abertura por donde se expulsan lava, fragmentos de roca, vapor caliente y gases.",
  },
  {
    word: "novela",
    hint: "Una obra de ficción extensa, generalmente con una trama compleja y personajes desarrollados.",
  },
  {
    word: "escultura",
    hint: "Una forma de arte tridimensional creada mediante la manipulación de materiales.",
  },
  {
    word: "sinfonía",
    hint: "Una composición musical extensa para orquesta completa, típicamente con varios movimientos.",
  },
  {
    word: "arquitectura",
    hint: "El arte y la ciencia de diseñar y construir edificios.",
  },
  {
    word: "ballet",
    hint: "Una forma de danza clásica caracterizada por movimientos precisos y elegantes.",
  },
  {
    word: "astronauta",
    hint: "Una persona entrenada para viajar y trabajar en el espacio.",
  },
  {
    word: "cascada",
    hint: "Una corriente de agua que cae desde una altura.",
  },
  {
    word: "tecnología",
    hint: "La aplicación del conocimiento científico para propósitos prácticos.",
  },
  {
    word: "arcoíris",
    hint: "Un fenómeno meteorológico causado por la reflexión, refracción y dispersión de la luz.",
  },
  {
    word: "universo",
    hint: "Todo el espacio, la materia y el tiempo existentes en su conjunto.",
  },
  {
    word: "piano",
    hint: "Un instrumento musical que se toca presionando teclas que activan martillos que golpean cuerdas.",
  },
  {
    word: "vacaciones",
    hint: "Un período de tiempo dedicado al placer, descanso o relajación.",
  },
  {
    word: "selva tropical",
    hint: "Un bosque denso caracterizado por alta pluviosidad y biodiversidad.",
  },
  {
    word: "teatro",
    hint: "Un edificio o área al aire libre donde se representan obras, películas u otros espectáculos.",
  },
  {
    word: "teléfono",
    hint: "Un dispositivo utilizado para transmitir sonido a largas distancias.",
  },
  {
    word: "lenguaje",
    hint: "Un sistema de comunicación compuesto por palabras, gestos y sintaxis.",
  },
  {
    word: "desierto",
    hint: "Un área árida o estéril con poca o ninguna precipitación.",
  },
  {
    word: "girasol",
    hint: "Una planta alta con una gran flor amarilla.",
  },
  {
    word: "fantasía",
    hint: "Un género de ficción imaginativa que involucra magia y elementos sobrenaturales.",
  },
  {
    word: "telescopio",
    hint: "Un instrumento óptico utilizado para observar objetos distantes en el espacio.",
  },
  {
    word: "brisa",
    hint: "Un viento suave.",
  },
  {
    word: "oasis",
    hint: "Un área fértil en un desierto donde hay agua.",
  },
  {
    word: "fotografía",
    hint: "El arte, proceso o práctica de crear imágenes mediante la captura de luz u otras radiaciones electromagnéticas.",
  },
  {
    word: "safari",
    hint: "Una expedición o viaje, generalmente para observar la vida silvestre en su hábitat natural.",
  },
  {
    word: "planeta",
    hint: "Un cuerpo celeste que orbita una estrella y no produce luz propia.",
  },
  {
    word: "río",
    hint: "Un gran flujo natural de agua que desemboca en un mar, lago u otro río.",
  },
  {
    word: "tropical",
    hint: "Relacionado con la región situada entre el Trópico de Cáncer y el Trópico de Capricornio.",
  },
  {
    word: "misterioso",
    hint: "Difícil o imposible de entender, explicar o identificar.",
  },
  {
    word: "enigma",
    hint: "Algo que es misterioso, desconcertante o difícil de comprender.",
  },
  {
    word: "paradoja",
    hint: "Una afirmación o situación que se contradice a sí misma o desafía la intuición.",
  },
  {
    word: "rompecabezas",
    hint: "Un juego, juguete o problema diseñado para poner a prueba el ingenio o conocimiento.",
  },
  {
    word: "susurro",
    hint: "Hablar muy suavemente o en voz baja, a menudo de manera secreta.",
  },
  {
    word: "sombra",
    hint: "Un área oscura producida por un objeto que bloquea la luz.",
  },
  {
    word: "secreto",
    hint: "Algo que se mantiene oculto o desconocido para los demás.",
  },
  {
    word: "curiosidad",
    hint: "Un fuerte deseo de saber o aprender algo.",
  },
  {
    word: "impredecible",
    hint: "Algo que no puede ser previsto o conocido de antemano; incierto.",
  },
  {
    word: "ofuscar",
    hint: "Confundir o desconcertar a alguien; hacer algo poco claro o difícil de entender.",
  },
  {
    word: "revelar",
    hint: "Dar a conocer o hacer visible algo que antes era secreto o desconocido.",
  },
  {
    word: "ilusión",
    hint: "Una percepción o creencia falsa; una apariencia o impresión engañosa.",
  },
  {
    word: "luz de luna",
    hint: "La luz que proviene de la luna.",
  },
  {
    word: "vibrante",
    hint: "Lleno de energía, brillo y vida.",
  },
  {
    word: "nostalgia",
    hint: "Un sentimiento de anhelo o afecto melancólico por el pasado.",
  },
  {
    word: "brillante",
    hint: "Excepcionalmente inteligente, talentoso o impresionante.",
  },
  {
    word: "mesa",
    hint: "Mueble con patas que se usa para comer o trabajar.",
  },
  {
    word: "pelota",
    hint: "Objeto redondo que se usa para jugar.",
  },
  {
    word: "perro",
    hint: "Un animal doméstico que ladra.",
  },
  {
    word: "gato",
    hint: "Un animal doméstico que maúlla.",
  },
  {
    word: "sol",
    hint: "La estrella que nos da luz y calor.",
  },
  {
    word: "luna",
    hint: "El satélite natural de la Tierra.",
  },
  {
    word: "casa",
    hint: "Lugar donde vive una familia.",
  },
  {
    word: "agua",
    hint: "Líquido transparente y esencial para la vida.",
  },
  {
    word: "árbol",
    hint: "Planta grande con tronco y hojas.",
  },
  {
    word: "flor",
    hint: "Parte colorida de una planta que puede oler bien.",
  },
  {
    word: "nube",
    hint: "Masa blanca o gris en el cielo que trae lluvia.",
  },
  {
    word: "avion",
    hint: "Medio de transporte que vuela por el cielo.",
  },
  {
    word: "tren",
    hint: "Vehículo que se mueve sobre rieles.",
  },
  {
    word: "playa",
    hint: "Lugar con arena y mar donde puedes nadar.",
  },
  {
    word: "fruta",
    hint: "Alimento dulce que crece en los árboles y plantas.",
  },
  {
    word: "mano",
    hint: "Parte del cuerpo con dedos.",
  },
  {
    word: "puerta",
    hint: "Se usa para entrar o salir de un lugar.",
  },
  {
    word: "silla",
    hint: "Mueble con respaldo donde te sientas.",
  },
  {
    word: "zapato",
    hint: "Lo usas en los pies para caminar.",
  },
  {
    word: "camino",
    hint: "Lugar por donde puedes caminar o conducir.",
  },
];
