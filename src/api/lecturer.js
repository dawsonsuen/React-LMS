import axios from 'axios';

export function fetchLecturers() {
    return axios.get('/lecturer');
}

export function fetchLecturerById(Id) {
    return axios.get(`/lecturer/${Id}`);
}

export function saveLecturer(data) {
    return axios.post('/lecturer',data);
}

export function updateLecturer(Id,data) {
    return axios.put(`/lecturer/${Id}`, data);
}

export function deleteLecturer(Id) {
    return axios.delete(`/lecturer/${Id}`);
}