<template>
    <div class="container" v-if="currentUser!=null">
        <header class="jumbotron">
            <h3>
                <strong>{{ currentUser.username }}</strong> Profile
            </h3>
        </header>
        <p>
            <strong>Token:</strong>
            {{ currentUser.token.substring(0, 20) }} ... {{ currentUser.token.substr(currentUser.token.length - 20) }}
        </p>
        <p>
            <strong>Id:</strong>
            {{ currentUser.id }}
        </p>
        <p>
            <strong>Email:</strong>
            {{ currentUser.email }}
        </p>
        <strong>Authorities:</strong>
        <ul>
            <li v-for="(role, index) in currentUser.roles" :key="index">{{ role }}</li>
        </ul>
        <router-link to="/admin/user/update">
            <button type="button" class="btn btn-warning">Modifica</button>
        </router-link>       
    </div>
</template>

<script>
export default {
    name: 'Profile',
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/admin/login');
        }
    }
};
</script>
