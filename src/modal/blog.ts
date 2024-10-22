import mongoose, { Document } from "mongoose";
import BlogSchema from "@/schemas/blogSchema";
import { Blog } from "@/lib/types/blogType";

const BlogModel = (mongoose.models.Blog as mongoose.Model<Blog>) || mongoose.model<Blog>("Blog", BlogSchema);

export default BlogModel;
