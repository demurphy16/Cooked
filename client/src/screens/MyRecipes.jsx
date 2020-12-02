import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Ingredients from '../components/Ingredients'

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
    <div>
      {myRecipes.map(myRecipe =>
        <div>
          {myRecipe.name}
          {myRecipe.time}
          <img src={myRecipe.img} />
          <Link to={`/recipes/${myRecipe.id}`}>More Details</Link>
        </div>)}
    </div>
  )
}