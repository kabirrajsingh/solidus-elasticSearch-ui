import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ data }) => {
  const pieData = {
    labels: ['Normal Purchases', 'Personalized Purchases'],
    datasets: [
      {
        data: [data.normal, data.personalized],
        backgroundColor: ['#FF6384', '#36A2EB'],
        borderColor: ['#FF6384', '#36A2EB'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <Pie data={pieData} options={{
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
        }
      }} />
    </div>
  );
};

export default PieChart;
