import React from "react";
import React, { useContext } from "react";
import Card from "../../UI/Card";
import './Cart.css'
import CartContext from "../Context/cart-contetxt";

const Cart = (Props)=>{
    const cartElements = [

        {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

        },

        {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

        },

        {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

        }

        ]

        const cartItems = <ul>
    const cartCtx = useContext(CartContext);
     const cartItems = <ul className="mainUl">
                 <span className="cartHeader">
                    <span className="Item">ITEM</span>
                    <span className="Price">PRICE</span>
                    <span className="Quantity">QUANTITY</span>
                    <span className="tpq">ITEM</span>
                    <span className="tpq">PRICE</span>
                    <span className="tpq">QUANTITY</span>
                </span>
            {cartElements.map(item=>(
            {cartCtx.items.map(item=>(

                <li className="singleList">
                <li key={Math.random().toString()} className="singleList">
                    <img src={item.imageUrl} alt="Album Image" className="cartImages" />
                    {item.title}
                    {item.price}
                    {item.quantity}
                    <div className="tpq1">{item.title}</div>
                    <div className="tpq1">{item.price}</div>
                    <div className="tpq1">{item.quantity}</div>
                    <button className="removeButton">Remove</button>
                </li>

            ))}
        </ul>

        const showSomething = ()=>{
            console.log('showing')
        }

        return(
            <Card >
                <div className="cartName">CART</div>
                <button className="closeCart" onClick={Props.onClose}>X</button>
                {cartItems}
                <div className="totalCost">
                    <div className="totalCostText">
                        Total Cost: Rs {' '}{cartCtx.items.reduce((accumulator, curItem)=>{return accumulator + (curItem.quantity*curItem.price)},0)}
                    </div>

                </div>
            </Card>
        )
}
export default Cart;