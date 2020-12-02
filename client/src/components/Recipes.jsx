import { useState, useEffect } from 'react'
import{ Switch, Route } from 'react-router-dom'


import {getAllRecipes} from '../services/recipes'


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
    <div>
      {recipes.map(recipe =>
        <div>
          {recipe.name}
          {recipe.time}
          <img src={recipe.img} />
        </div>)}
    </div>
  )
}