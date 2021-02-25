import axios from 'axios'
 

const API_URL = "http://localhost:8000/api/";

class AuthService {
    register(user)
    {
        return axios.post(API_URL + 'register', {
            name:user.name,
            email:user.email,
            telephone:user.telephone,
            password:user.password,
            password_confirmation: user.password_confirmation
        })
    }

    login(user)
    {
        return axios.post(API_URL + 'login', {
            email:user.email,
            password:user.password
        }).
        then(user => {
            localStorage.setItem('user', JSON.stringify(user.data))
            return user
        }).catch(error=> {
            return Promise.reject(error)
        })  
    }
    logout(user)
    {
        return axios.post(API_URL + 'logout', user)
    }
}

export default new AuthService()