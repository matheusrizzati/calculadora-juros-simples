import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CalculadoraJuros from './pages/calculadoraJuros';
import CalculadoraCapital from './pages/calculadoraCapital';
import CalculadoraTaxa from './pages/calculadoraTaxa';
import CalculadoraPeriodo from './pages/calculadoraPeriodo';

function App() {

  return (
    <>
    <BrowserRouter>
    <header>
      <Link to='/'>Juros (Etapa1)</Link>
      <Link to='/capital'> Capital Investido (Etapa 2)</Link>
      <Link to='/taxa'> Taxa de Juros (Etapa 3)</Link>
      <Link to='/periodo'> Periodo (Etapa 4)</Link>
    </header>
       <Routes>
        <Route path="/" element={ <CalculadoraJuros /> } />
        <Route path="/capital" element={<CalculadoraCapital />} />
        <Route path="/taxa" element={<CalculadoraTaxa />} />
        <Route path="/periodo" element={<CalculadoraPeriodo />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;