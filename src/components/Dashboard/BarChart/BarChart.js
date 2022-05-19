import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "../../../sass/style.scss";

const BarChart = () => {
  const barChart = useRef();
  const randomNums = 300;
  let data = [];

  for (let i = 0; i <= randomNums; i++) {
    // console.log(data = randomNums)
    data.push(Math.random() * randomNums.toFixed(2));
  }
  // console.log(data)
  const highData = data.filter((e) => e >= 200);
  const catched = highData.slice(0, 31);
  console.log(catched);
  data = catched;

  useEffect(() => {
    // setting up svg
    let width = 700;
    let height = 300;

    const svg = d3
      .select(barChart.current)
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible")
      .style("margin-top", "75px")
      .style("margin-left", "75px")
      .style("float", "right");

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
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => height - yScale(val))
      .attr("fill", "#6C63FF")
      .append("title")
      .text((d) => d.toFixed(2));
  }, [data]);

  //button
  const handleRandom = () => {
    window.location.reload();
  };

  return (
    <div className="chart_background">
      <svg ref={barChart}></svg> <br />
      <button onClick={handleRandom}>New Bar</button>
    </div>
  );
};

export default BarChart;
