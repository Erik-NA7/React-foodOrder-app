import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header> 
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="meals"/>
      </div>
    </>
  )
}

export default Header;