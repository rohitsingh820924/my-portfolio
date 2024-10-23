"use client";
import React, { useEffect, useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
} from "@mui/material";
import ImageUpload from "./ImageUpload";
import { useDispatch } from "react-redux";
import { updateBlog } from "@/lib/store/slices/blogSlice"; // Assuming updateBlog exists
import { AppDispatch } from "@/lib/store/store";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modals from "@mui/material/Modal";

interface BlogItem {
  heading: string;
  image: File | string;
  code: string;
  description: string;
}

interface Blog {
  title: string;
  bannerDescription: string;
  badge: string[];
  bannerImage: File | string;
  items: BlogItem[];
  isOnline: boolean;
  _id: string;
}

interface BlogModalProps {
  initialBlog: Blog;
  open: boolean;
  setOpen: any;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

const BlogModal: React.FC<BlogModalProps> = ({
  initialBlog,
  open,
  setOpen,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [blog, setBlog] = useState<Blog>({
    ...initialBlog,
    badge: initialBlog?.badge || [],
  });
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (initialBlog) {
      setBlog({
        ...initialBlog,
        badge: initialBlog?.badge || [],
      });
    }
  }, [initialBlog]);

  console.log(blog);
  console.log(initialBlog);

  const handleAddItem = () => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      items: [
        ...prevBlog?.items,
        { heading: "", description: "", image: "", code: "" },
      ],
    }));
  };

  const handleItemChange = (
    index: number,
    field: keyof BlogItem,
    value: string | File | null
  ) => {
    const updatedItems = [...blog?.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setBlog((prevBlog) => ({ ...prevBlog, items: updatedItems }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blog?.title);
    formData.append("id", blog?._id);
    formData.append("bannerDescription", blog?.bannerDescription);
    if (blog?.bannerImage) formData.append("bannerImage", blog?.bannerImage);

    blog?.badge.forEach((badge) => {
      formData.append("badge[]", badge);
    });
    formData.append("isOnline", blog?.isOnline.toString());

    blog?.items.forEach((item, index) => {
      formData.append(`items[${index}][heading]`, item.heading);
      formData.append(`items[${index}][description]`, item.description);
      if (item.image) formData.append(`items[${index}][image]`, item.image);
      formData.append(`items[${index}][code]`, item.code);
    });

    // Dispatch PATCH request to update an existing blog
    dispatch(updateBlog(formData as any));

    // Optionally, you can reset the form if you want
    setBlog(initialBlog); // Reset to the initial blog state after update
    handleClose();
  };

  const handleRemoveItem = (index: number) => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      items: prevBlog.items.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="flex items-center justify-center">
      <Modals
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className="mb-5 text-black dark:text-white text-center">
            Update Blog
          </Typography>
          <form onSubmit={handleSave}>
            <div className="overflow-auto no-scrollbar md:max-h-[80vh] max-h-[60svh]">
              <TextField
                id="title"
                className="w-full"
                value={blog?.title}
                onChange={(e) =>
                  setBlog((prevBlog) => ({
                    ...prevBlog,
                    title: e.target.value,
                  }))
                }
                label="Title"
                variant="outlined"
              />

              <div>
                <textarea
                  rows={5}
                  value={blog?.bannerDescription}
                  onChange={(e) =>
                    setBlog((prevBlog) => ({
                      ...prevBlog,
                      bannerDescription: e.target.value,
                    }))
                  }
                  placeholder={`Description`}
                  className="border no-scrollbar dark:text-white text-black border-gray-300 text-sm rounded-lg p-4 mt-5 resize-none w-full focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              <ImageUpload
                image={blog?.bannerImage}
                setImage={(newImage) =>
                  setBlog((prevBlog) => ({
                    ...prevBlog,
                    bannerImage: newImage,
                  }))
                }
              />

              {/* Badge Selector */}
              <div className="mt-5 flex items-center justify-between">
                <FormControlLabel
                  control={
                    <Switch
                      checked={blog?.isOnline}
                      onChange={(e) => {
                        setBlog((prevBlog) => ({
                          ...prevBlog,
                          isOnline: e.target.checked,
                        }));
                      }}
                      color="primary"
                    />
                  }
                  label={""}
                />
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="badge-select-label">Badge</InputLabel>
                  <Select
                    labelId="badge-select-label"
                    multiple
                    value={blog?.badge}
                    onChange={(e) =>
                      setBlog((prevBlog) => ({
                        ...prevBlog,
                        badge: e.target.value as string[],
                      }))
                    }
                    label="Badge"
                  >
                    <MenuItem value="react">React.js</MenuItem>
                    <MenuItem value="next">Next.js</MenuItem>
                    <MenuItem value="node">Node.js</MenuItem>
                    <MenuItem value="web">Web Design</MenuItem>
                    <MenuItem value="uiux">UI/UX Design</MenuItem>
                  </Select>
                </FormControl>
              </div>

              {/* Blog Items */}
              {blog?.items?.map((item, index) => (
                <div key={index} className="mt-5">
                  <TextField
                    label={`Heading ${index + 1}`}
                    className="w-full"
                    value={item.heading}
                    onChange={(e) =>
                      handleItemChange(index, "heading", e.target.value)
                    }
                  />
                  <div>
                    <textarea
                      rows={5}
                      value={item.description}
                      onChange={(e) =>
                        handleItemChange(index, "description", e.target.value)
                      }
                      placeholder={`Description ${index + 1}`}
                      className="border no-scrollbar dark:text-white text-black border-gray-300 text-sm rounded-lg p-4 mt-5 resize-none w-full focus:outline-none focus:ring focus:ring-blue-500"
                    />
                  </div>

                  <ImageUpload
                    image={item.image}
                    setImage={(newImage) =>
                      handleItemChange(index, "image", newImage)
                    }
                  />

                  <div>
                    <textarea
                      rows={5}
                      value={item.code}
                      onChange={(e) =>
                        handleItemChange(index, "code", e.target.value)
                      }
                      placeholder={`Code ${index + 1}`}
                      className="no-scrollbar mt-5 w-full p-4 border border-gray-300 rounded-lg resize-none font-mono bg-white text-black dark:bg-gray-900 dark:text-white focus:outline-none focus:ring focus:ring-blue-500"
                      style={{
                        lineHeight: "1.5",
                        whiteSpace: "pre",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove Item
                  </button>
                </div>
              ))}

              {/* Add Item Button */}
              <button
                type="button"
                className="mt-5 bg-gray-500 text-white px-3 py-2 rounded-md"
                onClick={handleAddItem}
              >
                Add Item
              </button>
            </div>
            <div className="border-t flex justify-end mt-5 pt-5">
              <button type="submit" className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">Save</button>
            </div>
          </form>
        </Box>
      </Modals>
    </div>
  );
};

export default BlogModal;
