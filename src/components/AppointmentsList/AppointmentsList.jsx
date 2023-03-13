import AppointmentForm from "../AppointmentForm/AppointmentForm";

export default function AppointmentsList({
  appointment,
  updateAppointment,
  deleteAppointment,
}) {
  return (
    <>
      {appointment.map((appointment, idx) => (
        <>
          <p>{appointment.date}</p>
          <p>{appointment.appointmentTime}</p>
          <p>{appointment.location}</p>
          <button onClick={() => deleteAppointment(appointment._id)}>
            DELETE
          </button>
        </>
      ))}
    </>
  );
}