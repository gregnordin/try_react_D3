import React, { Component } from "react";
import * as d3 from "d3";

export default class Transcription extends Component {
  componentDidMount() {
    this.transcribe();
  }

  componentDidUpdate(prevProps, prevState) {
    this.transcribe();
  }

  transcribe = () => {
    // const node = d3.select(this.node)
    const height = 120;
    const width = 500;
    const margin = { top: 10, right: 20, bottom: 20, left: 20 };

    const node = d3.select(this.node).attr("viewBox", [0, 0, width, height]);
    const x = d3.scaleLinear([0, 10], [margin.left, width - margin.right]);
    const rx = d3.randomUniform(...x.domain());
    const ry = d3.randomNormal(height / 2, height / 12);

    const xAxis = g =>
      g
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));
    const brush = d3
      .brushX()
      .extent([
        [margin.left, margin.top],
        [width - margin.right, height - margin.bottom]
      ])
      .on("start brush end", brushed);
    const circle = node
      .append("g")
      .attr("fill-opacity", 0.2)
      .selectAll("circle")
      .data(Float64Array.from({ length: 800 }, rx))
      .join("circle")
      .attr("transform", d => `translate(${x(d)},${ry()})`)
      .attr("r", 3.5);


    node.append("g").call(xAxis);

    node
      .append("g")
      .call(brush)
      .call(brush.move, [3, 5].map(x))
      .call(g =>
        g
          .select(".overlay")
          .datum({ type: "selection" })
          .on("mousedown touchstart", beforebrushstarted)
      );

    function beforebrushstarted() {
      const dx = x(1) - x(0); // Use a fixed width when recentering.
      const [cx] = d3.mouse(this);
      const [x0, x1] = [cx - dx / 2, cx + dx / 2];
      const [X0, X1] = x.range();
      d3.select(this.parentNode).call(
        brush.move,
        x1 > X1 ? [X1 - dx, X1] : x0 < X0 ? [X0, X0 + dx] : [x0, x1]
      );
    }

    function brushed() {
      const selection = d3.event.selection;
      if (selection === null) {
        circle.attr("stroke", null);
      } else {
        const [x0, x1] = selection.map(x.invert);
        circle.attr("stroke", d => (x0 <= d && d <= x1 ? "red" : null));
      }
    }

    // return svg.node();
  };

  render() {
    return (
      <div>
        <h1>D3 Transcribe</h1>
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
// import Transcription from "./d3/Transcription"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           <Transcription
//             // data={[5, 10, 1, 3, 9, 6, 2, 3, 4, 5, 6, 7]}
//             // size={[300, 300]}
//           />
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
