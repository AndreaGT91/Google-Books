import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NavBar from "./components/NavBar";

function App() {
  const pathArray = window.location.pathname.split("/");
  let basePath = "";

  if (pathArray.length > 0) {
    pathArray.pop();
    basePath = pathArray.join("/");
  };

  const [pathState] = useState(basePath);

  return (
    <Router basename={pathState}>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/Search"><Search /></Route>
          <Route exact path="/Saved"><Saved /></Route>
          <Route path="/*"><Search /></Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;