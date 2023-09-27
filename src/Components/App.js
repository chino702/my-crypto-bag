import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddAssetForm from "./AddAssetForm";
import NavBar from "./NavBar";

function App() {
  return(
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/add-asset" component={AddAssetForm} />
        <Redirect to="/dashboard"/>
      </Switch>
    </Router>
  );
}


export default App;