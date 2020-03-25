/*import Api from '@/services/Api'*/
import axios from 'axios'

const Api = axios.create({
    baseURL: 'http://localhost:8081'
})
export default {
    index(search){
        return Api.get('songs', search)
    },
    post(song){
        return Api.post('songs',song)
    },
    show(songId){
        return Api.get(`songs/${songId}`)
    },
    put(song,songId){
        return Api.put(`songs/${songId}`, song)
    }
}