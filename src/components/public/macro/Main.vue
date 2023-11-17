<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Main'
}
</script>

<style lang="scss">
@import '../../../assets/style/global.scss';
main{
    height: 85vh
}
</style>