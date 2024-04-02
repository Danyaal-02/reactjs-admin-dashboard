import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
    const data = {
      labels: [],
      datasets: [
        {
          data: [300, 300, 200],
          backgroundColor: ['#ff7777', '#00f0c7', '#694bdb'],
          hoverBackgroundColor: ['#ff7777', '#00f0c7', '#694bdb'],
        },
      ],
    };
  
    const options = {
        responsive: true,
        legend: {
          display: false, 
        },
        tooltips: {
          enabled: false, 
        },
        cutout: '70%',
      };
  
    return <Doughnut data={data} options={options} />;
  }

export default DoughnutChart;
