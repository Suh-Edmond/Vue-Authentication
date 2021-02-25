export default (to, from, next)=> {
    const publicPages = ['user/login', 'user/register', '/'];
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')
    if(authRequired && !loggedIn){
        next('/user/login')
    }else {
        next()
    }
}