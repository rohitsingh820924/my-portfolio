import { apiDelete } from '@/lib/api';
import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { increment } from '@/lib/store/slices/userSlice';

interface MyModalComponentProps {
  open: boolean;
  onClose: () => void;
  id: string;
}

const MyModalComponent: React.FC<MyModalComponentProps> = ({ id, open, onClose }) => {
  const dispatch = useDispatch(); 
    const handleDelete = async() => {
        try {
            const response = await apiDelete('/api/inquiry', { id: id });
            if (response.success) {
            toast.success("Inquiry Deleted Successfully", {
              theme: "dark"
            });
            dispatch(increment());
            onClose();
            }
        } catch (error) {
            console.error('Failed to delete user:', error);
            toast.error("Error Deleting Inquiry", {
              theme: "dark"
            });
        }
    }
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed flex items-center justify-center inset-0 h-full w-full bg-black bg-opacity-50 z-50 backdrop-blur-sm' >
        <Dialog.Content className='bg-white dark:bg-neutral-950 md:max-w-[400px] max-w-[300px] mx-auto p-5 text-neutral-600 dark:text-neutral-100 border border-transparent dark:border-neutral-800 md:rounded-2xl rounded'>
          <Dialog.Title className='text-2xl text-center font-bold'>Are Sure!</Dialog.Title>
          <Dialog.Description className='text-center text-sm my-5'>
          This inquiry will be deleted permanently. <span className='bg-neutral-700 p-1 text-xs rounded'>{id}</span>
          </Dialog.Description>
          <div className='flex items-center justify-evenly'>
            <button className='bg-red-500 text-sm px-5 py-2 rounded-lg' onClick={handleDelete}>Delete</button>
            <button className='bg-white text-black font-semibold text-sm px-5 py-2 rounded-lg' onClick={onClose}>Close</button>
          </div>
        </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MyModalComponent;
