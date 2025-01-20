import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Create a new pool instance using the environment variables
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export default pool;
