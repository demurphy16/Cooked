import api from './apiConfig'

// get all ingredients specific to a recipe
export const getIngredients = async (ingredientId, recipeId) => {
  const resp = await api.get(`/ingredients/${ingredientId}/recipes/${recipeId}`)
  return resp.data

}