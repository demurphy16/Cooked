import axios from 'axios'

const baseUrl = 'http://localhost:300'

const api = axios.create({
  baseURL: baseUrl
})

export default api