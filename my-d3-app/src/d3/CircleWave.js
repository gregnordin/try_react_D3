import React, { Component } from "react";
import * as d3 from "d3";

export default class CircleWave extends Component {
  componentDidMount() {
    this.CircleWave();
  }

  componentDidUpdate(prevProps, prevState) {
    this.CircleWave();
  }

  CircleWave = () => {
    const node = d3.select(this.node);
    // var svg = d3.select("svg"),
    let width = +node.attr("width"),
      height = +node.attr("height"),
      angles = d3.range(0, 2 * Math.PI, Math.PI / 200);
    
      var path = node.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        .attr("fill", "none")
        .attr("stroke-width", 10)
        .attr("stroke-linejoin", "round")
        
        .selectAll("path")
        .data(["cyan", "magenta", "yellow"])
        .enter().append("path")
        .attr("stroke", function(d) { return d; })
        .style("mix-blend-mode", "darken")
        .datum(function(d, i) {
            return d3.radialLine()
                .curve(d3.curveLinearClosed)
                .angle(function(a) { return a; })
                .radius(function(a) {
                var t = d3.now() / 1000;
                return 200 + Math.cos(a * 8 - i * 2 * Math.PI / 3 + t) * 
                    Math.pow((1 + Math.cos(a - t)) / 2, 3) * 32;
                });
        });
        d3.timer(function() {
            path.attr("d", function(d) {
              return d(angles);
            });
          });
  };



  render() {
    return (
      <div>
        <h1>D3 CircleWave</h1>
        <svg
          ref={node => (this.node = node)}
          style={{ background: "#fafafa", border: "2px solid #444" }}
          width={960}
          height={500}
        ></svg>
      </div>
    );
  }
}


// import React from "react";
// import "./App.css";
// import CircleWave from "./d3/CircleWave";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           <CircleWave
//             // data={[5, 10, 1, 3, 9, 6, 2, 3, 4, 5, 6, 7]}
//             // size={[300, 300]}
//           />
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
