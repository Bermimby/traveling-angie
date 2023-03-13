import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-services";
import AuthPage from "../AuthPage/AuthPage";
import AppointmentPage from "../AppointmentPage/AppointmentPage";
import NavBar from "../../components/NavBar/NavBar";
import * as appointmentsAPI from "../../utilities/appointments-api";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [appointment, setAppointment] = useState([""]);

  useEffect(
    function () {
      async function getAppointment() {
        let appointments = await appointmentsAPI.getAllAppointments();
        setAppointment(appointments);
      }

      if (user) {
        getAppointment();
      } else {
      }
    },
    [user]
  );

  async function addAppointment(newAppointment) {
    const newestApt = await appointmentsAPI.addAppointment(newAppointment);
    setAppointment([...appointment, newestApt]);
  }

  async function deleteAppointment(delAppointment) {
    const newAppointments = await appointmentsAPI.deleteAppointment(
      delAppointment
    );
    setAppointment(newAppointments);
  }

  async function updateAppointment(appointmentId, updateAppointment) {
    const updatedAppointment = await appointmentsAPI.updateAppointment(
      appointmentId,
      updateAppointment
    );
    const newUpdatedAppointment = { ...updatedAppointment };
    const foundAppointment = appointment.findIndex(
      (appointment) => appointment._id === appointmentId
    );
    const newAppointments = [...appointment];
    newAppointments[foundAppointment] = newUpdatedAppointment;
    setAppointment(newAppointments);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route
              path="/"
              element={
                <AppointmentPage
                  user={user}
                  appointment={appointment}
                  addAppointment={addAppointment}
                  updateAppointment={updateAppointment}
                  deleteAppointment={deleteAppointment}
                />
              }
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

