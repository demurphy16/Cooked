import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { createRecipe, getAllRecipes } from '../services/recipes'

export default function MainContainer(props) {
  const [recipes, setRecipes] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeData = await getAllRecipes()
      setRecipes(recipeData)
    }
    fetchRecipes
  }, [])


  const handleCreate = async (recipeData) => {
    const newRecipe = await createRecipe(recipeData)
    setRecipes(prevState => [...prevState, newRecipe])
    history.push('/home')
  }

  return (
    <Route path='/createRecipe'>
      <RecipeCreate
      handleCreate={handleCreate}
      />
    </Route>
  )


}


