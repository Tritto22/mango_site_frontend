<template>
    <div class="container-fluid">
        <div class="row  pt-4">
            <div class="col">
                <nav class="d-flex justify-content-end">
                    <a class="mx-4" >
                        <button type="button" class="btn btn-warning">Modifica</button>
                    </a>
                    <form method="post">
                        <button type="submit" class="btn btn-danger">Elimina</button>
                    </form>
                </nav>
            </div>
        </div>
        <div class="row  p-4">
            <div class="col">
                <h2 >Titolo => <span>{{ painting.title.toUpperCase() }}</span ></h2>
            </div>
        </div>
        <div class="row  p-4">
            <div class="col">
                <h2 >Immagine => </h2>
                <div class="d-flex justify-content-center">
                    <img v-if="painting.img != null" :alt="painting.title" :src="painting.img">
                    <img v-else src="http://drive.google.com/uc?export=view&id=1ZpJCY7ijNY1oO1mvGMl2gnOcaIXyGM3n">
                </div>
            
            </div>
        </div>
        <div class="row  p-4">
            <div class="col">
                <h2 >Misure => <span>{{ painting.size }}</span ></h2>
            </div>
        </div>
        <div class="row  p-4">
            <div class="col">
                <h2 >Anno => <span>{{ painting.year }}</span ></h2>
            </div>
        </div>
        <div class="row  p-4">
            <div class="col">
                <h2 >Descrizione => <span>{{ painting.description }}</span ></h2>
            </div>
        </div>
        <div class="row  p-4">
            <div class="col">
                <h2 >Slug => <span>{{ painting.slug }}</span ></h2>
            </div>
        </div>
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