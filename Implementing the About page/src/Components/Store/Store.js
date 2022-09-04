import react from "react";
import react, {useContext} from "react";
import './Store.css'
import Footer from "../../Layout/Footer";
import CartContext from "../Context/cart-contetxt";
const Store = (props)=>{
    const cartCtx = useContext(CartContext);


    const storeItems = <ul className="unOrderedList">
        {props.storeItems.map(item=>
            (
                <div key={item.key} className="mainList">
                    
                    <li className="itemTitle">{item.title}</li>
                    <img className="itemImage" src={item.imageUrl}/>
                    <div> 
                        <div className="itemPrice">{`Rs${item.price}`}</div>  
                        <button className="addToCart">Add TO Cart</button>
                        <button className="addToCart" onClick={()=>{cartCtx.addItem({title:item.title,price:item.price,imageUrl:item.imageUrl,quantity:1})}}>Add To Cart</button>
                    </div>
               </div>

               
            ))}
    </ul>
    return(
        <>
            <div className="itemDes">Music</div>
            {storeItems}
            
        </>
    );
};
export default Store;