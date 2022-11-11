import React, { useState, useEffect, Fragment } from "react";
import CartProvider from "../../store/CartProvider";
import Cart from "../Cart/Cart";

import Header from "../Layout/Header";
import MainBody from "../MainBody";
import "./Dashboard.css";
import Footer from "./Footer";

function Dashboard() {
  const [cardIsShown, setCardIsShown] = useState(false);
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  const showCartHandler = () => {
    setCardIsShown(true);
  };
  const hideCartHandler = () => {
    setCardIsShown(false);
  };

  return (
    <Fragment>
      {/* {loading ? (
        <div className="spinner">
          <DotLoader color={"#33bbff"} loading={loading} size={120} />
        </div>
      ) : (
        <CartProvider>
          {cardIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <MainBody />
          <Footer/>
        </CartProvider>
      )} */}
    <CartProvider>
          {cardIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <MainBody />
          <Footer/>
        </CartProvider>
    </Fragment>
  );
}

export default Dashboard;
