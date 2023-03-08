import './App.css';
import {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import AppointmentPage from '../AppointmentPage/Appointmentpage';
import NavBar from '../../components/NavBar/NavBar'



export default function App() {
  const  [user, setUser] = useState(null);
  return (
    <main className="App">
      { user ?
      <>
        <NavBar />
        <Routes>
          <Route path="/appointments/new" element={<AppointmentPage />} />
          
        </Routes>
       </>
       
        :
        <AuthPage />
      }
    </main>
  );
  
}



