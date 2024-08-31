import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
// import { ThemeProvider } from 'react-bootstrap';
import { CartProvider } from './context/cart.jsx';
import Loading from './Loading.jsx';

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Wait for everything to load
    window.addEventListener('load', handleLoad);

    // Cleanup the event listener
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : <App />}
    </>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <Main />
    </CartProvider>
  </React.StrictMode>,
)
