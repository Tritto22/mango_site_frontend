<template>
    <header>
        <div class="container-fluid">
            <div class="row row-cols-2">
                <div class="col d-flex align-items-center ps-5">
                    <a href="#">
                        <h2>Antonio Mango</h2>
                    </a>
                </div>
                <div class="col d-flex align-items-center">
                    <nav>
                        <ul class="d-flex justify-content-around">
                            <li>
                                <h4><router-link to="/">Home</router-link></h4>
                            </li>
                            <li>
                                <h4><router-link to="/galleries">Galleries</router-link></h4>
                            </li>
                            <li>
                                <h4><router-link to="/about">About</router-link></h4>
                            </li>
                            <li>
                                <h4><router-link to="/blog">Blog</router-link></h4>
                            </li>
                            <li>
                                <h4><router-link to="/contact">Contact</router-link></h4>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Header'
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/global.scss';
.col{
    height:80px;
    li{
        margin-left: 20px;
    }
}

</style>