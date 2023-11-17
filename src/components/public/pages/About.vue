<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>Biografia</h1>
                </div>
            </div>

            <div class="row">
                <div class="col-8">
                    <p>
                        Antonio Mango, originario di Tursi (comune in provincia di Matera), 
                        nasce a Stigliano (MT) nel 1993. Nel 2011 si diploma al Liceo Artistico 
                        Statale “Carlo Levi” di Matera. Continua la sua formazione artistica 
                        frequentando il corso di Pittura presso l/'Accademia di Belle Arti di 
                        Roma. 
                        Nel 2016, al termine del triennio accademico, scrive una tesi in 
                        omaggio all/'artista Riccardo Tommasi Ferroni intervistando i sui figli 
                        (anch/'essi noti pittori) Elena e Giovanni. 
                        Con Giovanni Tommasi Ferroni instaura un rapporto di amicizia 
                        frequentando saltuariamente il suo studio. 
                        Nel 2020 conclude gli studi accademici laureandosi con lode nel corso 
                        biennale di Pittura con l/'artista e professore Moreno Bondi, 
                        presentando una tesi artistico-anatomica su Charles Le Brun, 
                        Rembrandt e Henri Bergson guidata dal professore e storico dell/'arte 
                        Marco Bussagli. 
                        Attualmente vive e lavora a Roma.
                    </p>
                </div>

                <div class="col d-flex justify-content-center">
                    <img id="profile-img" src="http://drive.google.com/uc?export=view&id=1rBcQ1aFHTVUiLTG0AYSS0TN4oRXobTkJ" alt="fotoProfilo">
                </div>
            </div>           
        </div>
    </section>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "About",

    created() {
        this.setCookie();
    },
    methods: {
        setCookie() {
            // Imposta il cookie utilizzando JavaScript
            document.cookie = '__Host-GAPS=valoreDelCookie; secure; samesite=None';
        }
    }
}
</script>

<style lang="scss">
#profile-img{
    width: 55%;;
    object-fit: contain;
}
</style>