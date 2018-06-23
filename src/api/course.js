import axios from 'axios';

export function fetchCourses() {
    return axios.get('/course');
}

export function fetchCourseById(id) {
    return axios.get(`/course/${id}`);
}

export function saveCourse(data) {
    return axios.post('/course',data);
}

export function undateCourse(id,data) {
    return axios.put(`/course/${id}`, data);
}