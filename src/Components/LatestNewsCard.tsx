import {LatestCard} from '../Components/LatestNewsList';


export default function LatestNewsCard(props:LatestCard) {
  return (
    <article className="overflow-hidden bg-gray-100 justify-start flex flex-col p-2 shadow-lg h-100 tracking-wide  border-t-4 border-FQAItem space-y-4 md:w-100 w-76">
          <h1 className="font-bold text-blue-400 text-lg mt-6 "> {props.title} </h1>
          <span className="text-sm text-gray-500"> Δημοσιεύτηκε  {props.published} </span>
          <p className="text-base text-black p-4">
            {props.synopsis} 
          </p>
          <div className="flex items-center justify-center w-full mx-auto">
            <button 
              onClick = {()=>window.open(props.link)}
              className="oultine-none  right-0 text-white rounded-md transform hover:bg-orange ease-out duration-700  bg-FQAItem p-4 uppercase w-1/2">
                Διαβαστε
            </button>
          </div>  
     
    </article>
  )
}
