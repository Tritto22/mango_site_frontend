<template>
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div class="row justify-content-center align-items-center flex-column gallery" v-if="paintings.length > 0">
            <!-- <div class="col-1 button left">

            </div> -->

            <!-- <div class="col-10 gallery"> -->
                <!-- <div class="row align-items-center"> -->
                    <!-- row-cols-1 row-cols-md-2 row-cols-lg-4 
                        <div class="col" v-for="painting, i in paintings" :key="i">
                        <div class="painting-card d-flex justify-content-center align-items-center">
                            <img :src="painting.img" :alt="painting.title">
                        </div>
                    </div> -->
                    <div class="col d-flex flex-wrap justify-content-center">
                        <div class="painting-card d-flex justify-content-center align-items-center" v-for="painting, i in paintings" :key="i">
                            <img :src="painting.img" :alt="painting.title">
                        </div>
                    </div>
                <!-- </div> -->
                
            <!-- </div> -->

            <!-- <div class="col-1 button right">

            </div> -->
        </div>

        <div v-else>
            <Loader/>
        </div>

        <div class="row" id="plus">
            <div class="button" @click="addPainting()"></div>
            <!-- <button type="button" class="btn btn-primary" @click="addPainting()">sfoglia</button> -->
        </div>
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
            pageSize: 10,
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
                    this.paintings = [...this.paintings, ...response.data.payload];
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
        addPainting(){
            this.currentPage ++;
            this.loadData(this.currentPage - 1, this.pageSize);
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
@import '../../../assets/style/variables.scss';

#plus{
    margin-top: 5px;
}
// .container{
//     height: $mainHeight;
// }
.button{
    background-color: rgb(125, 121, 121);
    cursor: pointer;
    clip-path: polygon(100% 50%, 50% 70%, 0 50%, 0 50%, 50% 59%, 100% 50%);
    height: 50px;
    width: 50px;
    // &.right{
    //     clip-path: polygon(20% 10%, 50% 50%, 20% 90%, 20% 90%, 34% 50%, 20% 10%);
    // }
}
.gallery{
    height: 80%;
    overflow: auto;
    background-color: #232623;
    padding: 10px;
}
.painting-card{
    // width: 100%;
    // height: 250px;
    // background-color: rgb(240, 237, 237);
    // border-radius: 10px;
    padding: 5px;
    img{
        width: 400px;
        // width: 100%;
        height: 400px;
        object-fit: cover;
        overflow: hidden;
        cursor: pointer;
        &:hover{
            filter: saturate(30%); 
        }
    }
}

</style>