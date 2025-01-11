"use client";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "@/lib/store/slices/blogSlice";
import { RootState, AppDispatch } from "@/lib/store/store";
import { useEffect } from "react";
import BlogItem from "./BlogItem";

const RelatedBlogs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs, status, error } = useSelector(
    (state: RootState) => state.blogs
  );
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogs());
    }
  }, [dispatch, status]);
  return (
    <div>
      <h2 className="text-lg md:text-2xl font-semibold mb-3 text-neutral-950 dark:text-neutral-50">
        All Blogs
      </h2>
      <p className="text-neutral-950 dark:text-neutral-50 text-sm">
        Browse through all my blogs covering UI/UX design, web development, and
        creative projects. Gain insights, tips, and inspiration from my
        experiences and industry trends.
      </p>
      <div className="grid md:grid-cols-1 gap-10 md:flex-wrap flex-nowrap my-10">
        {blogs?.map((item: any) => (
          <BlogItem key={item._id} blogContent={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
