import React from 'react';
import {useEffect} from  'react';
import { Line} from 'react-chartjs-2';
import {getDaysRangeArray} from '../Components/functions';


function getTotalVaccinations(data:any[]){   

  let sum:number = data.reduce((acc:number,itm:any)=>{
    if(itm.totalvaccinations!=="undefined"){
      return acc + itm.totalvaccinations;
    }
  },0);
  return sum;
}

const Chart = (props:any) => {
 

  let daylist = getDaysRangeArray(new Date((props.from).toLocaleDateString('en-US')), new Date((props.to).toLocaleDateString('en-US')));



  return (
    <>
    {(props.covidData).length>0 
         && 
        <Line
        type = "line"
        data={{
          labels:[...daylist.map(d=>d.toDateString().slice(4,10))],
        datasets: [
            {
              label: 'Συνολικoί εμβολιασμοί μέχρι σήμερα',
              data: [...props.covidData.map((dt:any)=>getTotalVaccinations(dt))],
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
              fontSize: 35,
            },
          },
        }}
      />
    
    }

   </>    

  )
}

export default Chart;