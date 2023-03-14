import { useState } from "react";

export default function AppointmentForm({ appointment, updateAppointment }) {
  const [updateAppointmentForm, setUpdateAppointmentForm] = useState({
    date: "",
    appointmentTime: "",
    location: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault();
    updateAppointment(appointment._id, updateAppointmentForm);
    setUpdateAppointmentForm({
      date: "",
      appointmentTime: "",
      location: "",
    });
  }

  function handleChange(evt) {
    let newUpdateAppointmentForm = {
      ...updateAppointmentForm,
      [evt.target.name]: evt.target.value,
    };
    setUpdateAppointmentForm(newUpdateAppointmentForm);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={updateAppointmentForm.date}
        onChange={handleChange}
      ></input>
      <label>Time:</label>
      <input
        type="time"
        name="appointmentTime"
        value={updateAppointmentForm.appointmentTime}
        onChange={handleChange}
      ></input>
      <label>Location:</label>
      <input
        type="text"
        name="location"
        value={updateAppointmentForm.location}
        onChange={handleChange}
      ></input>
      <button type="submit">Update</button>
    </form>
  );
}