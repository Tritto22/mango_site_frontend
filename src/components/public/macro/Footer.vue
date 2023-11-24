<template>
    <footer class="d-flex align-items-center justify-content-center">
        <p class="copyRight">All images © AntonioMango</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">
@import '../../../assets/style/global.scss';

footer{
    padding: 5px 10px 0 10px;
    .copyRight{
        font-size: 10px;
        text-align: center;
    }
}
</style>