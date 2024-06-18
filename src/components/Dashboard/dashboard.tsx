'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Order {
  created_at: string;
  sales: number;
}

interface Product {
  name: string;
  product_id: string;
  totalSales: number;
  created_at: string;
}

interface Data {
  orders: Order[];
  products: Product[];
}

export const Dashboard: React.FC = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState<Data | null>(null);
  const [triggerFetch, setTriggerFetch] = useState(false);

  function handleSetClick() {
    setTriggerFetch(!triggerFetch);
  }

  useEffect(() => {
    const fetchData = async () => {
      if (startDate && endDate) {
        try {
          const response = await axios.get<Data>(
            `https://beco-back.onrender.com/dashboard/ranking-sales?startDate=${startDate}&endDate=${endDate}`
          );
          setData(response.data);
        } catch (error) {
          console.error('Falhou a requisição:', error);
          setData(null); // Ensure data is reset if fetch fails
        }
      }
    };
    fetchData();
  }, [startDate, endDate, triggerFetch]);

  const renderCharts =
    startDate &&
    endDate &&
    data &&
    data.orders?.length > 0 &&
    data.products?.length > 0;

  const lineOptions = {
    chart: {
      id: 'line-chart'
    },
    xaxis: {
      categories: renderCharts
        ? data.orders.map((order) => order.created_at)
        : []
    }
  };

  const lineSeries = [
    {
      name: 'Total de vendas',
      data: renderCharts ? data.orders.map((order) => order.sales) : []
    }
  ];

  const barOptions = {
    chart: {
      id: 'bar-chart'
    },
    xaxis: {
      categories: renderCharts
        ? data.products.map((product) => product.name)
        : []
    }
  };

  const barSeries = [
    {
      name: 'Produto mais vendido',
      data: renderCharts
        ? data.products.map((product) => product.totalSales)
        : []
    }
  ];

  return (
    <div className="p-4 flex flex-col gap-5">
      <header className="flex gap-4">
        <input
          className="rounded-lg shadow-md"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          className="rounded-lg shadow-md"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button
          className="bg-[#b9b8b8] p-2 rounded text-white shadow-md hover:bg-[#a19f9f]"
          onClick={handleSetClick}
        >
          Buscar
        </button>
      </header>
      <main>
        {renderCharts ? (
          <>
            <Chart options={lineOptions} series={lineSeries} type="line" />
            <Chart options={barOptions} series={barSeries} type="bar" />
          </>
        ) : (
          <p>Loading data or no data available for the selected dates.</p>
        )}
      </main>
    </div>
  );
};
