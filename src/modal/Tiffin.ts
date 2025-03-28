import mongoose, { Schema, Document, Model } from "mongoose";

// Tiffin Tracking Interface
interface ITiffin extends Document {
  userId: string | null; // User reference
  date: Date; // Date of tiffin consumption
  tiffinCount: number; // Number of tiffins consumed
  isPaid: boolean; // Payment status
  paymentDate?: Date; // Date when payment was made (optional)
}

// Tiffin Schema
const TiffinSchema = new Schema<ITiffin>(
  {
    userId: { type: String, required: true, index: true }, // Indexed for better query performance
    date: { type: Date, required: true, index: true }, // Indexed for quick date-based lookups
    tiffinCount: { type: Number, required: true, min: 1, max: 5 }, // Restrict to 1-5 tiffins per day
    isPaid: { type: Boolean, default: false }, // Default to unpaid
    paymentDate: { type: Date, default: null }, // Default to null instead of undefined
  },
  { timestamps: true }
);

// Define and export model
const Tiffin: Model<ITiffin> = mongoose.models.Tiffin || mongoose.model<ITiffin>("Tiffin", TiffinSchema);

export { Tiffin };
export type { ITiffin };
