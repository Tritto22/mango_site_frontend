<template>
    <header>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a href class="navbar-brand" @click.prevent>Mango's Site</a>
            <div class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link v-if="currentUser" to="/admin/user" class="nav-link">User</router-link>
                </li>
            </div>

            <div v-if="currentUser" class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link to="/admin/profile" class="nav-link">
                        <font-awesome-icon icon="user" />
                        {{ currentUser.username }}
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href @click.prevent="logOut">
                        <font-awesome-icon icon="sign-out-alt" />LogOut
                    </a>
                </li>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AuthHeader',
    computed: {
        isPublicRoute() {
            return !this.$route.path.includes('/admin');
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/admin/home');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>