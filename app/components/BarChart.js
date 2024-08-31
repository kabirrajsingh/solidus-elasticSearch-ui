// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, zoomPlugin);

const BarChart = ({ data }) => {
  const days = Array.from(new Set(data.map(entry => entry.day_of_week)));
  const revenueByDay = days.reduce((acc, day) => {
    acc[day] = {
      normal: 0,
      personalized: 0,
    };
    return acc;
  }, {});

  data.forEach(entry => {
    revenueByDay[entry.day_of_week][entry.type_of_purchase] += entry.total_amount;
  });

  const barChartData = {
    labels: days,
    datasets: [
      {
        label: 'Normal Purchases',
        data: days.map(day => revenueByDay[day].normal),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Personalized Recommendations',
        data: days.map(day => revenueByDay[day].personalized),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Daily Revenue Comparison</h2>
      <Bar data={barChartData} options={{ responsive: true, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (context) => `${context.dataset.label}: $${context.raw}` } } } }} />
    </div>
  );
};

export default BarChart;
