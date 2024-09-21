import { apiDelete } from '@/lib/api';
import * as Dialog from '@radix-ui/react-dialog';
import * as Form from '@radix-ui/react-form';
import React from 'react';

interface MyModalComponentProps {
  open: boolean;
  onClose: () => void;
  id: string;
}

const MyModalComponent: React.FC<MyModalComponentProps> = ({ id, open, onClose }) => {
    const handleDelete = async() => {
        try {
            const response = await apiDelete('/api/inquiry', { id: id });
            if (response.success) {
            console.log(`User ${id} successfully deleted`);
            }
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    }
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed flex items-center justify-center inset-0 h-full w-full bg-black bg-opacity-50 z-50 backdrop-blur-sm' >
        <Dialog.Content className='bg-white dark:bg-neutral-950 w-full md:max-w-[400px] max-w-[300px] mx-auto p-5 text-neutral-600 dark:text-neutral-100 border border-transparent dark:border-neutral-800 md:rounded-2xl rounded'>
          <Dialog.Title className='text-2xl text-center font-bold mb-5'>Edit Inquiry</Dialog.Title>
          <Form.Root className="FormRoot">
            <Form.Field className="FormField" name="email">
            <div className='flex flex-col relative pb-5 mb-2'>
                <Form.Label className="FormLabel text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</Form.Label>
                <Form.Message className="FormMessage absolute bottom-0 text-xs font-normal text-red-600" match="valueMissing">
                Please enter your email
                </Form.Message>
                <Form.Message className="FormMessage absolute bottom-0 text-xs font-normal text-red-600" match="typeMismatch">
                Please provide a valid email
                </Form.Message>
            </div>
            <Form.Control asChild>
                <input className="Input flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400" type="email" required />
            </Form.Control>
            </Form.Field>
            {/* <Form.Field className="FormField" name="question">
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <Form.Label className="FormLabel">Question</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                Please enter a question
                </Form.Message>
            </div>
            <Form.Control asChild>
                <textarea className="Textarea" required />
            </Form.Control>
            </Form.Field> */}
            <Form.Submit asChild>
            <button className="Button" style={{ marginTop: 10 }}>
                Post question
            </button>
            </Form.Submit>
        </Form.Root>
        </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MyModalComponent;
