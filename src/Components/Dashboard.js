import React, { useState, useEffect } from "react";
import "./App.css";

function Dashboard() {
  // Initialize portfolioData as an empty array
  const [portfolioData, setPortfolioData] = useState([]);
  const [sortingOption, setSortingOption] = useState("alphabetical");

  // Fetch portfolio data from the backend server
  useEffect(() => {
    fetch("http://localhost:3000/portfolio") 
      .then((response) => response.json())
      .then((data) => setPortfolioData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  //Sort the cryptocurrency function
  const sortData = (data) => {
    if (sortingOption === "alphabetical") {
      return data.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortingOption === "value") {
      return data.slice().sort((a, b) => a.price * a.quantity - b.price * b.quantity);
    }
    return data;
  };


  const handleSortingOptionChange = (option) => {
    setSortingOption(option);
  };

  return (
    <div className="dashboard-container">
      <h2>Crypto Portfolio</h2>
      <div className="sorting-options">
        <button className="sort-button" onClick={() => handleSortingOptionChange("alphabetical")}>Sort Alphabetically</button>
        <button className="sort-button" onClick={() => handleSortingOptionChange("value")}>Sort by Value</button>
      </div>
      <div className="crypto-list-container">
        {sortData(portfolioData).map((asset, index) => (
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