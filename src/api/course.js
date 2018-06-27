import axios from 'axios';

export function fetchCourses() {
    return axios.get('/course');
}

export function fetchCourseById(Id) {
    return axios.get(`/course/${Id}`);
}

export function saveCourse(data) {
    return axios.post('/course',data);
}

export function undateCourse(Id,data) {
    return axios.put(`/course/${Id}`, data);
}