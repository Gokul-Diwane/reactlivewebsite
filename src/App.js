import React from 'react';
import Home from './Home';
import { Route,Routes,Navigate } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/about' Component={About}></Route>
        <Route exact path='/service' Component={Service}></Route>
        <Route exact path='/contact' Component={Contact}></Route>
        <Route path='*' Component={Home}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
