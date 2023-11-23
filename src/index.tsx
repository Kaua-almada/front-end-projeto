import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './componets/navbar/Navbar'
import NavBar from './componets/navbar/Navbar';
import ImagemP from './componets/imagenP/ImagemP';
import Cards from './componets/cards/Cards';
import ProdutosDiv from './componets/produtosDiv/ProdutosDiv';
import InpuUser from './componets/inputUser/InputUser';
import HomeSite from './componets/homeSite/HomeSite';
import InputSales from './componets/inputSales/InputSales';
import InputProducts from './componets/inputProducts/InputProducts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<>
  <BrowserRouter basename='/pi'>
    <NavBar/>
    <Routes>
    
        <Route path='/' element={<HomeSite/>}/>
        <Route path='/usuario' element={<InpuUser/>}/>
        <Route path='/vendas' element={<InputSales/>}/>
        <Route path='/produtos' element={<InputProducts/>}/>
        <Route path='*' element={<InputProducts/>}/>
    </Routes>
  </BrowserRouter>
</>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
