<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h2>Biografia</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <p>
                        Antonio Mango, originario di Tursi (comune in provincia di Matera), 
                        nasce a Stigliano (MT) nel 1993. Nel 2011 si diploma al Liceo Artistico 
                        Statale “Carlo Levi” di Matera. Continua la sua formazione artistica 
                        frequentando il corso di Pittura presso l'Accademia di Belle Arti di 
                        Roma. 
                        Nel 2016, al termine del triennio accademico, scrive una tesi in 
                        omaggio all'artista Riccardo Tommasi Ferroni intervistando i sui figli 
                        (anch'essi noti pittori) Elena e Giovanni. 
                        Con Giovanni Tommasi Ferroni instaura un rapporto di amicizia 
                        frequentando saltuariamente il suo studio. 
                        Nel 2020 conclude gli studi accademici laureandosi con lode nel corso 
                        biennale di Pittura con l'artista e professore Moreno Bondi, 
                        presentando una tesi artistico-anatomica su Charles Le Brun, 
                        Rembrandt e Henri Bergson guidata dal professore e storico dell'arte 
                        Marco Bussagli. 
                        Attualmente vive e lavora a Roma.
                    </p>
                </div>

                <div class="col-6 d-flex justify-content-center" v-if="loading">
                    <Loader/>
                </div>

                <div v-else class="col-6 d-flex justify-content-center">
                    <img id="profile-img" :src="imageSrc" alt="fotoProfilo" >
                </div>
            </div>
            
            <div class="row">
                <div class="col">
                    <h2>Artist Statement</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <p>
                        Con il mio lavoro affronto tematiche di natura metafisica, 
                        talvolta legate all' introspezione. Facendo eco a una 
                        certa filosofia dell'immanenza, la mia ricerca pittorica 
                        riflette sull'interpretazione e la raffigurazione di fenomeni 
                        psichici come il ricordo, il sogno e il déjà-vu: fenomeni 
                        che invitano e mirano a una più ampia percezione della 
                        realtà, rivelando aspetti abitualmente celati, e che spesso 
                        evidenziano le alterazioni del tempo percepite dalla 
                        nostra coscienza. 
                        Nella creazione di un'immagine o di un concetto da 
                        figurare è mia prerogativa rendere il dipinto facilmente 
                        comunicativo e d'immediato impatto, per questo sono 
                        interessato a utilizzare prevalentemente un linguaggio 
                        visivo come quello del realismo. Per ciò che concerne la 
                        realizzazione della struttura cromatico-compositiva mi 
                        lascio ispirare dalla fotografia cinematografica: dai 
                        molteplici frames che in concatenazione costituiscono 
                        tutta una serie d'inquadrature che a loro volta 
                        determinano, ad esempio, piani-sequenza o falsi 
                        raccordi. Tutto ciò condiziona il mio modo di selezionare 
                        e disporre figure o elementi, così come di preferire ritagli 
                        e punti di vista decentrati. 
                        Durante la mia formazione ho approfondito lo studio 
                        pratico-teorico sulla pittura tradizionale italiana e 
                        olandese del XVI e XVII secolo e su quella europea 
                        ottocentesca. Nello specifico prediligo la tecnica dell'olio 
                        su tela che mi permette di procedere per sovrapposizioni 
                        partendo dalla preparazione del supporto fino ad arrivare 
                        agli ultimi impasti di colore. 
                        Considero la pittura un mezzo di comunicazione elegante 
                        ed espressivo di grande versatilità. Un'arte che non può 
                        prescindere, da un lato, dalla qualità data dalla 
                        ricercatezza tecnica, e dall'altro, dalla qualità estetica 
                        legata ai segreti del potere dell'immagine.
                    </p>
                </div>
            </div>        
        </div>
    </section>
</template>

<script>
import Loader from '../commons/Loader.vue';

export default {
    name: "About",
    data() {
        return {
            loading: true,
            imageSrc: require("../../../assets/img/fotoProfilo.jpg")
        };
    },
    components: {
        Loader
    },
    created() {
        this.setCookie();
    },
    methods: {
        setCookie() {
            // Imposta il cookie utilizzando JavaScript
            document.cookie = '__Host-GAPS=valoreDelCookie; secure; samesite=None';
        },
        // handleImageLoad() {
        //     // Chiamato quando l'immagine è stata caricata con successo
        //     this.loading = false;
        // }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.loading = false;
        })
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/global.scss';
.container-fluid{
    padding: 25px 80px 0 80px !important;
    background-color: rgba(31, 34, 31, 0.98);
}
h2,p{
    color: #dfdfdf;
}
p{
    text-align: justify;
}
#profile-img{
    width: 33%;;
    object-fit: contain;
    position: relative;
    left: 10%;
    top: -10%;
}
</style>