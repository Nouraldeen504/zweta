import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
// import { ThemeProvider } from 'react-bootstrap';
import { CartProvider } from './context/cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
