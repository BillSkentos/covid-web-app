import React from 'react';
import {useState,useEffect} from 'react';
import {Transition} from '@tailwindui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import FQA from '../Pages/FQA';
import HomePage from '../Pages/HomePage';
import Contact from '../Pages/Contact';
import {useAppContext} from '../Components/ContextProvider';

function News(){
  return <h1>I am news !</h1>
}

function Dates(){
  return <h1>I am dates !</h1>
}

function Stats(){
  return <h1>I am stats !</h1>
}


export default function Navbar() {
  
  const {width,updateWidth} = useAppContext(); 

  const navOptions : {option:string , link:string}[] = [

    {option:'Αρχική σελίδα' , link:'/' },
    {option:'FQA' , link:'/FQA' },
    {option:'Ραντεβού Εμβολιασμού' , link:'/dates' },
    {option:'Στατιστικά Εμβολιασμου' , link:'/stats' },
    {option:'Επικοινωνία' , link:'/contact' },
    {option:'Νέα' , link:'/news' },
    
  ];

  const[hamIsOpen , setHam ]  = useState(false);

  const toggleHamburger = ()=>{
    setHam(!hamIsOpen);
  }

  return (

  <Router>  
 
    <section>  
      <nav className="overflow-hidden flex items-center  justify-around flex-wrap  p-6 space-y-4 ">
        <div className="flex items-center text-white ">
          <img src="https://vaccination-info.eu/sites/default/themes/ecdc_vaccine/images/ecdc-vaccine-logo.png" alt="Αρχική" />
          <span className="font-semibold text-FQAItem text-sm md:text-base tracking-tight px-4">ΕΥΡΩΠΑΙΚΗ ΠΥΛΗ <br/> ΠΛΗΡΟΦΟΡΙΩΝ ΕΜΒΟΛΙΑΣΜΟΥ</span>
        </div>
        <div className="block lg:hidden">
          <button
          onClick = { () => toggleHamburger()}
          className="flex items-center px-3 py-2 border rounded text-black-200 border-black-800 hover:text-FQAItem  hover:border-FQAItem  ">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      
        <Transition 
          className=" lg:hidden  w-full"
          show = {hamIsOpen}
          enter="transition-opacity duration-250"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-250"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
            <div className= "flex flex-col items-center block">
              {
                navOptions.map((item)=>{
                  return (
                    <Link key = {item.link} to = {item.link} className="block mt-4 lg:inline-block lg:mt-0 text-FQAItem ">
                    {item.option}
                    </Link>
                  );
                })
              }

            </div>

        </Transition>

        {
          width >= 1024 &&  <div className="text-base space-x-12 -ml-2">
            {
                navOptions.map((item)=>{
                  return (
                    <Link key = {item.link} to = {item.link} className="block mt-4 lg:inline-block lg:mt-0 text-FQAItem ">
                      {item.option}
                    </Link>
                  );
                })
            }
        </div> 
        }

      </nav>
  
    
    </section>
    <Switch>
         <Route exact path = "/"> <HomePage/>  </Route>
         <Route  path = "/FQA"> <FQA/>  </Route>
         <Route  path = "/news"> <News/>  </Route>
         <Route  path = "/stats"> <Stats/>  </Route>
         <Route  path = "/contact"> <Contact/>  </Route>
         <Route  path = "/dates"> <Dates/>  </Route>
    </Switch>
    
  </Router>
  );
}
