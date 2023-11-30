<template>
    <section>
        <div v-if="!submitted" class="container-fluid">
            <div class="row col-md-8 offset-md-2">
                <div class="card w-100">
                    <div class="card-body">
                        <form @submit.prevent="addPainting" role="form">
                            <div class="form-group mb-3">
                                <label for="title" class="form-label">Titolo</label>
                                <input class="form-control" v-model="painting.title" id="title"
                                    placeholder="Inserisci il titolo" type="text" @input="validateTitle" />
                                <p class="text-danger" v-if="!isTitleValid">Il titolo non può essere vuoto o contenere solo
                                    spazi!</p>
                            </div>

                            <!-- <div class="mb-3">
                                <label for="img" class="form-label">Link immagine quadro</label>
                                <input class="form-control" v-model="painting.img" type="text" id="img"
                                    placeholder="Inserisci il link dell'immagine">
                                <p class="text-danger" v-if="errors.img">{{ errors.img }}</p>
                            </div> -->

<!-- ******************** File immagini ********************************************** -->

                            <div class="form-group">
                                <label for="imageDataBytes" class="form-label">Link immagine quadro file</label>
                                <input type="file" class="form-control-file" id="imageDataBytes" @change="handleFileChange">
                            </div>

<!-- ******************** End file immagini ********************************************** -->

                            <div class="mb-3">
                                <!-- <div class="first-detail mb-2">
                                    <label for="0" class="form-label">Link dettaglio quadro</label>
                                    <input class="form-control mb-1" v-model="painting.details[0].name" type="text" id="0" placeholder="Inserisci il nome del dettaglio">
                                    <input type="file" class="form-control-file" id="0" @change="handleFileChangeDetailImg($event, 0)">
                                    <p class="text-danger" v-if="errors.details">{{ errors.details }}</p>
                                </div> -->

                                <div v-if="countDetails > 0 && painting.details.length > 0" class="mb-3">
                                    <div class="detail mb-2" v-for="i in countDetails" :key="i">
                                        <label for="i" class="form-label">Link dettaglio quadro</label>
                                        <input class="form-control mb-1" v-model="painting.details[i-1].name" type="text" :id="i" placeholder="Inserisci il nome del dettaglio">
                                        <input type="file" class="form-control-file" :id="i" @change="handleFileChangeDetailImg($event, i-1)">
                                        <p class="text-danger" v-if="errors.details">{{ errors.details }}</p>
                                    </div>
                                </div>

                                <button type="button" class="btn btn-info" @click="addDetail">Aggiungi dettaglio</button>
                            </div>

                            <div class="form-group mb-3">
                                <label for="size" class="form-label">Misure</label>
                                <input class="form-control" v-model="painting.size" id="size"
                                    placeholder="Inserisci le misure" type="text" />
                                <p class="text-danger" v-if="errors.size">{{ errors.size }}</p>
                            </div>

                            <div class="form-group mb-3">
                                <label for="year" class="form-label">Anno</label>
                                <input class="form-control" v-model="painting.year" id="year" placeholder="Inserisci l'anno"
                                    type="text" @input="validateYear" />
                                <p class="text-danger" v-if="!isYearValid">L'anno deve essere compreso tra il 1993 e il 2199
                                </p>
                            </div>

                            <div class="form-group mb-3">
                                    <label for="tecnique" class="form-label">Tecnica utilizzata</label>
                                    <input class="form-control" v-model="painting.tecnique" id="tecnique"
                                        placeholder="Inserisci le misure" type="text" />
                                    <p class="text-danger" v-if="errors.tecnique">{{ errors.tecnique }}</p>
                                </div>

                            <div class="form-group mb-3">
                                <label for="description" class="form-label">Descrizione</label>
                                <textarea class="form-control" v-model="painting.description" id="description"
                                    placeholder="Inserisci la nuova descrizione" rows="5"></textarea>
                                <p class="text-danger" v-if="errors.description">{{ errors.description }}</p>
                            </div>

                            <div class="form-group form-check mb-3">
                                <input type="checkbox" class="form-check-input" id="favorite" v-model="painting.favorite" role="button">
                                <label class="form-check-label" for="favorite">Aggiungi ai preferiti</label>
                            </div>

                            <div class="form-group">
                                <button class="btn btn-primary" type="submit">Crea</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="submitted"
            :class="successful ? 'alert-success text-center' : 'alert-danger text-center'">
            <h3>{{ message }}</h3>
        </div>
    </section>
</template>

<script>
import PaintingService from '../../../../services/painting.service';

export default {
    name: 'NewPainting',
    data() {
        return {
            painting: {
                favorite: false,
                details: []
            },
            imageDataBytes: null,
            successful: false,
            submitted: false,
            message: '',
            isTitleValid: true,
            isYearValid: true,
            countDetails: 0
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/admin/login');
        }
    },
    methods: {
        addPainting() {
            this.submitted = true;
            if(this.painting.details.length > 0){
                if (this.painting.details[0].name == null && this.painting.details[0].imageBase64 == null) {
                    this.painting.details = null
                }
            }

            PaintingService.newPainting(this.painting).then(
                data => {
                    if (data.data.payload != null) {
                        this.message = "Nuovo quadro aggiunto con successo!";
                        this.successful = true;
                    } else if (data.data.error != null) {
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
            if (this.painting.year >= 1993 && this.painting.year <= 2199) {
                this.isYearValid = true
            } else {
                this.isYearValid = false
            }

        },
        addDetail(){
            this.countDetails ++;
            this.painting.details.push({});
        },
        handleFileChange(event) {
            const fileInput = event.target;
            const file = fileInput.files[0];

            if (file) {
                this.readFile(file);
            }
        },
        readFile(file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                // Ottieni il base64 dal risultato del FileReader
                this.painting.imageDataBase64 = e.target.result;
            };

            // Leggi il file come URL data (base64)
            reader.readAsDataURL(file);
        },
        handleFileChangeDetailImg(event, i) {
            const fileInput = event.target;
            const file = fileInput.files[0];
            if (file) {
                this.readFileDetail(file, i);
            }
        },
        readFileDetail(file, i) {
            const reader = new FileReader();

            reader.onload = (e) => {
                // Ottieni il base64 dal risultato del FileReader
                this.painting.details[i].imageBase64 = e.target.result;
            };

            // Leggi il file come URL data (base64)
            reader.readAsDataURL(file);
        }
    }
}
</script>

<style></style>