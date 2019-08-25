import React, { Component } from 'react'
import * as d3 from 'd3';

class BarChart extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }
   componentDidMount() {
      this.createBarChart()
   }
   componentDidUpdate() {
      this.createBarChart()
   }
   createBarChart() {
      const node = this.node
      const dataMax = d3.max(this.props.data)
      const yScale = d3.scaleLinear()
         .domain([0, dataMax + 2])
         .range([0, this.props.size[1]])
   d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
   
   d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()

   d3.select(node)
   .style("background-color", '#EFE0E0')
   .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => 20 + i * 25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 15)
   }
render() {
      return (
         <div>
            <p>Start BarChart D3 element</p>
               <svg ref={node => this.node = node}
                  width={500} height={500}>
               </svg>
            <p>End BarChart D3 element</p>
      </div>
      );
   }
}
export default BarChart


// import React from 'react';
// import './App.css';
// import BarChart from './d3/BarChart'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/BarChart.js</code> and save to reload.
//         </p>
//         <div>
//           <BarChart data={[5,10,1,3,9,6,2,3,4,5,6,7]} size={[300,300]} />
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
