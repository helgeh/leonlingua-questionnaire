<template>

    <div class="row">

      <div class="col-lg-4">
        <div class="card mb-4">
          <img src="https://picsum.photos/id/1/800/600" class="card-img-top picture">
          <div class="card-header">
            <h4 class="mt-1">Slik gjør du:</h4>
          </div>
          <div class="card-body">
            Oppgavene best&aring;r av setninger som mangler ett eller flere ord. Du velger dine forslag fra en nedtrekksmeny. N&aring;r du er ferdig med alle oppgavene p&aring; et niv&aring;, f&aring;r du vite hvor mange riktige svar du har f&aring;tt. Hvis du har mellom 80 og 100% riktige svar, kan du fortsette til neste niv&aring;. Slik g&aring;r du fra niv&aring; til niv&aring; helt til du stanser.
            <hr />
            Dersom du ønsker kurs i spansk, vil du kunne melde deg p&aring; det kurset som passer til ditt niv&aring;. Informasjon og p&aring;melding til disse kursene finner du lenger ned p&aring; siden eller <a href="https://hablaonline.simplero.com/products" class="btn btn-outline-success btn-sm">her</a>
          </div>
          <div class="card-footer">
            <a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages">
              Les mer om spr&aring;kniv&aring;
            </a>
          </div>
        </div>
      </div>
      
      <div id="questionnaire" class="col-lg-8">
          <div id="questionnaire-carousel" class="carousel slide" data-bs-touch="false">
              <div class="carousel-inner">

                  <!-- BEGIN QUESTIONS -->

          <LlLevel title="A1">
      
              <LlQuestion q="¿_ te llamas?" a="*Qué **Cómo">
                På spansk sier man «Hvordan kaller du deg?»
              </LlQuestion>
          
              <LlQuestion q="Todos los días ceno _ las nueve de la noche." a="**a *en *con">
                Ved angivelse av klokkeslett brukes alltid «a» sammen med «la/las» avhengig av tidspunktet.
              </LlQuestion>
          
              <LlQuestion q="¿A qué hora sales de casa para ir a trabajar? 
  - _ a las 7.30." a="*Salto **Salgo *Salió">
                “Sales” er du-form av verbet «salir» i nåtid. Man svarer i jeg-form som er «salgo».
              </LlQuestion>
          
              <LlQuestion q="A mis amigas _ las compras." a="*les gusta *gusta *gustan **les gustan">
                “Gustar” bøyes etter subjektet som i dette tilfellet er “compras” et substantiv i flertall og «les» viser til objektet «mis amigas”
              </LlQuestion>
          
              <LlQuestion q="¿Cuántos años _?" a="**tienes *eres *tengo">
                Man bruker «tener» for å angi alder på spansk.
              </LlQuestion>
          
              <!-- <LlQuestion q="¿De _ color es la mesa?" a="*que **qué *cual">
                Aksenttegn skiller ordene som er spørreord fra de andre.
  “qué” betyr hvilken/hvilket på spansk.
              </LlQuestion>
          
              <LlQuestion q="¿Dónde están _ fotos?" a="*los *la **las">
                “foto” er et hunkjønnsord på spansk.
              </LlQuestion>
          
              <LlQuestion q="En mi casa _ un mapa." a="*Está **hay *es">
                Man bruker “hay” når man snakker om eksistensen av noe. Ikke plasseringen. Det fins et kart i mitt hus.
              </LlQuestion>
          
              <LlQuestion q="La hermana de mi padre es mi _." a="*sobrina **tía *hermana">
                Vokabularferdighet.
  Søsteren til min far er min tante.
              </LlQuestion>
          
              <LlQuestion q="Estamos en _, hace mucho calor." a="*invierno **verano *primavera">
                Vokabularferdighet:
  Hace calor = verano
              </LlQuestion>
          
              <LlQuestion q="Voy a cerrar la ventana porque tengo_." a="**frío *calor *sed">
                Vokabularferdighet:
  Frío=kulde; calor=varme; sed=tørst
              </LlQuestion>
          
              <LlQuestion q="No me gusta nada la ópera. 
  _" a="**A mí tampoco. *A mí también. *Yo tampoco. *Yo también.">
                Når du uttrykker enighet om en nektende påstand, bruker du «a mí tampoco». Ikke jeg heller.
  Aldri bruk «yo tampoco».
              </LlQuestion>
          
              <LlQuestion q="¿_ una farmacia por aquí cerca?" a="*Está **Hay *Es">
                Når man spør om noe er eller fins, bruker man «hay».
              </LlQuestion> -->
          
          </LlLevel>
      
          <LlLevel title="A2">
      
              <LlQuestion q="_ vacaciones." a="*En **De *A">
                Fast uttrykk på spansk. «De vacaciones»
              </LlQuestion>
          
              <LlQuestion q="¿Dígame? 
  -Hola, _ Juan." a="**soy *es">
                På spansk sier vi «Jeg er Juan» når vi presenterer oss på telefon.
              </LlQuestion>
          
              <LlQuestion q="¿Ha venido _ estudiante?" a="**algún *alguien">
                “alguien” har aldri et substantiv etter seg. Det står alltid alene.
              </LlQuestion>
          
              <LlQuestion q="Ayer Andrés no _ sus libros." a="*traje *trayo **trajo">
                Han hadde med seg = trajo. Dette kommer av verbet «traer» som betyr å ha med seg.
              </LlQuestion>
          
              <!-- <LlQuestion q="Ayer no te vi en clase.
  -Estaba muy cansado y no _." a="*vine **fui *iré">
                I går så jeg deg ikke i timen. 
  -Jeg var veldig sliten, og jeg dro ikke.
  “vine” betyr jeg kom hit; “fui” betyr jeg dro; “iré” betyr jeg skal dra
              </LlQuestion>
          
              <LlQuestion q="Antes Ana y yo _ todos los días a la playa. Ahora sólo voy los fines de semanas." a="**íbamos *fuimos *vamos">
                I fortid brukes alltid pretérito imperfecto etter «Antes».
  “íbamos” betyr: Vi pleide å dra.
              </LlQuestion>
          
              <LlQuestion q="¿Le has devuelto los libros a Manuel?
  -Sí, _ he devuelto." a="*le los **se los *los le">
                Man kan aldri skrive 
  le/les +los/las/lo/la 
  etter hverandre. «Le» erstattes da med «se” og blir “se los”.
              </LlQuestion>
          
              <LlQuestion q="No _ aquí. Está prohibido." a="**comas *comes">
                Nektende imperativ bruker 2.person entall konjunktivs form av verbet.
              </LlQuestion>
          
              <LlQuestion q="¿Es esta la ciudad de María y Ana? 
  -Sí, esta es _ ciudad." a="*suya **su *sus">
                Eiendomspronomen “su” betyr hans eller hennes. Står alltid sammen med eiendommen. «su ciudad»
              </LlQuestion>
          
              <LlQuestion q="El otro día se me rompió el coche y tuve que volver a casa _ pie." a="*de **a *en">
                Vokabular:
  Å gå til fots = ir a pie
              </LlQuestion>
          
              <LlQuestion q="Y tú, ¿cuándo volviste a Colombia? 
  _" a="*3 meses pasados *Tres meses **Hace 3 meses">
                For tre måneder siden; på spansk er:
  “Hace tres meses”
              </LlQuestion>
          
              <LlQuestion q="¿Qué van a tomar? 
  _ gazpacho." a="**de primero *por primero *primero">
                VI sier alltid “de primero; de segundo, de postre» på spansk
              </LlQuestion>
          
              <LlQuestion q="Ayer _ a la playa con mis compañeros de clase" a="**fui *fue *fuyó">
                1.person entall, jeg-form, av “ir” i pretérito indefinido er: “fui”
              </LlQuestion>
          
              <LlQuestion q="¿_ significa sobrina?" a="*Cuál *Quién **Qué">
                Velge riktig spørreord: 
  Qué =Hva 
  Cuál =hvilken 
  Quién =hvem
              </LlQuestion> -->
          
          </LlLevel>
      
          <LlLevel title="B1">
      
              <LlQuestion q="¿Sabes en qué trabaja María?
  -Sí, ahora _ de camarera, pero ya sabes que _ traductora." a="**está *es; **era *estaba">
                «Está de camarera» betyr at hun jobber som kelner, men det er ikke hennes egentlige yrke. 
  Vi bruker alltid «ser» om opprinnelig yrke. Her sier vi at hun var oversetter.
              </LlQuestion>
          
              <LlQuestion q="¿Conoces a ese chico?
  -Pues ahora no me _ de él." a="*recuerdo **acuerdo">
                «Acrodarse» er refleksivt verb og må ha refleksivt pronomen.
              </LlQuestion>
          
              <!-- <LlQuestion q="¿Qué hora es?
  -Pues no sé _ las 10?" a="**serán *son">
                Når vi anslår tid, bruker vi futuro simple, «serán».
              </LlQuestion>
          
              <LlQuestion q="Este ejercicio _ mal." a="*es **está">
                Vi sier «está mal» når noe er dårlig.
  Vi sier «es malo» når noen er slem.
              </LlQuestion>
          
              <LlQuestion q="Ayer _ viendo una película en la tele y de repente _ la luz." a="**estábamos *estuvimos; *se iba **se fue">
                Vi bruker pretérito imperfecto nå en handling pågår og pretérito indefinido når noe plutselig skjer.
              </LlQuestion>
          
              <LlQuestion q="La farmacia está cerrada _ vacaciones." a="*para **por">
                «Por» brukes også i betydningen på grunn av.
              </LlQuestion>
          
              <LlQuestion q="Si _ 10 años menos, daría la vuelta al mundo." a="*tenía **tuviera *tendría">
                Når vi snakker hypotetisk, bruker vi «imperfeco del subjuntivo» eller imperfektum konjunktiv etter «Si»
              </LlQuestion>
          
              <LlQuestion q="Me molesta que la gente _ en el restaurante." a="**grite *grita">
                Etter “me molesta” brukes konjunktiv etter «que».
              </LlQuestion>
          
              <LlQuestion q="Cuando _ mayor viajaré por todo el mundo." a="*soy **sea *seré">
                Etter “Cuando” om fremtiden bruker vi konjunktiv.
              </LlQuestion>
          
              <LlQuestion q="¿Sabes algo de Ángel?
  - Pues mira, _ encontrármelo en la calle." a="**acabo de *dejo de">
                Når du akkurat har gjort noe, sier vi «acabo de».
              </LlQuestion> -->
          
          </LlLevel>
      
          <LlLevel title="B2">
      
              <LlQuestion q="María _ comprarse un vestido nuevo para la fiesta, pero no encontró ninguno y _ llevar uno viejo." a="**quería *quiso; *tenía que **tuvo que">
                Vi bruker “quería” når vi gjerne ville noe uten fokus på om vi fikk det til.
  Når vi forteller hvordan det gikk, bruker vi «pretérito indefinido».
              </LlQuestion>
          
              <LlQuestion q="Ana y José, _ ya que es tarde." a="*Levandados **levantaos">
                Imperativ i flertall i familiær form mister -d når vi får et etterhengt pronomen.
              </LlQuestion>
          
              <!-- <LlQuestion q="¡Qué raro! Hoy no ha venido Juan.
  - Habrá _ al médico." a="*irá **ido">
                Vi bruker perfektum partisipp sammen med hjelpeverbet «haber» i alle tider.
  Fortid-nåtid-framtid
              </LlQuestion>
          
              <LlQuestion q="La mayoría de los estudiantes _ el examen." a="*aprobaron **aprobó">
                Når «la mayoría» er subjekt i setningen, bruker vi verbalet i entall.
              </LlQuestion>
          
              <LlQuestion q="Lo tendré terminado _ el viernes." a="**para *por">
                Vi bruker når vi snakker om til eller inntil om tid.
  «Por» betyr bl.a. via eller gjennom
              </LlQuestion>
          
              <LlQuestion q="El concierto _ en el auditorio nacional." a="**será *estará">
                Når noe finner sted, bruker vi «ser»
              </LlQuestion>
          
              <LlQuestion q="Me gustó mucho que _ a mi lado." a="*estaba **estuviera *esté">
                Når setningen er i fortid, og vi må bruke konjunktiv, må tiden samsvare i begge delene av setningen.
              </LlQuestion>
          
              <LlQuestion q="Si _ venido a la fiesta, hubieras conocido a mi hermano." a="**hubieras *habrías">
                Hypoteser markeres med imperfektum konjunktiv etter “Si»
              </LlQuestion>
          
              <LlQuestion q="Por muy lejos que _ siempre llega a tiempo." a="*vive *vivía **viva">
                Etter “por muy lejos que” bruker vi alltid konjunktiv.
              </LlQuestion>
          
              <LlQuestion q="No gana bastante dinero para comprarse un piso, _ vive con sus padres." a="*entonces **así que * por eso *de ahí que">
                Slik at eller “así que” forklarer hvorfor han må bo hos sine foreldre. 
  Årsaks-subjunksjon.
              </LlQuestion> -->
          
          </LlLevel>
      
                  <!-- <LlLevel title="{{level.title}}" v-for="level in levels">

                      <LlQuestion v-for="q in level.questions" q="{{q.question}} a="q.>
                          
                      </LlQuestion>

                  </LlLevel> -->

                  <!-- END QUESTIONS -->

              </div>
          </div>
      </div>

    </div>

    <div class="d-flex justify-content-between">
        <a href="#/" class="link-secondary mt-2">&lt;- tilbake</a>
    </div>

</template>


<script setup>

    import LlLevel from './LlLevel.vue'
    import LlQuestion from './LlQuestion.vue'

</script>

<style scoped>
  .picture {
    object-fit: cover;
    height: 100px;
  }
</style>