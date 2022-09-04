import { useContext, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import CartProvider from './components/Context/CartProvider';
import CartContext from './components/Context/cart-contetxt';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
@@ -7,7 +10,8 @@ import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
    <CartProvider>
    <Layout >
      <Switch>
        <Route path='/' exact>
          <HomePage />
@@ -20,6 +24,7 @@ function App() {
        </Route>
      </Switch>
    </Layout>
    </CartProvider>
  );
}

export default App;