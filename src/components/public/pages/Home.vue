<template>
    <div class="container-fluid">
        <div v-if="slider.length > 0" class="slider">
            <div 
            v-for="(hero, i) in slider" :key="i" 
            class="hero" :class="[((i == position) ? 'active' : 'disable'), (hero.title)]" 
            @mouseover="stopAutoplay()" @mouseleave="autoplay()"
            >
                <img v-if="hero.img != null" :src="hero.img" :key="i" :alt="hero.name">
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
            slider: [],
            position: 0,
            autoplayID: null
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
            this.autoplayID = setInterval(this.right, 3000)
        },
        stopAutoplay: function () {
            clearInterval(this.autoplayID)
        }
    },
    created(){
        PublicService.getSliderPaintings().then(
            response => {
                this.slider = response.data.payload;
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
    height: 100%;
    width: 100%;
}
.disable{
    display: none;
}
.slider{
    height: 85vh;
    background-color: #0000000f;
    border-radius: 5px;
    .hero{
        img{
            width: 100%;
            height: 90%;
            object-fit: contain;
        }
    }
}
.loader{
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