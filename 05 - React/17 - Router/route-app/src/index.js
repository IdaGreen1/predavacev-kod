import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './Components/Navigation';
import Balance from './Components/Balance';
import Invoices from './Components/Invoices';
import Expenses from './Components/Expenses';
import CustomInvoiceDetails from './Components/CustomInvoiceDetails';
import InvoiceDetails from './Components/InvoiceDetails';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter >
<Navigation/>
<Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/balance' element={<Balance/>}/>
  <Route path='/invoices' element={<Invoices/>}/>
  <Route path='/expenses' element={<Expenses/>}/>
  <Route path='/invoice/details/:invoiceID' element={<CustomInvoiceDetails/>}/>
  <Route path='/invoice/details' element={<InvoiceDetails/>}/>
</Routes>
</BrowserRouter>

);

