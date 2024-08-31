import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const BarChartComponent = ({ data }) => {
  const barData = {
    labels: ['Normal', 'Personalized'],
    datasets: [
      {
        label: 'Item Count',
        data: [data.normalItemCount, data.personalizedItemCount],
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <Bar data={barData} options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              }
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
          },
        }
      }} />
    </div>
  );
};

export default BarChartComponent;
