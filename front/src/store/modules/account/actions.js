import axios from  '../../../plugins/http'
export default {
    async login ({commit},payload) {
        return new Promise((resolve, reject) => {
            axios.post('api/auth/token/login/', payload).then(response=> {
                console.log(response)
                commit('setUser', response.data)
                resolve(response)
            })
                .catch(error=> {
                    reject(error)
                })
        })
    }
}