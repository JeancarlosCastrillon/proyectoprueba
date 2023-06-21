import React from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Dashboard from "./Components/Dashboard";



function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Header/>
        <Nav/>
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
