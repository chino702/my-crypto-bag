import React, { useState, useEffect } from "react";
import "./RemoveCryptoForm.css";

function RemoveCrypto() {

  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [portfolioData, setPortfolioData] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  useEffect(() => {

    fetch("http://localhost:3000/portfolio") 
      .then((response) => response.json())
      .then((data) => setPortfolioData(data))
      .catch((error) => console.error("Error fetching portfolio data:", error));
  }, []);

  const handleCryptoChange = (e) => {
    setSelectedCrypto(e.target.value);
  };

  const handleRemoveCrypto = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/portfolio/${selectedCrypto}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Crypto removed", data);
      // Set success message
      setSuccessMessage("Crypto successfully removed!");
      // Clear error message
      setErrorMessage("");
      // Clear the selectedCrypto state
      setSelectedCrypto("");
      // Refetch the portfolio data to reflect the removal
      fetch("http://localhost:3000/portfolio")
        .then((response) => response.json())
        .then((data) => setPortfolioData(data))
        .catch((error) => console.error("Error fetching portfolio data:", error));
    })
    .catch((error) => {
      console.error("Error removing cryptocurrency", error);
      // Set error message
      setErrorMessage("Error removing crypto. Please try again.");
      // Clear success message
      setSuccessMessage("");
    });

    // Clear success and error messages after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000); // 3000 milliseconds (3 seconds)
};

  return (
    <div className="remove-crypto-container"> 
      <h2>Remove Cryptocurrency</h2>
       <p className="success-message">{successMessage}</p>
       <p className="error-message">{errorMessage}</p>
      <form className="remove-crypto-form" onSubmit={handleRemoveCrypto}> 
        <label>Select a cryptocurrency to remove:</label>
        <select
          value={selectedCrypto}
          onChange={handleCryptoChange}
          className="crypto-select"
        >
          <option value="" disabled>
            Select a cryptocurrency
          </option>
          {portfolioData.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name}
            </option>
          ))}
        </select>
        <button type="submit" className="crypto-remove-button"> {/* Apply the CSS class to the button */}
          Remove
        </button>
      </form>
    </div>
  );
}

export default RemoveCrypto;