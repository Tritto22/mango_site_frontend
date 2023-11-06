<template>
    <div class="container-fluid">
        <h1>{{ painting.title }}</h1>
        <p>{{ painting.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'ReadPainting',
    data(){
        return{
            painting:{}
        }
    },
    created() {
        this.painting = this.$route.params.data
    }
}
</script>

<style>

</style>