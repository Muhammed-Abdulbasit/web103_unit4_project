import React, { useEffect, useState } from 'react';
import { getAllMugs, deleteMug } from '../services/MugsAPI';
import '../css/ViewMugs.css';


export default function ViewMugs() {
  const [mugs, setMugs] = useState([]);

  useEffect(() => {
    fetch("/api/mugs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMugs(data);
        } else {
          console.error("Expected array, got:", data);
          setMugs([]);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  

  const handleDelete = async (id) => {
    await deleteMug(id);
    setMugs(mugs.filter((m) => m.id !== id));
  };

  return (
    <div className="mugs-page">
      <h2>🧾 Saved Mugs</h2>
      <ul className="mug-list">
        {mugs.map((mug) => (
          <li key={mug.id} className="mug-item">
            <div className="mug-info">
              {mug.color} {mug.size} mug with {mug.design} - ${mug.price}
            </div>
            <div className="mug-actions">
              <a href={`/edit/${mug.id}`} title="Edit Mug">✏️</a>
              <a href={`/custommugs/${mug.id}`} title="View Details">🔍</a>
              <button onClick={() => handleDelete(mug.id)} title="Delete Mug">🗑</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}  
