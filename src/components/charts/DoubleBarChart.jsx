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

const BarChart = () => {
  const options = {
    scales: {
      x: {
        display: false, 
        grid: {
          color: "rgba(220, 220, 220, 0.8)", 
        },
      },
      y: {
        display: false, 
        grid: {
          color: "rgba(220, 220, 220, 0.8)", 
        },
      },
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

  const labels = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Category 1",
        data: [20, 40, 10, 30, 20, 50, 10],
        borderColor: "#694bdb",
        backgroundColor: "#694bdb",
      },
      {
        label: "Category 2",
        data: [40, 10, 30, 20, 50, 10, 50],
        borderColor: "#00f0c7",
        backgroundColor: "#00f0c7",
      },
    ],
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;