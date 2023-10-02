import React, { useState, useEffect } from "react";

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
    <div>
      <h2>Crypto Portfolio</h2>
      <ul>
        {portfolioData.map((asset, index) => (
          <li key={index}>
            {asset.name} - Quantity: {asset.quantity}, Price: ${asset.price}, Value: ${asset.quantity * asset.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;