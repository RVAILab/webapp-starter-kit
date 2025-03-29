import { migrate } from 'drizzle-orm/neon-http/migrator';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function main() {
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString) {
    throw new Error('DATABASE_URL environment variable is required');
  }

  // Create a Neon client
  const sql = neon(connectionString);
  
  // Create a Drizzle instance
  const db = drizzle(sql);

  // Run migrations
  console.log('Running migrations...');
  
  await migrate(db, { migrationsFolder: './drizzle' });
  
  console.log('Migrations completed');
}

main().catch((err) => {
  console.error('Error during migration:', err);
  process.exit(1);
}); 