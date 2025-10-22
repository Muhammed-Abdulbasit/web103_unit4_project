import { pool } from '../config/database.js';

// Get all mugs
export async function getAllMugs(req, res) {
  try {
    const result = await pool.query('SELECT * FROM custom_mugs ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching mugs:', err);
    res.status(500).json({ error: 'Failed to fetch mugs' });
  }
}

// Get a single mug by ID
export async function getMugById(req, res) {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM custom_mugs WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Mug not found' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching mug:', err);
    res.status(500).json({ error: 'Failed to fetch mug' });
  }
}

// Create a new mug
export async function createMug(req, res) {
  const { color, size, design, price } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO custom_mugs (color, size, design, price)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [color, size, design, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating mug:', err);
    res.status(500).json({ error: 'Failed to create mug' });
  }
}

// Update an existing mug
export async function updateMug(req, res) {
  const { id } = req.params;
  const { color, size, design, price } = req.body;

  try {
    const result = await pool.query(
      `UPDATE custom_mugs
       SET color=$1, size=$2, design=$3, price=$4
       WHERE id=$5 RETURNING *`,
      [color, size, design, price, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Mug not found' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating mug:', err);
    res.status(500).json({ error: 'Failed to update mug' });
  }
}

// Delete a mug
export async function deleteMug(req, res) {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM custom_mugs WHERE id=$1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Mug not found' });
    res.json({ message: 'Mug deleted successfully' });
  } catch (err) {
    console.error('Error deleting mug:', err);
    res.status(500).json({ error: 'Failed to delete mug' });
  }
}
