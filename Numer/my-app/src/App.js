import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Bisection from './components/Bisection';
import Falseposition from './components/Falseposition';
import Newton from './components/Newton';
import Onepoint from './components/Onepoint';
import Secant from './components/Secant';
import NewtonDivided from './components/newtondivide';




class App extends Component { 
  render() {
    return (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Bisection" element={<Bisection/>} />
          <Route path="/Falseposition" element={<Falseposition/>} />
          <Route path="/Onepoint" element={<Onepoint/>} />
          <Route path="/Newton" element={<Newton/>} />
          <Route path="/Secant" element={<Secant/>} />
          <Route path="/NewtonDivide" element={<NewtonDivided/>} />
          
        </Routes>
        
    );
  }
}


export default App;