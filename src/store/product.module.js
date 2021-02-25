import Vue from 'vue'
import Vuex from 'vuex'
import ProductService from '../services/product.service'
 
Vue.use(Vuex)

export const product = {
    namespaced:true,
    state:{
        products:[]
    },
    actions: {
        getProducts()
        {
            return ProductService.products().then(response => {
                console.log(response)
            })
        }
    },
    mutations: {

    },
    getters: {

    }
}