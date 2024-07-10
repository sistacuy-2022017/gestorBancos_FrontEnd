import React from 'react';
import ReactDOM from 'react-dom'; // Importa ReactDOM desde 'react-dom'
import { App } from './App';
//import { CreateService } from './components/Servicios/AgregarServicio'
//import {ServicesAd} from './components/ServiciosOferta/ServiciosAdmin'
//import {TransactionHistory} from './components/History/History'
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Utiliza ReactDOM.render() en lugar de createRoot().render()
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


