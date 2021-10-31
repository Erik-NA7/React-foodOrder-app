import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css'

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header> 
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="meals"/>
      </div>
    </>
  )
}

export default Header;