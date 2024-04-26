async function createAttendeesDB(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
      // Create the "invoices" table if it doesn't exist
      const createTable = await client.sql`
      CREATE TABLE attendees (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone TEXT NOT NULL UNIQUE,
        date_rsvp DATE NOT NULL,
        ticket_status VARCHAR(255) NOT NULL,
    );
  `;
  
      console.log(`Created "attendees" table`);
  
      return {
        createTable,
      };
    } catch (error) {
      console.error('Error seeding invoices:', error);
      throw error;
    }
  }
  