import UpdateForm from "../../components/UpdateForm/UpdateForm";

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
          <aside>
            <UpdateForm
              appointment={appointment}
              updateAppointment={updateAppointment}
            />
          </aside>
          <button onClick={() => deleteAppointment(appointment._id)}>
            DELETE
          </button>
        </>
      ))}
    </>
  );
}