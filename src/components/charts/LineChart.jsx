import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
    // Function to generate a random color
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

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
          data: [12, 19, 3, 5, 2, 3],
          fill: false,
          backgroundColor: '',
          borderColor: getRandomColor(), // Set random border color
          tension: 0.4, 
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
          radius: 0,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    };
  
    return <Line data={data} options={options} />;
}

export default LineChart;
