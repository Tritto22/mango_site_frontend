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
  mounted() {
    document.addEventListener('contextmenu', this.disableContextMenu);
  },
  beforeDestroy() {
    document.removeEventListener('contextmenu', this.disableContextMenu);
  },
  computed: {
    isPublicRoute() {
      return !this.$route.path.includes('/admin');
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/admin/login');
    },
    // disableContextMenu(event) {
    //   event.preventDefault();
    //   alert('Function Disabled!');
    // }
  }
}
</script>

<style lang="scss">
@import './assets/style/global.scss';
</style>
