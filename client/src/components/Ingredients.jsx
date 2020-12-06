import { useState, useEffect } from 'react'
import { useParams, Link, } from 'react-router-dom'
import AddIngredients from '../screens/AddIngredients'

import { getOneRecipe } from '../services/recipes'
import './Ingredients.css'


export default function Ingredients(props) {
  const { id } = useParams()
  const [rec, setRec] = useState([])
  const [ingredientToggle, setIngredientToggle] = useState(false)

  useEffect(() => {
    const fetchIngredients = async () => {
      const ingredientsData = await getOneRecipe(Number(id))
      setRec(ingredientsData)
      console.log(rec)
    }
    fetchIngredients()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='more-details-ultra-container'>
      <div className="more-details-page-container">
        <h2 className="more-details-title">{rec.name}</h2>
        <div>
        <img alt="recipe" className="more-details-img"src={rec.img} />
        </div>
          <div className="more-details-container">
          {rec.ingredients && rec.ingredients.map(ingredient =>
            <div className="ingredients-container">
              <h4 className="more-details-name ing">{`${ingredient.name}, ${ingredient.quantity}`}</h4>
            </div>)}
        </div>
        
        {rec.user_id && rec.user_id === props.currentUser?.id ?
        <div className="add-ingred-button-container">
        <button className="add-ingredients-button"
          onClick={
          () => { ingredientToggle ? setIngredientToggle(false) : setIngredientToggle(true) }}>
              Add Ingredients</button>
            {ingredientToggle &&
              <AddIngredients handleAddIngredient={props.handleAddIngredient} />}
        < div className="more-details-button-container">
        <button className="details-button" onClick={() => props.handleDelete(rec.id)}>Delete Recipe</button>
        <Link to={`/recipes/${rec.id}/edit`}><button className="details-button">Edit Recipe</button></Link>
            </div>
            </div>
      : <div></div>} 
      </div>
      
      </div>
  )
}