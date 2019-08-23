import React, { Component } from 'react'
import './App.css'
import * as d3 from 'd3';
// import { scaleLinear } from 'd3-scale’
// import { max } from 'd3-array'
// import { select } from 'd3-selection'

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

   d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => 20 + i * 25)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 35)
   }
render() {
      return (<div>
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