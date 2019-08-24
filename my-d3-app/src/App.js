import React from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/BarChart.js</code> and save to reload.
        </p>
        <div>
          <BarChart data={[5,10,1,3,9,6,2,3,4,5,6,7]} size={[300,300]} />
        </div>
      </header>
    </div>
  );
}

export default App;
