import api from './apiConfig'

// get all
export const getAllRecipes = async () => {
  const resp = await api.get('/recipes')
  return resp.data
}

// get all for specific user

export const getUserRecipe = async (recipeId, userId) => {
  const resp = await api.get(`/recipes/${recipeId}/users/${userId}`)
  return resp.data
}

// get one
export const getOneRecipe = async (id) => {
  const resp = await api.get(`/recipes/${id}`)
  return resp.data
}

// create
export const createRecipe = async (recipeData) => {
  const resp = await api.post('/recipes', { recipe: recipeData })
  return resp.data
}

// update
export const updateRecipe = async (id, recipeData) => {
  const resp = await api.put(`/recipes/${id}`, { recipe: recipeData})
  return resp.data
}

// delete
export const destroyRecipe = async (id) => {
  const resp = await api.delete(`/recipes/${id}`)
  return resp
}

