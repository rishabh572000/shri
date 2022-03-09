import React from 'react';
import Header from './Componant/Header';
import BodyContent from './Componant/BodyContent';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

export default function App() {



return (
<>  
  <Header /> 
<BrowserRouter>
<Routes>
  <Route path="/" element={<BodyContent type='/'/>} />
  <Route path="/veg" element={<BodyContent type='veg'/>} />
  <Route path="/non-veg" element={<BodyContent type='non-veg'/>} />
</Routes>
</BrowserRouter>
</>
)
}
