// models/portfolioModel.ts
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Portfolio schema
interface IPortfolio extends Document {
  name: string;
  email: string;
  otpToken: number;
  updatedAt?: Date;
}

// Define the schema with a fixed single-entry configuration
const PortfolioSchema = new Schema<IPortfolio>({
  name: { type: String, required: true, default: "Rohit Singh" },
  email: { type: String, required: true, defalut: "rohitsingh820924@gmail.com" },
  otpToken: { type: Number, required: true },
}, {
  timestamps: true,
});

// Ensure there's only one document in the collection
PortfolioSchema.index({}, { unique: true });

const Portfolio = mongoose.models.Portfolio || mongoose.model<IPortfolio>('Portfolio', PortfolioSchema);
export default Portfolio;
