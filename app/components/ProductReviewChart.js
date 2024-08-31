"use client";
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';

import zoomPlugin from 'chartjs-plugin-zoom';
// Register necessary components and plugins for Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, zoomPlugin);

const ProductReviewChart = ({ data }) => {
  if (!data || !data.monthly_averages || data.monthly_averages.length === 0) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Product Review Scores</h2>
        <p className="text-gray-500">No review scores available.</p>
      </div>
    );
  }

  // Prepare data for the chart
  const labels = data.monthly_averages.map(([_, month]) => month);
  const aggregatedScores = data.monthly_averages.map(([review]) => review["Aggregated Score"]);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Aggregated Score',
        data: aggregatedScores,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        fill: true,
        pointRadius: 6, // Size of points
        pointHoverRadius: 8, // Size of points on hover
        tension: 0.2, // Smooth the line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to resize dynamically
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
        grid: {
          display: false, // Hide grid lines for x-axis
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 12,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Score',
        },
        grid: {
          drawOnChartArea: false, // Hide grid lines for y-axis
        },
        ticks: {
          beginAtZero: true,
          stepSize: 0.5,
        },
      },
    },
    // Enable zooming and panning
    zoom: {
      pan: {
        enabled: true,
        mode: 'xy',
      },
      zoom: {
        enabled: true,
        mode: 'xy',
        speed: 0.1,
        sensitivity: 3,
        threshold: 2,
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-96 mb-6"> {/* Adjust height here */}
      <h2 className="text-2xl font-semibold mb-4">Product Review Scores</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ProductReviewChart;
