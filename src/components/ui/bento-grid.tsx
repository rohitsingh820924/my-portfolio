import { cn } from "@/lib/utils";
import Image from 'next/image'
import { format } from 'date-fns';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  image,
  slug,
  date,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: string[];
  image?:string;
  slug?:string;
  date?:any;
}) => {
  return (
    <a href={`/products/${slug}`}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-3 dark:bg-neutral-950 dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <Image
      src={image as string}
      width={500}
      height={500}
      className="w-full h-auto rounded object-cover object-top"
      alt="Picture of the author"
    />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
      <div className="flex gap-2 flex-wrap justify-between">
            <div className="flex gap-3">
              {icon?.map((item, i) => (
                <span
                  key={i}
                  className="bg-black text-white rounded-full text-xs w-fit px-3 py-0.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 my-2 line-clamp-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 line-clamp-4">
          {description}
        </div>
      </div>
    </a>
  );
};
