import axios from 'axios'

const service = axios.create({
    baseURL: '/',
    timeout: 30000
})

service.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
    return config
})

service.interceptors.response.use(res => {
    console.log('res ==>', res);
    const { data: { answer } } = res
    return Promise.resolve(answer)
}, err => {
    Promise.reject(err)
})

export default service