import React from 'react'
import chartPalleteColors from '@/styles/common/chartPalleteColors';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {

    const data = {
        labels: [
            'Wine',
            'Gorgonzola',
            'Artesanal Bread',
        ],
        datasets: [
          {
            label: 'Profit per product',
            data: [130000, 80000, 60000],
            backgroundColor: chartPalleteColors,
          }
        ]
    };

    const config = {
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
          }
        },
    };

    return (
        <div style={{ width: '600px', height: '600px' }}>
            <Doughnut 
                data={config.data}
                options={config.options}
            />  
        </div>
    )
}

export default DonutChart