import axios from 'axios';

export function fetchStudents() {
    return axios.get('/student');
}

export function fetchStudentById(Id) {
    return axios.get(`/student/${Id}`);
}

export function saveStudent(data) {
    return axios.post('/student',data);
}

export function undateStudent(Id,data) {
    return axios.put(`/student/${Id}`, data);
}