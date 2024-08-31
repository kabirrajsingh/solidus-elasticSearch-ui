import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components


// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);
const aggregateData = (transactions) => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type_of_purchase === 'normal') {
          acc.normal += transaction.total_amount;
        } else if (transaction.type_of_purchase === 'personalized') {
          acc.personalized += transaction.total_amount;
        }
        return acc;
      },
      { normal: 0, personalized: 0 }
    );
  };
const PieChart = ({ data }) => {

    const adata=aggregateData(data)
  const pieData = {
    labels: ['Normal Purchases', 'Personalized Purchases'],
    datasets: [
      {
        data: [adata.normal, adata.personalized],
        backgroundColor: ['#FF6384', '#36A2EB'],
        borderColor: ['#FF6384', '#36A2EB'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-xl mx-auto h-80">
      <Pie 
        data={pieData} 
        options={{
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
        }} 
      />
    </div>
  );
};

export default PieChart;
