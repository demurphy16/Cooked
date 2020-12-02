import { useState, useEffect } from 'react'

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
        </div>)}
    </div>
  )
}