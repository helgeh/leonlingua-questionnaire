<template>
    <a href="#/" class="link-secondary">&lt;- tilbake</a>
            
    <h2>Sp&oslash;rreskjema <span class="badge text-bg-light">v0.3</span></h2>

    <div id="questionnaire">
        <div id="questionnaire-carousel" class="carousel slide" data-bs-touch="false">
            <div class="carousel-inner">

                <!-- BEGIN QUESTIONS -->

                <LlLevel title="A1">

                    <LlQuestion q="&iquest;&lowbar; te llamas&quest;" a="&ast;Qu&eacute; &ast;&ast;C&oacute;mo">
                        P&aring; spansk sier man &laquo;Hvordan kaller du deg&quest;&raquo;
                    </LlQuestion>

                    <LlQuestion q="¿Sabes en qué trabaja María?
                     -Sí, ahora _ de camarera, pero ya sabes que _ traductora." a="**está *es; **era *estaba">
                        «Está de camarera» betyr at hun jobber som kelner, men det er ikke hennes egentlige yrke. 
                        Vi bruker alltid «ser» om opprinnelig yrke. Her sier vi at hun var oversetter.
                    </LlQuestion>

                    <LlQuestion q="Voy a cerrar la ventana porque tengo_." a="**frío *calor *sed">
                        Vokabularferdighet:
                        Frío=kulde; calor=varme; sed=tørst
                    </LlQuestion>

                </LlLevel>

                <LlLevel title="A2">

                    <LlQuestion q="_vacaciones." a="*En **De *A">
                        Fast uttrykk på spansk. «De vacaciones»
                    </LlQuestion>

                    <LlQuestion q="No me gusta nada la ópera. 
                     _" a="**A mí tampoco. *A mí también. *Yo tampoco. *Yo también.">
                        Når du uttrykker enighet om en nektende påstand, bruker du «a mí tampoco». Ikke jeg heller.
                        Aldri bruk «yo tampoco».
                    </LlQuestion>

                    <LlQuestion q="¿_ una farmacia por aquí cerca?" a="*Está **Hay *Es">
                        Når man spør om noe er eller fins, bruker man «hay».
                    </LlQuestion>

                </LlLevel>

                <!-- <LlLevel title="{{level.title}}" v-for="level in levels">

                    <LlQuestion v-for="q in level.questions" q="{{q.question}} a="q.>
                        
                    </LlQuestion>

                </LlLevel> -->

                <!-- END QUESTIONS -->

            </div>
        </div>
    </div>

    <div class="d-flex justify-content-end">
        <a href="https://en.wikipedia.org/wiki/Common_European_Framework_of_Reference_for_Languages" class="btn btn-link">Referanse</a>
    </div>

</template>


<script setup>

    // import { inject } from 'vue'
    import LlLevel from './LlLevel.vue'
    import LlQuestion from './LlQuestion.vue'

    // const levels = inject('levels')

</script>
