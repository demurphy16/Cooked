import {useEffect, useState} from'react'
import { getOneRecipe } from '../services/recipes'
import { useParams } from 'react-router-dom'

export default function AddIngredients(props) {

  const [ing, setIng] = useState({
    name: "",
    quantity: ""
  })
  const { id } = useParams()

  useEffect(() => {
    const fetchIngredients = async () => {
      const ingredientsData = await getOneRecipe (Number(id))
      setIng(ingredientsData)
    }
    fetchIngredients()
  }, [id])


  return (
    <div>
      <form onSubmit={(e) => {
      e.preventDefault()
      props.handleAddIngredients(ing)
    }}>
        <input
          name="name"
          type="text"
          value={ing.ingredients.name}
        />
        <input
          name="quantity"
          type="text"
          value={ing.ingredients.quantity}
        />
        <button>Add Your Ingredients</button>
      </form>
    </div>
  )
}