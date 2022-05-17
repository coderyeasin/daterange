import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const BarChart = () => {
  const [data, setData] = useState([20, 30, 40, 50, 60]);

  const barChart = useRef();

  //data set
  //loop data
  //click or move to load random numbers

  useEffect(() => {
    //setting up svg
    const width = 800;
    const height = 400;
    const svg = d3
      .select(barChart.current)
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible")
      .style("margin-top", "75px")
    //   .style("background", "gray");

    //setting the scaling
    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, width])
      .padding(0.5);
    const yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);

    //setting the axes
    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append("g").call(xAxis).attr("transform", `translate(0, ${height})`);
    svg.append("g").call(yAxis);

    //setting up the data for the svg
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (v, i) => xScale(i))
        .attr("y", yScale)
        .attr('width', xScale.bandwidth())
      .attr('height', val => height - yScale(val))
  }, [data]);

  //button
  const handleRandom = () => {
    const sizeRandom = Math.floor(Math.random() * 1000).toFixed();
    console.log(sizeRandom);
    setData(sizeRandom);
  };

  return (
    <div>
      <svg ref={barChart}></svg>
      <button onClick={handleRandom}>click</button>
    </div>
  );
};

export default BarChart;
