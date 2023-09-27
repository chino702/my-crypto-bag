import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddCryptoForm from "./AddCryptoForm";
import NavBar from "./NavBar";


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-asset" element={<AddCryptoForm />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;