import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import chartPalleteColors from '../../../../styles/common/chartPalleteColors';
import { useStateContext } from '../../../../context/ContextProvider';
import { colors } from '../../../../styles/common/theme';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { theme } = useStateContext();

  const options = {
    responsive: true,
    plugins: {
        legend: {
          align: 'center',
          position: 'bottom',
          labels: {
            boxWidth: 18,
            color: theme === 'light' ? colors.black : colors.white,
            font: {
              size: 16,
            },
            padding: 20 
          } 
        },
    },
  };

  const data = {
    labels: ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5", "Product 6", "Product 7", "Product 8", "Product 9", "Product 10"],
    datasets: [
      {
        label: "Sales by Product",
        data: [1200, 800, 500, 900, 1100, 750, 950, 1400, 1600, 1200],
        backgroundColor: chartPalleteColors
      }
    ]
  };


  return (
    <div style={{ maxWidth: '700px' }}>
      <Pie 
        data={data}
        options={options}
      />
    </div>
  )
}

export default PieChart