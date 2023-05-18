import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import chartPalleteColors from '@/styles/common/chartPalleteColors';
import useGetThemeColors from '@/hooks/useGetThemeColors';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

const productsData = [
  {
      name: 'Wine',
      total_profit: 400000,
  },
  {
      name: 'Gorgonzola',
      total_profit: 390000,
  },
  {
      name: 'Artesanal Bread',
      total_profit: 135230,
  },
  {
      name: 'Craft Beer',
      total_profit: 139400,
  },
]


const PieChart = () => {
  const colors = useGetThemeColors();

  const options: any = {
    responsive: true,
    plugins: {
        datalabels: {
          color: '#F7F7F7',
          font: {
            size: 14,
            weight: 'bold'
          },
          padding: 6,
          formatter: function(value: number, context: any) {
            let data = context.dataset.data;
            let total = data.reduce((accumulator: number, value: number) => accumulator + value);
            const percentage = (value / total) * 100
            return '%'+percentage.toFixed(1);
          }
        },
        legend: {
          align: 'center',
          position: 'bottom',
          labels: {
            boxWidth: 18,
            color: colors.black,
            font: {
              size: 16,
            },
            padding: 20 
          } 
        },
    },
  };

  const labels = productsData.map(item => item.name);
  const chartData = productsData.map(item => item.total_profit);

  const data = {
    labels,
    datasets: [
      {
        label: "Sales by Product",
        data: chartData,
        backgroundColor: chartPalleteColors,
        borderColor: colors.white_light+'77',
      }
    ]
  };


  return (
    <div style={{ maxWidth: '700px' }}>
      <Pie 
        data={data}
        options={options}
        // @ts-ignore
        plugins={[ChartDataLabels]}
      />
    </div>
  )
}

export default PieChart