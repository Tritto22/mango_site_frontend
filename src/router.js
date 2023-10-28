import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
// import Login from './views/Login.vue';
// import Register from './views/Register.vue';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            // component: Home

            // lazy-loaded
            component: () => import('./components/auth/views/Home.vue')
        },
        {
            path: '/home',
            // component: Home

            name: 'home',
            // lazy-loaded
            component: () => import('./components/auth/views/Home.vue')
        },
        {
            path: '/login',
            // component: Login

            name: 'login',
            // lazy-loaded
            component: () => import('./components/auth/views/Login.vue')
        },
        {
            path: '/register',
            // component: Register

            // lazy-loaded
            component: () => import('./components/auth/views/Register.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            // lazy-loaded
            component: () => import('./components/auth/views/Profile.vue')
        },
        {
            path: '/admin',
            name: 'admin',
            // lazy-loaded
            component: () => import('./components/auth/views/BoardAdmin.vue')
        },
        {
            path: '/mod',
            name: 'moderator',
            // lazy-loaded
            component: () => import('./components/auth/views/BoardModerator.vue')
        },
        {
            path: '/user',
            name: 'user',
            // lazy-loaded
            component: () => import('./components/auth/views/BoardUser.vue')
        },
        {
            path: '/user/update',
            name: 'userUpdate',
            // lazy-loaded
            component: () => import('./components/auth/views/userCrud/UserUpdate.vue')
        }
    ]
});

// // check authorization for every actions
// router.beforeEach((to, from, next) => {
//     const publicPages = ['/login', '/register', '/home'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');

//     // trying to access a restricted page + not logged in
//     // redirect to login page
//     if (authRequired && !loggedIn) {
//         next('/login');
//     } else {
//         next();
//     }
// });