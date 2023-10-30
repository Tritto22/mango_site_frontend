import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/public/pages/Home.vue';
import Galleries from './components/public/pages/Galleries.vue';
import About from './components/public/pages/About.vue';
import Blog from './components/public/pages/Blog.vue';
import Contact from './components/public/pages/Contact.vue';
import Login from './components/auth/views/Login.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        // ****************************** PUBLIC PATH ***********************************
        {
            path: '/',
            name: 'public',
            component: () => import('./components/public/pages/Home.vue'),
        },
        {
            path: '/home',
            name: "home",
            component: Home
        },
        {
            path: "/galleries",
            name: "galleries",
            component: Galleries
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/blog",
            name: "blog",
            component: Blog
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },

        // ****************************** ADMIN PATH ***********************************

        {
            path: '/admin/',
            name: 'admin',
            component: () => import('./components/auth/views/Home.vue'),
        },
        {
            path: '/admin/home',
            name: 'admin-home',
            component: () => import('./components/auth/views/Home.vue')
        },
        {
            path: '/admin/login',
            name: 'admin-login',
            component: Login
        },
        {
            path: '/admin/profile',
            name: 'admin-profile',
            component: () => import('./components/auth/views/Profile.vue')
        },
        {
            path: '/admin/board-admin',
            name: 'admin-board-admin',
            component: () => import('./components/auth/views/BoardAdmin.vue')
        },
        {
            path: '/admin/user/update',
            name: 'admin-user-update',
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
export default router