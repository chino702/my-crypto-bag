import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddAssetForm from "./AddAssetForm";


function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/dashboard" Component={Dashboard} />
        <Route exact path="/add-asset" Component={AddAssetForm} />
        <Redirect to="./dashboard"/>
      </Switch>
    </Router>
  );
}


export default App;