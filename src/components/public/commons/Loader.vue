<template>
    <section class="d-flex justify-content-center">
        <div class="loader"></div>
    </section>
</template>

<script>
export default {
    name: "Loader",
}
</script>

<style lang="scss" scoped>
section{
    height: 85vh;
    .loader{
        margin-top: 25vh;
        height: 100px;
        width: 100px;
        border-top: 5px solid red;
        border-radius: 50%;
        animation: loader 3s linear infinite;
    }
    @keyframes loader {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
}
</style>