import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
