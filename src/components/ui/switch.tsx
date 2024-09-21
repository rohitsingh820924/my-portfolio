import { apiPatch } from '@/lib/api';
import { increment } from '@/lib/store/slices/userSlice';
import * as Switch from '@radix-ui/react-switch';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

interface SwitchBoxProps {
    state: boolean;
    id: string;
  }

const SwitchBox: React.FC<SwitchBoxProps> = ({ state, id}) => {
  const dispatch = useDispatch();
  const handleOnline = async () => {
    try {
      const response = await apiPatch("/api/inquiry", {
        id: id,
        isOnline: !state,
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
    <div className="flex items-center space-x-2">
      <Switch.Root
        id="s1"
        defaultChecked={state}
        className="w-10 h-5 rounded-full relative border border-white transition-colors"
        aria-label="Toggle feature"
        onClick={handleOnline}
      >
        <Switch.Thumb
          className="block w-4 h-4 border border-white rounded-full shadow-md transition-transform transform translate-x-0 data-[state=checked]:translate-x-5 data-[state=checked]:bg-white"
        />
      </Switch.Root>
    </div>
  );
};

export default SwitchBox;
