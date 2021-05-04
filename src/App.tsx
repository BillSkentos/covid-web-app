import React from 'react';
import './App.css';
import NavBar from '../src/Components/Navbar';
import Footer from '../src/Components/Footer';
import HomePage from '../src/Pages/HomePage';
import FQA from '../src/Pages/FQA';
import Contact from '../src/Pages/Contact';
import {Dates , News } from '../src/Components/Navbar';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Statistics from '../src/Pages/Statistics';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path = "/"> <HomePage/>  </Route>
          <Route  path = "/FQA"> <FQA/>  </Route>
          <Route  path = "/news"> <News/>  </Route>
          <Route  path = "/stats"> <Statistics/>  </Route>
          <Route  path = "/contact"> <Contact/>  </Route>
          <Route  path = "/dates"> <Dates/>  </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
