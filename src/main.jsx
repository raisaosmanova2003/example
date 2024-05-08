import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
  <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>,
  </BrowserRouter>
)
