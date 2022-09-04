import { useContext, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import CartProvider from './components/Context/CartProvider';
import CartContext from './components/Context/cart-contetxt';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const credCtx = useContext(CartContext);
  return (
    <CartProvider>
    <Layout >
      <Switch>
        <Route path='/' exact>
          <HomePage />
          <HomePage />  
        </Route>

        <Route path='/auth'>
          <AuthPage />
        </Route>

        <Route path='/profile'>
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
    </CartProvider>
  );
}
export default App;