import axios from 'axios';

export function fetchLecturers() {
    return axios.get('/lecturer');
}

export function fetchLecturerById(id) {
    return axios.get(`/lecturer/${id}`);
}

export function saveLecturer(data) {
    return axios.post('/lecturer',data);
}

export function undateLecturer(id,data) {
    return axios.put(`/lecturer/${id}`, data);
}