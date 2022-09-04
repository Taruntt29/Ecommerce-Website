import classes from './ProfileForm.module.css';
import React, {useContext, useRef} from 'react';
import CartContext from '../Context/cart-contetxt';

const ProfileForm = () => {
  const newPasswordRef  = useRef();
  const credCtx = useContext(CartContext);

  function passwordChangeHandler(event){
    event.preventDefault();
    const newPassword = newPasswordRef.current.value
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCKBtqhRmmkbiCnjg2-BtdNrUsyGZKySfI',
    {
      method:'POST',
      body: JSON.stringify({
        idToken: credCtx.creds[0].token,
        password:newPassword,
        returnSecureToken: true
      })
    }).then(res=>{
      console.log('PassWord Change Successfull')
    })

  };

  return (
    <form className={classes.form}>
    <form className={classes.form} onSubmit={passwordChangeHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' />
        <input type='password' id='new-password' ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}
export default ProfileForm;