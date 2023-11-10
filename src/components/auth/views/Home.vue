<template>
    <div class="container">
        <header class="jumbotron">
            <h3>Benvenuto nell'area admin</h3>
            <h4 v-if="currentUser != null">{{ currentUser.username }}</h4>
            <router-link to="admin/login" v-else>
                <button type="button" class="btn btn-primary">Autenticati</button>
            </router-link>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
// import UserService from '../../../services/user.service';

export default {
    name: 'Home',
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    // data() {
    //     return {
    //         content: ''
    //     };
    // },
    // mounted() {
    //     UserService.getPublicContent().then(
    //         response => {
    //             this.content = response.data;
    //         },
    //         error => {
    //             this.content =
    //                 (error.response && error.response.data) ||
    //                 error.message ||
    //                 error.toString();
    //         }
    //     );
    // }
};
</script>
