import mongoose, { Schema, Document } from "mongoose";

export interface Inquiry extends Document{
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    countryCode: number;
    createdAt: Date;
    isSaved: boolean;
    isOnline: boolean;
}

const InquirySchema: Schema<Inquiry> = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    countryCode: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isSaved: {
        type: Boolean,
        default: false,
    },
    isOnline: {
        type: Boolean,
        default: true,
    },
})

const InquiryModal = (mongoose.models.Inquiry as mongoose.Model<Inquiry> || mongoose.model<Inquiry>("Inquiry", InquirySchema))

export default InquiryModal;