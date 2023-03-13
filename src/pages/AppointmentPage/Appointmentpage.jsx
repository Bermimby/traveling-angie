import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import AppointmentsList from "../../components/AppointmentsList/AppointmentsList";

export default function AppointmentPage({
  user,
  appointment,
  addAppointment,
  updateAppointment,
  deleteAppointment,
}) {
  return (
    <>
      <div>
        <h1>Welcome {user.name}</h1>
        <h2>Create An Appointment</h2>
        <AppointmentForm addAppointment={addAppointment} />
      </div>
      <div>
        <AppointmentsList
          appointment={appointment}
          updateAppointment={updateAppointment}
          deleteAppointment={deleteAppointment}
        />
      </div>
    </>
  );
}