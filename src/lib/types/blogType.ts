import { Document } from "mongoose";

export interface BlogItem {
    heading: string;
    image: File | null;
    code: string;
    description: string;  
}

export interface Blog extends Document {
    title: string;
    bannerImage: File | null;
    badge: string[];
    createdAt: Date;
    slug: string;
    items: BlogItem[];
    bannerDescription: string;
    isOnline: boolean;
}
