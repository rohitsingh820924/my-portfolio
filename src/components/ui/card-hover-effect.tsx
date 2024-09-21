import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import CopyIcon from "../CopyIcon";
import SwitchBox from "./switch";
import SaveIcon from "../SaveIcon"
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import DeleteDialog from "../DeleteDialog";
import EditPopup from "../EditPopup";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    countryCode: number;
    isSaved: boolean;
    isOnline: boolean;
    _id: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [id, setId] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 py-10",
        className
      )}
    >
      {items?.map((item, idx) => (
        <Link
          href="#"
          // {`mailto:${item?.email}`}
          key={item?._id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-2 rounded-full bg-gray-50 dark:bg-zinc-800 px-3 py-2">
                  <SaveIcon state={item.isSaved} id={item._id}/>
                <SwitchBox state={item.isOnline} id={item._id} />
                <FiEdit color='white' size={22} onClick={()=>{setId(item._id), setEditModal(true)}}/>
                <MdDeleteOutline color='red' size={25} onClick={()=>{setId(item._id), setDeleteModal(true)}}/>
              </div>
            </div>
            <CardTitle>{item.firstName}&nbsp;{item.lastName} <CopyIcon text={`${item.firstName} ${item.lastName}`} /> </CardTitle>
            <CardDescription>{item.email} <CopyIcon text={item.email} /></CardDescription>
            <CardDescription>+{item.countryCode}&nbsp;{item.phone} <CopyIcon text={`+${item.countryCode} ${item.phone}`} /></CardDescription>
          </Card>
        </Link>
      ))}
      <EditPopup id={id} open={editModal} onClose={() => setEditModal(false)}/>
      <DeleteDialog id={id} open={deleteModal} onClose={() => setDeleteModal(false)} />
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 dark:text-neutral-300 text-neutral-950 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
