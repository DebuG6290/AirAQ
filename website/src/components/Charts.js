import React,{useContext} from 'react'
import { Line,Pie,Bubble,Bar} from 'react-chartjs-2'
import './Charts.css'



function Charts(props) {
  console.log(props)
  const dat=props;
  console.log(dat)
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Red Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '# of Blue Votes',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: '# of Green Votes',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  const options= {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }
  
  const optionsStacked = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  
    return (
     
        <div className='charts-container'>  
        <div className='chart'>
            <Pie width={200} height={200} 
            options={{ maintainAspectRatio: false }}
            data={data}
            options={options}
            />
        </div>
        <div className='chart'>
            <Line width={400} height={200} 
            options={options}
            data={data}
            />
        </div>
        <div className='chart'>
             <Bar data={data} options={optionsStacked} />
         </div>   
        </div>
    )
}

export default Charts
