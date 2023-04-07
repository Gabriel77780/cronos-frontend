export default function (router) {
    router.beforeEach((to, from, next) => {

        const isLoggedIn = true;
        const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

        if (requiresAuth && !isLoggedIn) {
            next('/login');
        } else if (isLoggedIn && to.path == '/') {
            next('/home');
        } else if (isLoggedIn && to.path == '/login') {
            next('/home');
        } else {
            next();
        }
    });
}