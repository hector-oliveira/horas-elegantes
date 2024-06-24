// Passo 1: Instalar dependências
// npm install chart.js react-chartjs-2

// Passo 2: Criar o componente Dashboard
'use client';
import { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js';
import { ClipLoader } from 'react-spinners';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

type SalesData = {
  orders: { created_at: string; sales: number }[];
  products: {
    name: string;
    product_id: string;
    totalSales: number;
    created_at: string;
  }[];
};

type ProductFromAPI = {
  name: string;
  product_id: string;
  totalSales: number;
  created_at: string;
};

export function Dashboard() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [salesData, setSalesData] = useState<SalesData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Passo 3: Função para buscar dados da API
  async function fetchData() {
    if (startDate && endDate) {
      setIsLoading(true);
      const response = await fetch(
        `https://beco-back.onrender.com/dashboard/ranking-sales?startDate=${startDate}&endDate=${endDate}`
      );
      const data = await response.json();
      const formattedData: SalesData = {
        orders: data.orders,
        products: data.products.map((product: ProductFromAPI) => ({
          name: product.name,
          product_id: product.product_id,
          totalSales: product.totalSales,
          created_at: product.created_at
        }))
      };
      setSalesData(formattedData);
      setIsLoading(false);
    }
  }

  // Passo 4: Renderizar os gráficos
  const lineChartData = {
    labels: salesData?.orders.map((order) => order.created_at),
    datasets: [
      {
        label: 'Total de Vendas por Dia',
        data: salesData?.orders.map((order) => order.sales) || [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)'
      }
    ]
  };

  const barChartData = {
    labels: salesData?.products.map((product) => product.name),
    datasets: [
      {
        label: 'Produtos Mais Vendidos',
        data: salesData?.products.map((product) => product.totalSales),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4 p-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border-2 border-gray-200 rounded-lg p-2 shadow-sm focus:outline-none focus:border-blue-500 transition-colors"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border-2 border-gray-200 rounded-lg p-2 shadow-sm focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button
          onClick={fetchData}
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          {isLoading ? <ClipLoader size={20} color="#fff" /> : 'Buscar'}
        </button>
      </div>
      {salesData && (
        <div className="pl-4">
          <Line data={lineChartData} />
          <Bar data={barChartData} />
        </div>
      )}
    </div>
  );
}
