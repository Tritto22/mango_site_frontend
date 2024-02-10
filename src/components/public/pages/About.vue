<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h2>Biografia</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <!-- <p>
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
                    </p> -->
                    <p>
                        Leonardo ha svolto la sua attività a cavallo di due secoli, il 1400 e il 1500, e proprio in questo sta la sua peculiarità: spesso gli è stato riconosciuto il merito di essere colui che, sintetizzando i caratteri della cultura quattrocentesca, ha posto le basi per una nuova impostazione nel Cinquecento, un secolo sconvolto da grandi avvenimenti religiosi e politici. La sua grande curiosità è stata sempre accompagnata da un grande desiderio di concretizzare le sue conoscenze: scienza e pratica erano quindi indissolubili.
                    </p>
                </div>

                <div class="col-lg-6 col-sm-12 d-flex justify-content-center" v-if="loading">
                    <Loader/>
                </div>

                <div v-else class="col-lg-6 col-sm-12 d-flex justify-content-center p-5">
                    <img id="profile-img" :src="imageSrc" alt="fotoProfilo" >
                </div>
            </div>
            
            <div class="row">
                <div class="col">
                    <!-- <h2>Artist Statement</h2> -->
                    <h2>Opere</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <!-- <p>
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
                    </p> -->
                    <p>
                        Di Leonardo scrittore si trova una curiosa testimonianza nelle sue "Favole", una raccolta di brevi componimenti che, mescolando arguzia e dottrina, nascondono un serio ammonimento: la farfalla che attratta dallo splendore del lume si brucia, la scimmia che si innamora dell’uccellino e lo soffoca di baci, l’asino che addormentandosi sul ghiaccio lo fonde e annega. Tutti i componimenti sembrano ricordare la tragedia dell’ignoranza dell’uomo sulle leggi naturali. Grande importanza ha per Leonardo il rapporto tra scienza e arte: partendo da una concezione quattrocentesca, Leonardo ha fatto della produzione artistica lo specchio della natura, che deve essere studiata e indagata a fondo per essere degnamente rappresentata. Da qui la sua dedizione per gli studi di botanica, anatomia e in particolare ottica, dove l’occhio è considerato come tramite tra l’immagine e l’anima.
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
            imageSrc: require("../../../assets/img/imgProfilo.jpg")
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
    //position: relative;
    //left: 10%;
    //top: -10%;
}
</style>