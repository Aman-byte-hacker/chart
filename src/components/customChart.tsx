import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const CustomChart = () => {
  const data = {
    labels: [
      'BNB Wallet',
      'OKX Wallet',
      'Other Wallet 1',
      'Other Wallet 2',
      'Other Wallet 3',
      'Other Wallet 4',
      'Other Wallet 5',
    ],
    datasets: [
      {
        label: 'Wallets',
        data: [15, 12, 10, 8, 7, 5, 4],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8E44AD',
          '#3498DB',
          '#E74C3C',
          '#1ABC9C',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8E44AD',
          '#3498DB',
          '#E74C3C',
          '#1ABC9C',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem:any) {
            return `${tooltipItem.label}: ${tooltipItem.raw} Users`;
          },
        },
      },
      animation: {
        duration: 0,
      },
    },
    cutout: '70%',
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
      <div style={{ position: 'relative', top: '-179px', textAlign: 'center' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>26</div>
        <div>Total Wallets</div>
      </div>
    </div>
  );
};

export default CustomChart;
