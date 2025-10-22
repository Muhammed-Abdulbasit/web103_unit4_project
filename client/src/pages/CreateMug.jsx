import React, { useState } from 'react';
import { createMug } from '../services/MugsAPI';
import { calcPrice } from '../utilities/calcPrice';

export default function CreateMug() {
  const [color, setColor] = useState('white');
  const [size, setSize] = useState('small');
  const [design, setDesign] = useState('smile emoji');
  const [error, setError] = useState('');

  const price = calcPrice(color, size, design);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createMug({ color, size, design, price });
    if (result.error) setError(result.error);
    else window.location.href = '/custommugs';
  };

  return (
    <div className="create-page">
      <h2>☕ Create Your Custom Mug</h2>

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

        <button type="submit">Save Mug</button>
      </form>
    </div>
  );
}
