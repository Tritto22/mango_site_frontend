<template>
    <!-- @mouseup="autoplay()" -->
    <div class="container-fluid">
        <div v-if="slider.length > 1" class="slider">
            <div 
            v-for="(hero, i) in slider" :key="i" 
            class="hero" :class="[((i == position) ? 'active' : 'disable'), (!mouseHover ? 'effect' : '')]"
            >
                <img class="myImg" v-if="hero.img != null" :src="hero.img" :key="i" :alt="hero.title" @mousedown="stopAutoplay()" @mouseup="autoplay()">
                <!-- <img class="myImg" v-if="hero.img != null" :src="slider[0].img" :alt="slider[0]"> -->
                <!-- <div v-if="hero.details != null">
                    <div 
                        v-for="(detail, i) in hero.details" :key="i"
                        class="hero" :class="[((i == position) ? 'active' : 'disable'), (!mouseHover ? 'effect' : '')]"
                    >
                        <img class="myImg" :src="detail.linkImg" :alt="hero.title" >
                    </div>
                </div> -->
            </div>
        </div>

        <div v-else>
            <Loader/>
        </div>
    </div>
</template>

<script>
import PublicService from '../../../services/public.service';
import Loader from '../commons/Loader.vue';

export default {
    name: "Home",
    components: {
        Loader
    },
    data() {
        return {
            slider: [
                {
                    "title": "Quadro slider",
                    "img": "http://drive.google.com/uc?export=view&id=1RkTyzlP1lBRtquazNEB3UGFQrM8BGYul",
                    "size": "100x100",
                    "year": 2022,
                    "tecnique": "Olio",
                    "description": "quadro sintesi",
                    "slug": "quadro-slider",
                    "totPages": 1,
                    "favorite": true,
                    "details": [
                        {
                            "name": null,
                            "linkImg": "http://drive.google.com/uc?export=view&id=1RkTyzlP1lBRtquazNEB3UGFQrM8BGYul"
                        }
                    ]
                },
            ],
            position: 0,
            autoplayID: null,
            mouseHover: false,
        }
    },
    methods: {
        left: function () {
            if (this.position == 0) {
                this.position = this.slider.length - 1;
            } else {
                this.position--;
            }
        },
        right: function () {
            if (this.position == this.slider.length - 1) {
                this.position = 0;
            } else {
                this.position++;
            }
        },
        autoplay: function () {
            this.autoplayID = setInterval(this.right, 4860);
            this.mouseHover = false;
        },
        stopAutoplay: function () {
            clearInterval(this.autoplayID);
            this.mouseHover = true;
        },
    },
    created(){
        PublicService.getSliderPaintings().then(
            response => {
                this.slider = [...this.slider, ...response.data.payload];
            },
            error => {
                console.log('Errore:', error);
            }
        );
    },
    mounted() {
        this.autoplay()
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/global.scss';

.active{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.effect{
    position: absolute;
    animation: sliderInOut 5s ease-in-out;
}
@keyframes sliderInOut{
    0% {left: 100%; top: 50%; transform: translate(100%, -50%);}
    40% {left: 50%; top: 50%; transform: translate(-50%, -50%);}
    50% {left: 50%; top: 50%; transform: translate(-50%, -50%);}
    80% {left: 50%; top: 50%; transform: translate(-50%, -50%);}
    100% {left: 0%; top: 50%; transform: translate(-100%, -50%);}
}
.disable{
    display: none;
}
.slider{
    // height: 82vh;
    height: 80vh;
    // background-color: #0000000f;
    // border-radius: 10px;
    overflow: hidden;
    .hero{
        position: relative;
        transition: transform 0.5s ease;
        cursor: pointer;
        .myImg{
            width: 95%;
            height: auto;
            // height: 1023px;
            // position: relative;
            // top: 15%;
            // object-fit: contain;
        }
    }
}
</style>