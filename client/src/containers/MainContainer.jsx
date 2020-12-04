import { useState, useEffect } from 'react'
import { useHistory, Route, Switch } from 'react-router-dom'
import { createRecipe, getAllRecipes, updateRecipe } from '../services/recipes'

import RecipeCreate from '../screens/RecipeCreate'
import RecipeEdit from '../screens/RecipeEdit'
import { createIngredient } from '../services/ingredients'
import AddIngredients from '../screens/AddIngredients'

export default function MainContainer(props) {
  const [recipes, setRecipes] = useState([])
  const [ingredients, setIngredients] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipeData = await getAllRecipes()
      setRecipes(recipeData)
    }
    fetchRecipes()
  }, [])


  const handleCreate = async (recipeData) => {
    const newRecipe = await createRecipe(recipeData)
    setRecipes(prevState => [...prevState, newRecipe])
    history.push(`recipes/${newRecipe.id}/ingredients`)
  }
  
  const handleUpdate = async (id, recipeData) => {
    const updatedRecipe = await updateRecipe(id, recipeData)
    setRecipes(prevState => prevState.map(recipe => {
      return recipe.id === Number(id) ? updatedRecipe : recipe
    }))
    history.push('/home')
  }

  const handleAddIngredient = async (ingredientData) => {
    const newIngredient = await createIngredient(ingredientData)
    setIngredients(prevState => [...prevState, newIngredient])
    history.push('/home')
  }


  return (
    <Switch>

      <Route path={`/recipes/:id/ingredients`}>
        <AddIngredients
        handleAddIngredient={handleAddIngredient}
        />    
      </Route>

      <Route path="/recipes/:id/edit">
        <RecipeEdit
          handleUpdate={handleUpdate}
          recipes={recipes} />
      </Route>

      <Route path='/createRecipe'>
        <RecipeCreate
          handleCreate={handleCreate}
        />
      </Route>

  

    </Switch>
  )


}


