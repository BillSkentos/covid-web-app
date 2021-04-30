import React from 'react';
import {useEffect} from  'react';
import { Line} from 'react-chartjs-2';
import {getDaysRangeArray} from '../Components/functions';


const Chart = () => {
  
  const dates = {
     date1:'12/28/2020',
     date2:'04/30/2021'
  }

  let daylist = getDaysRangeArray(new Date(dates.date1),new Date(dates.date2));

  return (
      <Line
        type = "line"
        data={{
          labels:[...daylist.map(d=>d.toDateString().slice(4,10))],
        datasets: [
            {
              label: 'Συνολικoί εμβολιασμοί μέχρι σήμερα',
              data: [3,2,5,2,8],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [{
              type: 'time',
              time: {
                displayFormats: {
                  'millisecond': 'MMM DD',
                  'second': 'MMM DD',
                  'minute': 'MMM DD',
                  'hour': 'MMM DD',
                  'day': 'MMM DD',
                  'week': 'MMM DD',
                  'month': 'MMM DD',
                  'quarter': 'MMM DD',
                  'year': 'MMM DD',
                }
              }
            }],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
  )
}

export default Chart;