import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import './RecipeEdit.css'

export default function RecipeEdit(props) {

  const [formData, setFormData] = useState({
    name: "",
    time: "",
    img: ""
  })
  const { id } = useParams()

  useEffect(() => {
    const fillForm = () => {
      const recipeItem = props.recipes.find(recipe => recipe.id === Number(id))
      setFormData({
        name: recipeItem.name,
        time: recipeItem.time,
        img: recipeItem.img
      })
    }
    if (props.recipes.length) {
      fillForm()
    }
    // eslint-disable-next-line
  }, [props.recipes])
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="edit-ultra-container">
      <div className='edit-page-container'>
    <form className="edit-form"
      onSubmit={(e) => {
      e.preventDefault()
      props.handleUpdate(id, formData)
    }}>
      <h3>Edit Your Recipe</h3>
      <label>Recipe Name:
    <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>Cook Time:
    <input
          type='text'
          name='time'
          value={formData.time}
          onChange={handleChange}
        />
      </label>
      <label>Recipe Image:
    <input
          type='text'
          name='img'
          value={formData.img}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
      </form>
    </div>
    </div>
  )
}