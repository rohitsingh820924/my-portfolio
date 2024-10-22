import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import BlogModal from '@/components/BlogModal';
import Typography from '@mui/material/Typography';
import { MdEdit, MdRemoveRedEye, MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { deleteBlog, fetchBlogs } from '@/lib/store/slices/blogSlice';
import { RootState, AppDispatch } from '@/lib/store/store';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from "next/navigation";
import BlogEditModal from './BlogEditModal';
import { Blog } from "@/lib/types/blogType";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { format } from 'date-fns';

export default function DataTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs, status, error } = useSelector((state: RootState) => state.blogs);
  const router = useRouter()
  const [edit, setEdit] = useState({
    blog: [] as unknown as Blog,
  })
  const [open, setOpen] = useState(false);

  const [openDelete, setOpenDelete] = useState({
    id:"",
    open: false
  });

  const handleClose = () => {
    setOpenDelete({...openDelete, open:false});
  };
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [dispatch, status]);

  const handleDelete = () => {
    dispatch(deleteBlog(openDelete.id));
    handleClose();
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.1 },
    { field: 'title', headerName: 'Title', flex: 0.5 },
    {
      field: 'isOnline',
      headerName: 'Online',
      renderCell: (params) => (
        <span className={`font-semibold border text-xs rounded-full py-1.5 px-3 ${params.value ? 'text-green-500 border-green-500' : 'text-red-500 border-red-500'}`}>
          {params.value ? 'Online' : 'Offline'}
        </span>
      ),
      flex: 0.1
    },
    { field: 'createdAt', headerName: 'Date', type: 'number',
      renderCell: (params) => (
        <div className='flex items-center gap-5 h-full'>
          {format(new Date(params.row.createdAt), 'dd MMMM yyyy')}
        </div>
      ),
      flex: 0.1 },
    {
      field: 'action',
      headerName: 'Action',
      renderCell: (params) => (
        <div className='flex items-center gap-5 h-full'>
          <button onClick={()=>router.push(`/products/${params.row.slug}`)}><MdRemoveRedEye /></button>
          <button onClick={()=>{setEdit({blog:params.row}), setOpen(true)}}><MdEdit /></button>
          <button onClick={() => setOpenDelete({id:params.row._id, open:true})}><MdDelete /></button>
        </div>
      ),
      flex: 0.2
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  if (status === 'loading') {
    return <div className="flex justify-center items-center h-full"><CircularProgress /></div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <Paper sx={{ height: 'auto', width: '100%' }}>
      <Toolbar sx={{ justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6" component="div">
          All Blogs
        </Typography>
        <BlogModal />
      </Toolbar>

      <DataGrid
        rows={blogs.map((blog, index) => ({
          id: index + 1,
          ...blog,
        }))}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 100]}
        sx={{ border: 0 }}
        disableRowSelectionOnClick
      />
    </Paper>
    <Dialog
        open={openDelete.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions className="border-t flex justify-end mt-5 pt-5">
              <button onClick={handleClose} className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">Cancel</button>
              <button onClick={handleDelete} className="bg-red-600 text-white text-sm px-2 py-1 rounded-md border border-black w-28">Delete</button>
        </DialogActions>
      </Dialog>
    <BlogEditModal initialBlog={edit.blog as any} open={open} setOpen={setOpen} />
    </>
  );
}
