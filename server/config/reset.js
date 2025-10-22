import { pool } from './database.js';

const createTable = async () => {
  const query = `
    DROP TABLE IF EXISTS custom_mugs;
    CREATE TABLE custom_mugs (
      id SERIAL PRIMARY KEY,
      color TEXT NOT NULL,
      size TEXT NOT NULL,
      design TEXT NOT NULL,
      price NUMERIC(10, 2) NOT NULL
    );
  `;
  await pool.query(query);
  console.log('✅ CustomMugs table created successfully!');
};

createTable()
  .then(() => process.exit())
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
