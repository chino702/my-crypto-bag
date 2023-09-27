import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import AddAssetForm from "./Components/AddAssetForm";


function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/add-asset" component={AddAssetForm} />
        <Redirect to="/dashboard"/>
      </Switch>
    </Router>
  );
}


export default App;