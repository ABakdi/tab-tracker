//import Api from '@/services/Api'
import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:8081'
})
export default {
    register(credentials){
        return Api.post('register', credentials)
    }
}