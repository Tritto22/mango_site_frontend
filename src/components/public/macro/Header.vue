<template>
    <header>
        <div class="container-fluid">
            
            <!-- <div class="row row-cols-2 d-flex align-items-center">
                <div class="col d-flex align-items-center pl-5">
                    <nav class="navbar navbar-light">
                        <router-link to="/" class="navbar-brand">
                            <img src="/docs/4.6/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
                            <h4>Antonio Mango</h4>
                        </router-link>
                    </nav>
                </div>

                <div class="col d-flex align-items-center justify-content-end pr-5">
                    <nav>
                        <ul class="d-flex justify-content-around nav nav-tabs">
                            <li class="nav-item">
                                <h4 class="nav-link active"><router-link to="/">Home</router-link></h4>
                            </li>

                            <li class="nav-item">
                                <h4 class="nav-link"><router-link to="/galleries">Galleries</router-link></h4>
                            </li>

                            <li class="nav-item">
                                <h4 class="nav-link"><router-link to="/about">About</router-link></h4>
                            </li>

                            <li class="nav-item">
                                <h4 class="nav-link"><router-link to="/contact">Contact</router-link></h4>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div> -->
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <router-link to="/" class="navbar-brand logo">
                            Antonio Mango
                        </router-link>

                        <button class="navbar-toggler" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarNavAltMarkup" 
                                aria-controls="navbarNavAltMarkup" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <h4 :class="{ 'nav-link': true, 'font-weight-bolder': $route.path === '/' }"><router-link to="/">Home</router-link></h4>
                                <h4 :class="{ 'nav-link': true, 'font-weight-bolder': $route.path === '/galleries' }"><router-link to="/galleries">Gallery</router-link></h4>
                                <h4 :class="{ 'nav-link': true, 'font-weight-bolder': $route.path === '/about' }"><router-link to="/about">About</router-link></h4>
                                <h4 :class="{ 'nav-link': true, 'font-weight-bolder': $route.path === '/contact' }"><router-link to="/contact">Contact</router-link></h4>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <!-- <hr> -->
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/global.scss';
@import url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap');

a{
    text-transform: uppercase;
    font-family: 'Philosopher'; 
    color: #868686 !important;
}
.logo{
    font-size: 32px;
}
h4{
    font-size: 16px;
}
li{
    margin-left: 20px;
    margin-right: 20px;
}
nav{
    // background-color: rgba(240, 240, 240, 0.9);
    // background-color: rgba(247, 247, 247, 0.9);
    z-index: 1;
    border-radius: 10px;
    width: 95%;
}
hr{
    width: 90%;
    margin: auto;
}
</style>