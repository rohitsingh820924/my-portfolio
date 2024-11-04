import { Document } from "mongoose";

export interface BlogItem {
    heading: string;
    image: File | null | string;
    code: string;
    description: string;  
}

export interface Blog extends Document {
    title: string;
    bannerImage: File | null |string;
    badge: string[];
    createdAt: Date;
    slug: string;
    items: BlogItem[];
    bannerDescription: string;
    isOnline: boolean;
}
