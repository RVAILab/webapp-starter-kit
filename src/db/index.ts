import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// For environments where you need direct access to the connection
export const sql = neon(process.env.DATABASE_URL!);

// The Drizzle instance
export const db = drizzle(sql); 