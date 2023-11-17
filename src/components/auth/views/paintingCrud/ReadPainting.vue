<template>
    <section>
        <div v-if="!errorProp && !delatedSucces" class="container-fluid">
            <div class="row  pt-4">
                <div class="col">
                    <nav class="d-flex justify-content-end">
                        <button @click="shareData(painting, 'admin-painting-update')" type="button" class="btn btn-warning mx-4">Modifica</button>

                        <button @click="deleteSelectedPainting(painting)" type="button" class="btn btn-danger">Elimina</button>
                    </nav>
                </div>
            </div>
            <div class="row  p-4" v-if="painting.favorite">
                <div class="col">
                    <font-awesome-icon :icon="['fas', 'star']" class="favorite"/>
                </div>
            </div>
            <div class="row  p-4">
                <div class="col">
                    <h2 >Titolo => <span>{{ painting.title.toUpperCase() }}</span ></h2>
                </div>
            </div>
            <div class="row  p-4">
                <div class="col">
                    <h2 >Immagine => </h2>
                    <div class="d-flex justify-content-center">
                        <img v-if="painting.img != null" :alt="painting.title" :src="painting.img" @error="handleImageError(painting)" >
                        <img v-else src="http://drive.google.com/uc?export=view&id=1ZpJCY7ijNY1oO1mvGMl2gnOcaIXyGM3n">
                    </div>            
                </div>
            </div>
            <div class="row  p-4" v-if="painting.details != null">
                <div class="col" v-for="detail,i in painting.details" :key="i">
                    <h2 >Dettaglio {{ i + 1}} => </h2>
                    <div class="d-flex justify-content-center">
                        <img :alt="detail.name" :src="detail.linkImg">
                    </div>            
                </div>
            </div>
            <div class="row  p-4">
                <div class="col">
                    <h2 >Misure => <span>{{ painting.size }}</span ></h2>
                </div>
            </div>
            <div class="row  p-4">
                <div class="col">
                    <h2 >Anno => <span>{{ painting.year }}</span ></h2>
                </div>
            </div>
            <div class="row  p-4">
                <div class="col">
                    <h2 >Descrizione => <span>{{ painting.description }}</span ></h2>
                </div>
            </div>
            <div class="row  p-4">
                <div class="col">
                    <h2 >Slug => <span>{{ painting.slug }}</span ></h2>
                </div>
            </div>
        </div>
        <div v-if="errorProp" class="alert-danger text-center">
            <h3>Impossibile visualizzare il quadro selezionato, tornare alla Dashboard e riprovare.</h3>
        </div>
        <div v-if="delatedSucces" class="alert-success text-center">
            <h3>Eliminazione avvenuta con successo</h3>
        </div>
    </section>
</template>

<script>
import PaintingService from '../../../../services/painting.service';

export default {
    name: 'ReadPainting',
    data(){
        return{
            painting:{},
            errorProp: false,
            delatedSucces: false
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        currentPainting() {
            return this.$store.state.painting.selectedPainting;
        }
    },
    created() {
        if (this.currentPainting != null) {
            this.painting = this.currentPainting;
        } else {
            this.errorProp = true;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/admin/login');
        }
    },
    methods: {
        // passaggio dati tramite vuex e params
        shareData(data, routeName) {
            this.$store.commit('painting/setSelectedPainting', data);
            localStorage.setItem('selectedPainting', JSON.stringify(data));
            this.$router.push({
                name: routeName,
                params: {
                    slug: data.slug
                }
            });
        },
        deleteSelectedPainting(painting) {
            PaintingService.delete(painting).then(
                response => {
                    this.delatedPainting = response.data.payload;
                    this.delatedSucces = true;

                },
                error => {
                    console.log('Errore:', error);
                }
            )
        },
        handleImageError(painting) {
            // Questo metodo viene chiamato quando l'immagine non può essere caricata correttamente
            painting.img = 'http://drive.google.com/uc?export=view&id=1ZpJCY7ijNY1oO1mvGMl2gnOcaIXyGM3n';
        }
    }
}
</script>

<style lang="scss">
.favorite{
    color: rgb(232, 232, 60);
    font-size: 30px;
}
img{
    object-fit: contain;
    width: 30%;
}
</style>