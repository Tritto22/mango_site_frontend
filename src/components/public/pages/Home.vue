<template>
    <div class="container-fluid">
        <div v-if="slider.length > 1" class="slider" @mouseover="stopAutoplay()" @mouseleave="autoplay()">
            <div 
            v-for="(hero, i) in slider" :key="i" 
            class="hero" :class="[((i == position) ? 'active' : 'disable'), (!mouseHover ? 'effect' : '')]"
            >
                <img class="myImg" v-if="hero.img != null" :src="hero.img" :key="i" :alt="hero.title">
            </div>
        </div>

        <div v-else class="d-flex justify-content-center">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script>
import PublicService from '../../../services/public.service';

export default {
    name: "Home",
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
                            "linkImg": null
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
            this.autoplayID = setInterval(this.right, 4999);
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
    height: 85vh;
    width: 99vw;
    background-color: #0000000f;
    border-radius: 5px;
    
    overflow: hidden;
    .hero{
        position: relative;
        transition: transform 0.5s ease;
        .myImg{
            width: auto;
            height: 90%;
            // object-fit: contain;
        }
    }
}
.loader{
    margin-top: 25vh;
    height: 100px;
    width: 100px;
    border-top: 5px solid red;
    border-radius: 50%;
    animation: loader 3s linear infinite;
}
@keyframes loader {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>