import React from "react";


function Dashboard() {
    //portfolio data will go here
    const portfolioData = [
        {name: "Bitcoin", quantity: 2.5, price: 26600},
        {name: "Ethereum", quantity: 10, price: 1558},
        {name: "TetherUSD", quantity: 1000, price: 1},
        {name: "Litecoin", quantity: 100, price: 64},
        {name: "Dogecoin", quantity: 3300, price: },
        {name: "Cardano", quantity: 50000, price: },
];

return (
    <div>
        <h2>Crypto Portfolio</h2>
        <ul>
            {portfolioData.map((asset, index) => (
                <li key={index}> 
                {asset.name} - Quantity: {asset.quantity}, Price: ${asset.price}</li>
            ))}
        </ul>
    </div>
);
}

export default Dashboard;