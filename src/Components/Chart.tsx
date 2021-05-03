import { Line} from 'react-chartjs-2';
import {getDaysRangeArray} from '../Components/functions';

interface DayResults { //single API result object 
  area:string,
  areaid:number,
  dailydose1:number,
  dailydose2:number,
  daydiff:number,
  daytotal:number,
  referencedate:string,
  totaldistinctpersons:number,
  totaldose1:number,
  totaldose2:number,
  totalvaccinations:number,
}

interface ChartProps{
  isLoading:boolean,
  covidData:any[],
  hasError:string,
  to:Date|null,
  from:Date|null,

}

const Chart = (props:ChartProps) => {
 
  let daylist = getDaysRangeArray(new Date((props.from!).toLocaleDateString('en-US')), new Date((props.to!).toLocaleDateString('en-US')));


  function getTotalVaccinations(data:[]){   
    let sum:number = data.reduce((acc:number,itm:DayResults)=>{
        return acc + itm.totalvaccinations
    },0);
    
    return sum;
  }


  function getTotalDose1(data:[]){
    
    let sum:number = data.reduce((acc:number,itm:DayResults)=>{
        return acc + itm.totaldose1
    },0);
    
    return sum;
  }

  function getTotalDose2(data:[]){
    
    let sum:number = data.reduce((acc:number,itm:DayResults)=>{
        return acc + itm.totaldose2
    },0);
    
    return sum;
  }

  return (
    <div className="flex items-center place-items-center  w-full mx-auto">
      {props.isLoading===true && <p>Loading ...</p>}
      {(props.covidData).length>0 
         && 
        <Line
        type = "line"
        data={{
          labels:[...daylist.map(d=>d.toDateString().slice(4,10))],
        datasets: [
            {
              label: 'Συνολικoί εμβολιασμοί',
              data: [...props.covidData.map((d:[])=>getTotalVaccinations(d)).sort((a:any,b:any)=>{
                  return a-b 
              })],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1,
              pointRadius: 0,
            },
            {
              label: 'Συνολικά εμβόλια α΄δόσης ',
               data: [...props.covidData.map((d:[])=>getTotalDose1(d)).sort((a:any,b:any)=>{
                return a-b 
                })],
              backgroundColor: 'orange',
              borderColor: 'red',
              borderWidth:1,
              pointRadius: 0,
            },
            {
              label: 'Συνολικά εμβόλια β΄δόσης ',
               data: [...props.covidData.map((d:[])=>getTotalDose2(d)).sort((a:any,b:any)=>{
                return a-b 
                })],
              backgroundColor: 'aqua',
              borderColor: 'orange',
              borderWidth:1,
              pointRadius: 0,
            },
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

   </div>    

  )
}

export default Chart;