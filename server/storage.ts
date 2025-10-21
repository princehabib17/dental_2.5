import {
  users,
  type User,
  type InsertUser,
  appointments,
  type Appointment,
  type InsertAppointment,
  messages,
  type Message,
  type InsertMessage
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Storage interface
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Appointment methods
  getAppointments(): Promise<Appointment[]>;
  getAppointmentById(id: number): Promise<Appointment | undefined>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  updateAppointmentStatus(id: number, status: string): Promise<Appointment | undefined>;
  
  // Message methods
  getMessages(): Promise<Message[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  markMessageAsRead(id: number): Promise<Message | undefined>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private appointments: Map<number, Appointment>;
  private messages: Map<number, Message>;
  private userCurrentId: number;
  private appointmentCurrentId: number;
  private messageCurrentId: number;

  constructor() {
    this.users = new Map();
    this.appointments = new Map();
    this.messages = new Map();
    this.userCurrentId = 1;
    this.appointmentCurrentId = 1;
    this.messageCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Appointment methods
  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values()).sort((a, b) => {
      // Sort by createdAt in descending order (newest first)
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }

  async getAppointmentById(id: number): Promise<Appointment | undefined> {
    return this.appointments.get(id);
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.appointmentCurrentId++;
    const now = new Date();
    const appointment: Appointment = {
      ...insertAppointment,
      id,
      status: "pending",
      createdAt: now
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async updateAppointmentStatus(id: number, status: string): Promise<Appointment | undefined> {
    const appointment = this.appointments.get(id);
    if (!appointment) return undefined;
    
    const updatedAppointment: Appointment = {
      ...appointment,
      status
    };
    this.appointments.set(id, updatedAppointment);
    return updatedAppointment;
  }

  // Message methods
  async getMessages(): Promise<Message[]> {
    return Array.from(this.messages.values()).sort((a, b) => {
      // Sort by createdAt in descending order (newest first)
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.messageCurrentId++;
    const now = new Date();
    const message: Message = {
      ...insertMessage,
      id,
      read: false,
      createdAt: now
    };
    this.messages.set(id, message);
    return message;
  }

  async markMessageAsRead(id: number): Promise<Message | undefined> {
    const message = this.messages.get(id);
    if (!message) return undefined;
    
    const updatedMessage: Message = {
      ...message,
      read: true
    };
    this.messages.set(id, updatedMessage);
    return updatedMessage;
  }
}

// Database storage implementation using Drizzle ORM
export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    if (!db) throw new Error("Database not configured");
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (!db) throw new Error("Database not configured");
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    if (!db) throw new Error("Database not configured");
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Appointment methods
  async getAppointments(): Promise<Appointment[]> {
    if (!db) throw new Error("Database not configured");
    const result = await db
      .select()
      .from(appointments)
      .orderBy(appointments.createdAt);
    return result.reverse(); // newest first
  }

  async getAppointmentById(id: number): Promise<Appointment | undefined> {
    if (!db) throw new Error("Database not configured");
    const result = await db.select().from(appointments).where(eq(appointments.id, id));
    return result[0];
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    if (!db) throw new Error("Database not configured");
    const result = await db.insert(appointments).values(insertAppointment).returning();
    return result[0];
  }

  async updateAppointmentStatus(id: number, status: string): Promise<Appointment | undefined> {
    if (!db) throw new Error("Database not configured");
    const result = await db
      .update(appointments)
      .set({ status })
      .where(eq(appointments.id, id))
      .returning();
    return result[0];
  }

  // Message methods
  async getMessages(): Promise<Message[]> {
    if (!db) throw new Error("Database not configured");
    const result = await db
      .select()
      .from(messages)
      .orderBy(messages.createdAt);
    return result.reverse(); // newest first
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    if (!db) throw new Error("Database not configured");
    const result = await db.insert(messages).values(insertMessage).returning();
    return result[0];
  }

  async markMessageAsRead(id: number): Promise<Message | undefined> {
    if (!db) throw new Error("Database not configured");
    const result = await db
      .update(messages)
      .set({ read: true })
      .where(eq(messages.id, id))
      .returning();
    return result[0];
  }
}

// Export storage instance - use database if available, fallback to memory
export const storage = db ? new DatabaseStorage() : new MemStorage();
