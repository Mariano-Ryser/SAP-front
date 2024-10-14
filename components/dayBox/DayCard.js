import { useEffect, useState } from 'react';

const palabras = [
  {
    palabra: "Bewusstsein",
    significado: "Conciencia, conocimiento",
    frases: [
      "Das Bewusstsein für Umweltthemen wächst. (La conciencia sobre los temas medioambientales está creciendo)",
      "Sein Bewusstsein für die Probleme der Gesellschaft ist bemerkenswert. (Su conciencia sobre los problemas de la sociedad es notable)",
      "Bewusstsein ist der erste Schritt zur Veränderung. (La conciencia es el primer paso hacia el cambio)"
    ]
  },
  {
    palabra: "Schwierigkeit",
    significado: "Dificultad, problema",
    frases: [
      "Die Schwierigkeit des Tests war überraschend. (La dificultad del examen fue sorprendente)",
      "Wir müssen eine Lösung für dieses Problem finden, egal wie groß die Schwierigkeit ist. (Debemos encontrar una solución para este problema, sin importar cuán grande sea la dificultad)",
      "Manchmal ist die Schwierigkeit eine Gelegenheit, zu lernen. (A veces, la dificultad es una oportunidad para aprender)"
    ]
  },
  {
    palabra: "Verantwortung",
    significado: "Responsabilidad",
    frases: [
      "Jeder hat die Verantwortung für seine Handlungen. (Cada uno tiene la responsabilidad por sus acciones)",
      "Die Verantwortung für das Projekt liegt bei mir. (La responsabilidad del proyecto recae en mí)",
      "Verantwortung zu übernehmen ist ein Zeichen von Reife. (Asumir la responsabilidad es un signo de madurez)"
    ]
  },
  {
    palabra: "Fähigkeit",
    significado: "Habilidad, capacidad",
    frases: [
      "Die Fähigkeit, im Team zu arbeiten, ist wichtig. (La habilidad para trabajar en equipo es importante)",
      "Er hat die Fähigkeit, komplexe Probleme zu lösen. (Él tiene la capacidad de resolver problemas complejos)",
      "Jeder hat verschiedene Fähigkeiten und Talente. (Cada uno tiene diferentes habilidades y talentos)"
    ]
  },
  {
    palabra: "Verfügbarkeit",
    significado: "Disponibilidad",
    frases: [
      "Die Verfügbarkeit von Ressourcen ist entscheidend für den Erfolg. (La disponibilidad de recursos es crucial para el éxito)",
      "Bitte überprüfen Sie die Verfügbarkeit der Zimmer. (Por favor, verifique la disponibilidad de las habitaciones)",
      "Die Verfügbarkeit von Informationen ist wichtig in der heutigen Welt. (La disponibilidad de información es importante en el mundo actual)"
    ]
  },
  {
    palabra: "Erschöpfung",
    significado: "Agotamiento, cansancio extremo",
    frases: [
      "Nach der langen Reise fühlte ich eine tiefe Erschöpfung. (Después del largo viaje, sentí un profundo agotamiento)",
      "Erschöpfung kann zu gesundheitlichen Problemen führen. (El agotamiento puede llevar a problemas de salud)",
      "Die ständige Erschöpfung ist ein Zeichen von Überarbeitung. (El agotamiento constante es un signo de sobrecarga de trabajo)"
    ]
  },
  {
    palabra: "Wachstum",
    significado: "Crecimiento, desarrollo",
    frases: [
      "Das Wachstum des Unternehmens war beeindruckend. (El crecimiento de la empresa fue impresionante)",
      "Wachstum erfordert Zeit und Geduld. (El crecimiento requiere tiempo y paciencia)",
      "Wir sehen ein Wachstum in den verschiedenen Sektoren. (Vemos un crecimiento en los diferentes sectores)"
    ]
  },
  {
    palabra: "Ressource",
    significado: "Recurso",
    frases: [
      "Wasser ist eine wertvolle Ressource. (El agua es un recurso valioso)",
      "Wir müssen unsere Ressourcen besser nutzen. (Debemos utilizar mejor nuestros recursos)",
      "Die Ressource Mensch ist entscheidend für den Erfolg. (El recurso humano es crucial para el éxito)"
    ]
  },
  {
    palabra: "Erinnerung",
    significado: "Recuerdo, memoria",
    frases: [
      "Die Erinnerung an meine Kindheit ist sehr stark. (El recuerdo de mi infancia es muy fuerte)",
      "Er hat eine gute Erinnerung an Gesichter. (Él tiene buena memoria para los rostros)",
      "Die Erinnerung an diesen Tag bleibt für immer. (El recuerdo de este día permanecerá para siempre)"
    ]
  },

  {
    palabra: "Veranlagung",
    significado: "Tendencia, predisposición",
    frases: [
      "Er hat eine künstlerische Veranlagung. (Tiene una predisposición artística)",
      "Seine Veranlagung zu Krankheiten ist genetisch bedingt. (Su tendencia a las enfermedades es genética)",
      "Ihre Veranlagung für Sprachen macht das Lernen einfacher. (Su predisposición para los idiomas facilita el aprendizaje)"
    ]
  },
  {
    palabra: "Einsicht",
    significado: "Perspicacia, comprensión",
    frases: [
      "Die Einsicht in die Situation war entscheidend. (La comprensión de la situación fue decisiva)",
      "Er zeigte große Einsicht in die Probleme des Unternehmens. (Mostró gran perspicacia sobre los problemas de la empresa)",
      "Einsicht kommt oft mit der Erfahrung. (La comprensión a menudo viene con la experiencia)"
    ]
  },
  {
    palabra: "Beweggrund",
    significado: "Motivo, razón",
    frases: [
      "Sein Beweggrund für die Entscheidung war unklar. (Su motivo para la decisión no estaba claro)",
      "Wir müssen den Beweggrund hinter diesem Verhalten verstehen. (Necesitamos entender el motivo detrás de este comportamiento)",
      "Der Beweggrund für die Aktion war die Notwendigkeit. (El motivo para la acción fue la necesidad)"
    ]
  },
  {
    palabra: "Umgebung",
    significado: "Entorno, ambiente",
    frases: [
      "Die Umgebung war sehr ruhig und friedlich. (El entorno era muy tranquilo y pacífico)",
      "Eine angenehme Umgebung fördert die Kreativität. (Un ambiente agradable fomenta la creatividad)",
      "Die Umgebung beeinflusst unsere Stimmung. (El entorno influye en nuestro estado de ánimo)"
    ]
  },
  {
    palabra: "Verhandlung",
    significado: "Negociación",
    frases: [
      "Die Verhandlung über den Vertrag dauerte Stunden. (La negociación del contrato duró horas)",
      "Gute Verhandlungstechniken sind wichtig. (Las buenas técnicas de negociación son importantes)",
      "Die Verhandlung endete mit einem Kompromiss. (La negociación terminó con un compromiso)"
    ]
  },
  {
    palabra: "Zufall",
    significado: "Coincidencia, azar",
    frases: [
      "Es war purer Zufall, dass wir uns getroffen haben. (Fue pura coincidencia que nos encontráramos)",
      "Manchmal spielt der Zufall eine große Rolle im Leben. (A veces, el azar juega un gran papel en la vida)",
      "Der Zufall führte zu vielen interessanten Begegnungen. (La coincidencia llevó a muchos encuentros interesantes)"
    ]
  },
  {
    palabra: "Unabhängigkeit",
    significado: "Independencia",
    frases: [
      "Die Unabhängigkeit des Landes wurde 1990 erklärt. (La independencia del país fue declarada en 1990)",
      "Er strebt nach finanzieller Unabhängigkeit. (Él busca la independencia financiera)",
      "Unabhängigkeit ist ein wichtiges Ziel für viele Menschen. (La independencia es un objetivo importante para muchas personas)"
    ]
  },
  {
    palabra: "Wirkung",
    significado: "Efecto, impacto",
    frases: [
      "Die Wirkung des Medikaments war sofort spürbar. (El efecto del medicamento fue inmediato)",
      "Die Wirkung der Werbung auf die Kunden ist bedeutend. (El impacto de la publicidad en los clientes es significativo)",
      "Die Wirkung der Musik auf die Stimmung ist faszinierend. (El efecto de la música en el estado de ánimo es fascinante)"
    ]
  },
  {
    palabra: "Gegenteil",
    significado: "Contrario, opuesto",
    frases: [
      "Das Gegenteil von Liebe ist nicht Hass, sondern Gleichgültigkeit. (El contrario del amor no es el odio, sino la indiferencia)",
      "In vielen Fällen ist das Gegenteil der Fall. (En muchos casos, es todo lo contrario)",
      "Er hat das Gegenteil bewiesen. (Él ha demostrado lo contrario)"
    ]
  },
  {
    palabra: "Verwunderung",
    significado: "Asombro, sorpresa",
    frases: [
      "Die Verwunderung über die Nachricht war groß. (El asombro por la noticia fue grande)",
      "Zu meiner Verwunderung war er bereits dort. (Para mi sorpresa, ya estaba allí)",
      "Die Verwunderung über seine Fähigkeiten ist verständlich. (El asombro por sus habilidades es comprensible)"
    ]
  },
  {
    palabra: "Zustimmung",
    significado: "Aprobación, consentimiento",
    frases: [
      "Ich brauche deine Zustimmung, um weiterzumachen. (Necesito tu aprobación para continuar)",
      "Die Zustimmung des Chefs war entscheidend. (La aprobación del jefe fue decisiva)",
      "Er gab mir seine Zustimmung zu dem Plan. (Me dio su consentimiento para el plan)"
    ]
  },
  {
    palabra: "Voraussetzung",
    significado: "Requisito, condición previa",
    frases: [
      "Die Voraussetzung für den Job ist ein abgeschlossenes Studium. (El requisito para el trabajo es un título universitario)",
      "Gute Sprachkenntnisse sind eine Voraussetzung für diese Position. (Un buen dominio del idioma es un requisito para este puesto)",
      "Eine Voraussetzung für den Erfolg ist harte Arbeit. (Un requisito para el éxito es el trabajo duro)"
    ]
  },
  {
    palabra: "Betreuung",
    significado: "Atención, cuidado",
    frases: [
      "Die Betreuung der Kinder ist gut organisiert. (El cuidado de los niños está bien organizado)",
      "Er braucht rund um die Uhr Betreuung. (Necesita atención las 24 horas)",
      "Die Patienten erhalten hier gute Betreuung. (Los pacientes reciben buena atención aquí)"
    ]
  },
  {
    palabra: "Missverständnis",
    significado: "Malentendido",
    frases: [
      "Das war alles ein großes Missverständnis. (Todo fue un gran malentendido)",
      "Wir hatten ein kleines Missverständnis, aber es ist geklärt. (Tuvimos un pequeño malentendido, pero está resuelto)",
      "Missverständnisse können zu großen Problemen führen. (Los malentendidos pueden llevar a grandes problemas)"
    ]
  },
  {
    palabra: "Ablehnung",
    significado: "Rechazo, negación",
    frases: [
      "Seine Ablehnung des Angebots überraschte mich. (Su rechazo de la oferta me sorprendió)",
      "Ich habe seine Ablehnung nicht erwartet. (No esperaba su rechazo)",
      "Die Ablehnung des Plans war deutlich. (El rechazo del plan fue claro)"
    ]
  },
  {
    palabra: "Vermitteln",
    significado: "Medio, interceder, transmitir",
    frases: [
      "Der Lehrer vermittelt den Schülern Wissen. (El profesor transmite conocimientos a los estudiantes)",
      "Er versucht, zwischen den Parteien zu vermitteln. (Intenta mediar entre las partes)",
      "Dieses Buch vermittelt eine wichtige Botschaft. (Este libro transmite un mensaje importante)"
    ]
  },
  {
    palabra: "Eindruck",
    significado: "Impresión",
    frases: [
      "Der erste Eindruck war positiv. (La primera impresión fue positiva)",
      "Er hinterließ einen bleibenden Eindruck. (Dejó una impresión duradera)",
      "Was war dein Eindruck von dem Meeting? (¿Cuál fue tu impresión de la reunión?)"
    ]
  },
  {
    palabra: "Übereinstimmung",
    significado: "Concordancia, acuerdo",
    frases: [
      "Es herrschte Übereinstimmung zwischen den Parteien. (Hubo acuerdo entre las partes)",
      "In vielen Punkten gab es keine Übereinstimmung. (No hubo concordancia en muchos puntos)",
      "Wir sind in Übereinstimmung über den Plan. (Estamos de acuerdo con el plan)"
    ]
  },
  {
    palabra: "Zulassen",
    significado: "Permitir, autorizar",
    frases: [
      "Die Regeln lassen das nicht zu. (Las reglas no permiten eso)",
      "Ich werde nicht zulassen, dass das passiert. (No permitiré que eso suceda)",
      "Die Behörde hat das neue Projekt zugelassen. (La autoridad autorizó el nuevo proyecto)"
    ]
  },
  {
    palabra: "Erwartung",
    significado: "Expectativa, esperanza",
    frases: [
      "Die Erwartungen an das Projekt sind hoch. (Las expectativas sobre el proyecto son altas)",
      "Er hat meine Erwartungen übertroffen. (Superó mis expectativas)",
      "Die Erwartungen wurden leider nicht erfüllt. (Lamentablemente, las expectativas no se cumplieron)"
    ]
  },
  {
    palabra: "Verpflichtung",
    significado: "Obligación, compromiso",
    frases: [
      "Ich habe eine Verpflichtung, das zu tun. (Tengo la obligación de hacerlo)",
      "Er hat viele berufliche Verpflichtungen. (Tiene muchas obligaciones laborales)",
      "Es war seine moralische Verpflichtung zu helfen. (Era su obligación moral ayudar)"
    ]
  },
  {
    palabra: "Rücksicht",
    significado: "Consideración, respeto",
    frases: [
      "Du solltest mehr Rücksicht auf andere nehmen. (Deberías tener más consideración por los demás)",
      "Er handelt immer ohne Rücksicht auf die Konsequenzen. (Siempre actúa sin considerar las consecuencias)",
      "Rücksicht auf die Umwelt ist heutzutage wichtig. (El respeto por el medio ambiente es importante hoy en día)"
    ]
  },
  {
    palabra: "Beharren",
    significado: "Insistir, perseverar",
    frases: [
      "Er beharrt auf seiner Meinung. (Insiste en su opinión)",
      "Trotz aller Schwierigkeiten beharrte sie auf ihrem Plan. (A pesar de todas las dificultades, insistió en su plan)",
      "Sein Beharren führte schließlich zum Erfolg. (Su perseverancia finalmente condujo al éxito)"
    ]
  },
  {
    palabra: "Auseinandersetzung",
    significado: "Disputa, confrontación",
    frases: [
      "Es gab eine heftige Auseinandersetzung zwischen den beiden. (Hubo una fuerte disputa entre los dos)",
      "Die Auseinandersetzung endete friedlich. (La confrontación terminó pacíficamente)",
      "Nach der Auseinandersetzung suchten sie nach einer Lösung. (Después de la disputa, buscaron una solución)"
    ]
  },
  {
    palabra: "Entwurf",
    significado: "Borrador, proyecto",
    frases: [
      "Der Entwurf des neuen Gebäudes ist fertig. (El borrador del nuevo edificio está listo)",
      "Sie arbeiten am Entwurf des neuen Gesetzes. (Están trabajando en el borrador de la nueva ley)",
      "Der Entwurf des Berichts muss noch überarbeitet werden. (El borrador del informe aún debe revisarse)"
    ]
  },
  {
    palabra: "Widerstand",
    significado: "Resistencia, oposición",
    frases: [
      "Es gab großen Widerstand gegen die Reformen. (Hubo mucha resistencia contra las reformas)",
      "Sein Widerstand war vergeblich. (Su resistencia fue en vano)",
      "Der Widerstand der Bevölkerung wurde unterdrückt. (La resistencia de la población fue reprimida)"
    ]
  },
  {
    palabra: "Beständigkeit",
    significado: "Constancia, estabilidad",
    frases: [
      "Seine Beständigkeit in der Arbeit ist bewundernswert. (Su constancia en el trabajo es admirable)",
      "Beständigkeit ist wichtig für langfristigen Erfolg. (La constancia es importante para el éxito a largo plazo)",
      "Ihre Beständigkeit in der Forschung führte zu Durchbrüchen. (Su estabilidad en la investigación llevó a avances)"
    ]
  },
  {
    palabra: "Überschätzen",
    significado: "Sobreestimar",
    frases: [
      "Er überschätzt oft seine Fähigkeiten. (A menudo sobreestima sus habilidades)",
      "Die Bedeutung des Ereignisses wurde überschätzt. (La importancia del evento fue sobreestimada)",
      "Du solltest das Risiko nicht überschätzen. (No deberías sobreestimar el riesgo)"
    ]
  },
  {
    palabra: "Vorstellung",
    significado: "Idea, presentación",
    frases: [
      "Meine Vorstellung von der Zukunft ist positiv. (Mi idea del futuro es positiva)",
      "Die Vorstellung des neuen Produkts war ein Erfolg. (La presentación del nuevo producto fue un éxito)",
      "Hast du eine genaue Vorstellung davon, was passieren wird? (¿Tienes una idea clara de lo que sucederá?)"
    ]
  },
  {
    palabra: "Erfahrung",
    significado: "Experiencia",
    frases: [
      "Er hat viel Erfahrung in seinem Beruf. (Tiene mucha experiencia en su trabajo)",
      "Die Reise war eine wertvolle Erfahrung. (El viaje fue una experiencia valiosa)",
      "Erfahrung ist oft der beste Lehrer. (La experiencia es a menudo el mejor maestro)"
    ]
  },
  {
    palabra: "Anpassung",
    significado: "Adaptación, ajuste",
    frases: [
      "Die Anpassung an die neuen Umstände war schwierig. (La adaptación a las nuevas circunstancias fue difícil)",
      "Er zeigte eine schnelle Anpassung an die neue Umgebung. (Mostró una rápida adaptación al nuevo entorno)",
      "Manchmal erfordert das Leben ständige Anpassungen. (A veces la vida requiere ajustes constantes)"
    ]
  },
  {
    palabra: "Verständnis",
    significado: "Comprensión",
    frases: [
      "Vielen Dank für dein Verständnis. (Muchas gracias por tu comprensión)",
      "Er zeigt großes Verständnis für die Situation. (Muestra mucha comprensión por la situación)",
      "Wir müssen mehr Verständnis füreinander haben. (Debemos tener más comprensión mutua)"
    ]
  },
  {
    palabra: "Entscheidung",
    significado: "Decisión",
    frases: [
      "Es war keine leichte Entscheidung. (No fue una decisión fácil)",
      "Die Entscheidung liegt bei dir. (La decisión está en tus manos)",
      "Ich bereue meine Entscheidung nicht. (No me arrepiento de mi decisión)"
    ]
  },
  {
    palabra: "Zufriedenheit",
    significado: "Satisfacción",
    frases: [
      "Die Zufriedenheit der Kunden ist unser Ziel. (La satisfacción de los clientes es nuestro objetivo)",
      "Er fand Zufriedenheit in seinem neuen Job. (Encontró satisfacción en su nuevo trabajo)",
      "Innere Zufriedenheit ist wichtig für das Wohlbefinden. (La satisfacción interna es importante para el bienestar)"
    ]
  },
  {
    palabra: "Umständlich",
    significado: "Complicado, engorroso",
    frases: [
      "Der Prozess ist etwas umständlich. (El proceso es un poco complicado)",
      "Umständliche Abläufe kosten oft Zeit. (Los procedimientos complicados a menudo cuestan tiempo)",
      "Es war umständlich, alle Dokumente zu besorgen. (Fue complicado conseguir todos los documentos)"
    ]
  },
  {
    palabra: "Berechtigung",
    significado: "Autorización, derecho",
    frases: [
      "Hast du die Berechtigung, dieses Dokument zu bearbeiten? (¿Tienes la autorización para editar este documento?)",
      "Ohne Berechtigung darfst du hier nicht rein. (No puedes entrar aquí sin autorización)",
      "Er hat die Berechtigung, die Entscheidung zu treffen. (Él tiene el derecho de tomar la decisión)"
    ]
  },
  {
    palabra: "Vorurteil",
    significado: "Prejuicio",
    frases: [
      "Vorurteile sind schwer zu überwinden. (Los prejuicios son difíciles de superar)",
      "Man sollte ohne Vorurteile auf andere Menschen zugehen. (Deberíamos acercarnos a las personas sin prejuicios)",
      "Es gibt viele Vorurteile gegen Fremde. (Existen muchos prejuicios contra los extranjeros)"
    ]
  },
  {
    palabra: "Bewegung",
    significado: "Movimiento",
    frases: [
      "Regelmäßige Bewegung ist wichtig für die Gesundheit. (El movimiento regular es importante para la salud)",
      "Die politische Bewegung gewann an Einfluss. (El movimiento político ganó influencia)",
      "Seine Bewegungen waren sehr elegant. (Sus movimientos eran muy elegantes)"
    ]
  },
  {
    palabra: "Aufrichtigkeit",
    significado: "Sinceridad, honestidad",
    frases: [
      "Ich schätze seine Aufrichtigkeit sehr. (Valoro mucho su sinceridad)",
      "Aufrichtigkeit ist eine wichtige Tugend. (La sinceridad es una virtud importante)",
      "Seine Aufrichtigkeit überzeugte mich. (Su honestidad me convenció)"
    ]
  },
  {
    palabra: "Verlässlichkeit",
    significado: "Fiabilidad, confiabilidad",
    frases: [
      "Verlässlichkeit ist eine der wichtigsten Eigenschaften. (La fiabilidad es una de las características más importantes)",
      "In unserer Freundschaft zählt Verlässlichkeit. (En nuestra amistad, la confiabilidad cuenta mucho)",
      "Ich weiß seine Verlässlichkeit zu schätzen. (Aprecio su fiabilidad)"
    ]
  },
  {
    palabra: "Bedürfnis",
    significado: "Necesidad",
    frases: [
      "Das Bedürfnis nach Ruhe ist bei mir sehr groß. (Tengo una gran necesidad de tranquilidad)",
      "Jeder Mensch hat unterschiedliche Bedürfnisse. (Cada persona tiene necesidades diferentes)",
      "Sie hat das Bedürfnis, sich auszuruhen. (Tiene la necesidad de descansar)"
    ]
  },
  {
    palabra: "Verwirrung",
    significado: "Confusión",
    frases: [
      "Die Anweisungen sorgten für Verwirrung. (Las instrucciones causaron confusión)",
      "Es herrschte große Verwirrung in der Menge. (Había gran confusión en la multitud)",
      "Seine Antwort brachte nur mehr Verwirrung. (Su respuesta solo trajo más confusión)"
    ]
  },
  {
    palabra: "Gelassenheit",
    significado: "Serenidad, tranquilidad",
    frases: [
      "Er nahm die schlechte Nachricht mit Gelassenheit. (Tomó la mala noticia con serenidad)",
      "Gelassenheit ist der Schlüssel zum Erfolg. (La serenidad es la clave del éxito)",
      "In schwierigen Situationen hilft mir meine Gelassenheit. (En situaciones difíciles, mi serenidad me ayuda)"
    ]
  },
  {
    palabra: "Bestätigung",
    significado: "Confirmación, validación",
    frases: [
      "Ich habe die Bestätigung meiner Buchung erhalten. (He recibido la confirmación de mi reserva)",
      "Die Bestätigung seiner Theorie dauerte Jahre. (La validación de su teoría tardó años)",
      "Er suchte immer nach Bestätigung von anderen. (Siempre buscaba validación de los demás)"
    ]
  },
  {
    palabra: "Einfluss",
    significado: "Influencia",
    frases: [
      "Sie hat großen Einfluss auf ihre Kollegen. (Ella tiene una gran influencia sobre sus colegas)",
      "Der Einfluss der Medien ist unbestreitbar. (La influencia de los medios es innegable)",
      "Seine Eltern hatten viel Einfluss auf seine Entscheidung. (Sus padres tuvieron mucha influencia en su decisión)"
    ]
  },
  {
    palabra: "Gegensatz",
    significado: "Contraste, contradicción",
    frases: [
      "Im Gegensatz zu dir mag ich keinen Kaffee. (En contraste contigo, no me gusta el café)",
      "Die beiden Meinungen stehen im völligen Gegensatz. (Las dos opiniones son completamente opuestas)",
      "Es gibt einen starken Gegensatz zwischen den Kulturen. (Hay un fuerte contraste entre las culturas)"
    ]
  },
  {
    palabra: "Veränderung",
    significado: "Cambio, modificación",
    frases: [
      "Veränderungen gehören zum Leben. (Los cambios son parte de la vida)",
      "Eine Veränderung im Verhalten war spürbar. (Un cambio en el comportamiento fue perceptible)",
      "Die Gesellschaft befindet sich im ständigen Wandel und Veränderung. (La sociedad está en constante cambio y transformación)"
    ]
  },
  {
    palabra: "Verschwinden",
    significado: "Desaparecer",
    frases: [
      "Das Auto verschwand um die Ecke. (El coche desapareció en la esquina)",
      "Meine Schlüssel sind plötzlich verschwunden. (Mis llaves han desaparecido de repente)",
      "Der Nebel verschwand nach dem Sonnenaufgang. (La niebla desapareció después del amanecer)"
    ]
  },
  {
    palabra: "Kritik",
    significado: "Crítica",
    frases: [
      "Seine Arbeit steht oft unter Kritik. (Su trabajo está a menudo bajo crítica)",
      "Konstruktive Kritik hilft uns, besser zu werden. (La crítica constructiva nos ayuda a mejorar)",
      "Er kann keine Kritik vertragen. (No puede soportar las críticas)"
    ]
  },
  {
    palabra: "Beteiligung",
    significado: "Participación",
    frases: [
      "Die Beteiligung am Projekt war groß. (La participación en el proyecto fue grande)",
      "Er zeigt großes Interesse an einer aktiven Beteiligung. (Muestra gran interés en una participación activa)",
      "Ihre Beteiligung an der Diskussion war sehr hilfreich. (Su participación en la discusión fue muy útil)"
    ]
  },
  {
    palabra: "Aussicht",
    significado: "Perspectiva, panorama",
    frases: [
      "Von hier aus hat man eine wunderschöne Aussicht. (Desde aquí tienes una vista maravillosa)",
      "Die Aussicht auf Erfolg motiviert mich. (La perspectiva de éxito me motiva)",
      "Die Aussicht auf Besserung ist gering. (La perspectiva de mejora es baja)"
    ]
  },
  {
    palabra: "Ermutigung",
    significado: "Ánimo, aliento",
    frases: [
      "Ich brauche etwas Ermutigung für meine Entscheidung. (Necesito un poco de ánimo para tomar mi decisión)",
      "Dank ihrer Ermutigung habe ich es versucht. (Gracias a su aliento, lo intenté)",
      "Ermutigung von Freunden hilft oft sehr. (El ánimo de los amigos a menudo ayuda mucho)"
    ]
  },
  {
    palabra: "Selbstverständlich",
    significado: "Por supuesto, evidentemente",
    frases: [
      "Es ist selbstverständlich, dass wir helfen. (Es evidente que ayudaremos)",
      "Selbstverständlich kannst du kommen. (Por supuesto que puedes venir)",
      "Es war für ihn selbstverständlich, das zu tun. (Para él era evidente hacer eso)"
    ]
  },
  {
    palabra: "Beweggrund",
    significado: "Motivo, razón",
    frases: [
      "Was war dein Beweggrund, diese Entscheidung zu treffen? (¿Cuál fue tu motivo para tomar esta decisión?)",
      "Er hatte einen guten Beweggrund für sein Verhalten. (Tenía una buena razón para su comportamiento)",
      "Die Beweggründe für seine Tat sind unklar. (Los motivos de su acción no están claros)"
    ]
  },
  {
    palabra: "Vermögen",
    significado: "Capacidad, fortuna",
    frases: [
      "Er hat ein großes Vermögen gemacht. (Hizo una gran fortuna)",
      "Sein Vermögen, Probleme zu lösen, ist beeindruckend. (Su capacidad para resolver problemas es impresionante)",
      "Das Vermögen der Familie ist enorm. (La fortuna de la familia es enorme)"
    ]
  },
  {
    palabra: "Bedeutungslos",
    significado: "Sin importancia, insignificante",
    frases: [
      "Das Problem war letztendlich bedeutungslos. (El problema fue finalmente insignificante)",
      "Seine Worte sind für mich bedeutungslos. (Sus palabras no tienen importancia para mí)",
      "Diese Kleinigkeit ist bedeutungslos im großen Ganzen. (Este pequeño detalle es insignificante en el conjunto)"
    ]
  },
  {
    palabra: "Ehrgeizig",
    significado: "Ambicioso",
    frases: [
      "Sie ist sehr ehrgeizig und möchte viel erreichen. (Es muy ambiciosa y quiere lograr mucho)",
      "Ehrgeizige Menschen haben oft Erfolg. (Las personas ambiciosas suelen tener éxito)",
      "Sein Ziel ist extrem ehrgeizig. (Su objetivo es extremadamente ambicioso)"
    ]
  },
  {
    palabra: "Zuverlässigkeit",
    significado: "Fiabilidad, confiabilidad",
    frases: [
      "Die Zuverlässigkeit dieses Autos ist hervorragend. (La fiabilidad de este coche es excelente)",
      "In meinem Job ist Zuverlässigkeit entscheidend. (En mi trabajo, la confiabilidad es crucial)",
      "Er ist bekannt für seine Zuverlässigkeit. (Es conocido por su confiabilidad)"
    ]
  },
  {
    palabra: "Auffällig",
    significado: "Llamativo, notable",
    frases: [
      "Ihr Kleid war sehr auffällig. (Su vestido era muy llamativo)",
      "Es ist auffällig, wie oft er das tut. (Es notable con qué frecuencia lo hace)",
      "Das Auto hat eine auffällige Farbe. (El coche tiene un color llamativo)"
    ]
  },
  {
    palabra: "Gewissenhaft",
    significado: "Concienzudo, cuidadoso",
    frases: [
      "Er arbeitet sehr gewissenhaft. (Trabaja de manera muy concienzuda)",
      "Gewissenhafte Menschen machen weniger Fehler. (Las personas concienzudas cometen menos errores)",
      "Sie ist eine gewissenhafte Schülerin. (Es una estudiante cuidadosa)"
    ]
  },
  {
    palabra: "Vernünftig",
    significado: "Razonable, sensato",
    frases: [
      "Seine Entscheidung war vernünftig. (Su decisión fue razonable)",
      "Es ist vernünftig, das Geld zu sparen. (Es sensato ahorrar el dinero)",
      "Wir sollten eine vernünftige Lösung finden. (Deberíamos encontrar una solución razonable)"
    ]
  },
  {
    palabra: "Verzweifelt",
    significado: "Desesperado",
    frases: [
      "Sie war verzweifelt nach der schlechten Nachricht. (Estaba desesperada tras la mala noticia)",
      "Er hat verzweifelt nach einer Lösung gesucht. (Buscaba desesperadamente una solución)",
      "In verzweifelten Zeiten muss man ruhig bleiben. (En tiempos desesperados hay que mantener la calma)"
    ]
  },
  {
    palabra: "Missbrauchen",
    significado: "Abusar, maltratar",
    frases: [
      "Er hat seine Macht missbraucht. (Abusó de su poder)",
      "Missbrauch von Vertrauen ist unverzeihlich. (El abuso de la confianza es imperdonable)",
      "Das Gesetz wurde in diesem Fall missbraucht. (La ley fue mal utilizada en este caso)"
    ]
  },
  {
    palabra: "Gerücht",
    significado: "Rumor, chisme",
    frases: [
      "Es gibt ein Gerücht über sie. (Hay un rumor sobre ella)",
      "Die Gerüchte verbreiteten sich schnell. (Los rumores se propagaron rápidamente)",
      "Ist das nur ein Gerücht oder stimmt es? (¿Es solo un rumor o es cierto?)"
    ]
  },
  {
    palabra: "Widerspruch",
    significado: "Contradicción",
    frases: [
      "Seine Aussagen standen im Widerspruch zueinander. (Sus declaraciones se contradecían)",
      "Es gab einen Widerspruch in der Erklärung. (Hubo una contradicción en la explicación)",
      "Der Plan war voller Widersprüche. (El plan estaba lleno de contradicciones)"
    ]
  },
  {
    palabra: "Herausragend",
    significado: "Sobresaliente, excepcional",
    frases: [
      "Sie ist eine herausragende Schülerin. (Es una estudiante sobresaliente)",
      "Das Konzert war herausragend. (El concierto fue excepcional)",
      "Seine Leistungen im Sport sind herausragend. (Sus logros en el deporte son excepcionales)"
    ]
  },
  {
    palabra: "Anerkennung",
    significado: "Reconocimiento, aprecio",
    frases: [
      "Er hat viel Anerkennung für seine Arbeit erhalten. (Recibió mucho reconocimiento por su trabajo)",
      "Anerkennung ist wichtig für die Motivation. (El reconocimiento es importante para la motivación)",
      "Ich schätze die Anerkennung meiner Kollegen sehr. (Valoro mucho el reconocimiento de mis colegas)"
    ]
  },
  {
    palabra: "Hinterlistig",
    significado: "Engañoso, astuto",
    frases: [
      "Er hat auf eine hinterlistige Weise gehandelt. (Actuó de manera engañosa)",
      "Die Falle war hinterlistig. (La trampa fue astuta)",
      "Ihre hinterlistige Art hat viele überrascht. (Su manera engañosa sorprendió a muchos)"
    ]
  },
  {
    palabra: "Rücksichtslos",
    significado: "Desconsiderado, imprudente",
    frases: [
      "Sein Verhalten war sehr rücksichtslos. (Su comportamiento fue muy desconsiderado)",
      "Rücksichtsloses Fahren kann Unfälle verursachen. (Conducir imprudentemente puede causar accidentes)",
      "Er war rücksichtslos gegenüber den Gefühlen anderer. (Fue desconsiderado con los sentimientos de los demás)"
    ]
  },
  {
    palabra: "Wertschätzen",
    significado: "Apreciar, valorar",
    frases: [
      "Ich weiß es zu wertschätzen, wenn jemand ehrlich ist. (Aprecio cuando alguien es honesto)",
      "Man sollte kleine Gesten wertschätzen. (Deberíamos valorar los pequeños gestos)",
      "Ich wertschätze unsere Freundschaft sehr. (Valoro mucho nuestra amistad)"
    ]
  },
  {
    palabra: "Erleichtern",
    significado: "Facilitar, aligerar",
    frases: [
      "Die neuen Systeme erleichtern die Arbeit. (Los nuevos sistemas facilitan el trabajo)",
      "Eine gute Planung erleichtert den Prozess. (Una buena planificación facilita el proceso)",
      "Er hat sich erleichtert, als er die Nachricht hörte. (Se sintió aliviado al escuchar la noticia)"
    ]
  },
  {
    palabra: "Wahrnehmung",
    significado: "Percepción",
    frases: [
      "Jeder hat eine andere Wahrnehmung der Realität. (Cada persona tiene una percepción diferente de la realidad)",
      "Die Wahrnehmung des Geräusches war sehr intensiv. (La percepción del sonido fue muy intensa)",
      "Unsere Wahrnehmung beeinflusst unser Handeln. (Nuestra percepción influye en nuestras acciones)"
    ]
  },
  {
    palabra: "Wasserdicht",
    significado: "Impermeable",
    frases: [
      "Diese Jacke ist wasserdicht. (Esta chaqueta es impermeable)",
      "Ich brauche eine wasserdichte Tasche. (Necesito una bolsa impermeable)",
      "Sind deine Schuhe wasserdicht? (¿Tus zapatos son impermeables?)"
    ]
  },
  {
    palabra: "Unverwechselbar",
    significado: "Inconfundible",
    frases: [
      "Sein Stil ist unverwechselbar. (Su estilo es inconfundible)",
      "Der Geschmack dieses Gerichts ist unverwechselbar. (El sabor de este plato es inconfundible)",
      "Ihre Stimme ist unverwechselbar. (Su voz es inconfundible)"
    ]
  },
  {
    palabra: "Fortsetzung",
    significado: "Continuación",
    frases: [
      "Die Fortsetzung des Films kommt nächstes Jahr. (La continuación de la película sale el próximo año)",
      "Ich freue mich auf die Fortsetzung der Geschichte. (Estoy emocionado por la continuación de la historia)",
      "Die Fortsetzung war besser als der erste Teil. (La continuación fue mejor que la primera parte)"
    ]
  },
  {
    palabra: "Herausforderung",
    significado: "Desafío",
    frases: [
      "Diese Aufgabe ist eine echte Herausforderung. (Esta tarea es un verdadero desafío)",
      "Ich liebe Herausforderungen im Beruf. (Me encantan los desafíos en el trabajo)",
      "Die größte Herausforderung ist, sich selbst zu überwinden. (El mayor desafío es superarse a uno mismo)"
    ]
  },
  {
    palabra: "Voraussetzung",
    significado: "Requisito, condición previa",
    frases: [
      "Eine gute Ausbildung ist die Voraussetzung für diesen Job. (Una buena educación es el requisito para este trabajo)",
      "Was sind die Voraussetzungen für das Stipendium? (¿Cuáles son los requisitos para la beca?)",
      "Die Voraussetzung für Erfolg ist harte Arbeit. (La condición previa para el éxito es el trabajo duro)"
    ]
  },
  {
    palabra: "Verantwortung",
    significado: "Responsabilidad",
    frases: [
      "Eltern haben eine große Verantwortung. (Los padres tienen una gran responsabilidad)",
      "Ich übernehme die volle Verantwortung. (Asumo toda la responsabilidad)",
      "Mit Freiheit kommt auch Verantwortung. (La libertad también trae responsabilidad)"
    ]
  },
  {
    palabra: "Zuverlässig",
    significado: "Confiable",
    frases: [
      "Er ist ein sehr zuverlässiger Freund. (Es un amigo muy confiable)",
      "Unsere Maschine ist zuverlässig und funktioniert einwandfrei. (Nuestra máquina es confiable y funciona perfectamente)",
      "Pünktlichkeit ist ein Zeichen für Zuverlässigkeit. (La puntualidad es una señal de confiabilidad)"
    ]
  },
  {
    palabra: "Leidenschaft",
    significado: "Pasión",
    frases: [
      "Kochen ist seine Leidenschaft. (Cocinar es su pasión)",
      "Er spricht mit großer Leidenschaft über Musik. (Habla con gran pasión sobre la música)",
      "Ohne Leidenschaft gibt es keinen Erfolg. (Sin pasión, no hay éxito)"
    ]
  },
  {
    palabra: "Vermeiden",
    significado: "Evitar",
    frases: [
      "Wir sollten unnötige Risiken vermeiden. (Deberíamos evitar riesgos innecesarios)",
      "Er versucht Konflikte zu vermeiden. (Intenta evitar conflictos)",
      "Vermeide es, zu spät zu kommen. (Evita llegar tarde)"
    ]
  },
  {
    palabra: "Vorsichtig",
    significado: "Cauteloso, cuidadoso",
    frases: [
      "Sei vorsichtig beim Überqueren der Straße. (Ten cuidado al cruzar la calle)",
      "Ich bin vorsichtig mit sensiblen Informationen. (Soy cuidadoso con la información sensible)",
      "Er hat das Glas vorsichtig abgestellt. (Colocó el vaso con cuidado)"
    ]
  },
  {
    palabra: "Enttäuschung",
    significado: "Decepción",
    frases: [
      "Die Niederlage war eine große Enttäuschung. (La derrota fue una gran decepción)",
      "Ich will keine Enttäuschungen erleben. (No quiero experimentar decepciones)",
      "Nach so viel Arbeit war das Ergebnis eine Enttäuschung. (Después de tanto trabajo, el resultado fue una decepción)"
    ]
  },
  {
    palabra: "Erfahrung",
    significado: "Experiencia",
    frases: [
      "Er hat viel Erfahrung in diesem Bereich. (Tiene mucha experiencia en este campo)",
      "Mit der Zeit wirst du mehr Erfahrung sammeln. (Con el tiempo adquirirás más experiencia)",
      "Die Reise war eine unvergessliche Erfahrung. (El viaje fue una experiencia inolvidable)"
    ]
  },
  {
    palabra: "Verfügbarkeit",
    significado: "Disponibilidad",
    frases: [
      "Die Verfügbarkeit des Produkts ist begrenzt. (La disponibilidad del producto es limitada)",
      "Ich habe nächste Woche mehr Verfügbarkeit. (Tendré más disponibilidad la próxima semana)",
      "Bitte überprüfen Sie die Verfügbarkeit des Zimmers. (Por favor, verifique la disponibilidad de la habitación)"
    ]
  },
  {
    palabra: "Unvorhersehbar",
    significado: "Impredecible",
    frases: [
      "Das Wetter ist hier oft unvorhersehbar. (El clima aquí es a menudo impredecible)",
      "Die Situation wurde unvorhersehbar kompliziert. (La situación se complicó de manera impredecible)",
      "Er hat eine unvorhersehbare Reaktion gezeigt. (Mostró una reacción impredecible)"
    ]
  },
  {
    palabra: "Bedeutungsvoll",
    significado: "Significativo",
    frases: [
      "Dieses Geschenk ist für mich sehr bedeutungsvoll. (Este regalo es muy significativo para mí)",
      "Der Moment war besonders bedeutungsvoll. (El momento fue particularmente significativo)",
      "Bedeutungsvolle Gesten sind oft die besten. (Los gestos significativos suelen ser los mejores)"
    ]
  },
  {
    palabra: "Veränderung",
    significado: "Cambio",
    frases: [
      "Die Veränderung war notwendig. (El cambio era necesario)",
      "Wir brauchen eine Veränderung in unserem Lebensstil. (Necesitamos un cambio en nuestro estilo de vida)",
      "Das Unternehmen steht vor großen Veränderungen. (La empresa enfrenta grandes cambios)"
    ]
  },
  {
    palabra: "Vermissen",
    significado: "Extrañar, echar de menos",
    frases: [
      "Ich vermisse meine Familie sehr. (Echo mucho de menos a mi familia)",
      "Wir werden dich vermissen, wenn du weg bist. (Te echaremos de menos cuando te vayas)",
      "Hast du deinen Hund vermisst? (¿Extrañaste a tu perro?)"
    ]
  },
  {
    palabra: "Begeistert",
    significado: "Entusiasmado",
    frases: [
      "Ich bin begeistert von der neuen Idee. (Estoy entusiasmado con la nueva idea)",
      "Sie war begeistert von ihrem Geschenk. (Ella estaba emocionada con su regalo)",
      "Das Publikum war begeistert. (El público estaba entusiasmado)"
    ]
  },
  {
    palabra: "Missverständnis",
    significado: "Malentendido",
    frases: [
      "Es war nur ein Missverständnis. (Fue solo un malentendido)",
      "Wir hatten ein kleines Missverständnis. (Tuvimos un pequeño malentendido)",
      "Missverständnisse können leicht passieren. (Los malentendidos pueden ocurrir fácilmente)"
    ]
  },
  {
    palabra: "Verhandlung",
    significado: "Negociación",
    frases: [
      "Die Verhandlungen waren erfolgreich. (Las negociaciones fueron exitosas)",
      "Er ist ein Experte in Verhandlungen. (Es un experto en negociaciones)",
      "Die Verhandlung dauerte länger als erwartet. (La negociación duró más de lo esperado)"
    ]
  },
  {
    palabra: "Umständlich",
    significado: "Complicado, engorroso",
    frases: [
      "Die Registrierung war sehr umständlich. (El registro fue muy engorroso)",
      "Es ist ein bisschen umständlich, diesen Prozess zu durchlaufen. (Es un poco complicado pasar por este proceso)",
      "Die umständliche Erklärung hat die Sache nur verwirrt. (La explicación complicada solo confundió más la situación)"
    ]
  },
  {
    palabra: "Unterschiedlich",
    significado: "Diferente, variado",
    frases: [
      "Die Meinungen sind sehr unterschiedlich. (Las opiniones son muy diferentes)",
      "Es gibt unterschiedliche Wege, das Problem zu lösen. (Hay diferentes formas de resolver el problema)",
      "Wir haben unterschiedliche Ansichten zu diesem Thema. (Tenemos diferentes puntos de vista sobre este tema)"
    ]
  },
  {
    palabra: "Vertrauen",
    significado: "Confianza",
    frases: [
      "Ich habe volles Vertrauen in dich. (Tengo plena confianza en ti)",
      "Vertrauen ist die Basis jeder Beziehung. (La confianza es la base de cualquier relación)",
      "Es ist schwer, Vertrauen wieder aufzubauen. (Es difícil reconstruir la confianza)"
    ]
  },
  {
    palabra: "Vorstellungskraft",
    significado: "Imaginación, creatividad",
    frases: [
      "Seine Vorstellungskraft kennt keine Grenzen. (Su imaginación no tiene límites)",
      "Die Vorstellungskraft ist wichtig für Künstler. (La creatividad es importante para los artistas)",
      "Wir brauchen mehr Vorstellungskraft in der Planung. (Necesitamos más imaginación en la planificación)"
    ]
  },
  {
    palabra: "Verknüpfung",
    significado: "Conexión, enlace",
    frases: [
      "Die Verknüpfung zwischen den Daten ist wichtig. (La conexión entre los datos es importante)",
      "Es gab eine interessante Verknüpfung zwischen den beiden Themen. (Hubo una conexión interesante entre los dos temas)",
      "Die Verknüpfung von Theorie und Praxis ist entscheidend. (La vinculación de la teoría y la práctica es crucial)"
    ]
  },
  {
    palabra: "Ergebnis",
    significado: "Resultado",
    frases: [
      "Das Ergebnis der Prüfung war überraschend. (El resultado del examen fue sorprendente)",
      "Wir müssen die Ergebnisse der Umfrage analysieren. (Debemos analizar los resultados de la encuesta)",
      "Das Ergebnis zeigt, dass wir auf dem richtigen Weg sind. (El resultado muestra que estamos en el camino correcto)"
    ]
  },
  {
    palabra: "Veränderung",
    significado: "Cambio, transformación",
    frases: [
      "Die Veränderung der Meinung war deutlich. (El cambio de opinión fue evidente)",
      "Wir müssen uns auf Veränderungen im Markt einstellen. (Debemos adaptarnos a los cambios en el mercado)",
      "Eine Veränderung kann manchmal positiv sein. (Un cambio puede ser a veces positivo)"
    ]
  },
  {
    palabra: "Ermutigung",
    significado: "Ánimo, aliento",
    frases: [
      "Die Ermutigung seiner Freunde half ihm sehr. (El aliento de sus amigos le ayudó mucho)",
      "Es braucht viel Ermutigung, um neue Wege zu gehen. (Se necesita mucho ánimo para tomar nuevos caminos)",
      "Die Ermutigung durch den Lehrer war entscheidend für ihren Erfolg. (El apoyo del maestro fue decisivo para su éxito)"
    ]
  },
  {
    palabra: "Widerspruch",
    significado: "Contradicción, objeción",
    frases: [
      "Es gab einen Widerspruch zwischen seinen Worten und Taten. (Hubo una contradicción entre sus palabras y acciones)",
      "Der Widerspruch in seinen Argumenten ist offensichtlich. (La contradicción en sus argumentos es evidente)",
      "Wir sollten jeden Widerspruch sorgfältig prüfen. (Debemos examinar cuidadosamente cada objeción)"
    ]
  },
  {
    palabra: "Zusammenhang",
    significado: "Contexto, relación",
    frases: [
      "Der Zusammenhang zwischen diesen zwei Themen ist wichtig. (La relación entre estos dos temas es importante)",
      "Im Zusammenhang mit der Diskussion haben wir neue Ideen entwickelt. (En el contexto de la discusión, desarrollamos nuevas ideas)",
      "Es gibt einen klaren Zusammenhang zwischen Ernährung und Gesundheit. (Hay una clara relación entre la alimentación y la salud)"
    ]
  },
  {
    palabra: "Anerkennung",
    significado: "Reconocimiento, aprobación",
    frases: [
      "Die Anerkennung ihrer Leistungen war sehr wichtig für sie. (El reconocimiento de sus logros fue muy importante para ella)",
      "Er erhielt die Anerkennung für seine hervorragende Arbeit. (Recibió reconocimiento por su excelente trabajo)",
      "Anerkennung motiviert viele Menschen. (El reconocimiento motiva a muchas personas)"
    ]
  },
  {
    palabra: "Erklärung",
    significado: "Declaración, explicación",
    frases: [
      "Die Erklärung des Problems war hilfreich. (La explicación del problema fue útil)",
      "Wir warten auf eine Erklärung von der Firma. (Estamos esperando una declaración de la empresa)",
      "Ihre Erklärung klärte viele Missverständnisse. (Su explicación aclaró muchos malentendidos)"
    ]
  },
  {
    palabra: "Herausforderung",
    significado: "Desafío",
    frases: [
      "Jede Herausforderung ist eine Chance zu wachsen. (Cada desafío es una oportunidad para crecer)",
      "Die größte Herausforderung in meinem Leben war der Umzug. (El mayor desafío de mi vida fue mudarme)",
      "Er liebt es, sich Herausforderungen zu stellen. (Le encanta enfrentarse a desafíos)"
    ]
  },
  {
    palabra: "Beobachtung",
    significado: "Observación",
    frases: [
      "Die Beobachtung der Natur ist entspannend. (La observación de la naturaleza es relajante)",
      "Seine Beobachtung half uns, das Problem zu lösen. (Su observación nos ayudó a resolver el problema)",
      "Die Beobachtung von Verhaltensweisen kann lehrreich sein. (La observación de comportamientos puede ser instructiva)"
    ]
  },
  {
    palabra: "Veranlassung",
    significado: "Motivo, causa",
    frases: [
      "Die Veranlassung für die Versammlung war die Dringlichkeit der Situation. (El motivo para la reunión fue la urgencia de la situación)",
      "Ich sehe keinen guten Grund oder Veranlassung dafür. (No veo una buena razón o motivo para ello)",
      "Die Veranlassung der Feier war ihr Geburtstag. (El motivo de la celebración fue su cumpleaños)"
    ]
  },
  {
    palabra: "Einstellung",
    significado: "Actitud, enfoque",
    frases: [
      "Ihre Einstellung zur Arbeit ist sehr positiv. (Su actitud hacia el trabajo es muy positiva)",
      "Eine offene Einstellung kann neue Möglichkeiten schaffen. (Una actitud abierta puede crear nuevas oportunidades)",
      "Die Einstellung des Teams muss sich ändern. (La actitud del equipo debe cambiar)"
    ]
  },
  {
    palabra: "Anpassungsfähigkeit",
    significado: "Capacidad de adaptación",
    frases: [
      "Die Anpassungsfähigkeit ist eine wichtige Fähigkeit im Berufsleben. (La capacidad de adaptación es una habilidad importante en la vida profesional)",
      "Seine Anpassungsfähigkeit an neue Situationen beeindruckt mich. (Su capacidad de adaptación a nuevas situaciones me impresiona)",
      "In der heutigen Welt ist Anpassungsfähigkeit entscheidend. (En el mundo actual, la capacidad de adaptación es crucial)"
    ]
  },
  {
    palabra: "Beitrag",
    significado: "Contribución",
    frases: [
      "Ihr Beitrag zum Projekt war entscheidend. (Su contribución al proyecto fue decisiva)",
      "Jeder hat einen Beitrag zu leisten. (Cada uno debe hacer una contribución)",
      "Der Beitrag der Wissenschaftler war bemerkenswert. (La contribución de los científicos fue notable)"
    ]
  }

];

const DayCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // índice de la palabra actual
  const [flipped, setFlipped] = useState(false); // estado para controlar si la carta está volteada

  // Efecto para cambiar la palabra cada día
  useEffect(() => {
    const today = new Date().getDay(); // obtener el día de la semana (0-6)
    setCurrentIndex(today % palabras.length); // cambiar la palabra según el día
  }, []);

  const handleCardClick = () => {
    setFlipped(!flipped); // voltear la carta al hacer clic
  };

  const handleChangeWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % palabras.length); // cambia al siguiente índice
  };

  const { palabra, significado, frases } = palabras[currentIndex];

  return (
    <div className="card" onClick={handleCardClick}>
    <div className={`card-inner ${flipped ? "flipped" : ""}`}>
      <div className="card-front">
        <h2>{palabra}</h2>
      </div>
      <div className="card-back">
        <h2>{significado}</h2>
          
        <ul>
          {frases.map((frase, index) => (
            
            <p key={index}>{frase}</p>
            
          ))}

        </ul>
        <button className="change-word-button" onClick={handleChangeWord}>
            Cambiar Palabra
          </button>
      </div>
    </div>

    <style jsx>{`
      .change-word-button {
          margin-top: 10px;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #1f88d9;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .change-word-button:hover {
          background-color: #08daff; /* Color del botón al pasar el ratón */
        }
      .card {
        width: 450px;
        height: 550px;
        perspective: 1000px;
        
        margin: 20px auto;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Sombra */
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
        padding:10px;
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid #ddd;
        border-radius: 10px;
        overflow: hidden; /* Evita que el texto se salga del contenedor */
      }
      .card-front {
        background-color: #f9f9f9; /* Color de fondo de la parte frontal */
      }
      .card-back {
        color: white;
        transform: rotateY(180deg);
      }
      h2 {
        margin: 0;
        font-size: 1.5em; /* Tamaño de la fuente */
        padding: 10px; /* Espaciado interno para el título */
      }
      ul {
        padding: 0;
        list-style: none;
        overflow: hidden; /* Evita que el texto de la lista se salga */
        text-align: center; /* Centra el texto */
      }
     

      @media (max-width: 600px) {
        .card {
          width: 100%;
          height: 650px;
        }
      }
    `}</style>
  </div>
  );
};

export default DayCard;
