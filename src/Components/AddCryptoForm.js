import React, { useState } from "react";
import "./AddCryptoForm.css"; 

function AddCryptoForm() {
  const [formData, setFormData] = useState({ name: "", quantity: "", price: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the backend
    fetch("http://localhost:3000/portfolio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New crypto data:", data);
        // Reset the form after successful submission
        setFormData({ name: "", quantity: "", price: "" });
        // Set success message
        setSuccessMessage("Crypto successfully added!");
        // Clear error message
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error adding crypto:", error);
        // Set error message
        setErrorMessage("Error adding crypto. Please try again.");
        // Clear success message
        setSuccessMessage("");
      });

      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3000);
      
  };

  return (
    <div className="add-crypto-form-container">
      <h2>Add Cryptocurrency</h2>
         <p className="success-message">{successMessage}</p>
         <p className="error-message">{errorMessage}</p>
      <form onSubmit={handleSubmit} className="add-crypto-form">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            step="0.01"
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            step="0.01"
          />
        </div>
        <button type="submit">Add Cryptocurrency</button>
      </form>
    </div>
  );
}

export default AddCryptoForm;