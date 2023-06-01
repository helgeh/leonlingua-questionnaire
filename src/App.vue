<template>

    <LlQuestionnaire>



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



    </LlQuestionnaire>

</template>

<script>

    import LlQuestionnaire from './components/LlQuestionnaire.vue'
    import LlLevel from './components/LlLevel.vue'
    import LlQuestion from './components/LlQuestion.vue'

    export default {
        name: 'App',
        components: {
            LlQuestionnaire,
            LlLevel,
            LlQuestion
        }
    }
    
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
