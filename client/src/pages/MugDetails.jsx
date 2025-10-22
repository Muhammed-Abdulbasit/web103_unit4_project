import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMug, deleteMug } from '../services/MugsAPI'

export default function MugDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [mug, setMug] = useState(null)

  useEffect(() => {
    getMug(id).then(setMug)
  }, [id])

  const handleDelete = async () => {
    await deleteMug(id)
    navigate('/custommugs')
  }

  if (!mug) return <p>Loading mug...</p>

  return (
    <div className="details-page">
      <h2>☕ Mug Details</h2>
      <p><b>Color:</b> {mug.color}</p>
      <p><b>Size:</b> {mug.size}</p>
      <p><b>Design:</b> {mug.design}</p>
      <p><b>Price:</b> ${mug.price}</p>

      <button onClick={() => navigate(`/edit/${mug.id}`)}>Edit</button>
      <button onClick={handleDelete} style={{ marginLeft: '10px', background: 'crimson', color: 'white' }}>
        Delete
      </button>
    </div>
  )
}
