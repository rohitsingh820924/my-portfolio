"use client"
import Image from "next/image";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { format } from "date-fns";
import { Blog } from '@/lib/types/blogType';
import Link from "next/link";

interface BlogItemProps {
    blogContent: Blog;
  }

const BlogItem: React.FC<BlogItemProps> = ({ blogContent }) => {
  return (
    <div className="w-full mx-auto">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.badge[0]}
            // avatar={blogContent.authorAvatar}
          />
        }
      >
        <div className="relative overflow-hidden grid md:grid-cols-2 h-full rounded-2xl transition duration-200 group bg-white dark:bg-neutral-900 hover:shadow-xl border border-zinc-100 dark:border-neutral-900">
          <div className="w-full h-full bg-white dark:bg-neutral-900 rounded-tr-lg rounded-tl-lg overflow-hidden aspect-video relative">
            <Image
              src={blogContent.bannerImage as string}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 aspect-video `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700 dark:text-zinc-100 line-clamp-2">
              {blogContent.title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500 dark:text-zinc-300 line-clamp-3">
              {blogContent.bannerDescription}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500 dark:text-zinc-300">{format(new Date(blogContent.createdAt), 'dd MMMM yyyy')}</span>
              <Link href={`/products/${blogContent.slug}`} className="relative z-10 px-6 cursor-none py-2 bg-black text-white dark:text-black dark:bg-white font-bold rounded block text-xs">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
}

export default BlogItem;

const TitleComponent = ({
  title,
//   avatar,
}: {
  title: string;
//   avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    {/* <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    /> */}
    <p className="capitalize">{title}</p>
  </div>
);
