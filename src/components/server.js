import axios from 'axios'
const API = 'http://localhost:4000/api'


export const getUsers = async () => {
    return await axios.get(API);
}
export const createUser = async () => {
    return await axios.post(API);
}

