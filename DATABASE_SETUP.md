# Database Setup Guide

## Overview

This application now uses **PostgreSQL** for persistent data storage instead of in-memory storage. This ensures that appointments and messages are not lost when the server restarts.

## Quick Setup

### 1. Get a PostgreSQL Database

You have several options:

**Option A: Neon (Recommended for Replit)**
- Go to [neon.tech](https://neon.tech)
- Create a free account
- Create a new project
- Copy the connection string

**Option B: Supabase**
- Go to [supabase.com](https://supabase.com)
- Create a free account
- Create a new project
- Go to Settings > Database
- Copy the connection string (Transaction Pooler)

**Option C: Local PostgreSQL**
- Install PostgreSQL locally
- Create a database: `createdb dental_clinic`
- Your connection string: `postgresql://localhost:5432/dental_clinic`

### 2. Set Environment Variable

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` and add your database URL:

```env
DATABASE_URL=postgresql://user:password@host:port/database
```

### 3. Run Migrations

Push the database schema:

```bash
npm run db:push
```

This will create the necessary tables:
- `users` - User authentication
- `appointments` - Dental appointments
- `messages` - Contact form messages

### 4. Start the Server

```bash
npm run dev
```

## Fallback Behavior

If `DATABASE_URL` is not set, the application will automatically fall back to **in-memory storage** with a warning message. This is useful for quick testing but **data will be lost on restart**.

## Database Schema

### Appointments Table
- `id` - Serial primary key
- `name` - Patient name
- `phone` - Contact number
- `email` - Email address
- `date` - Appointment date
- `time` - Appointment time
- `department` - Dental department
- `reason` - Reason for visit
- `status` - pending/confirmed/cancelled
- `created_at` - Timestamp

### Messages Table
- `id` - Serial primary key
- `name` - Sender name
- `email` - Sender email
- `subject` - Message subject
- `message` - Message content
- `read` - Read status
- `created_at` - Timestamp

### Users Table
- `id` - Serial primary key
- `username` - Unique username
- `password` - Hashed password

## Troubleshooting

**Error: "Database not configured"**
- Make sure `DATABASE_URL` is set in your environment
- Verify the connection string is correct
- Check that the database is accessible

**Error: "relation does not exist"**
- Run `npm run db:push` to create the tables
- Verify migrations were applied successfully

**Connection timeouts**
- Check your database provider's status
- Ensure your IP is whitelisted (if using hosted database)
- Verify firewall settings

## Migration Commands

```bash
# Generate new migration
npm run db:generate

# Push schema to database
npm run db:push

# Open Drizzle Studio (database browser)
npm run db:studio
```

## Benefits of PostgreSQL

✅ **Persistent Data** - Data survives server restarts
✅ **Scalability** - Handle more appointments and messages
✅ **Reliability** - ACID compliance and data integrity
✅ **Query Power** - Complex queries and reporting
✅ **Concurrent Access** - Multiple users simultaneously
