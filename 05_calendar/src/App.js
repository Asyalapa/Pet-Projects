import React from 'react';
import '../src/App.css'
import BodyCalc from "./components/Calc/BodyCalc";

function App() {
  return (
    <section className="App box">
      <div className="container">
        <BodyCalc />
      </div>
    </section>
  );
}

export default App;
