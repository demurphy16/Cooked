import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// import { getIngredients } from '../services/ingredients'
import { getOneRecipe } from '../services/recipes'


export default function Ingredients(props) {

  const { id } = useParams()
  console.log(id)

  // const ingredientList = props.myRecipes.find((r) => r._id === Number(id))
  // console.log(ingredientList)
  
  const [rec, setRec] = useState({})

  useEffect(() => {
    const fetchIngredients = async () => {
      console.log("Hello")
      const ingredientsData = await getOneRecipe(Number(id))
      setRec(ingredientsData)
      console.log(`Ingredients ${ingredientsData}`)
    }
    fetchIngredients()
    console.log(rec)
  }, [id])

  return (
    <div>
       {rec.ingredients && rec.ingredients.map(ingredient =>
         <div>
           {ingredient.name}
           {ingredient.quantity}
         </div>)} 
    </div>
  )
}