import sendRequest from './send-request';
const BASE_URL = '/api/appointments'

export function getAllAppointments() {
    return sendRequest(`${BASE_URL}/index`);
}

export function addAppointment (appointmentForm) {
    return sendRequest(`${BASE_URL}/create`, 'POST', appointmentForm);
}

export function deleteAppointment (appointment) {
    return sendRequest(`${BASE_URL}/delete/${appointment}`, 'DELETE');
}

export function updateAppointment (appointment, updateAppointmentData) {
    return sendRequest(`${BASE_URL}/${appointment}`, 'PUT', updateAppointmentData)
}