import React, { useState } from "react";

function AddAssetForm() {
  const [formData, setFormData] = useState({ name: "", quantity: "", price: "" });

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
        console.log("New asset data:", data);
        // Reset the form after successful submission
        setFormData({ name: "", quantity: "", price: "" });
      })
      .catch((error) => console.error("Error adding asset:", error));
  };

  return (
    <div>
      <h2>Add Cryptocurrency</h2>
      <form onSubmit={handleSubmit}>
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
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Asset</button>
      </form>
    </div>
  );
}

export default AddAssetForm;