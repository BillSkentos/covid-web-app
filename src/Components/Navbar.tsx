import React from 'react';
import {useState,useEffect} from 'react';
import {Transition} from '@tailwindui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function Home(){
  return <h1>I am home !</h1>
}

function FQA(){
  return <h1>I am FQA !</h1>
}

function News(){
  return <h1>I am news !</h1>
}

function Dates(){
  return <h1>I am dates !</h1>
}

function Stats(){
  return <h1>I am stats !</h1>
}

function Contact(){
  return <h1>I am contact!</h1>
}

export default function Navbar() {
  
             
  const navOptions = ['Αρχική Σελίδα' , 'Νέα' , 'Ραντεβού Εμβολιασμού' ,
                      'FQA' ,'Στατιστικά Εμβολιασμου' , 'Επικοινωνία'];

  const [width,setWidth] = useState(window.innerWidth);
  const[hamIsOpen , setHam ]  = useState(false);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  }

  const toggleHamburger = ()=>{
    setHam(!hamIsOpen);
  }

  useEffect(()=>{
    window.addEventListener('resize', updateWidth);
    return ()=>{
      window.removeEventListener('resize',updateWidth);
    }
  })

  return (
    <Router>  
 
  <section>  
    <nav className="flex items-center  justify-around flex-wrap bg-gray-100 p-6 space-y-4 ">
      <div className="flex items-center flex-shrink-0 text-white">
        <img src="https://vaccination-info.eu/sites/default/themes/ecdc_vaccine/images/ecdc-vaccine-logo.png" alt="Αρχική" />
        <span className="font-semibold text-black text-base tracking-tight px-4">ΕΥΡΩΠΑΙΚΗ ΠΥΛΗ <br/> ΠΛΗΡΟΦΟΡΙΩΝ ΕΜΒΟΛΙΑΣΜΟΥ</span>
      </div>
      <div className="block lg:hidden">
        <button
         onClick = { () => toggleHamburger()}
         className="flex items-center px-3 py-2 border rounded text-black-200 border-black-800 hover:text-blue-600 hover:border-blue-600  ">
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
            <Link to = "/"  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600 ">
              Αρχική Σελίδα 
            </Link>
            <Link to = "/news" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600">
              Νέα 
            </Link>
            <Link to = "/FQA" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600">
              FQA
            </Link>
            <Link to = "/dates" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600">
              Ραντεβού Εμβολιασμού 
            </Link>
            <Link to = "/stats" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600">
              Στατιστικά Εμβολιασμού
            </Link>
            <Link to = "/contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600">
              Επικοινωνία 
            </Link>
          </div>
   

      </Transition>



      {
        width >= 1024 &&  <div className="text-base space-x-12 -ml-2">
        <Link to = "/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200  hover:text-blue-600">
          Αρχική Σελίδα 
        </Link>
        <Link to = "/news"  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600">
          Νέα 
        </Link>
        <Link to = "/FQA"  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600">
          FQA
        </Link>
        <Link to = "/dates"  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600">
          Ραντεβού Εμβολιασμού 
        </Link>
        <Link to = "/stats"  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600">
          Στατιστικά Εμβολιασμού
        </Link>
        <Link to = "/contact"  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-600">
          Επικοινωνία 
        </Link>
      </div> 
      }

    </nav>
 
  
  </section>
    <Switch>
         <Route exact path = "/"> <Home/>  </Route>
         <Route  path = "/FQA"> <FQA/>  </Route>
         <Route  path = "/news"> <News/>  </Route>
         <Route  path = "/stats"> <Stats/>  </Route>
         <Route  path = "/contact"> <Contact/>  </Route>
         <Route  path = "/dates"> <Dates/>  </Route>
   
    </Switch>
  </Router>
  );
}
