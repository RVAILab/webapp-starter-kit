import { pgTable, serial, text, timestamp, boolean, integer } from 'drizzle-orm/pg-core';

// This is just a placeholder schema, you can modify it according to your needs later
export const contacts = pgTable('contacts', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email'),
  phone: text('phone'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});

// Type inference helpers for TypeScript
export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert; 