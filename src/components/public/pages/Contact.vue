<template>
    <div class="container-fluid h-100">
        <div v-if="!formPage" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 h-100 align-items-center">
            <div class="col logo-card">
                <a href="" id="">
                    <img class="logo" src="../../../assets/img/contactLogo/facebook.png" alt="facebook">
                </a>
            </div>

            <div class="col logo-card">
                <a href="">
                    <img class="logo" src="../../../assets/img/contactLogo/instagram.png" alt="instagram">
                </a>
            </div>

            <!-- <div class="col logo-card">
                <div @click="showForm">
                    <img class="logo" src="../../../assets/img/contactLogo/mail.png" alt="mail">
                </div>
            </div> -->
            <div class="col logo-card">
                    <a href="mailto:tritto.simone@gmail.com?subject=Richiesta di contatto&body=Ciao%20%2C%0A%0AVorrei%20contattarti%20per%20...">
                        <img class="logo" src="../../../assets/img/contactLogo/mail.png" alt="mail">
                    </a>
                </div>
        </div>
        <div v-else class="container-form d-flex justify-content-center align-items-center h-100">
            <form class="show-form">
                <div class="row mb-4">
                    <div class="col">
                        <label for="name">Nome</label>
                        <input v-model="name" id="name" type="text" class="form-control p-2" placeholder="Nome">
                    </div>

                    <div class="col">
                        <label for="surname">Cognome</label>
                        <input v-model="surname" id="surname" type="text" class="form-control p-2" placeholder="Cognome">
                    </div>
                </div>

                <div class="form-group mb-4">
                    <label for="mailAddress">Indirizzo Email</label>
                    <input v-model="mailAddress" type="text" class="form-control p-2" id="mailAddress" placeholder="Inserisci il tuo indirizzo email">
                </div>

                <div class="form-group mb-4">
                    <label for="message">Messaggio</label>
                    <textarea v-model="message" class="form-control" id="message" rows="5"></textarea>
                </div>

                <div class="row mb-4">
                        <div class="col d-flex justify-content-between">
                            <button type="button" class="btn btn-primary p-2 mb-4">Invia</button>
                            <button type="button" class="btn btn-primary p-2 mb-4" @click="showLogo">Indietro</button>
                        </div>
                    </div>
                <!-- <button type="button" class="btn btn-primary p-2 mb-4" @click="showLogo">Indietro</button> -->
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data (){
        return{
            formPage:false,
            name: '',
            surname: '',
            mailAddress: '',
            message: ''
        }
    },

    methods: {
        showForm(){
            this.formPage = true;
        },
        showLogo() {
            this.formPage = false;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/style/global.scss';
.logo-card{
    display: flex;
    justify-content: center;
    .logo{
        cursor: pointer;
        object-fit: contain;
        height: 200px;
    }
}
label{
    cursor: pointer;
    margin-bottom: 10px;
}
.container-form{
    .show-form{
    height: 80%;
    width: 70%;
}
}

</style>