import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
    <form onSubmit={(e) => {
      e.preventDefault()
      props.handleCreate(formData)
    }}>
      <h3>Create a Recipe</h3>
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
  )
}