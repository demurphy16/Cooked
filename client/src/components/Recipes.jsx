import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getAllRecipes } from '../services/recipes'
import './Recipes.css'


export default function Recipes() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeData = await getAllRecipes()
      setRecipes(recipeData)
    }
    fetchRecipes()
  }, [])

  return (
    <div className="recipe-page-container">
      {recipes.map(recipe =>
          <div className="recipe-container">
            <h4 className="recipe-name recipe">{recipe.name}</h4>
            <h5 className="recipe-name recipe">Cook Time: {recipe.time}</h5>
            <Link to={`/recipes/${recipe.id}/foreign`}>  
              <img className="recipe-image" src={recipe.img} />
            </Link>
          </div>
      )}
    </div>
  )
}