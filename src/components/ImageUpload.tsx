import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { ImCancelCircle } from "react-icons/im";

interface ImageComponentProps {
  image: File | string;
  setImage: (newImage: File | string) => void;
}

const ImageUpload: React.FC<ImageComponentProps> = ({ image, setImage }) => {
  const [selectedImagePreview, setSelectedImagePreview] = useState<File | string>(image);

  useEffect(()=> {
    setImage(image);
  },[image])

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImagePreview(reader.result as string); // Preview as base64 string
        setImage(file); // Set actual file
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedImagePreview("");
    setImage(""); // Clear the file
  };

  return (
    <div className="flex w-full flex-col relative items-center mt-5">
      <label className="w-full cursor-pointer">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        <div className="w-full border border-dashed border-neutral-800 aspect-video flex items-center justify-center rounded-lg">
          {selectedImagePreview ? (
            <div className="relative h-full w-full">
              <img src={selectedImagePreview as any} alt="Preview" className="w-full h-full object-cover rounded-lg" />
            </div>
          ) : (
            <Typography variant="body2" className="text-gray-500">Click to upload an image</Typography>
          )}
        </div>
      </label>
      {selectedImagePreview && (
        <button onClick={handleImageRemove} className="absolute top-4 right-4 cursor-pointer">
          <ImCancelCircle size={30} color='white' />
        </button>
      )}
    </div>
  );
};

export default ImageUpload;
