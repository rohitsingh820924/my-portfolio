import mongoose, { Schema, Document } from "mongoose";
import {  } from "mongoose";

export interface Inquiry extends Document{
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    countryCode: number;
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
    }
})

const InquiryModal = (mongoose.models.Inquiry as mongoose.Model<Inquiry> || mongoose.model<Inquiry>("Inquiry", InquirySchema))

export default InquiryModal;