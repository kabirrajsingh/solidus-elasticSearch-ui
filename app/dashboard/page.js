// app/dashboard/page.js
"use client";
import React, { useState, useEffect } from 'react';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/analytics.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="container mx-auto p-6 bg-white mt-3 mb-2">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <LineChart data={data} />
        <BarChart data={data} />
      </div>
    
      <div className="p-4 bg-white rounded-lg shadow-md">
        <PieChart data={data} />
      </div>
    </div>
  );
}
