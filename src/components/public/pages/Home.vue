<template>
    <!-- @mouseup="autoplay()" -->
    <div class="container-fluid">
        <div v-if="slider.length > 1" class="slider">
            <div 
            v-for="(hero, i) in slider" :key="i" 
            class="hero" :class="[((i == position) ? 'active' : 'disable'), (!mouseHover ? 'effect' : '')]"
            >
                <img class="myImg" v-if="hero.img != null" :src="hero.img" :key="i" :alt="hero.title" @mousedown="stopAutoplay()" @mouseup="autoplay()">
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
            this.autoplayID = setInterval(this.right, 5000);
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
    // animation: sliderInOut 5s ease-in-out;
    animation: fadeIn 1.5s, fadeOut 1.5s 3.6s;
}
// @keyframes sliderInOut{
//     0% {left: 100%; top: 50%; transform: translate(100%, -50%);}
//     40% {left: 50%; top: 50%; transform: translate(-50%, -50%);}
//     50% {left: 50%; top: 50%; transform: translate(-50%, -50%);}
//     80% {left: 50%; top: 50%; transform: translate(-50%, -50%);}
//     100% {left: 0%; top: 50%; transform: translate(-100%, -50%);}
// }
@keyframes fadeIn {
    from {opacity: 0}
    to {opacity: 1}
}
@keyframes fadeOut {
    from {opacity: 1}
    to {opacity: 0}
}
.disable{
    display: none;
}
.slider{
    height: 80vh;
    overflow: hidden;
    .hero{
        position: relative;
        transition: transform 0.5s ease;
        cursor: pointer;
        .myImg{
            width: 95%;
            height: auto;
        }
    }
}
</style>