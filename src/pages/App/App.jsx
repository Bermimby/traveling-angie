
import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-services";
import AuthPage from "../AuthPage/AuthPage";
import AppointmentPage from "../AppointmentPage/Appointmentpage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/appointments/new" element={<AppointmentPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

