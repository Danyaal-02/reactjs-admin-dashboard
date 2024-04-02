import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
    const data = {
      labels: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      datasets: [
        {
          label: 'Sales',
          data: [12, 19, 16, 9, 8, 10],
          backgroundColor: '#694bdb',
        },
      ],
    };
  
    const options = {
      scales: {
        x: { display: false }, 
        y: { display: false }, 
      },
      elements: {
        point: {
          radius: 0, // This will hide the points
        },
      },
      plugins: {
        legend: {
          display: false, // This will hide the legend
        },
        tooltip: {
          enabled: false, // This will hide the tooltips
        },
      },
    };
  
    return <Bar data={data} options={options} />;
  }

export default BarChart;