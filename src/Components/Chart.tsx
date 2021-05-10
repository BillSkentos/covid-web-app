import { Line} from 'react-chartjs-2';
import Loading from '../Components/Loading';
import NoResults from '../Animations/noresults.png';

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

function convertDate(dt:string):number{
  
  let str = dt.split('-');
  return Number (str[2]+str[1]+str[0]);
}


const Chart = (props:ChartProps) => {
 


  function getTotalVaccinations(data:DayResults[]){   
    let sum:number = data.reduce((acc:number,itm:DayResults)=>{
        return acc + itm.totalvaccinations
    },0);
    
    return sum;
  }

  function getTotalDose1(data:DayResults[]){
    
    let sum:number = data.reduce((acc:number,itm:DayResults)=>{
        return acc + itm.totaldose1
    },0);
    
    return sum;
  }

  function getTotalDose2(data:DayResults[]){
    
    let sum:number = data.reduce((acc:number,itm:DayResults)=>{
        return acc + itm.totaldose2
    },0);
    
    return sum;
  }


  function getPeopleInjected(data:DayResults[]){
    
    let sum:number = data.reduce((acc:number,itm:DayResults)=>{
      return acc + itm.totaldistinctpersons
  },0);
  
  return sum;
  }

  return (
    <div className="flex p-2 items-center justify-center h-80 place-items-center w-full mx-auto">
      
      {props.isLoading===true && <Loading /> } 
      {((props.covidData).length === 0 && props.isLoading === false )&& 
        <div className = "grid grid-cols-1 space-y-2 place-items-center w-full mx-auto h-60"> 
          <img className=" h-20 md:h-40 object-contain" src = {NoResults} alt = "empty"/> 
          <h1 className="font-bold text-base lg:text-xl">Δε βρέθηκαν αποτελέσματα . Παρακαλώ ξαναδοκιμάστε</h1>
        </div>
      }

      {(props.covidData).length>0 
         && 
        <Line
        type = "line"
        data={{
        labels:[...props.covidData.map(arr=>{
          return arr.reduce((acc:any,itm:any,index:number)=>{
              if(index===0){
                acc.push((new Date(itm.referencedate)).toISOString().replace(/T.*/,'').split('-').reverse().join('-'));
              }
              return acc;
          },[])
        }).flat().sort((a:any,b:any)=>{
          return convertDate(a) - convertDate(b)
        })],
        datasets: [
            {
              label: 'Συνολικoί εμβολιασμοί        ',
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
              backgroundColor: '#00FF00',
              borderColor: 'green',
              borderWidth:1,
              pointRadius: 0,
            },
            {
              label: 'Συνολικά εμβόλια β΄δόσης ',
               data: [...props.covidData.map((d:[])=>getTotalDose2(d)).sort((a:any,b:any)=>{
                return a-b 
                })],
              backgroundColor: 'aqua',
              borderColor: '#1799B5',
              borderWidth:1,
              pointRadius: 0,
            },
            {
              label: 'Συνολικός αριθμός εμβολιασμένων',
               data: [...props.covidData.map((d:[])=>getPeopleInjected(d)).sort((a:any,b:any)=>{
                return a-b 
                })],
              backgroundColor: '#ff08d4',
              borderColor: 'purple',
              borderWidth:1,
              pointRadius: 0,
            },
          ],
        }}
        height={400}
        options={{
          responsive:true,
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