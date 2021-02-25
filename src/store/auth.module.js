
import AuthService from '../services/auth.service'

const user = JSON.parse(localStorage.getItem('user'));
const initialstate = user ? {status: {loggedIn:true}, user}: {status : {loggedIn:false}, user:null};
export const auth  =  {
   
    namespaced:true,
    state : initialstate,
    actions: {
        register({commit},payload)
        {
            let newuser = {
                name:payload.name,
                email:payload.email,
                telephone:payload.telephone,
                password:payload.password,
                password_confirmation:payload.password_confirmation
            }
            return AuthService.register(newuser).then(
                response => {
                    commit("registerUser", response.data.data)
                    return  Promise.resolve(response.data)
                }).catch(error => {
                    commit("registerFailure")
                    return Promise.reject(error)
                 
                })
          
        },
        login({commit},payload)
        {
            let loginuser = {
                email:payload.email,
                password:payload.password
            }
            return AuthService.login(loginuser).
            then(response => {
                commit("loginUser", response.data)
                return response
            }).catch(error => {
                commit("loginFailure")
                return Promise.reject(error)
            })
        },
        logout({commit})
        {
            console.log(user)
            return AuthService.logout(user).then(response => {
               // console.log(response)
                commit("logoutUser")
                return response
            })
             
        }
    }, 
    mutations:{
        registerUser(state)
        {
            state.status.loggedIn = true
           
        },
        registerFailure(state)
        {
            state.status.loggedIn = false
           
        },
        loginUser(state)
        {
            state.status.loggedIn = true
            state.user = user
        },
        loginFailure(state)
        {
            state.status.loggedIn = false
            state.user = null
        },
        logoutUser(state)
        {
            state.status.loggedIn = false
            state.user = null
        }
    }
}