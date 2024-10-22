"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
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
import { addBlog } from "@/lib/store/slices/blogSlice";
import { AppDispatch } from "@/lib/store/store";

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
}

const BlogModal: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [blog, setBlog] = useState<Blog>({
    title: "",
    bannerDescription: "",
    bannerImage: "",
    badge: [],
    items: [],
    isOnline: false,
  });

  const handleAddItem = () => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      items: [
        ...prevBlog.items,
        { heading: "", description: "", image: "", code: "" },
      ],
    }));
  };

  const handleRemoveItem = (index: number) => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      items: prevBlog.items.filter((_, i) => i !== index),
    }));
  };

  const handleItemChange = (index: number, field: keyof BlogItem, value: string | File | null) => {
    const updatedItems = [...blog.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setBlog((prevBlog) => ({ ...prevBlog, items: updatedItems }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blog.title);
    formData.append("bannerDescription", blog.bannerDescription);
    if (blog.bannerImage) formData.append("bannerImage", blog.bannerImage);

    // Join selected badges into a string
    blog.badge.forEach((badge) => {
      formData.append("badge[]", badge); // Append each badge individually as an array item
  });
    formData.append("isOnline", blog.isOnline.toString());

    blog.items.forEach((item, index) => {
      formData.append(`items[${index}][heading]`, item.heading);
      formData.append(`items[${index}][description]`, item.description);
      if (item.image) formData.append(`items[${index}][image]`, item.image);
      formData.append(`items[${index}][code]`, item.code);
    });

    dispatch(addBlog(formData as any));

    // Reset blog state
    setBlog({
      title: "",
      bannerDescription: "",
      bannerImage: "",
      badge: [],
      items: [],
      isOnline: false,
    });
  };

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="text-center">Add Blog</span>
        </ModalTrigger>
        <form onSubmit={handleSave}>
          <ModalBody>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 mt-5 font-bold text-center mb-8">
              Add Blog
            </h4>
            <ModalContent className="overflow-auto no-scrollbar">
              <TextField
                id="title"
                className="w-full"
                value={blog.title}
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
                      value={blog.bannerDescription}
                      onChange={(e) =>
                        setBlog((prevBlog) => ({
                          ...prevBlog,
                          bannerDescription: e.target.value,
                        }))
                      }
                      placeholder={`Description`}
                      className="border no-scrollbar border-gray-300 text-sm rounded-lg p-4 mt-5 resize-none w-full focus:outline-none focus:ring focus:ring-blue-500"
                    />
                  </div>

              <ImageUpload
                image={blog.bannerImage}
                setImage={(newImage) =>
                  setBlog((prevBlog) => ({ ...prevBlog, bannerImage: newImage }))
                }
              />

              {/* Badge Selector */}
              <div className="mt-5 flex items-center justify-between">
              <FormControlLabel
                  control={
                    <Switch
                      value={blog.isOnline}
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
                  value={blog.badge}
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
              {blog.items.map((item, index) => (
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
                      className="border no-scrollbar border-gray-300 text-sm rounded-lg p-4 mt-5 resize-none w-full focus:outline-none focus:ring focus:ring-blue-500"
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
            </ModalContent>
            <ModalFooter className="gap-4">
              <button
                type="submit"
                className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
              >
                Save
              </button>
            </ModalFooter>
          </ModalBody>
        </form>
      </Modal>
    </div>
  );
};

export default BlogModal;
