import axios from 'axios'
import authHeader from './auth-header.js'

const API_URL = "http://localhost:8000/api/"

class ProductService {
    products(){
        return axios.get(API_URL + 'products', {headers:authHeader()})
    }
    //get a specific product
    GetProduct(id)
    {
        return axios.get(API_URL + 'products/' + id, {headers:authHeader()})
    }
}
export default new ProductService()