import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

/**
 * This is a placeholder implementation for development.
 * 
 * TODO: For production use, add a DATABASE_URL to your .env.local file
 * and uncomment the real implementation below.
 */

// Mock implementation for development without a database
const mockNeon = { query: async () => ({ rows: [] }) } as unknown as ReturnType<typeof neon>;
export const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : mockNeon;

// Create a no-op mock for all database operations
const noopDb = {
  insert: () => ({ values: async () => ({ success: true }) }),
  select: () => ({ from: () => ({ where: () => ({ get: async () => null, all: async () => [] }) }) })
};

// Export a real or mock db instance
export const db = process.env.DATABASE_URL 
  ? drizzle(sql) 
  : noopDb as unknown as ReturnType<typeof drizzle>; 