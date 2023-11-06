<template>
  <div id="app">
    <div class="public" v-if="isPublicRoute">
      <Header/>
      <Main/>
      <Footer/>
    </div>
    <div class="admin" v-else>
      <AuthHeader/>
      <AuthMain/>
      <!-- <AuthFooter/> -->
    </div>
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href class="navbar-brand" @click.prevent>Mango's Site</a>
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">
              <font-awesome-icon icon="home" />Home
            </router-link>
          </li>
          <li v-if="showAdminBoard" class="nav-item">
            <router-link to="/admin" class="nav-link">Admin Board</router-link>
          </li>
          <li v-if="showModeratorBoard" class="nav-item">
            <router-link to="/mod" class="nav-link">Moderator Board</router-link>
          </li>
          <li class="nav-item">
            <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
          </li>
        </div>

        <div v-if="!currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/register" class="nav-link">
              <font-awesome-icon icon="user-plus" />Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <font-awesome-icon icon="sign-in-alt" />Login
            </router-link>
          </li>
        </div>

        <div v-if="currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">
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

      <div class="container">
        <router-view />
      </div> -->
  </div>
</template>

<script>
import Header from './components/public/macro/Header.vue'
import Main from './components/public/macro/Main.vue'
import Footer from './components/public/macro/Footer.vue'
import AuthHeader from './components/auth/macro/AuthHeader.vue'
import AuthMain from './components/auth/macro/AuthMain.vue'
// import AuthFooter from './components/auth/macro/AuthFooter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
    AuthHeader,
    AuthMain,
    // AuthFooter
  },
  computed: {
    isPublicRoute() {
      return !this.$route.path.includes('/admin');
    },
    // currentUser() {
    //   return this.$store.state.auth.user;
    // },
    // showAdminBoard() {
    //   if (this.currentUser && this.currentUser.roles) {
    //     return this.currentUser.roles.includes('ROLE_ADMIN');
    //   }

    //   return false;
    // },
    // showModeratorBoard() {
    //   if (this.currentUser && this.currentUser.roles) {
    //     return this.currentUser.roles.includes('ROLE_MODERATOR');
    //   }

    //   return false;
    // }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss">

</style>
