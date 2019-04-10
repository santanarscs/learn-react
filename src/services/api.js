import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistak-backend.herokuapp.com'
})

export default api