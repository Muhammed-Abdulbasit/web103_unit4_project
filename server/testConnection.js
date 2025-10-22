import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });


import { pool } from './config/database.js';

async function test() {
  console.log('Database URL:', process.env.DATABASE_URL);
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Connected to database:', res.rows[0]);
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  } finally {
    process.exit();
  }
}

test();
