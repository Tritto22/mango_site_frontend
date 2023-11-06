<template>
    <div class="container-fluid">
        <div class="row  p-4">
            <div class="col">
                <h3>Questa è la tua dashboard</h3>
            </div>
            <div class="col d-flex justify-content-end">
                <a href="" class="me-4">
                    <button type="button" class="btn btn-success">Aggiungi quadro</button>
                </a>
                <a href="" class="me-4">
                    <button type="button" class="btn btn-secondary">Pagina Iniziale</button>
                </a>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Size</th>
                    <th scope="col">Year</th>
                    <th scope="col">Slug</th>
                    <th scope="col" class="d-flex justify-content-center">Azioni</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="painting in paintings" :key="painting.id">
                    <th scope="row">{{ painting.id }}</th>
                    <td>{{ painting.title }}</td>
                    <td>{{ painting.size }}</td>
                    <td>{{ painting.year }}</td>
                    <td>{{ painting.slug }}</td>
                    <td class="d-flex justify-content-end pe-3">
                        <a href="">
                            <button type="button" class="btn btn-primary">Visualizza</button>
                        </a>
                        <a class="mx-4" href="">
                            <button type="button" class="btn btn-warning">Modifica</button>
                        </a>
                        <form method="post">
                            <button type="submit" class="btn btn-danger">Elimina</button>
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import PublicService from '../../../../services/public.service';

export default {
    name: 'Dashboard',
    data() {
        return {
            paintings: {

            }
        }
    },
    created() {
        PublicService.getPublicContent().then(
            response => {
                this.paintings = response.data.payload;
            },
            error => {
                this.content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
            }
        );
    }
}
</script>

<style>

</style>