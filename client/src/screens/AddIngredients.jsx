import {useEffect, useState} from'react'
import { getOneRecipe } from '../services/recipes'
import { useParams } from 'react-router-dom'
export default function AddIngredients(props) {
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
      <form onSubmit={(e) => {
      e.preventDefault()
      props.handleAddIngredient(Number(id), ing)
    }}>
        <input
          name="name"
          type="text"
          value={ing.name}
          onChange={handleChange}
        />
        <input
          name="quantity"
          type="text"
          value={ing.quantity}
          onChange={handleChange}
        />
        <button>Add Your Ingredients</button>
      </form>
    </div>
  )
}