import { Schema } from "mongoose";
import { Blog } from "@/lib/types/blogType";

const BlogItemSchema: Schema = new Schema({
    heading: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    code: {
        type: String,
    },
});

const BlogSchema: Schema<Blog> = new Schema({
    title: {
        type: String,
        required: true,
    },
    bannerDescription: {
        type: String,
        required: true,
    },
    bannerImage: {
        type: String, 
        required: true,
    },
    badge: {
        type: [String], 
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    slug: {
        type: String,
        unique: true,
        required: true,
    },
    isOnline: {
        type: Boolean,
        default: false,
    },
    items: [BlogItemSchema],
});

export default BlogSchema;
