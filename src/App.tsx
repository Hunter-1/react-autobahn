import React from 'react';
import './App.css';
import AutobahnList from "./components/autobahnList";

function App() {
  return (
    <div className="App">
        <h1>Liste von Autobahnen und deren Baustellen</h1>
      <AutobahnList />
    </div>
  );
}

export default App;
