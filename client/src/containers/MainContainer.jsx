import { useState, useEffect } from 'react'
import { useHistory, Route, Switch } from 'react-router-dom'
import { createRecipe, getAllRecipes, updateRecipe, destroyRecipe } from '../services/recipes'
import RecipeCreate from '../screens/RecipeCreate'
import RecipeEdit from '../screens/RecipeEdit'
import { createIngredient } from '../services/ingredients'
import AddIngredients from '../screens/AddIngredients'
import MyRecipes from '../screens/MyRecipes'
import Ingredients from '../components/Ingredients'
import Recipes from '../components/Recipes'


export default function MainContainer(props) {
  const [recipes, setRecipes] = useState([])
  const [ingredients, setIngredients] = useState([])
  const history = useHistory()
  const { currentUser } = props
  
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
    history.push(`/recipes/${newRecipe.id}/ingredients`)
  }
  const handleUpdate = async (id, recipeData) => {
    const updatedRecipe = await updateRecipe(id, recipeData)
    setRecipes(prevState => prevState.map(recipe => {
      return recipe.id === Number(id) ? updatedRecipe : recipe
    }))
    history.push('/recipes')
  }

  const handleDelete = async (id) => {
    await destroyRecipe(id)
    setRecipes(prevState => prevState.filter(recipe => recipe.id != id))
    history.push('/recipes/myRecipes')
  }

  const handleAddIngredient = async (id, ingredientData) => {
    const newIngredient = await createIngredient(id, ingredientData)
    setIngredients(prevState => [...prevState, newIngredient])
    history.push('/recipes')
  }
  return (
    <Switch>
      <Route path='/recipes/myRecipes'>
          <MyRecipes />
      </Route>
      
      <Route path='/recipes/new'>
        <RecipeCreate
          handleCreate={handleCreate}
        />
      </Route>
    
      <Route path={`/recipes/:id/ingredients`}>
        <AddIngredients
        handleAddIngredient={handleAddIngredient}
        />    
      </Route>
      
      <Route path={`/recipes/:id/edit`}>
        <RecipeEdit
          handleUpdate={handleUpdate}
          recipes={recipes} />
      </Route>

      <Route path={`/recipes/:id`}>
        <Ingredients
          currentUser={currentUser}
          handleDelete={handleDelete}
          handleAddIngredient={handleAddIngredient}
        />
      </Route>

      <Route path='/recipes'>
        <Recipes
          recipes={recipes}
          setRecipes={setRecipes}
        />
      </Route>
      
    </Switch>
  )
}


