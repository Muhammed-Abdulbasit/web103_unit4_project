import React, { useEffect, useState } from 'react';
import { getAllMugs, deleteMug } from '../services/MugsAPI';

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
    <div>
      <h2>🧾 Saved Mugs</h2>
      <ul>
        {mugs.map((mug) => (
          <li key={mug.id}>
            {mug.color} {mug.size} mug with {mug.design} - ${mug.price}
            <a href={`/edit/${mug.id}`}>✏️</a>
            <a href={`/custommugs/${mug.id}`}>🔍</a>
            <button onClick={() => handleDelete(mug.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
