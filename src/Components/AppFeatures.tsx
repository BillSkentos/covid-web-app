import Calendar from '../Animations/calendar.png';
import ChartImage from  '../Animations/bar-chart.png';
import Information from  '../Animations/info.png';
import {Link} from 'react-router-dom';

interface AppFeature{
  src:string,
  synopsis:string,
  link:string,
}

const featureList :AppFeature[] = [
  {src:Calendar , synopsis:'Πατώντας εδώ μπορείτε να κλείσετε το ραντεβού σας για εμβολιασμό .' , link:'/dates'},
  {src:ChartImage , synopsis:'Πατώντας εδώ μπορείτε να δείτε καθημερινά στατιστικά εμβολιασμών.' , link:'/stats'},
  {src:Information , synopsis:'Πατώντας εδώ μπορείτε να δείτε πληροφορίες για τη διαδικασία εμβολιασμού.' , link:'/FQA'},
];

function Feature(props:AppFeature){
  return (
    <div className="grid place-items-center my-1 px-1 lg:my-4 lg:w-1/3 md:w-full ">
      <article className="feature overflow-hidden rounded-lg shadow-lg lg:w-64  xl:w-4/5  h-56 bg-FQA transform scale-100 hover:scale-110 cursor-pointer transition delay-200 duration-300  ease-in-out">
        <img alt="Calendar" className="block p-2 h-24 w-full object-contain" src={props.src} />
        <header className="flex items-center justify-center leading-tight p-2 md:p-4">
          <Link to = {props.link} className=" text-base  md:text-base xl:text-lg font-bold text-FQAItem hover:text-lightBlue">
            {props.synopsis}              
          </Link>
        </header>
      </article>
    </div>
  );
}

export default function AppFeatures() {
  return (
      <div className=" flex flex-wrap space-y-12 md:space-y-12 lg:space-y-0  lg:flex-row flex-col my-12 mx-auto px-4 md:px-12 w-full  place-items-center ">
        {
          featureList.map((itm)=>{
            return (
              <Feature link = {itm.link} src = {itm.src} key = {itm.synopsis} synopsis ={itm.synopsis} />
            );
          })
        }
      </div>
  )
}
