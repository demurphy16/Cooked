import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../components/Recipes.css'
import {getUserRecipe} from '../services/recipes'

export default function MyRecipes() {

  const [myRecipes, setMyRecipes] = useState([])

  useEffect(() => {
    const fetchMyRecipes = async () => {
      const myRecipeData = await getUserRecipe()
      setMyRecipes(myRecipeData)
    }
    fetchMyRecipes()
  }, [])

  return (
    <div className="recipe-page-container">
      {myRecipes.map(myRecipe =>
        <div className="recipe-container" key={myRecipe.id}>
          <h5 className="recipe-name recipe">{myRecipe.name}</h5>
          <h5 className="recipe-time recipe">Cook Time: {myRecipe.time}</h5>
          <Link to={`/recipes/${myRecipe.id}`}>
            <img className="recipe-image" src={myRecipe.img} />
          </Link>
        </div>
      )}
    </div>
  )
}