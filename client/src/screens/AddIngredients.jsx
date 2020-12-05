import {useEffect, useState} from'react'
import { getOneRecipe } from '../services/recipes'
import { useParams } from 'react-router-dom'

import '../components/Ingredients.css'

export default function AddIngredients(props) {
  console.log(props)
  const [ing, setIng] = useState({
    name: "",
    quantity: "",
    recipe_id: ""
  })
  const { id } = useParams()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIng(prevState => {
      return {...prevState, [name]: value} 
    })
  }
  useEffect(() => {
    const fetchIngredients = async () => {
      const ingredientsData = await getOneRecipe (Number(id))
      setIng(prevState => { 
        return { ...prevState, recipe_id: ingredientsData.id }
      })
    }
    fetchIngredients()
  }, [id])
  return (
    <div>
      <form className="add-ingred-form"
        onSubmit={(e) => {
        e.preventDefault()
        props.handleAddIngredient(Number(id), ing)
    }}>
        <input
          name="name"
          type="text"
          value={ing.name}
          onChange={handleChange}
          placeholder="Input Ingredient"
        />
        <input
          name="quantity"
          type="text"
          value={ing.quantity}
          onChange={handleChange}
          placeholder="Input Quantity"
        />
        <button className="add-ingred-button">Add Your Ingredients</button>
      </form>
    </div>
  )
}