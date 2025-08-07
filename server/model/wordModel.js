import dotenv from 'dotenv';
dotenv.config();
import { Pool } from 'pg';

const PG_URI = process.env.LOCAL_PG_URI;

if (!PG_URI) {
  throw new Error('❌ LOCAL_PG_URI not found in environment variables');
}

const pool = new Pool({ connectionString: PG_URI });

export default {
  query: (text, params, callback) => {
    console.log('📋 executed query', text);
    return pool.query(text, params, callback);
  },
};
