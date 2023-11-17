<template>
    <div class="container-fluid">
        <div class="row  p-4">
            <div class="col">
                <h3>Questa è la tua dashboard</h3>
            </div>
            <div v-if="delatedSucces && delatedPainting != null" class="col alert-success text-center">
                <h5>Il quadro {{ delatedPainting.title }} è stato eliminato con successo!</h5>
            </div>
            <div class="col d-flex justify-content-end">
                <router-link to="/admin/new-painting/create" class="me-4">
                    <button type="button" class="btn btn-success">Aggiungi quadro</button>
                </router-link>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Size</th>
                    <th scope="col">Year</th>
                    <th scope="col">Slug</th>
                    <th scope="col" class="d-flex justify-content-center">Azioni</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="painting in paintings" :key="painting.id">
                    <th scope="row">{{ painting.id }}</th>
                    <td>{{ painting.title }}</td>
                    <td>{{ painting.size }}</td>
                    <td>{{ painting.year }}</td>
                    <td>{{ painting.slug }}</td>
                    <td class="d-flex justify-content-end pe-3">
                        <button @click="shareData(painting, 'admin-painting-single')" type="button" class="btn btn-primary">Visualizza</button>

                        <button @click="shareData(painting, 'admin-painting-update')" type="button" class="btn btn-warning mx-4">Modifica</button>

                        <button @click="deleteSelectedPainting(painting)" type="button" class="btn btn-danger">Elimina</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="pages p-4">
            <a class="mx-2" v-for="pageNumber in pages" :key="pageNumber" @click="handlePageClick(pageNumber, pageSize)">
                <button type="button" class="btn btn-primary">{{ pageNumber }}</button>
            </a>
        </div>
    </div>
</template>

<script>
import PaintingService from '../../../../services/painting.service';

export default {
    name: 'Dashboard',
    data() {
        return {
            paintings: [],
            pages: 0,
            pageSize: 6,
            currentPage: 1,
            delatedPainting: null,
            delatedSucces: false
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
    created() {
        this.loadData(this.currentPage - 1, this.pageSize); // Carica i dati per la pagina 0 all'avvio
    },
    methods: {
        loadData(pageNumber, pageSize) {
            PaintingService.getDashboard(pageNumber, pageSize).then(
                response => {
                    this.paintings = response.data.payload;
                    if (this.paintings && this.paintings.length > 0) {
                        this.pages = this.paintings[0].totPages;
                    }else if (this.currentPage !== 1 && this.currentPage >= this.pages) {
                        this.getPageData(this.currentPage - 1, this.pageSize);
                    }
                    
                },
                error => {
                    console.log('Errore:', error);
                }
            );
        },
        handlePageClick(pageNumber, pageSize) {
            // Chiamare i metodi che desideri al click
            this.getPageData(pageNumber, pageSize);
            this.clearDeleteInfo();
        },
        getPageData(pageNumber, pageSize) {
            this.currentPage = pageNumber;
            this.loadData(pageNumber - 1, pageSize); // Carica i dati per la pagina selezionata
        },
        clearDeleteInfo(){
            this.delatedSucces = false
        },
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

        deleteSelectedPainting(painting){
            PaintingService.delete(painting).then(
                response => {
                    this.delatedPainting = response.data.payload;
                    this.delatedSucces = true;
                    this.getPageData(this.currentPage, this.pageSize);
                },
                error => {
                    console.log('Errore:', error);
                }
            )
        }
    }
}
</script>

<style lang="scss">
.container-fluid{
    height: 90vh;
}
.pages{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
}
</style>