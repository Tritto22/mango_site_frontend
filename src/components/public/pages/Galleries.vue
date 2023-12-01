<template>
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center h-100">
        <div class="row justify-content-center align-items-center flex-column gallery h-100" v-if="paintings.length > 0">
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
                    <div class="col d-flex flex-wrap justify-content-center h-100" v-if="showPaintingGallery">
                        <div class="painting-card d-flex justify-content-center align-items-center" v-for="painting, i in paintings" :key="i">
                            <img :src="painting.imageDataBase64" :alt="painting.title" @click="viewSinglePainting(painting)">
                        </div>
                    </div>

                    <!-- <div class="col d-flex flex-wrap justify-content-center h-100" v-if="showSinglePainting">
                        <div class="painting-single d-flex justify-content-center align-items-center h-100">
                            <img :src="singlePainting.imageDataBase64" :alt="singlePainting.title">
                        </div>
                    </div> -->

                    <div class="container-fluid painting-container" v-if="showSinglePainting">
                        <div class="row">
                            <div class="col-lg-10 col-md-12">
                                <div class="painting-single d-flex justify-content-center align-items-center">
                                    <img v-if="viewMainPainting" :src="singlePainting.imageDataBase64" :alt="singlePainting.title">
                                    <img v-else :src="currentDetail.imageBase64" :alt="currentDetail.name">
                                </div>

                                <div class="info mt-5">
                                    <h4>Informazioni</h4>

                                    <ul>
                                        <li>Titolo: {{ singlePainting.title }}</li>
                                        <li>Dimensioni: {{ singlePainting.size }}</li>
                                        <li>Tecnica: {{ singlePainting.tecnique }}</li>
                                        <li>Anno: {{ singlePainting.year }}</li>
                                    </ul>
                                    <button @click="viewPaintingGallery">Gallery</button>
                                </div>
                            </div>

                            <div class="row md-down-screen d-flex w-100">
                                <div v-if="singlePainting.details != null" class="details-container-md">
                                    <h4>Dettagli</h4>
                                    <div class="body-details-md d-flex flex-wrap">
                                        <div class="details-md" v-for="detail, i in singlePainting.details" :key="i">
                                            <img :src="detail.imageBase64" :alt="detail.name" @click="viewSingleDetail(detail)">
                                        </div>
                                    </div>
                                </div>

                                <div class="mini-painting-container">
                                    <h4>Quadro</h4>
                                    <div class="mini-painting-md">
                                        <img :src="singlePainting.imageDataBase64" :alt="singlePainting.title" @click="viewMainPaintingFn">
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2 lg-up-screen">
                                <div v-if="singlePainting.details != null" class="details-container">
                                    <h4 id="titolo-dettagli">Dettagli</h4>
                                    <div class="body-details">
                                        <div class="details d-flex justify-content-center align-items-center" v-for="detail, i in singlePainting.details" :key="i">
                                            <img :src="detail.imageBase64" :alt="detail.name" @click="viewSingleDetail(detail)">
                                        </div>
                                    </div>
                                </div>

                                <h4>Quadro</h4>
                                <div class="mini-painting d-flex justify-content-center align-items-center">
                                    <img :src="singlePainting.imageDataBase64" :alt="singlePainting.title" @click="viewMainPaintingFn">
                                </div>
                            </div>
                        </div>
                    </div>

                <!-- </div> -->
                
            <!-- </div> -->

            <!-- <div class="col-1 button right">
                @click="viewPaintingGallery()"
            </div> -->
        </div>

        <div v-else>
            <Loader/>
        </div>

        <div class="row" id="plus" v-if="currentPage < pages">
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
            singlePainting:{},
            showPaintingGallery: true,
            showSinglePainting: false,
            viewMainPainting: true,
            currentDetail:{}
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
        },
        viewSinglePainting(painting){
            this.singlePainting = painting;
            this.showPaintingGallery = false;
            this.showSinglePainting = true;
        },
        viewPaintingGallery(){
            this.singlePainting = {};
            this.showPaintingGallery = true;
            this.showSinglePainting = false;
        },
        viewMainPaintingFn(){
            this.viewMainPainting = true;
        },
        viewSingleDetail(detail){
            this.currentDetail = detail;
            this.viewMainPainting = false;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/variables.scss';


@media (max-width: 992px) {
    .md-down-screen {
        display: block !important;
        margin: 0 15px;
    }
    .lg-up-screen {
        display: none !important;
    }
}

@media (min-width: 992px) {
    .lg-up-screen {
        display: block !important;
    }
    .md-down-screen {
        display: none !important;
    }
}


#plus{
    margin-top: 5px;
}
#titolo-dettagli{
    position: fixed;
    background-color: gray;
    z-index: 3;
    width: 100%;
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
.container-fluid{
    background-color: #232623;
}
.gallery{
    // height: 80%;
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
// .painting-single{
//     img{
//         height: 79vh;
//         max-width: 100%;
//         object-fit: contain;
//     }
// }
.painting-container{
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    margin: 0;
    padding: 25px;
    background-color: gray;
    .painting-single{
        // height: 77vh;
        width: 100%;
        background: aliceblue;
        img{
            height: 400px;
            max-width: 100%;
            object-fit: contain;
        }
    }
    .details-container{
        max-height: 58vh;
        overflow: auto;
    }
    .body-details{
        margin-top: 35px;
        .details{
            margin-bottom: 10px;
            img{
                height: 200px;
                width: 200px;
                max-width: 100%;
                object-fit: cover;
                cursor: pointer;
            }
        }
    }
    
    .mini-painting{
        img{
            height: 200px;
            width: 200px;
            max-width: 100%;
            object-fit: cover;
            cursor: pointer;
        }
    }
}
.details-md{
    margin-right: 10px;
    margin-bottom: 10px;
    img{
        height: 200px;
        width: 200px;
        max-width: 100%;
        object-fit: cover;
        cursor: pointer;
    }
}
.mini-painting-md{
    img{
        height: 200px;
        width: 200px;
        max-width: 100%;
        object-fit: cover;
        cursor: pointer;
    }
}
</style>