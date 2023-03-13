import { useState } from 'react'
import * as appointmentsAPI from '../../utilities/appointments-api'

export default function AppointmentForm({addAppointment}) {
    const [appointmentForm, setAppointmentForm] = useState({
        date: '',
        appointmentTime: '',
        location:'',
    })


    async function handleSubmit(evt) {
        evt.preventDefault()
        addAppointment(appointmentForm)
        setAppointmentForm({
            name: ''
        })
    }

    function handleChange(evt) {
        let newAppointmentForm = {
            ...appointmentForm,
            [evt.target.name]: evt.target.value
        }
        setAppointmentForm(newAppointmentForm)
    }
    
  
    return (
        <form onSubmit={handleSubmit}>
            <label>Date:</label>
            <input type='date' name='date' value={appointmentForm.date} onChange={handleChange}></input>
            <label>Time:</label>
            <input type='time' name='appointmentTime' value={appointmentForm.appointmentTime} onChange={handleChange}></input>
            <label>Location:</label>
            <input type='text' name='location' value={appointmentForm.location} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    );
  }