import React from "react";
import "./App.css";
import CircleWave from "./d3/CircleWave";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <CircleWave
            // data={[5, 10, 1, 3, 9, 6, 2, 3, 4, 5, 6, 7]}
            // size={[300, 300]}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
