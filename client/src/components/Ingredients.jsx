import { useState, useEffect } from 'react'
import { useParams, useHistory, Link, Route } from 'react-router-dom'

// import { getIngredients } from '../services/ingredients'
import { getOneRecipe } from '../services/recipes'
import { destroyRecipe } from '../services/recipes'
import './Ingredients.css'


export default function Ingredients(props) {
  const history = useHistory()
  const { id } = useParams()  
  const [rec, setRec] = useState([])

  useEffect(() => {
    const fetchIngredients = async () => {
      const ingredientsData = await getOneRecipe(Number(id))
      setRec(ingredientsData)
    }
    fetchIngredients()
  }, [id])

  const handleDelete = async (id) => {
    await destroyRecipe(id)
    setRec(prevState => prevState.filter(recipe => recipe.id != id))
    history.push('/myRecipes')
  }


  return (
    <>
    <Route path="/recipes/:id/foreign">
        
    </Route>
    <div className="more-details-page-container">
      <h2 className="more-details-title">{rec.name}</h2>
      <img src={rec.img} />
      <div className="more-details-container">
       {rec.ingredients && rec.ingredients.map(ingredient =>
         <div className="ingredients-container">
           <h4 className="more-details-name ing">{`${ingredient.name}, ${ingredient.quantity}`}</h4>
         </div>)}
      </div>
        <div className="more-details-button-container">
        <button className="details-button" onClick={() => handleDelete(rec.id)}>Delete Recipe</button>
        <Link to={`/recipes/${rec.id}/edit`}><button className="details-button">Edit Recipe</button></Link>
       </div>
      </div>
      </>
  )
}