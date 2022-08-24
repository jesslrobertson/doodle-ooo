import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
