"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ChartData,
  registerables,
} from "chart.js";

Chart.register(
  ...registerables,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const formatDate = (dateStr: string | number | Date) => {
  const date = new Date(dateStr);
  // For month labels: return date.toLocaleString('default', { month: 'short' });
  // For specific date labels: return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}`;
  return `${date.getMonth() + 1}/${date.getDate()}`; // example format: '12/1', '12/15'
};

const LineChartComponent = () => {
  const [lineCharts, setLineCharts] = useState<
    Array<{
      title: string;
      chartData: ChartData<"line", number[], string>;
    }>
  >([]);

  interface TrendPoint {
    date: string;
    value: number;
  }

  interface FetchedData {
    [keyword: string]: TrendPoint[];
  }

  useEffect(() => {
    const fetchData = async (): Promise<FetchedData> => {
      try {
        const response = await fetch("http://127.0.0.1:5000/get_trends");
        const data: FetchedData = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return {};
      }
    };

    const prepareChartData = async () => {
      const fetchedData = await fetchData();

      const newLineCharts = Object.keys(fetchedData).map((keyword) => {
        const trendData = fetchedData[keyword];
        const labels = trendData.map((item) => formatDate(item.date));
        const dataValues = trendData.map((item) => item.value);

        return {
          title: keyword,
          chartData: {
            labels,
            datasets: [
              {
                label: keyword,
                data: dataValues,
                backgroundColor: "transparent",
                fill: false,
                borderColor: "#f26c6d", // Replace with color logic
                pointBorderColor: "transparent",
                pointBorderWidth: 4,
                tenstion: 0.5,
              },
            ],
          },
        };
      });

      setLineCharts(newLineCharts);
    };

    prepareChartData();
  }, []);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2,
        },
        grid: {
          display: true, // Ensuring that the grid property is properly set
          drawBorder: false, // Optionally disable border
          borderDash: [10], // Your existing setting
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: true, // Auto-skip labels to avoid overcrowding
          maxTicksLimit: 10, // Adjust to control the number of labels
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Smoothes the line
      },
      point: {
        radius: 5, // Adjusts the size of the point markers
      },
    },
    // ... other options ...
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {lineCharts.map(({ title, chartData }, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="w-full h-full">
              <Line data={chartData} options={options} />
            </div>
          </CardContent>
          <CardFooter>
            <CardDescription>Description for {title}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default LineChartComponent;