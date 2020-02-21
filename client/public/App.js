import React from 'react';
import './App.css';
import Register from "components/Register";
import MapContainer from "components/MapContainer"
import Login from "components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MapContainer></MapContainer>
        <Login></Login>
        <Register></Register>
      </header>
    </div>
  );
}

export default App;