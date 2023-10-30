<template>
    <div class="container">
        <h1>MODIFICA</h1>
        <form name="form" @submit.prevent="handleUpdate">
            <div v-if="!successful">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="username" class="form-control" id="username"  v-model="updateUser.username" v-validate="'required|min:3|max:20'" name="username">
                    <div v-if="submitted && errors.has('username')" class="alert-danger">{{ errors.first('username') }}</div>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" v-model="updateUser.email" v-validate="'required|email|max:50'" name="email">
                    <div v-if="submitted && errors.has('email')" class="alert-danger">{{ errors.first('email') }}</div>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" v-model="updateUser.password" v-validate="'required|min:6|max:40'" name="password">
                    <div v-if="submitted && errors.has('password')" class="alert-danger">{{ getErrorMessage('password') }}</div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Modifica</button>
                </div>
            </div>
        </form>

        <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">{{ message }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'UserUpdate',
    data() {
        return {
            updateUser: {
                username: '',
                email: '',
                password: ''
            },
            submitted: false,
            successful: false,
            message: ''
        };
    },
    computed: {
        ...mapState('auth', ['user'])
    },
    watch: {
        user: {
            handler(newValue) {
                if (newValue && newValue.username) {
                    if (newValue.username && newValue.email) {
                        this.updateUser.username = newValue.username;
                        this.updateUser.email = newValue.email;
                    }
                }
            },
            immediate: true
        }
    },
    methods: {
        handleUpdate() {
            this.message = '';
            this.submitted = true;
            this.$validator.validate().then(isValid => {
                if (isValid) {
                    this.$store.dispatch('auth/update', this.updateUser).then(
                        data => {
                            this.message = data.message;
                            this.successful = true;
                        },
                        error => {
                            this.message =
                                (error.response && error.response.data) ||
                                error.message ||
                                error.toString();
                            this.successful = false;
                        }
                    );
                }
            });
        },
        getErrorMessage(field) {
            if (field === 'password' && this.submitted && this.errors.has('password')) {
                return 'Inserisci la vecchia password oppure una nuova con minimo 6 e massimo 40!';
            }
            return this.errors.first(field);
        }
    }
}
</script>

<style>

</style>