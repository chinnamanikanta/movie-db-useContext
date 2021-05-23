import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MoviesDashboard from "./components/MovieDashboard";
import SingleMovie from "./components/SingleMovie";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MoviesDashboard />
        </Route>
        <Route exact path="/movies/:id" component={SingleMovie}></Route>
      </Switch>
    </Router>
  );
}
