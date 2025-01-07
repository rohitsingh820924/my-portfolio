import mongoose, { Document, Schema, model, models } from 'mongoose';

interface IVisitor extends Document {
  ip: string;
  userAgent: string;
  screenResolution: string;
  referrer: string;
  page: string;
  language: string;
  device: string;
  timestamp: Date;
}

const visitorSchema = new Schema<IVisitor>({
  ip: { type: String },
  userAgent: { type: String},
  screenResolution: { type: String},
  referrer: { type: String },
  page: { type: String },
  language: { type: String },
  device: { type: String },
  timestamp: { type: Date, default: Date.now },
});

export default models.Visitor || model<IVisitor>('Visitor', visitorSchema);