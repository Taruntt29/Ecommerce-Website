import React, { useContext } from "react";
import classes from './ProductDetail.module.css'
import CartContext from "../../Context/cart-contetxt";
import ReactImageMagnify from "react-image-magnify";
import largeImage from  '../../../assests/largeImage.png'
const ProductDetails = (props)=>{
    const cartCtx = useContext(CartContext);
    return(
        <>
         <div className={classes.productContainer}>
            <div >
            <h2 style={{textAlign:'center', marginTop:'none'}}>Description </h2>
            <div className={classes.productDes} style={{padding:'0px 50px 0px 350px',color:'#63666A'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum debitis vero minima perspiciatis consequatur. 
                Quos nisi quidem officia voluptatum alias. Dicta deserunt eos voluptas excepturi, quidem quo. Reprehenderit, ducimus neque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum debitis vero minima perspiciatis consequatur. 
                Quos nisi quidem officia voluptatum alias. Dicta deserunt eos voluptas excepturi, quidem quo. Reprehenderit, ducimus neque!
                </div>
            <div className="productPrice" style={{textAlign:'center', fontSize:'20px', paddingTop:'20px', fontWeight:'bold'}}>{`Rs.${props.renderWhat.price}`}</div>
                
                <button className={classes.addButton} onClick={() => {
                cartCtx.addItem({
                  title: props.renderWhat.title,
                  price: props.renderWhat.price,
                  imageUrl: props.renderWhat.imageUrl,
                  quantity: 1,
                });
              }}>Add To Cart</button>
              </div>
              </div>
              <div style={{position:'absolute', top:'60px',marginLeft:'20px'}}>
           
            <div className={classes.productTitle}style={{width:'300px',fontSize:'25px',textAlign:'center', paddingBottom:'10px'}}>{props.renderWhat.title}</div>
            <div style={{width:'342px',height:'513px'}}><ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Product Image',
                        isFluidWidth: true,
                        src: props.renderWhat.imageUrl,
                     
                    },
                    largeImage: {
                        src:props.renderWhat.imageUrl,
                        width: 1200,
                        height: 1800
                    }
                }} /></div>
            {/* <img src={props.renderWhat.imageUrl} alt="Product_Image" className="productImage" 
            style={{float:'left', borderRadius:'10px', boxShadow:'10px 10px 8px #888888'}}/> */}
</div>
        
                
          
            
            
        </>
    )
}
export default ProductDetails
  12  
src/Layout/Header.js
@@ -8,6 +8,14 @@ import './Header.css'
const Header = (props)=>{
    const cartCtx = useContext(CartContext);
    const cartCount = cartCtx.items.reduce((accumulator, curItem)=>{return accumulator + curItem.quantity},0);
    const isLoggedIn  = cartCtx.isLoggedIn;
    let goto;
    if(isLoggedIn){
        goto = '/Store'
    }
    else{
        goto = '/Login'
    }


    return(
        <>
            <div className="mainHeader">
            <nav className="navButtons">

                <Link to='/Home' className="navButtonsNavigation">Home</Link>
                <Link to='/Store' className="navButtonsNavigation">Store</Link>
                <Link to={goto} className="navButtonsNavigation">Store</Link>
                <Link to='/About' className="navButtonsNavigation">About</Link>
                <Link to='/Contact' className="navButtonsNavigation">Contact</Link>

                <Link to='/Login' className="navButtonsNavigation">Log In</Link>
                <button className="cartButton" onClick={props.onClose}><span>Cart</span><span className="cartCount">{cartCount}</span></button>

            </nav>
            </div>
        </>
    )
};
export default Header;