"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const LineChartComponent = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Volume",
        data: [250, 300, 350, 400, 450, 500, 550], // Add your actual data points here
        fill: false,
        borderColor: "blue",
      },
      {
        label: "Growth",
        data: [95, 120, 80, 150, 100, 200, 50], // Add your actual data points here
        fill: false,
        borderColor: "green",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <CardTitle>Temu</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <CardTitle style={{ color: "blue" }}>250K</CardTitle>
              <CardDescription style={{ marginLeft: "5px" }}>
                Volume
              </CardDescription>
            </div>
            <div>
              <CardTitle style={{ marginLeft: "10px", color: "green" }}>
                +95K+
              </CardTitle>
              <CardDescription style={{ marginLeft: "5px" }}>
                Growth
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div style={{ width: "400px", height: "300px" }}>
          <Line data={data} options={options} />
        </div>
      </CardContent>
      <CardFooter>
        <p>
          Content: shopping app that aims to compete with companies like Shein
          and Amazon
        </p>
      </CardFooter>
    </Card>
  );
};

export default LineChartComponent;
