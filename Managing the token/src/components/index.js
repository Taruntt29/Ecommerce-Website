import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './components/Context/CartProvider';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <CartProvider><BrowserRouter>
    <App />
  </BrowserRouter>
  </BrowserRouter></CartProvider>
);