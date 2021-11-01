import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const numberOfCartItem = cartCtx.items.reduce((curNummber, item) => {
    return curNummber + item.amount;
  }, 0)
  const [ btnAnimate, setBtnAnimate ] = useState(false)
  const btnClasses = `${classes.button} ${btnAnimate? classes.bump : ''}`
  const { items } = cartCtx

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimate(true)
    const timer = setTimeout(() => {
      setBtnAnimate(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  )
};

export default HeaderCartButton;