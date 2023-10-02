import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddCryptoForm from "./AddCryptoForm"; 
import NavBar from "./NavBar";
import RemoveCryptoForm from "./RemoveCryptoForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
    <Router>
      <NavBar />
       <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-crypto" element={<AddCryptoForm />} />
        <Route path="/remove-crypto" element={<RemoveCryptoForm />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
       </Routes>
        <div className="footer">
           &copy; 2023 My crypto Bag
        </div>
      </Router>
    </div>
  );
}

export default App;