<template>
    <section>
        <div v-if="!errorProp && !submitted && !delatedSucces" class="container-fluid">
            <div class="row  p-4">
                <div class="col">
                    <nav class="d-flex justify-content-end">
                        <button @click="deleteSelectedPainting(painting)" type="button" class="btn btn-danger">Elimina</button>
                    </nav>
                </div>
            </div>
    
            <div class="row col-md-8 offset-md-2">
                <div class="card w-100">
                    <div class="card-header">
                        <h2 class="text-center">Modifica quadro</h2>
                    </div>

                    <div class="card-body">
                        <form @submit.prevent="editPainting" role="form">
                            <input type="hidden" v-model="painting.slug" />

                            <div class="form-group mb-3">
                                <label for="title" class="form-label">Titolo</label>
                                <input class="form-control" v-model="painting.title" id="title" placeholder="Inserisci il titolo" type="text" @input="validateTitle"/>
                                <p class="text-danger" v-if="!isTitleValid">Il titolo non può essere vuoto o contenere solo spazi!</p>
                            </div>

                            <div class="mb-3">
                                <label for="img" class="form-label">Link immagine quadro</label>
                                <input class="form-control" v-model="painting.img" type="text" id="img" placeholder="Inserisci il link dell'immagine">
                                <p class="text-danger" v-if="errors.img">{{ errors.img }}</p>
                            </div>

                            <div v-if="painting.details != null" class="mb-3">
                                <div class="detail mb-2" v-for="detail, i in painting.details" :key="i">
                                    <label for="img" class="form-label">Link dettaglio quadro</label>
                                    <input class="form-control mb-1" v-model="painting.details[i].name" type="text" :id="i + detail.name" placeholder="Inserisci il nome del dettaglio">
                                    <input class="form-control" v-model="painting.details[i].linkImg" type="text" :id="i + detail.linkImg" placeholder="Inserisci il link del dettaglio">
                                    <p class="text-danger" v-if="errors.details">{{ errors.details }}</p>
                                </div>

                                <div v-if="countDetails > this.painting.details.length" class="mb-3">
                                    <div class="detail mb-2" v-for="i in countDetails" :key="i">
                                        <label for="img" class="form-label">Link dettaglio quadro</label>
                                        <input class="form-control mb-1" v-model="painting.details[i].name" type="text" :id="i + 'name'" placeholder="Inserisci il nome del dettaglio">
                                        <input class="form-control" v-model="painting.details[i].linkImg" type="text" :id="i + 'linkImg'" placeholder="Inserisci il link del dettaglio">
                                        <p class="text-danger" v-if="errors.details">{{ errors.details }}</p>
                                    </div>
                                </div>

                                <button type="button" class="btn btn-info" @click="addDetail">Aggiungi dettaglio</button>
                            </div>

                            <div class="form-group mb-3">
                                <label for="size" class="form-label">Misure</label>
                                <input class="form-control" v-model="painting.size" id="size" placeholder="Inserisci le misure" type="text" />
                                <p class="text-danger" v-if="errors.size">{{ errors.size }}</p>
                            </div>

                            <div class="form-group mb-3">
                                <label for="year" class="form-label">Anno</label>
                                <input class="form-control" v-model="painting.year" id="year" placeholder="Inserisci l'anno" type="text" @input="validateYear"/>
                                <p class="text-danger" v-if="!isYearValid">L'anno deve essere compreso tra il 1993 e il 2199</p>
                            </div>

                            <div class="form-group mb-3">
                                <label for="description" class="form-label">Descrizione</label>
                                <textarea class="form-control" v-model="painting.description" id="description" placeholder="Inserisci la nuova descrizione" rows="5"></textarea>
                                <p class="text-danger" v-if="errors.description">{{ errors.description }}</p>
                            </div>

                            <div class="form-group form-check mb-3">
                                <input type="checkbox" class="form-check-input" id="favorite" v-model="painting.favorite" role="button">
                                <label class="form-check-label" for="favorite">Aggiungi ai preferiti</label>
                            </div>

                            <div class="form-group">
                                <button class="btn btn-primary" type="submit">Modifica</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!errorProp && submitted && !delatedSucces" :class="successful ? 'alert-success text-center' : 'alert-danger text-center'">
            <h3>{{ message }}</h3> 
        </div>
        <div v-if="errorProp && !submitted && !delatedSucces" class="alert-danger text-center">
            <h3>Modifica impossibile, tornare alla Dashboard</h3>
        </div>
        <div v-if="delatedSucces" class="alert-success text-center">
            <h3>Eliminazione avvenuta con successo</h3>
        </div>
    </section>
</template>

<script>
import PaintingService from '../../../../services/painting.service';

export default {
    name: 'UpdatePainting',
    data() {
        return {
            painting: { 
                details: [{}] 
            },
            successful: false,
            submitted: false,
            message: '',
            errorProp: false,
            isTitleValid: true,
            isYearValid: true,
            delatedSucces: false,
            countDetails: 0
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
        // prendo dati da params o Vuex
        // Se non c'è alcun painting selezionato nel Vuex, cerca nel localStorage
        
        if (this.currentPainting != null) {
            this.painting = this.currentPainting;
            this.countDetails = this.painting.details.length;
        } else if(this.$route.params.data != null) {
            this.painting = this.$route.params.data;
            this.countDetails = this.painting.details.length;
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
        editPainting() {
            this.submitted = true;
            this.errorProp = false;
            PaintingService.update(this.painting).then(
                data => {
                    if (data.data.payload != null) {
                        this.message = "Modifica avvenuta con successo!";
                        this.successful = true;
                    }else if(data.data.error != null){
                        this.message = data.data.error.msg;
                        this.successful = false;
                    }
                },
                error => {
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString();
                    this.successful = false;

                    if (error.response && error.response.status === 403) {
                        this.$store.dispatch('auth/logout');
                        this.$router.push('/admin/login');
                    }
                }
            );
        },
        validateTitle() {
            this.isTitleValid = this.painting.title.trim() !== '';
        },
        validateYear() {
            if(this.painting.year >= 1993 && this.painting.year <= 2199){
                this.isYearValid = true
            } else{
                this.isYearValid = false
            }
            
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
        addDetail() {
            this.countDetails++;
            this.painting.details.push({});
        }
    }
}
</script>

<style></style>