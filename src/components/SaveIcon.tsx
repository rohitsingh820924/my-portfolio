import { apiPatch } from "@/lib/api";
import React from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { increment } from "@/lib/store/slices/userSlice";

interface SaveIconProps {
  state: boolean;
  id: string;
}

const SaveIcon: React.FC<SaveIconProps> = ({ state, id }) => {
  const dispatch = useDispatch();
  const handleSave = async () => {
    try {
      const response = await apiPatch("/api/inquiry", {
        id: id,
        isSaved: !state,
      });
      if (response.success) {
        toast.success("Inquiry Updated Successfully", {
          theme: "dark",
        });
        dispatch(increment());
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
      toast.error("Error Updating Inquiry", {
        theme: "dark",
      });
    }
  };

  return (
    <div onClick={handleSave}>
      {state ? (
        <IoBookmark color="white" size={22} />
      ) : (
        <IoBookmarkOutline color="white" size={22} />
      )}
    </div>
  );
};

export default SaveIcon;
