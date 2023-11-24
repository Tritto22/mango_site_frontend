<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style lang="scss">
// @import '../../../assets/style/global.scss';
main{
    padding-top: 10px;
    padding-bottom: 10px;
    height: 84vh;
    overflow: scroll;
}
</style>