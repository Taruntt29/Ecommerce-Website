import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h5>{props.title}</h5>
        <div className={classes.author}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;