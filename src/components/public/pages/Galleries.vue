<template>
    <div class="container-fluid d-flex flex-column justify-content-between">
        <div class="row" v-if="paintings.length > 0">
            <div class="col-1 button left">

            </div>

            <div class="col-10 gallery">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-center">
                    <div class="col p-3" v-for="painting, i in paintings" :key="i">
                        <div class="painting-card d-flex justify-content-center align-items-center">
                            <img :src="painting.img" :alt="painting.title">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-1 button right">

            </div>
        </div>

        <div v-else>
            <Loader/>
        </div>
        <!-- <div class="row row-cols-3">
            <div class="col painting-card d-flex justify-content-center align-items-center" v-for="painting, i in paintings" :key="i">
                <img :src="painting.img" :alt="painting.title">
            </div>
            <div class="col painting-card d-flex justify-content-center align-items-center" v-for="i in pageSize" :key="i">
                <img >
            </div>
        </div> -->
        <!-- <div class="pages d-flex justify-content-center p-4">
            <a class="mx-2" v-for="pageNumber in pages" :key="pageNumber" @click="handlePageClick(pageNumber, pageSize)">
                <button type="button" class="btn btn-primary">{{ pageNumber }}</button>
            </a>
        </div> -->
    </div>
</template>

<script>
import PublicService from '../../../services/public.service';
import Loader from '../commons/Loader.vue';

export default {
    name: "Galleries",
    components: {
        Loader
    },
    data() {
        return {
            paintings: [],
            pages: 0,
            pageSize: 6,
            currentPage: 1,
        }
    },
    created() {
        this.loadData(this.currentPage - 1, this.pageSize); // Carica i dati per la pagina 0 all'avvio
    },
    methods: {
        loadData(pageNumber, pageSize) {
            PublicService.getGalleriesPaintings(pageNumber, pageSize).then(
                response => {
                    this.paintings = response.data.payload;
                    if (this.paintings && this.paintings.length > 0) {
                        this.pages = this.paintings[0].totPages;
                    } else if (this.currentPage !== 1 && this.currentPage >= this.pages) {
                        this.getPageData(this.currentPage - 1, this.pageSize);
                    }

                },
                error => {
                    console.log('Errore:', error);
                }
            );
        },
        handlePageLeft(pageNumber, pageSize) {
            // Chiamare i metodi che desideri al click
            this.getPageData(pageNumber, pageSize);
        },
        handlePageRight(pageNumber, pageSize) {
            // Chiamare i metodi che desideri al click
            this.getPageData(pageNumber, pageSize);
        },
        getPageData(pageNumber, pageSize) {
            this.currentPage = pageNumber;
            this.loadData(pageNumber - 1, pageSize); // Carica i dati per la pagina selezionata
        }
    }
}
</script>

<style lang="scss" scoped>
.button{
    background-color: rgb(228, 225, 225);
    cursor: pointer;
    &.right{
        clip-path: polygon(20% 10%, 50% 50%, 20% 90%, 20% 90%, 34% 50%, 20% 10%);
    }
}
.gallery{
    // padding: 10px 50px 0 50px;
    // height: 80vh;
    // .col{
    //     height: 90%;
    // }
}
.painting-card{
    // width: 100%;
    height: 250px;
    background-color: rgb(240, 237, 237);
    border-radius: 10px;
    padding: 15px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

</style>