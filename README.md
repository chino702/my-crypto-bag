# Crypto Portfolio Tracker App: My Crypto Bag 

A web application for managing and tracking your cryptocurrency portfolio. Add and Remove cryptocurrencies to create a portfolio. This is just a demo project built from react for my school. This does NOT track live price of cryptocurrencies, Instead you add the price and quantities to track your current value.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [License](#license)
- [Acknowledgments](#acknowledgments)


## Features

- Add cryptocurrencies to your portfolio.
- Remove cryptocurrencies from your portfolio.
- View and manage your cryptocurrency holdings.
- Responsive design for various screen sizes.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   git clone https://github.com/chino702/my-crypto-bag.git

2. Navigate to the project directory:

   cd my-crypto-bag
   
3. Install the project dependencies:

   npm install

4. Run the Frontend:

   npm start

 The frontend should now be running on http://localhost:3001.

--------------------------------------------------------------

## Backend Setup

This project uses a backend server to store cryptocurrency data. Follow these steps to set up the backend:

1. Navigate to the `backend` directory:

   cd backend

2. Install the backend dependencies:

  npm install

3. start the backend server:

  json-server --watch db.json --port 3000

The backend server should now be running on http://localhost:3000. The frontend will automatically make requests to this backend when interacting with the app.

--------------------------------------------------------------

**Usage**

Access the app via the provided URL or by running it locally.
Use the navigation bar to switch between different sections of the app.
Add cryptocurrencies to your portfolio by filling out the "Add Cryptocurrency" form.
Remove cryptocurrencies from your portfolio using the "Remove Cryptocurrency" form.
View your portfolio on the dashboard.

--------------------------------------------------------------

**Built With**

React - JavaScript library for building user interfaces.
React Router - Routing for React applications.
Db.json - A JSON file used for storing cryptocurrency data.
CSS - css files were used to style the project.

--------------------------------------------------------------

License
This project is licensed under the MIT License - see the LICENSE file for details.

--------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
