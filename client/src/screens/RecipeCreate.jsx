import React, { useState } from 'react'
import './RecipeCreate.css'

export default function RecipeCreate(props) {
  console.log(props)
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    img: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="create-page-container">
    <div className="create-form-container">
    <form className="create-form"
      onSubmit={(e) => {
      e.preventDefault()
      props.handleCreate(formData)
    }}>
      <h3 className="create-title">Create a Recipe</h3>
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
      <button>Create</button>
      </form >
    </div>
    </div>
  )
}