import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const MyLineChart = () => {
  const data = {
    labels: ['01-02', '01-02', '01-02', '01-02', '01-02', '01-02', '01-02', '01-02', '01-02'],
    datasets: [
      {
        label: 'Dataset',
        data: [190000, 200000, 210000, 220000, 230000, 220000, 240000, 230000, 220000],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointRadius: 0,
        pointHoverRadius: 0,
        pointHitRadius: 0
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default MyLineChart;
