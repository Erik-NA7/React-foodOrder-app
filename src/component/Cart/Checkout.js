import classes from './Checkout.module.css'
import { useRef, useState } from 'react'

const isEmpty = value => value.trim() === ''
const isFiveChars = value => value.trim().length === 5

function Checkout(props) {
  const [ formInputsValid, setFormInputsValid ] = useState({
    name: true,
    street: true,
    city: true,
    postal: true
  })

  const nameInput = useRef()
  const streetInput = useRef()
  const postalInput = useRef()
  const cityInput = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()
    const enteredName = nameInput.current.value
    const enteredStreet = streetInput.current.value
    const enteredPostal = postalInput.current.value
    const enteredCity = cityInput.current.value

    const enteredNameValid = !isEmpty(enteredName)
    const enteredStreetValid = !isEmpty(enteredStreet)
    const enteredCityValid = !isEmpty(enteredCity)
    const enteredPostalValid = isFiveChars(enteredPostal)

    setFormInputsValid({
      name: enteredNameValid,
      street: enteredStreetValid,
      city: enteredCityValid,
      postal: enteredPostalValid
    })

    const formValid =
      enteredNameValid &&
      enteredStreetValid &&
      enteredCityValid &&
      enteredPostalValid    
  };
    
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label> 
        <input type='text' id='name' ref={nameInput}/>
        { !formInputsValid.name &&
          <p>Entered a valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label> 
        <input type='text' id='street' ref={streetInput}/>
        { !formInputsValid.street &&
          <p>Entered a valid street name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal code</label> 
        <input type='text' id='postal' ref={postalInput}/>
        { !formInputsValid.postal &&
          <p>Entered a valid postal code</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label> 
        <input type='text' id='city' ref={cityInput}/>
        { !formInputsValid.city &&
          <p>Entered a valid city</p>}
      </div>
      <button
        className={classes.cancel}
        type='button'
        onClick={props.onCancel}>Cancel</button>
      <button className={classes.submit} type='submit'>Confirm</button>
    </form>
  )
}

export default Checkout
