import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import {Layout} from './routes/Layout';
import { Home } from './routes/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<div>about</div>}/>
        <Route path='contact' element={<div>contact</div>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

