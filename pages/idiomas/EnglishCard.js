import { useEffect, useState } from 'react';

const palabras = [
    {
        palabra: "effort",
        significado: "Esfuerzo, intento",
        frases: [
          "Success often requires a lot of effort. (El éxito a menudo requiere mucho esfuerzo.)",
          "He made an effort to complete the task on time. (Hizo un esfuerzo para completar la tarea a tiempo.)",
          "Without effort, progress is impossible. (Sin esfuerzo, el progreso es imposible.)"
        ]
      },
      {
        palabra: "achievement",
        significado: "Logro, éxito",
        frases: [
          "Graduating from university was her greatest achievement. (Graduarse de la universidad fue su mayor logro.)",
          "Hard work leads to achievement. (El trabajo duro lleva al logro.)",
          "The award recognized his lifetime achievements. (El premio reconoció los logros de su vida.)"
        ]
      },
      {
        palabra: "overcome",
        significado: "Superar, vencer",
        frases: [
          "He managed to overcome his fear of public speaking. (Logró superar su miedo a hablar en público.)",
          "They overcame many obstacles to finish the project. (Superaron muchos obstáculos para terminar el proyecto.)",
          "Overcoming challenges makes us stronger. (Superar desafíos nos hace más fuertes.)"
        ]
      },
      {
        palabra: "resilient",
        significado: "Resiliente, resistente",
        frases: [
          "Children are often more resilient than adults think. (Los niños suelen ser más resilientes de lo que los adultos creen.)",
          "She showed great resilience after losing her job. (Mostró gran resiliencia después de perder su empleo.)",
          "A resilient mindset helps in tough times. (Una mentalidad resiliente ayuda en tiempos difíciles.)"
        ]
      },
      {
        palabra: "support",
        significado: "Apoyo, respaldar",
        frases: [
          "Family support is crucial during tough times. (El apoyo familiar es crucial en tiempos difíciles.)",
          "The teacher supported her students through their challenges. (El maestro apoyó a sus estudiantes durante sus desafíos.)",
          "He provided financial support to the organization. (Proporcionó apoyo financiero a la organización.)"
        ]
      },
      {
        palabra: "create",
        significado: "Crear, generar",
        frases: [
          "Artists create beautiful works of art. (Los artistas crean hermosas obras de arte.)",
          "She wants to create a positive environment for her team. (Quiere crear un ambiente positivo para su equipo.)",
          "Creativity helps to create new opportunities. (La creatividad ayuda a crear nuevas oportunidades.)"
        ]
      },
      {
        palabra: "inspire",
        significado: "Inspirar, motivar",
        frases: [
          "Her story inspired many people to chase their dreams. (Su historia inspiró a muchas personas a perseguir sus sueños.)",
          "Teachers inspire students to learn and grow. (Los maestros inspiran a los estudiantes a aprender y crecer.)",
          "The movie was inspired by true events. (La película fue inspirada en hechos reales.)"
        ]
      },
      {
        palabra: "achieve",
        significado: "Lograr, alcanzar",
        frases: [
          "She worked hard to achieve her goals. (Trabajó duro para lograr sus metas.)",
          "Achieving success takes time and dedication. (Lograr el éxito requiere tiempo y dedicación.)",
          "He achieved a perfect score on the test. (Logró una puntuación perfecta en el examen.)"
        ]
      },
      {
        palabra: "motivate",
        significado: "Motivar, animar",
        frases: [
          "A good leader knows how to motivate their team. (Un buen líder sabe cómo motivar a su equipo.)",
          "Her words motivated me to try harder. (Sus palabras me motivaron a esforzarme más.)",
          "Motivation is key to achieving goals. (La motivación es clave para alcanzar metas.)"
        ]
      },
      {
        palabra: "persevere",
        significado: "Perseverar, persistir",
        frases: [
          "He persevered through many challenges to succeed. (Perseveró a través de muchos desafíos para tener éxito.)",
          "Perseverance often leads to great rewards. (La perseverancia a menudo conduce a grandes recompensas.)",
          "She persevered despite the setbacks. (Perseveró a pesar de los contratiempos.)"
        ]
      },{
        palabra: "gratitude",
        significado: "Gratitud, agradecimiento",
        frases: [
          "She expressed her gratitude with a heartfelt letter. (Expresó su gratitud con una carta sincera.)",
          "Gratitude can improve your mental health. (La gratitud puede mejorar tu salud mental.)",
          "He felt deep gratitude for their support. (Sintió una profunda gratitud por su apoyo.)"
        ]
      },
      {
        palabra: "hope",
        significado: "Esperanza, esperar",
        frases: [
          "Hope kept them going during tough times. (La esperanza los mantuvo durante los tiempos difíciles.)",
          "We hope for the best outcome. (Esperamos el mejor resultado.)",
          "Never lose hope, no matter how hard life gets. (Nunca pierdas la esperanza, no importa lo difícil que sea la vida.)"
        ]
      },
      {
        palabra: "kind",
        significado: "Amable, tipo (categoría)",
        frases: [
          "She is one of the kindest people I know. (Es una de las personas más amables que conozco.)",
          "What kind of music do you like? (¿Qué tipo de música te gusta?)",
          "Being kind can change someone's day. (Ser amable puede cambiar el día de alguien.)"
        ]
      },
      {
        palabra: "wisdom",
        significado: "Sabiduría, conocimiento profundo",
        frases: [
          "Wisdom often comes with experience. (La sabiduría a menudo viene con la experiencia.)",
          "He shared his wisdom with the younger generation. (Compartió su sabiduría con la generación más joven.)",
          "Her wisdom helped us make the right decision. (Su sabiduría nos ayudó a tomar la decisión correcta.)"
        ]
      },
      {
        palabra: "brave",
        significado: "Valiente, audaz",
        frases: [
          "It takes courage to be brave in difficult situations. (Se necesita valentía para ser valiente en situaciones difíciles.)",
          "She was brave enough to face her fears. (Fue lo suficientemente valiente para enfrentar sus miedos.)",
          "Brave people inspire others to act. (Las personas valientes inspiran a otros a actuar.)"
        ]
      },
      {
        palabra: "challenge",
        significado: "Desafío, retar",
        frases: [
          "This project is a big challenge for us. (Este proyecto es un gran desafío para nosotros.)",
          "He challenged himself to run a marathon. (Se retó a correr un maratón.)",
          "Challenges help us grow and learn. (Los desafíos nos ayudan a crecer y aprender.)"
        ]
      },
      {
        palabra: "peace",
        significado: "Paz, tranquilidad",
        frases: [
          "She enjoys the peace of the countryside. (Disfruta de la paz del campo.)",
          "After the argument, they finally found peace. (Después de la discusión, finalmente encontraron la paz.)",
          "Peace is essential for a happy life. (La paz es esencial para una vida feliz.)"
        ]
      },
      {
        palabra: "joyful",
        significado: "Alegre, lleno de alegría",
        frases: [
          "Her joyful smile brightened the room. (Su sonrisa alegre iluminó la habitación.)",
          "The children were joyful during the party. (Los niños estaban alegres durante la fiesta.)",
          "A joyful attitude can make a big difference. (Una actitud alegre puede marcar una gran diferencia.)"
        ]
      },
      {
        palabra: "strength",
        significado: "Fuerza, fortaleza",
        frases: [
          "Her inner strength amazed everyone. (Su fuerza interior asombró a todos.)",
          "It takes strength to overcome adversity. (Se necesita fuerza para superar la adversidad.)",
          "Physical strength is important for this job. (La fuerza física es importante para este trabajo.)"
        ]
      },
      {
        palabra: "encourage",
        significado: "Alentar, animar",
        frases: [
          "Teachers should encourage their students to ask questions. (Los maestros deben alentar a sus estudiantes a hacer preguntas.)",
          "Her words encouraged me to keep going. (Sus palabras me animaron a seguir adelante.)",
          "We need to encourage creativity in the workplace. (Necesitamos fomentar la creatividad en el lugar de trabajo.)"
        ]
      },
      {
        palabra: "trust",
        significado: "Confianza, confiar",
        frases: [
          "Trust is the foundation of any strong relationship. (La confianza es la base de cualquier relación fuerte.)",
          "You can trust her to keep your secret. (Puedes confiar en ella para guardar tu secreto.)",
          "Building trust takes time and effort. (Construir confianza lleva tiempo y esfuerzo.)"
        ]
      },
      {
        palabra: "calm",
        significado: "Calma, calmar",
        frases: [
          "The calm sea was perfect for sailing. (El mar tranquilo era perfecto para navegar.)",
          "Take a deep breath to calm your nerves. (Respira hondo para calmar tus nervios.)",
          "She remained calm despite the chaos. (Permaneció tranquila a pesar del caos.)"
        ]
      },
      {
        palabra: "adventure",
        significado: "Aventura, experiencia emocionante",
        frases: [
          "Traveling to a new country is always an adventure. (Viajar a un país nuevo siempre es una aventura.)",
          "He loves outdoor adventures like hiking and camping. (Le encantan las aventuras al aire libre como el senderismo y el campamento.)",
          "Life is an adventure full of surprises. (La vida es una aventura llena de sorpresas.)"
        ]
      },
      {
        palabra: "patient",
        significado: "Paciente, tolerante",
        frases: [
          "Be patient; good things take time. (Sé paciente; las cosas buenas llevan tiempo.)",
          "The doctor was kind and patient with the children. (El médico fue amable y paciente con los niños.)",
          "Learning a new skill requires patience. (Aprender una nueva habilidad requiere paciencia.)"
        ]
      },
      {
        palabra: "respect",
        significado: "Respeto, respetar",
        frases: [
          "Respect is earned, not given. (El respeto se gana, no se da.)",
          "He respects his parents deeply. (Respeta profundamente a sus padres.)",
          "Mutual respect is crucial in any partnership. (El respeto mutuo es crucial en cualquier asociación.)"
        ]
      },
      {
        palabra: "determined",
        significado: "Decidido, determinado",
        frases: [
          "She is determined to achieve her dreams. (Está decidida a alcanzar sus sueños.)",
          "With a determined mindset, nothing is impossible. (Con una mentalidad determinada, nada es imposible.)",
          "He remained determined despite the challenges. (Permaneció decidido a pesar de los desafíos.)"
        ]
      },
      {
        palabra: "generous",
        significado: "Generoso, altruista",
        frases: [
          "She is known for her generous heart. (Es conocida por su corazón generoso.)",
          "He made a generous donation to the charity. (Hizo una donación generosa a la caridad.)",
          "Being generous brings joy to others. (Ser generoso trae alegría a los demás.)"
        ]
      }, {
        palabra: "focus",
        significado: "Enfoque, enfocarse",
        frases: [
          "You need to focus on your studies to succeed. (Debes enfocarte en tus estudios para tener éxito.)",
          "The camera lens was out of focus. (El lente de la cámara estaba desenfocado.)",
          "Focus is essential when solving complex problems. (El enfoque es esencial al resolver problemas complejos.)"
        ]
      },
      {
        palabra: "persistent",
        significado: "Persistente, tenaz",
        frases: [
          "Her persistent efforts eventually paid off. (Sus esfuerzos persistentes finalmente dieron frutos.)",
          "He is persistent in reaching his goals. (Es persistente en alcanzar sus metas.)",
          "A persistent mindset leads to success. (Una mentalidad persistente lleva al éxito.)"
        ]
      },
      {
        palabra: "happiness",
        significado: "Felicidad, alegría",
        frases: [
          "True happiness comes from within. (La verdadera felicidad viene desde adentro.)",
          "Seeing her smile brought him great happiness. (Verla sonreír le trajo gran felicidad.)",
          "Happiness is contagious; spread it everywhere. (La felicidad es contagiosa; compártela por todas partes.)"
        ]
      },
      {
        palabra: "growth",
        significado: "Crecimiento, desarrollo",
        frases: [
          "Personal growth is a lifelong journey. (El crecimiento personal es un viaje de toda la vida.)",
          "The company showed significant growth last year. (La empresa mostró un crecimiento significativo el año pasado.)",
          "Plants need water and sunlight for growth. (Las plantas necesitan agua y luz solar para crecer.)"
        ]
      },
      {
        palabra: "curiosity",
        significado: "Curiosidad, interés",
        frases: [
          "Curiosity drives innovation and discovery. (La curiosidad impulsa la innovación y el descubrimiento.)",
          "The child's curiosity led to many questions. (La curiosidad del niño llevó a muchas preguntas.)",
          "Stay curious, and you will keep learning. (Mantente curioso, y seguirás aprendiendo.)"
        ]
      },
      {
        palabra: "loyal",
        significado: "Leal, fiel",
        frases: [
          "A loyal friend is a treasure. (Un amigo leal es un tesoro.)",
          "The dog remained loyal to its owner. (El perro permaneció leal a su dueño.)",
          "Loyal customers are the backbone of any business. (Los clientes leales son la base de cualquier negocio.)"
        ]
      },
      {
        palabra: "ambitious",
        significado: "Ambicioso, aspirante",
        frases: [
          "She is ambitious and works hard to achieve her goals. (Es ambiciosa y trabaja duro para alcanzar sus metas.)",
          "His ambitious plans impressed the investors. (Sus planes ambiciosos impresionaron a los inversores.)",
          "Being ambitious can lead to great success. (Ser ambicioso puede llevar a un gran éxito.)"
        ]
      },
      {
        palabra: "improve",
        significado: "Mejorar, progresar",
        frases: [
          "She wants to improve her English skills. (Quiere mejorar sus habilidades en inglés.)",
          "The new policies aim to improve the quality of life. (Las nuevas políticas buscan mejorar la calidad de vida.)",
          "Practice helps improve performance over time. (La práctica ayuda a mejorar el desempeño con el tiempo.)"
        ]
      },
      {
        palabra: "creative",
        significado: "Creativo, innovador",
        frases: [
          "The artist is incredibly creative with her designs. (La artista es increíblemente creativa con sus diseños.)",
          "Thinking outside the box requires a creative mind. (Pensar fuera de la caja requiere una mente creativa.)",
          "A creative solution was needed to solve the problem. (Se necesitaba una solución creativa para resolver el problema.)"
        ]
      },
      {
        palabra: "confident",
        significado: "Confiado, seguro de sí mismo",
        frases: [
          "She felt confident about her presentation. (Se sintió segura de su presentación.)",
          "Being confident can help you succeed in interviews. (Ser seguro de ti mismo puede ayudarte a tener éxito en entrevistas.)",
          "Confidence is attractive in a leader. (La confianza es atractiva en un líder.)"
        ]
      },
      {
        palabra: "success",
        significado: "Éxito, logro",
        frases: [
          "Hard work and determination lead to success. (El trabajo duro y la determinación llevan al éxito.)",
          "Her success in the competition was well-deserved. (Su éxito en la competencia fue bien merecido.)",
          "Define success on your own terms. (Define el éxito en tus propios términos.)"
        ]
      },
      {
        palabra: "helpful",
        significado: "Útil, servicial",
        frases: [
          "The instructions were very helpful for assembling the furniture. (Las instrucciones fueron muy útiles para armar el mueble.)",
          "She is always helpful when someone needs assistance. (Siempre es servicial cuando alguien necesita ayuda.)",
          "A helpful attitude makes teamwork easier. (Una actitud servicial facilita el trabajo en equipo.)"
        ]
      },
      {
        palabra: "respectful",
        significado: "Respetuoso, considerado",
        frases: [
          "Always be respectful of others' opinions. (Siempre sé respetuoso con las opiniones de los demás.)",
          "The students were respectful during the ceremony. (Los estudiantes fueron respetuosos durante la ceremonia.)",
          "A respectful workplace fosters collaboration. (Un lugar de trabajo respetuoso fomenta la colaboración.)"
        ]
      },
      {
        palabra: "ambition",
        significado: "Ambición, aspiración",
        frases: [
          "Her ambition is to become a successful entrepreneur. (Su ambición es convertirse en una empresaria exitosa.)",
          "Ambition drives people to achieve great things. (La ambición impulsa a las personas a lograr grandes cosas.)",
          "He admired her ambition and determination. (Admiraba su ambición y determinación.)"
        ]
      },
      {
        palabra: "thoughtful",
        significado: "Considerado, reflexivo",
        frases: [
          "She is always thoughtful when choosing gifts for her friends. (Siempre es considerada al elegir regalos para sus amigos.)",
          "The essay was well-written and thoughtful. (El ensayo estaba bien escrito y era reflexivo.)",
          "Being thoughtful shows that you care about others. (Ser considerado demuestra que te preocupas por los demás.)"
        ]
      }, {
        palabra: "algorithm",
        significado: "Algoritmo",
        frases: [
          "An algorithm is the foundation of any computer program. (Un algoritmo es la base de cualquier programa de computadora.)",
          "Sorting algorithms are essential in programming. (Los algoritmos de ordenamiento son esenciales en la programación.)",
          "Learning different algorithms can improve your coding skills. (Aprender diferentes algoritmos puede mejorar tus habilidades de codificación.)"
        ]
      },
      {
        palabra: "debugging",
        significado: "Depuración",
        frases: [
          "Debugging is a crucial skill for any programmer. (La depuración es una habilidad crucial para cualquier programador.)",
          "After debugging the code, the program ran perfectly. (Después de depurar el código, el programa funcionó perfectamente.)",
          "They spent hours debugging the software to find the issue. (Pasaron horas depurando el software para encontrar el problema.)"
        ]
      },
      {
        palabra: "function",
        significado: "Función",
        frases: [
          "A function can be reused multiple times in programming. (Una función puede ser reutilizada varias veces en la programación.)",
          "Functions help organize and modularize the code. (Las funciones ayudan a organizar y modularizar el código.)",
          "Each function in the program had a clear purpose. (Cada función en el programa tenía un propósito claro.)"
        ]
      },
      {
        palabra: "variable",
        significado: "Variable",
        frases: [
          "A variable can hold different types of values. (Una variable puede almacenar diferentes tipos de valores.)",
          "In this program, the variable 'x' stores the user's input. (En este programa, la variable 'x' almacena la entrada del usuario.)",
          "Declaring variables correctly is important for clean code. (Declarar variables correctamente es importante para un código limpio.)"
        ]
      },
      {
        palabra: "syntax",
        significado: "Sintaxis",
        frases: [
          "Each programming language has its own syntax rules. (Cada lenguaje de programación tiene sus propias reglas de sintaxis.)",
          "An error in syntax can cause the program to fail. (Un error en la sintaxis puede hacer que el programa falle.)",
          "Learning the syntax of a programming language is the first step. (Aprender la sintaxis de un lenguaje de programación es el primer paso.)"
        ]
      },
      {
        palabra: "loop",
        significado: "Bucle",
        frases: [
          "A loop can execute code multiple times until a condition is met. (Un bucle puede ejecutar el código varias veces hasta que se cumpla una condición.)",
          "For loops and while loops are common in programming. (Los bucles 'for' y 'while' son comunes en la programación.)",
          "A loop is used to process multiple data items. (Se usa un bucle para procesar múltiples elementos de datos.)"
        ]
      },
      {
        palabra: "object",
        significado: "Objeto",
        frases: [
          "In object-oriented programming, an object contains data and methods. (En la programación orientada a objetos, un objeto contiene datos y métodos.)",
          "Each object in the program represents a unique entity. (Cada objeto en el programa representa una entidad única.)",
          "You can create multiple objects from a single class. (Puedes crear múltiples objetos a partir de una sola clase.)"
        ]
      },
      {
        palabra: "framework",
        significado: "Marco de trabajo",
        frases: [
          "A framework helps speed up development by providing reusable components. (Un marco de trabajo ayuda a acelerar el desarrollo proporcionando componentes reutilizables.)",
          "React and Angular are popular frameworks for building web applications. (React y Angular son marcos de trabajo populares para construir aplicaciones web.)",
          "Choosing the right framework depends on the project requirements. (Elegir el marco de trabajo correcto depende de los requisitos del proyecto.)"
        ]
      },
      {
        palabra: "database",
        significado: "Base de datos",
        frases: [
          "A database allows you to store large amounts of data efficiently. (Una base de datos te permite almacenar grandes cantidades de datos de manera eficiente.)",
          "SQL is used to manage and query databases. (SQL se usa para administrar y consultar bases de datos.)",
          "Databases are essential for most web applications. (Las bases de datos son esenciales para la mayoría de las aplicaciones web.)"
        ]
      }, {
        palabra: "hypothesis",
        significado: "Hipótesis",
        frases: [
          "A hypothesis is a starting point for scientific experimentation. (Una hipótesis es un punto de partida para la experimentación científica.)",
          "She proposed a hypothesis about the relationship between the variables. (Propuso una hipótesis sobre la relación entre las variables.)",
          "Testing a hypothesis can either prove or disprove a theory. (Probar una hipótesis puede demostrar o refutar una teoría.)"
        ]
      },
      {
        palabra: "experiment",
        significado: "Experimento",
        frases: [
          "An experiment is designed to test the validity of a hypothesis. (Un experimento está diseñado para probar la validez de una hipótesis.)",
          "Scientists conduct experiments to learn more about the world. (Los científicos realizan experimentos para aprender más sobre el mundo.)",
          "The results of the experiment were inconclusive. (Los resultados del experimento fueron inconclusos.)"
        ]
      },
      {
        palabra: "theory",
        significado: "Teoría",
        frases: [
          "The theory of evolution is widely accepted by the scientific community. (La teoría de la evolución es ampliamente aceptada por la comunidad científica.)",
          "A scientific theory must be supported by substantial evidence. (Una teoría científica debe estar respaldada por evidencia sustancial.)",
          "He developed a new theory to explain the phenomenon. (Desarrolló una nueva teoría para explicar el fenómeno.)"
        ]
      },
      {
        palabra: "atom",
        significado: "Átomo",
        frases: [
          "Atoms are the building blocks of everything in the universe. (Los átomos son los bloques de construcción de todo en el universo.)",
          "An atom consists of protons, neutrons, and electrons. (Un átomo consiste en protones, neutrones y electrones.)",
          "The concept of the atom is fundamental to chemistry and physics. (El concepto de átomo es fundamental para la química y la física.)"
        ]
      },
      {
        palabra: "gravity",
        significado: "Gravedad",
        frases: [
          "Gravity keeps us anchored to the Earth's surface. (La gravedad nos mantiene anclados a la superficie de la Tierra.)",
          "The discovery of gravity changed the understanding of the universe. (El descubrimiento de la gravedad cambió la comprensión del universo.)",
          "In space, the effects of gravity are much weaker. (En el espacio, los efectos de la gravedad son mucho más débiles.)"
        ]
      },
      {
        palabra: "cell",
        significado: "Célula",
        frases: [
          "A cell is the smallest structural unit of living organisms. (Una célula es la unidad estructural más pequeña de los organismos vivos.)",
          "The human body is made up of trillions of cells. (El cuerpo humano está compuesto por billones de células.)",
          "Cells contain genetic material that determines traits. (Las células contienen material genético que determina los rasgos.)"
        ]
      },{
        palabra: "algorithm",
        significado: "Algoritmo",
        frases: [
          "The algorithm sorts the data quickly. (El algoritmo ordena los datos rápidamente.)",
          "A good algorithm can save a lot of time in programming. (Un buen algoritmo puede ahorrar mucho tiempo en la programación.)",
          "Learning algorithms is important for a software developer. (Aprender algoritmos es importante para un desarrollador de software.)"
        ]
      },
      {
        palabra: "database",
        significado: "Base de datos",
        frases: [
          "The database stores customer information. (La base de datos almacena la información del cliente.)",
          "We need to update the database to include new records. (Necesitamos actualizar la base de datos para incluir nuevos registros.)",
          "Databases are crucial for large-scale applications. (Las bases de datos son cruciales para aplicaciones a gran escala.)"
        ]
      },
      {
        palabra: "physics",
        significado: "Física",
        frases: [
          "Physics is the study of matter and energy. (La física es el estudio de la materia y la energía.)",
          "She is studying physics at the university. (Ella está estudiando física en la universidad.)",
          "Quantum physics deals with the behavior of particles at the atomic level. (La física cuántica trata sobre el comportamiento de las partículas a nivel atómico.)"
        ]
      },
      {
        palabra: "bacteria",
        significado: "Bacteria",
        frases: [
          "Bacteria can be harmful or beneficial to humans. (Las bacterias pueden ser perjudiciales o beneficiosas para los humanos.)",
          "Antibiotics are used to kill harmful bacteria. (Los antibióticos se usan para matar bacterias dañinas.)",
          "Some bacteria are involved in the process of fermentation. (Algunas bacterias están involucradas en el proceso de fermentación.)"
        ]
      },
      {
        palabra: "hologram",
        significado: "Holograma",
        frases: [
          "The museum displayed a 3D hologram of the ancient artifact. (El museo exhibió un holograma en 3D del artefacto antiguo.)",
          "Holograms are becoming more common in modern technology. (Los hologramas se están volviendo más comunes en la tecnología moderna.)",
          "Researchers are working on creating more realistic holograms. (Los investigadores están trabajando en crear hologramas más realistas.)"
        ]
      },
      {
        palabra: "cybersecurity",
        significado: "Ciberseguridad",
        frases: [
          "Cybersecurity is essential to protect data from hackers. (La ciberseguridad es esencial para proteger los datos de los hackers.)",
          "Companies invest in cybersecurity to avoid data breaches. (Las empresas invierten en ciberseguridad para evitar filtraciones de datos.)",
          "A strong password is one of the basic steps in cybersecurity. (Una contraseña fuerte es uno de los pasos básicos en ciberseguridad.)"
        ]
      },
      {
        palabra: "mathematics",
        significado: "Matemáticas",
        frases: [
          "Mathematics is the foundation of many scientific fields. (Las matemáticas son la base de muchos campos científicos.)",
          "He loves solving complex mathematics problems. (Le encanta resolver problemas matemáticos complejos.)",
          "Algebra is a branch of mathematics that deals with variables. (El álgebra es una rama de las matemáticas que trata con variables.)"
        ]
      },
      {
        palabra: "evolution",
        significado: "Evolución",
        frases: [
          "The theory of evolution explains the diversity of life. (La teoría de la evolución explica la diversidad de la vida.)",
          "Charles Darwin is famous for his work on evolution. (Charles Darwin es famoso por su trabajo sobre la evolución.)",
          "Evolution occurs over long periods of time. (La evolución ocurre a lo largo de largos períodos de tiempo.)"
        ]
      },
      {
        palabra: "neutron",
        significado: "Neutrón",
        frases: [
          "A neutron is a subatomic particle with no electrical charge. (Un neutrón es una partícula subatómica sin carga eléctrica.)",
          "Neutrons are found in the nucleus of atoms. (Los neutrones se encuentran en el núcleo de los átomos.)",
          "Neutron stars are incredibly dense and massive. (Las estrellas de neutrones son increíblemente densas y masivas.)"
        ]
      },
      {
        palabra: "energy",
        significado: "Energía",
        frases: [
          "Solar panels convert sunlight into energy. (Los paneles solares convierten la luz solar en energía.)",
          "Energy can neither be created nor destroyed, only transformed. (La energía no puede ser creada ni destruida, solo transformada.)",
          "Wind energy is a renewable source of power. (La energía eólica es una fuente renovable de energía.)"
        ]
      },
      {
        palabra: "quantum",
        significado: "Cuántico",
        frases: [
          "Quantum mechanics explains the behavior of particles at a microscopic level. (La mecánica cuántica explica el comportamiento de las partículas a nivel microscópico.)",
          "Quantum computing could revolutionize the tech industry. (La computación cuántica podría revolucionar la industria tecnológica.)",
          "Quantum entanglement refers to particles being linked regardless of distance. (El entrelazamiento cuántico se refiere a partículas vinculadas independientemente de la distancia.)"
        ]
      },
      {
        palabra: "protein",
        significado: "Proteína",
        frases: [
          "Proteins are essential for the growth and repair of tissues. (Las proteínas son esenciales para el crecimiento y la reparación de los tejidos.)",
          "Eggs are a good source of protein. (Los huevos son una buena fuente de proteínas.)",
          "Proteins are made up of amino acids. (Las proteínas están compuestas por aminoácidos.)"
        ]
      },
      {
        palabra: "biotechnology",
        significado: "Biotecnología",
        frases: [
          "Biotechnology is used to create products like vaccines and biofuels. (La biotecnología se usa para crear productos como vacunas y biocombustibles.)",
          "In the future, biotechnology could help to cure genetic disorders. (En el futuro, la biotecnología podría ayudar a curar trastornos genéticos.)",
          "Biotechnology has applications in medicine, agriculture, and industry. (La biotecnología tiene aplicaciones en medicina, agricultura e industria.)"
        ]
      },
      {
        palabra: "optics",
        significado: "Óptica",
        frases: [
          "Optics is the branch of physics that deals with the behavior of light. (La óptica es la rama de la física que trata el comportamiento de la luz.)",
          "The study of optics is essential for developing lenses and microscopes. (El estudio de la óptica es esencial para desarrollar lentes y microscopios.)",
          "Optics plays a key role in the design of telescopes. (La óptica juega un papel clave en el diseño de telescopios.)"
        ]
      },
      {
        palabra: "velocity",
        significado: "Velocidad",
        frases: [
          "The velocity of an object is its speed in a given direction. (La velocidad de un objeto es su rapidez en una dirección dada.)",
          "The rocket reached a high velocity as it launched. (El cohete alcanzó una alta velocidad al despegar.)",
          "Velocity is a vector quantity, meaning it has both magnitude and direction. (La velocidad es una cantidad vectorial, lo que significa que tiene magnitud y dirección.)"
        ]
      },
      {
        palabra: "simulation",
        significado: "Simulación",
        frases: [
          "The flight simulation helps pilots practice emergency procedures. (La simulación de vuelo ayuda a los pilotos a practicar procedimientos de emergencia.)",
          "We used computer simulations to predict the outcome of the experiment. (Usamos simulaciones por computadora para predecir el resultado del experimento.)",
          "Virtual simulations are used in training for various professions. (Las simulaciones virtuales se utilizan en la formación de diversas profesiones.)"
        ]
      },{
        palabra: "commute",
        significado: "Desplazarse",
        frases: [
          "I have to commute an hour to work every day. (Tengo que desplazarme una hora para ir al trabajo cada día.)",
          "She enjoys her daily commute because it gives her time to listen to music. (A ella le gusta su desplazamiento diario porque le da tiempo para escuchar música.)",
          "The long commute was exhausting, but worth it for the job. (El largo desplazamiento era agotador, pero valía la pena por el trabajo.)"
        ]
      },
      {
        palabra: "chore",
        significado: "Tarea doméstica",
        frases: [
          "Doing the dishes is my least favorite chore. (Lavar los platos es mi tarea doméstica menos favorita.)",
          "He helped with the chores around the house on weekends. (Él ayudó con las tareas domésticas en la casa durante los fines de semana.)",
          "Chores like cleaning and laundry can take up a lot of time. (Las tareas como limpiar y lavar la ropa pueden tomar mucho tiempo.)"
        ]
      },
      {
        palabra: "frustration",
        significado: "Frustración",
        frases: [
          "She felt a sense of frustration when the project kept getting delayed. (Sintió una sensación de frustración cuando el proyecto seguía siendo retrasado.)",
          "His frustration grew as the computer problems continued. (Su frustración creció a medida que los problemas con la computadora continuaban.)",
          "Frustration can be a natural response to feeling out of control. (La frustración puede ser una respuesta natural al sentirse fuera de control.)"
        ]
      },
      {
        palabra: "adventure",
        significado: "Aventura",
        frases: [
          "They went on an exciting adventure through the mountains. (Fueron a una emocionante aventura por las montañas.)",
          "Life is full of unexpected adventures. (La vida está llena de aventuras inesperadas.)",
          "She dreamed of traveling the world and having grand adventures. (Soñaba con viajar por el mundo y tener grandes aventuras.)"
        ]
      },
      {
        palabra: "habit",
        significado: "Hábito",
        frases: [
          "He developed the habit of reading before bed. (Desarrolló el hábito de leer antes de dormir.)",
          "Making exercise a daily habit can improve your health. (Hacer del ejercicio un hábito diario puede mejorar tu salud.)",
          "She tried to break her bad habit of procrastination. (Intentó romper su mal hábito de procrastinar.)"
        ]
      },
      {
        palabra: "obligation",
        significado: "Obligación",
        frases: [
          "He felt an obligation to help his friends in need. (Sintió la obligación de ayudar a sus amigos necesitados.)",
          "She didn't want to go to the meeting, but she had an obligation to attend. (No quería ir a la reunión, pero tenía la obligación de asistir.)",
          "The sense of obligation to family is strong in many cultures. (El sentido de obligación hacia la familia es fuerte en muchas culturas.)"
        ]
      },
      {
        palabra: "routine",
        significado: "Rutina",
        frases: [
          "Her morning routine involves coffee, a quick workout, and a shower. (Su rutina matutina incluye café, un rápido entrenamiento y una ducha.)",
          "After a long day, a relaxing evening routine is essential. (Después de un largo día, una rutina nocturna relajante es esencial.)",
          "Maintaining a healthy routine can help improve overall well-being. (Mantener una rutina saludable puede ayudar a mejorar el bienestar general.)"
        ]
      },
      {
        palabra: "negotiation",
        significado: "Negociación",
        frases: [
          "The negotiation process took longer than expected. (El proceso de negociación tomó más tiempo de lo esperado.)",
          "They reached an agreement after a long negotiation. (Llegaron a un acuerdo después de una larga negociación.)",
          "Effective negotiation skills are important in business. (Las habilidades de negociación efectivas son importantes en los negocios.)"
        ]
      },
      {
        palabra: "perspective",
        significado: "Perspectiva",
        frases: [
          "It helps to look at the problem from a different perspective. (Ayuda ver el problema desde una perspectiva diferente.)",
          "Her perspective on life changed after traveling abroad. (Su perspectiva de la vida cambió después de viajar al extranjero.)",
          "From my perspective, it seems like the best option. (Desde mi perspectiva, parece ser la mejor opción.)"
        ]
      },
      {
        palabra: "disappointment",
        significado: "Decepción",
        frases: [
          "He felt a great disappointment after hearing the news. (Sintió una gran decepción después de escuchar las noticias.)",
          "The movie was a disappointment, falling short of expectations. (La película fue una decepción, no cumpliendo con las expectativas.)",
          "She tried to hide her disappointment when the event was canceled. (Intentó ocultar su decepción cuando el evento fue cancelado.)"
        ]
      },
      {
        palabra: "achievement",
        significado: "Logro",
        frases: [
          "Graduating from college was one of her biggest achievements. (Graduarse de la universidad fue uno de sus mayores logros.)",
          "His achievement in the field of science was recognized worldwide. (Su logro en el campo de la ciencia fue reconocido mundialmente.)",
          "Achievements, both big and small, should be celebrated. (Los logros, grandes y pequeños, deben ser celebrados.)"
        ]
      },
      {
        palabra: "encouragement",
        significado: "Ánimo",
        frases: [
          "Her words of encouragement helped me through a tough time. (Sus palabras de ánimo me ayudaron a atravesar un momento difícil.)",
          "He received encouragement from his friends to pursue his dreams. (Recibió ánimo de sus amigos para seguir sus sueños.)",
          "Encouragement from family can make a big difference in success. (El ánimo de la familia puede hacer una gran diferencia en el éxito.)"
        ]
      },
      {
        palabra: "collaboration",
        significado: "Colaboración",
        frases: [
          "The project was a success due to the collaboration of the entire team. (El proyecto fue un éxito gracias a la colaboración de todo el equipo.)",
          "Collaboration between departments improved productivity. (La colaboración entre departamentos mejoró la productividad.)",
          "Successful collaboration requires good communication and trust. (La colaboración exitosa requiere buena comunicación y confianza.)"
        ]
      },
      {
        palabra: "ambition",
        significado: "Ambición",
        frases: [
          "Her ambition to become a doctor drove her through years of study. (Su ambición de convertirse en doctora la impulsó durante años de estudio.)",
          "Ambition is important, but it should be balanced with patience. (La ambición es importante, pero debe estar equilibrada con paciencia.)",
          "He has the ambition to start his own business one day. (Él tiene la ambición de iniciar su propio negocio algún día.)"
        ]
      },
      {
        palabra: "contribution",
        significado: "Contribución",
        frases: [
          "His contribution to the community was recognized with an award. (Su contribución a la comunidad fue reconocida con un premio.)",
          "She made a significant contribution to the charity event. (Ella hizo una contribución significativa al evento benéfico.)",
          "Every team member made a valuable contribution to the project. (Cada miembro del equipo hizo una valiosa contribución al proyecto.)"
        ]
      },
      {
        palabra: "responsibility",
        significado: "Responsabilidad",
        frases: [
          "It's your responsibility to take care of your health. (Es tu responsabilidad cuidar de tu salud.)",
          "Being a parent comes with great responsibility. (Ser padre implica una gran responsabilidad.)",
          "He took responsibility for the mistake and worked to fix it. (Él asumió la responsabilidad del error y trabajó para solucionarlo.)"
        ]
      },
      {
        palabra: "persuasion",
        significado: "Persuasión",
        frases: [
          "Her skills of persuasion helped her convince the group to agree. (Sus habilidades de persuasión le ayudaron a convencer al grupo de llegar a un acuerdo.)",
          "The advertisement was a clever piece of persuasion. (El anuncio fue una pieza astuta de persuasión.)",
          "Effective persuasion is based on understanding the audience's needs. (La persuasión efectiva se basa en entender las necesidades de la audiencia.)"
        ]
      },
      {
        palabra: "creativity",
        significado: "Creatividad",
        frases: [
          "Creativity is essential for solving complex problems. (La creatividad es esencial para resolver problemas complejos.)",
          "Her creativity shone through in her artwork. (Su creatividad brilló en sus obras de arte.)",
          "Encouraging creativity in children can help them become innovative thinkers. (Fomentar la creatividad en los niños puede ayudarlos a convertirse en pensadores innovadores.)"
        ]
      },{
        palabra: "inspiration",
        significado: "Inspiración",
        frases: [
          "She found her inspiration in the beauty of nature. (Encontró su inspiración en la belleza de la naturaleza.)",
          "His words of encouragement were a true inspiration to us. (Sus palabras de aliento fueron una verdadera inspiración para nosotros.)",
          "Artists often seek inspiration from their surroundings. (Los artistas a menudo buscan inspiración en su entorno.)"
        ]
      },
      {
        palabra: "generosity",
        significado: "Generosidad",
        frases: [
          "His generosity towards others made him well-liked in the community. (Su generosidad hacia los demás lo hizo muy querido en la comunidad.)",
          "Generosity is often seen as a virtue in many cultures. (La generosidad a menudo se ve como una virtud en muchas culturas.)",
          "She showed generosity by donating clothes to the homeless. (Ella mostró generosidad al donar ropa a los indigentes.)"
        ]
      },
      {
        palabra: "enthusiasm",
        significado: "Entusiasmo",
        frases: [
          "Her enthusiasm for learning new languages was contagious. (Su entusiasmo por aprender nuevos idiomas era contagioso.)",
          "He worked with great enthusiasm on the new project. (Trabajó con gran entusiasmo en el nuevo proyecto.)",
          "The teacher's enthusiasm made the class more enjoyable. (El entusiasmo del maestro hizo que la clase fuera más agradable.)"
        ]
      },
      {
        palabra: "reliability",
        significado: "Fiabilidad",
        frases: [
          "Reliability is an important trait when hiring employees. (La fiabilidad es una característica importante al contratar empleados.)",
          "The reliability of the car is one of the reasons I bought it. (La fiabilidad del coche es una de las razones por las que lo compré.)",
          "He is known for his reliability in completing tasks on time. (Es conocido por su fiabilidad en completar las tareas a tiempo.)"
        ]
      },
      {
        palabra: "determination",
        significado: "Determinación",
        frases: [
          "Her determination to succeed was evident in everything she did. (Su determinación para tener éxito era evidente en todo lo que hacía.)",
          "With determination, he overcame every obstacle in his path. (Con determinación, superó todos los obstáculos en su camino.)",
          "It takes determination to achieve long-term goals. (Se necesita determinación para lograr metas a largo plazo.)"
        ]
      },
      {
        palabra: "adaptability",
        significado: "Adaptabilidad",
        frases: [
          "In a constantly changing world, adaptability is key to success. (En un mundo que cambia constantemente, la adaptabilidad es clave para el éxito.)",
          "Her adaptability made her thrive in new environments. (Su adaptabilidad hizo que prosperara en nuevos entornos.)",
          "Adaptability allows individuals to navigate difficult situations more effectively. (La adaptabilidad permite a las personas navegar por situaciones difíciles de manera más efectiva.)"
        ]
      },
      {
        palabra: "compassion",
        significado: "Compasión",
        frases: [
          "She showed great compassion towards those who were suffering. (Mostró una gran compasión hacia los que sufrían.)",
          "Compassion is an important quality in a healthcare worker. (La compasión es una cualidad importante en un trabajador de la salud.)",
          "He felt a deep compassion for the people who had lost their homes. (Sintió una profunda compasión por las personas que habían perdido sus hogares.)"
        ]
      },
      {
        palabra: "empathy",
        significado: "Empatía",
        frases: [
          "Empathy is the ability to understand and share the feelings of others. (La empatía es la capacidad de comprender y compartir los sentimientos de los demás.)",
          "She showed empathy by listening carefully to their problems. (Ella mostró empatía al escuchar cuidadosamente sus problemas.)",
          "Empathy can strengthen relationships and build trust. (La empatía puede fortalecer las relaciones y generar confianza.)"
        ]
      },
      {
        palabra: "creativity",
        significado: "Creatividad",
        frases: [
          "His creativity was apparent in the way he solved problems. (Su creatividad era evidente en la forma en que resolvía problemas.)",
          "Creativity is often associated with artistic endeavors. (La creatividad a menudo se asocia con los esfuerzos artísticos.)",
          "She used her creativity to find new solutions for the business. (Usó su creatividad para encontrar nuevas soluciones para el negocio.)"
        ]
      },
      {
        palabra: "resilience",
        significado: "Resiliencia",
        frases: [
          "Her resilience allowed her to bounce back after each setback. (Su resiliencia le permitió recuperarse después de cada contratiempo.)",
          "Resilience is an important trait in overcoming life's challenges. (La resiliencia es una característica importante para superar los desafíos de la vida.)",
          "The team's resilience led them to victory despite the odds. (La resiliencia del equipo los llevó a la victoria a pesar de las probabilidades.)"
        ]
      },
      {
        palabra: "optimism",
        significado: "Optimismo",
        frases: [
          "His optimism helped lift everyone's spirits during the difficult times. (Su optimismo ayudó a levantar el ánimo de todos durante los tiempos difíciles.)",
          "A positive attitude and optimism are essential for success. (Una actitud positiva y el optimismo son esenciales para el éxito.)",
          "She approached every challenge with a sense of optimism. (Ella enfrentó cada desafío con un sentido de optimismo.)"
        ]
      },
      {
        palabra: "patience",
        significado: "Paciencia",
        frases: [
          "Patience is a virtue when dealing with difficult situations. (La paciencia es una virtud cuando se enfrentan situaciones difíciles.)",
          "She showed great patience while waiting for her turn. (Mostró mucha paciencia mientras esperaba su turno.)",
          "Teaching requires a lot of patience, especially with young children. (Enseñar requiere mucha paciencia, especialmente con niños pequeños.)"
        ]
      },
      {
        palabra: "integrity",
        significado: "Integridad",
        frases: [
          "He is known for his integrity and honesty in all his dealings. (Es conocido por su integridad y honestidad en todos sus tratos.)",
          "Integrity is an essential quality for any leader. (La integridad es una cualidad esencial para cualquier líder.)",
          "Her integrity and dedication to her work earned her respect. (Su integridad y dedicación a su trabajo le ganaron respeto.)"
        ]
      },
      {
        palabra: "accountability",
        significado: "Responsabilidad",
        frases: [
          "Accountability is important for maintaining trust in any organization. (La responsabilidad es importante para mantener la confianza en cualquier organización.)",
          "She took accountability for the mistake and worked to correct it. (Ella asumió la responsabilidad por el error y trabajó para corregirlo.)",
          "Accountability ensures that individuals are held responsible for their actions. (La responsabilidad asegura que las personas sean responsables de sus acciones.)"
        ]
      },
      {
        palabra: "confidence",
        significado: "Confianza",
        frases: [
          "He spoke with confidence during the presentation. (Habló con confianza durante la presentación.)",
          "Her confidence in her abilities helped her succeed. (Su confianza en sus habilidades la ayudó a tener éxito.)",
          "Confidence is key to making a good impression in interviews. (La confianza es clave para causar una buena impresión en las entrevistas.)"
        ]
      },
      {
        palabra: "focus",
        significado: "Enfoque",
        frases: [
          "She needs to focus on her studies to improve her grades. (Ella necesita enfocarse en sus estudios para mejorar sus calificaciones.)",
          "Maintaining focus during long meetings can be challenging. (Mantener el enfoque durante reuniones largas puede ser un desafío.)",
          "His ability to focus on the task at hand is one of his strengths. (Su capacidad para enfocarse en la tarea en cuestión es una de sus fortalezas.)"
        ]
      },
      {
        palabra: "balance",
        significado: "Equilibrio",
        frases: [
          "Finding a balance between work and personal life can be difficult. (Encontrar un equilibrio entre el trabajo y la vida personal puede ser difícil.)",
          "She manages to balance her career and family life with ease. (Ella maneja equilibrar su carrera y su vida familiar con facilidad.)",
          "Balance is important for maintaining mental and physical well-being. (El equilibrio es importante para mantener el bienestar mental y físico.)"
        ]
      },
      {
        palabra: "imagination",
        significado: "Imaginación",
        frases: [
          "Her imagination runs wild when she writes her stories. (Su imaginación se desborda cuando escribe sus historias.)",
          "Imagination is crucial for creative thinking and problem solving. (La imaginación es crucial para el pensamiento creativo y la resolución de problemas.)",
          "He has a vivid imagination and often creates new ideas. (Tiene una imaginación vívida y a menudo crea nuevas ideas.)"
        ]
      }, {
        palabra: "cooperation",
        significado: "Cooperación",
        frases: [
          "The project was successful due to the cooperation of all team members. (El proyecto fue exitoso gracias a la cooperación de todos los miembros del equipo.)",
          "International cooperation is essential for addressing global challenges. (La cooperación internacional es esencial para abordar los desafíos globales.)",
          "Effective cooperation requires good communication and teamwork. (La cooperación efectiva requiere buena comunicación y trabajo en equipo.)"
        ]
      },
      {
        palabra: "motivation",
        significado: "Motivación",
        frases: [
          "Her motivation to succeed kept her going during tough times. (Su motivación para tener éxito la mantuvo en marcha durante tiempos difíciles.)",
          "He lacked the motivation to finish the project on time. (Le faltaba la motivación para terminar el proyecto a tiempo.)",
          "A strong sense of motivation is key to achieving your goals. (Un fuerte sentido de motivación es clave para lograr tus metas.)"
        ]
      },
      {
        palabra: "curiosity",
        significado: "Curiosidad",
        frases: [
          "His curiosity led him to explore new fields of study. (Su curiosidad lo llevó a explorar nuevos campos de estudio.)",
          "Curiosity is a great way to learn and discover new things. (La curiosidad es una excelente manera de aprender y descubrir nuevas cosas.)",
          "Her curiosity about different cultures drove her to travel the world. (Su curiosidad sobre diferentes culturas la impulsó a viajar por el mundo.)"
        ]
      },
      {
        palabra: "independence",
        significado: "Independencia",
        frases: [
          "She values her independence and prefers to make her own decisions. (Valora su independencia y prefiere tomar sus propias decisiones.)",
          "Gaining financial independence is an important life goal. (Obtener independencia financiera es una meta importante en la vida.)",
          "The country fought for its independence from colonial rule. (El país luchó por su independencia del dominio colonial.)"
        ]
      },
      {
        palabra: "leadership",
        significado: "Liderazgo",
        frases: [
          "Effective leadership is essential for guiding a team towards success. (El liderazgo efectivo es esencial para guiar a un equipo hacia el éxito.)",
          "She demonstrated excellent leadership qualities during the crisis. (Demostró excelentes cualidades de liderazgo durante la crisis.)",
          "Leadership requires the ability to inspire and motivate others. (El liderazgo requiere la capacidad de inspirar y motivar a otros.)"
        ]
      }
     

];

const EnglishCard = () => {
  const [cantidadPalabras, setCantidadPalabras] = useState(0); // Estado para contar las palabras

  const [currentIndex, setCurrentIndex] = useState(0); // índice de la palabra actual
  const [flipped, setFlipped] = useState(false); // estado para controlar si la carta está volteada
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  // obtener una palabra aleatoria
  const getRandomIndex = () => {
    return Math.floor(Math.random() * palabras.length); // Índice aleatorio
  };

  //useEffect para que se cambie la palabra diaria =D
  useEffect(() => {
     // contar la cantidad de palabras
     setCantidadPalabras(palabras.length);

    const today = new Date().toLocaleDateString(); // Obtener la fecha de hoy como string
    const savedDate = localStorage.getItem('date'); // Verificar si hay una fecha guardada
    const savedIndex = localStorage.getItem('wordIndex'); // Verificar si hay un índice guardado


    if (savedDate === today && savedIndex !== null) {
      setCurrentIndex(parseInt(savedIndex)); // Si es el mismo día, usar el índice guardado
    } else {
      const randomIndex = getRandomIndex(); // Obtener un índice aleatorio
      setCurrentIndex(randomIndex); // Establecer la palabra diaria
      localStorage.setItem('date', today); // Guardar la fecha actual
      localStorage.setItem('wordIndex', randomIndex); // Guardar el índice aleatorio
    }
  }, []);

  const handleCardClick = () => {
    setFlipped(!flipped); // voltear la carta al hacer clic
  };

  // Función para cambiar a una palabra aleatoria con el botón
  const handleChangeWord = () => {
    let randomIndex;
    do {
      randomIndex = getRandomIndex();
    } while (randomIndex === currentIndex); // Evita que salga la misma palabra

    setCurrentIndex(randomIndex); // Cambiar al índice aleatorio
  };
// Filtrar las palabras según el término de búsqueda
const normalizedSearchTerm = searchTerm.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normaliza el término de búsqueda
const filteredPalabras = palabras.filter(palabra => {
  const normalizedPalabra = palabra.palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const normalizedSignificado = palabra.significado.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  return normalizedPalabra.toLowerCase().includes(normalizedSearchTerm.toLowerCase()) || 
         normalizedSignificado.toLowerCase().includes(normalizedSearchTerm.toLowerCase());
});
  // Mantener currentIndex dentro del rango de filteredPalabras
  const validIndex = filteredPalabras.length > 0 ? Math.min(currentIndex, filteredPalabras.length - 1) : 0;
  const { palabra, significado, frases } = filteredPalabras[validIndex] || { palabra: '', significado: '', frases: [] };


  return (
    <>
 {/* ESCRIBIR PALABRA PARA BUSCAR */}
 {/* <input 
        type="text"
        placeholder="Buscar palabra o significado..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value); // Actualizar el término de búsqueda
          // Reiniciar el índice si no hay coincidencias
          if (filteredPalabras.length === 0) {
            setCurrentIndex(0);
          } else if (validIndex !== currentIndex) {
            setCurrentIndex(validIndex); // Actualizar el índice si es necesario
          }
        }}
        style={{fontFamily:"Lato", color:"black", margin: '20px auto', display: 'block', width: '300px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
      /> */}
    <div className="card" onClick={handleCardClick}>
    <div className={`card-inner ${flipped ? "flipped" : ""}`}>
      <div className="card-front">
        <h2>{palabra}</h2>
      </div>
      <div className="card-back">
          
        <ul>
        <h2 className='h2'>{significado}</h2>
        {frases && frases.map((frase, index) => (
            
            <p key={index}>{frase}</p>
            
          ))}

        </ul>
        <button className="change-word-button" onClick={handleChangeWord}>
          Change word
          </button>
          {/* Anp */}
      <p className='anzahlWorter'> Words: {cantidadPalabras}</p>
      </div>
    </div>

      <div>
      
      {/* Aquí puedes seguir mostrando el resto de tu contenido */}
    </div>

    <style jsx>{`  
      p{
        font-family:  Lato;
        line-height:1.9rem;
        font-size: 1.4rem;
        margin-bottom:-0.2rem;
        
      }
      h2 {
        
        font-family: Playfair Display;
        margin: 0;
        font-size: 1.7em; 
        
      }
      .h2 {
        font-family: Playfair Display;
        line-height:2.9rem;
        margin: 0;
        font-size: 2em; 
        margin-bottom: -0.6rem; 
      }
      .anzahlWorter{
        position:absolute;
        bottom:0.4rem;
        left:1rem;
        font-size:10px;
      }

      .card {
        width: 450px;
        height: 550px;
        perspective: 1000px;
        margin: 5rem auto;
        margin-bottom:1rem;
      }
      .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }
      .flipped {
        transform: rotateY(180deg);
      }
      .card-front, .card-back {
        backdrop-filter: blur(10px);
        padding:00px;
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
        overflow: hidden; 
      }
      .card-front {
        height:17rem;
      }
      .card-back {
  color: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center; 
  padding: 10px; 
  box-sizing: border-box; 
  overflow: auto; 
  height: auto; 
  max-height: 150%; 
}
      
      ul {
        list-style: none;
        overflow: hidden; /* Evita que el texto de la lista se salga */
        text-align: center; /* Centra el texto */
      }

      .change-word-button {
          margin-top: 2.3rem;
          margin-bottom: 1.6rem;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #1f88d9;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .change-word-button:hover {
          background-color: #08daff; 
        }

      @media (max-width: 600px) {
        .card {
          width: 100%;
          height: 550px;
        }
        ul {
          margin-top:0.5rem;
        list-style: none;
        overflow: hidden; 
        text-align: center; 
      }
      }
    `}</style>
  </div>
  
  </>
  );
};

export default EnglishCard;
