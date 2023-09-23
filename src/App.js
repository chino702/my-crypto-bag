import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddAssetForm from "./AddAssetForm";


function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" Component={Dashboard} />
        <Route exact path="/add" Component={AddAssetForm} />
      </Switch>
    </Router>
  );
}


export default App;