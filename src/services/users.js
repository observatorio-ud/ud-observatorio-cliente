import axios from "axios";
const userUrl = 'https://observatorio.planestic.udistrital.edu.co/api'
//const userUrl = 'http://192.168.0.6:3025'
class UsersService {

    getUsers() {
        const data = {}
        return axios.get(`${userUrl}/user`, { params: data })
    }
    deleteUsersById(id) {
        return axios.delete(`${userUrl}/user`, { params: { id } })
    }

    getUsersByid(id) {
        return axios.get(`${userUrl}/user`, { params: { id } })
    }
    getUsersByEmail(email) {
        return axios.get(`${userUrl}/user`, { params: { email: email } })
    }
    createUser(data) {
        return axios.post(`${userUrl}/user`, data)
    }
    updateUser(data, id) {
        return axios.put(`${userUrl}/user`, data, { params: { id } })
    }

    getUserConteo(dato) {
        const data = dato
        return axios.get(`${userUrl}/users/contar`, { params: data });
    }
}
   
export default new UsersService();