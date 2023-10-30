<template>
    <div class="container-fluid">
        <!-- <h2>Home Page</h2> -->
            <div class="slider">
                <div 
                v-for="(hero, i) in slider" :key="i" 
                class="hero" :class="[((i == position) ? 'active' : 'disable'), (hero.name)]" 
                @mouseover="stopAutoplay()" @mouseleave="autoplay()"
                >
                    <img src="" alt="">
                </div>
                <!-- <div class="hero">
                    <img :src="slider[0].path" :key="0" alt="">
                </div> -->
        </div>
    </div>
</template>

<script>

export default {
    // eslint-disable-next-line
    name: "Home",
    data() {
        return {
            slider: [
                {
                    name: 'quadro1',
                    path: require('../../../assets/img/slider/quadro1.jpg')
                },
                {
                    name: 'quadro2',
                    path: require('../../../assets/img/slider/quadro1.jpg')
                },
                {
                    name: 'quadro3',
                    path: require('../../../assets/img/slider/quadro1.jpg')
                },
                {
                    name: 'quadro4',
                    path: require('../../../assets/img/slider/quadro1.jpg')
                },
                {
                    name: 'quadro5',
                    path: require('../../../assets/img/slider/quadro1.jpg')
                }
            ],
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
    mounted() {
        this.autoplay()
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/global.scss';

    .active{
        display: block;
    }
    .disable{
        display: none;
    }
    .quadro1{
        background-image: url('../../../assets/img/slider/quadro1.jpg');
    }
    .quadro2{
        background-image: url('../../../assets/img/slider/quadro2.jpg');
    }
    .quadro3{
        background-image: url('../../../assets/img/slider/quadro3.jpg');
    }
    .quadro4{
        background-image: url('../../../assets/img/slider/quadro4.jpg');
    }
    .quadro5{
        background-image: url('../../../assets/img/slider/quadro5.jpg');
    }
    .slider{
        height: 450px;
        .hero{
            img{
                width: 100%;
                height: 390px;
                object-fit: contain;
            }
        }
    }
</style>