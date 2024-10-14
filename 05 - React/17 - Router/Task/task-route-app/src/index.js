import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Navigacija from './Components/Navigacija';
import Info from './Components/Info';
import Kontakt from './Components/Kontakt';
import ONama from './Components/ONama';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navigacija/>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/info' element={<Info/>} />
    <Route path='/kontakt' element={<Kontakt/>} />
    <Route path='/onama' element={<ONama/>} />
    </Routes>
  </BrowserRouter>
);

