import Header from "./Layout/Header";
import PageSummary from "./UI/PageSummary";
import Store from "./Components/Store/Store";
import Footer from "./Layout/Footer";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Components/Context/CartProvider";
import { Route } from "react-router-dom";
import Welcome from "./Components/Pages/Welcome";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";

function App() {
  const [cartClicked, setCartClicked] = useState(false);
  const cartDisplayHandler = () => {
    setCartClicked(true);
  };
  const cartDisplayHider = () => {
    setCartClicked(false);
  };
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      key: Math.random().toString(),
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      key: Math.random().toString(),
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      key: Math.random().toString(),
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      key: Math.random().toString(),
    },
  ];
  return (
    <>
      <CartProvider>
        <Header onClose={cartDisplayHandler}></Header>
        <Route path='/Home'>
        {cartClicked && <Cart onClose={cartDisplayHider}></Cart>}
        <PageSummary></PageSummary>
         <div> <Home/></div>
        </Route>
        <Route path="/Store">
          <PageSummary></PageSummary>
          <Store storeItems={productsArr}></Store>

          {cartClicked && <Cart onClose={cartDisplayHider}></Cart>}
          <Footer></Footer>
        </Route>
        <Route path="/About">
          <About></About>
          <div>
            {'Helper'}<About></About>
          </div>
          {cartClicked && <Cart onClose={cartDisplayHider}></Cart>}
        </Route>

        <Footer></Footer>
      </CartProvider>
    </>
  );
}
export default App;