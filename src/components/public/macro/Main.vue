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
@import '../../../assets/style/variables.scss';
main{
    padding-top: 10px;
    padding-bottom: 10px;
    height: $mainHeight;
    overflow: auto;
}
</style>