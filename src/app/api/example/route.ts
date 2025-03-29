import { db } from '@/db/index';
import { contacts } from '@/db/schema';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Example query - this will work once you've set up your database and run migrations
    const allContacts = await db.select().from(contacts).limit(10);
    
    return NextResponse.json({ contacts: allContacts });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Example insert operation
    const newContact = await db.insert(contacts).values({
      name: body.name,
      email: body.email,
      phone: body.phone,
    }).returning();
    
    return NextResponse.json({ contact: newContact[0] });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to create contact' },
      { status: 500 }
    );
  }
} 