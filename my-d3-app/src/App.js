import React from "react";
import "./App.css";
import Transcription2 from "./d3/Transcription2"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Transcription2
            // data={[5, 10, 1, 3, 9, 6, 2, 3, 4, 5, 6, 7]}
            // size={[300, 300]}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
