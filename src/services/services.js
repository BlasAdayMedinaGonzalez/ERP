import axios from 'axios';
const APIURL = 'http://localhost:8000/api/v1'


const fgetAllemployees = async () => {
    return await axios.get(`${APIURL}/employees`);
}

const agregaremployee = (employee) => {
    return axios.post(`${APIURL}/employee`, employee)
}

const editaremployee = (employee, id) => {
    return axios.put(`${APIURL}/employee/${id}`, employee);
}

const eliminaremployee = (id) => {
    return axios.delete(`${APIURL}/employee/${id}`);
}

export {fgetAllemployees, agregaremployee, editaremployee, eliminaremployee};