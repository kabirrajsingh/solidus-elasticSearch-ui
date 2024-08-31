// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, zoomPlugin);

const LineChart = ({ data }) => {
  const labels = data.map(entry => new Date(entry.date_time).toLocaleDateString());
  const revenueData = data.reduce((acc, entry) => {
    const key = entry.type_of_purchase;
    if (!acc[key]) acc[key] = [];
    acc[key].push(entry.total_amount);
    return acc;
  }, { normal: [], personalized: [] });

  const lineChartData = {
    labels,
    datasets: [
      {
        label: 'Normal Purchases',
        data: revenueData.normal,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Personalized Recommendations',
        data: revenueData.personalized,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Revenue Over Time</h2>
      <Line data={lineChartData} options={{ responsive: true, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (context) => `${context.dataset.label}: $${context.raw}` } } } }} />
    </div>
  );
};

export default LineChart;
