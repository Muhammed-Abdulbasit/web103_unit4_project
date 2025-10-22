import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMug, updateMug } from '../services/MugsAPI'
import { calcPrice } from '../utilities/calcPrice'

export default function EditMug() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')
  const [design, setDesign] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    getMug(id).then((data) => {
      setColor(data.color)
      setSize(data.size)
      setDesign(data.design)
    })
  }, [id])

  const price = calcPrice(color, size, design)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await updateMug(id, { color, size, design, price })
    if (result.error) setError(result.error)
    else navigate('/custommugs')
  }

  return (
    <div className="edit-page">
      <h2>✏️ Edit Your Mug</h2>

      <form onSubmit={handleSubmit}>
        <label>Color:</label>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option>white</option>
          <option>black</option>
          <option>blue</option>
          <option>pink</option>
        </select>

        <label>Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option>small</option>
          <option>medium</option>
          <option>large</option>
        </select>

        <label>Design:</label>
        <select value={design} onChange={(e) => setDesign(e.target.value)}>
          <option>smile emoji</option>
          <option>custom text</option>
          <option>dark text</option>
        </select>

        <p><b>Total Price:</b> ${price}</p>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Update Mug</button>
      </form>
    </div>
  )
}
