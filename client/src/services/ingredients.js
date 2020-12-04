import api from './apiConfig'

// get all ingredients specific to a recipe
export const getIngredients = async (recipeId) => {
  const resp = await api.get(`/recipes/:id/ingredients${recipeId}`)
  return resp.data
}

export const createIngredient = async (ingredientData) => {
  const resp = await api.post('/recipes/:id/ingredients', { ingredient: ingredientData })
  return resp.data
}