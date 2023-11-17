<template>
    <header>
        <div class="container-fluid">
            <div class="row row-cols-2 d-flex align-items-center">
                <div class="col d-flex align-items-center pl-5">
                    <h4><router-link to="/">Antonio Mango</router-link></h4>
                </div>
                <div class="col d-flex align-items-center justify-content-end">
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
                                <h4><router-link to="/contact">Contact</router-link></h4>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr>
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

.row{
    height: 9vh;
    .col{
        h4{
            font-size: 20px;
        }
        li{
            margin-left: 20px;
            margin-right: 20px;
        }
}
}

</style>