<template>
    <div class="container-fluid d-flex flex-column justify-content-between">
        <div class="row">
            <div class="col-1 button left"></div>
            <div class="col-10 gallery">
                <div class="row row-cols-3">
                <!-- <div class="col painting-card d-flex justify-content-center align-items-center" v-for="painting, i in paintings" :key="i">
                <img :src="painting.img" :alt="painting.title">
            </div> -->
                <div class="col painting-card d-flex justify-content-center align-items-center" v-for="i in pageSize" :key="i">
                    <img >
                </div>
            </div>
            </div>
            <div class="col-1 button right"></div>
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

export default {
    name: "Galleries",
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
        handlePageClick(pageNumber, pageSize) {
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
// .painting-card{
//     padding: 20px;
//     img{
//         width: 100%;
//         object-fit: contain;
//     }
// }
.button{
    background-color: violet;
}
.gallery{
    padding: 30px 50px 0 50px;
}
.painting-card{
    padding: 20px 20px 10px 20px;
    img{
        background-color: red;
        width: 100%;
        height: 250px;
    }
}

</style>