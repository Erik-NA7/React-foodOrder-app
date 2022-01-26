import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [ mealsData, setMealsData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [isError, setIsError] = useState()

  useEffect(() => {
    const getMeals = async () => {
      setIsLoading(true)
      const response = await fetch('https://learnfirebase-ceee0-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')

      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      const json = await response.json()
      const loadedMeals = []
      
      for (const key in json) {
        loadedMeals.push({
          id: key,
          name: json[key].name,
          description: json[key].description,
          price: json[key].price
        }) 
      }
      
      setMealsData(loadedMeals)
      setIsLoading(false)     
    }


    getMeals().catch(error => {
      setIsLoading(false)
      setIsError(error.message)
    })
    
    return () => {
      getMeals()
    }
  }, [])
  
  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  if (isError) {
    return (
      <section className={classes.mealsError}>
        <p>{isError}</p>
      </section>   
    )
  }

  const mealsList = mealsData.map( meal =>
    
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  )
  
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>  
  )
}

export default AvailableMeals;