import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from './pages/Home';
import FicheLogement  from '../src/pages/fiche-logement';
import Apropos from './pages/a-propos';
import Header from '../src/components/header';
import Error from './pages/error';
import Footer from './components/footer';
import '../src/style/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>
        
        <Header />
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path='/A-propos' element= {<Apropos/>}> </Route>
                <Route path='/FicheLogement/:id' element= {<FicheLogement/>}></Route>
                <Route path ="*" element= {<Error/>} > </Route>
            </Routes>
        <Footer/>

    </Router>
  </React.StrictMode>
);

