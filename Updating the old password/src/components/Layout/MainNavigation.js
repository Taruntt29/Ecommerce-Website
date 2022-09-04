import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../Context/cart-contetxt';
import CartProvider from '../Context/CartProvider';
import classes from './MainNavigation.module.css';
const MainNavigation = (props) => {
  const credCtx = useContext(CartContext);
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth'>Login</Link>
          {!credCtx.check() && <Link to='/auth'>Login</Link>}
          </li>
          <li>
           {credCtx.check() && <Link to='/profile'>Profile</Link>}
          </li>
          <li>
            {credCtx.check() && <button onClick={credCtx.logOut}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;