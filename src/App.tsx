import React from 'react';
import './App.css';
import AutobahnList from "./components/autobahnList";
import BaustelleList from "./components/baustelleList";

function App() {
  return (
    <div className="App">
      <BaustelleList roadID="A1"/>
    </div>
  );
}

export default App;
