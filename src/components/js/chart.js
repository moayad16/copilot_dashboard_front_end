import React from "react";
import '../css/chart.css'
import Chart from "react-apexcharts";

export default function VizChart() {

    const state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  

    return (
      <div className="vizChart">
        <h1 className="chartTitle">Chart Title</h1>
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
        />
      </div>
    );
}