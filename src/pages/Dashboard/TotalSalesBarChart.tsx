import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { P } from '@/styles/common/texts';
import useGetThemeColors from '@/hooks/useGetThemeColors';
import useGetWindowDimensions from '@/hooks/useGetWindowDimensions';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const TotalSalesBarChart = () => {
    const colors = useGetThemeColors();
    const { window_width } = useGetWindowDimensions();

    const labels = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
      
    const options: any = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    color: colors.black,
                    padding: 20,
                    boxWidth: 15,
                    boxHeight: 15,
                    useBorderRadius: true,
                    borderRadius: 2,
                    font: {
                        size: 16
                    }
                }
            },
        },

        scales: {
            y: {
                ticks: {
                    color: colors.black_extra_light,
                    font: {
                        size: window_width < 768 ? 11 : 14
                    },
                    callback: function(value: string) {
                        return '$' + value;
                    }
                }
            },
            x: {
                ticks: {
                    color: colors.black_extra_light,
                    font: {
                        size: window_width < 768 ? 11 : 14
                    }
                }
            }
        }
    };
    
    const data = {
        labels,
        datasets: [
            {
                label: 'March/2023',
                data: [1000, 1200, 800, 700, 200, 100, 2000, 300, 450, 700, 2300, 1800],
                borderColor: colors.gray_dark,
                backgroundColor: colors.gray_dark+'88',
                borderWidth: 3,
                lineTension: 0.8,
                cubicInterpolationMode: 'monotone'
            },
            {
                label: 'April/2023',
                data: [400, 800, 1500, 450, 200, 1200, 1600, 2000, 1100, 1200, 1800, 3000],
                borderColor: colors.primary_dark,
                backgroundColor: colors.primary_dark+'88',
                borderWidth: 3,
                lineTension: 0.8,
                cubicInterpolationMode: 'monotone'
            },
        ],
    };

    return (
        <section>
          <P>
            Total Sales($)
          </P>

          <div>
            <Bar
              options={options}
              data={data}
            />
          </div>

        </section>
    )
}

export default TotalSalesBarChart