import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import * as schema from "@shared/schema";

// Configure neon for WebSocket support
neonConfig.webSocketConstructor = ws;

// Get database URL from environment or use a default for development
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.warn("DATABASE_URL not set, using in-memory storage");
}

// Create connection pool
export const pool = DATABASE_URL ? new Pool({ connectionString: DATABASE_URL }) : null;

// Create drizzle instance
export const db = pool ? drizzle(pool, { schema }) : null;
