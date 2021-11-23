import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AppointmentNew from "./Components/Appointment/AppointmentNew/AppointmentNew";
import Home from "./Components/Home/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/appointment" element={<AppointmentNew/>} />
      </Routes>
    </Router>
  );
}

export default App;
