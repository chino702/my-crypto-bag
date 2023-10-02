import React, { useState, useEffect } from "react";
import "./App.css";

function Dashboard() {
  // Initialize portfolioData as an empty array
  const [portfolioData, setPortfolioData] = useState([]);

  // Fetch portfolio data from the backend once the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/portfolio") // Adjust the URL to match your backend route
      .then((response) => response.json())
      .then((data) => setPortfolioData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div className="dashboard-container">
      <h2>Crypto Portfolio</h2>
      <div className="crypto-list-container">
        {portfolioData.map((asset, index) => (
          <div className="crypto-item" key={index}>
            <h3>{asset.name}</h3>
            <div className="crypto-item-details">
              <p>
                <strong>Quantity:</strong> {asset.quantity}
              </p>
              <p>
                <strong>Price:</strong> ${asset.price}
              </p>
              <p>
                <strong>Value:</strong> ${asset.quantity * asset.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;