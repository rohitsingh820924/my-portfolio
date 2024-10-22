import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiGet, apiPost, apiPut, apiDelete, apiPatch } from '@/lib/api'; // Adjust the path based on your project structure

export interface BlogItem {
  heading: string;
  image: string;
  code: string;
  description: string;  
}

export interface Blog {
  _id: string;
  title: string;
  bannerImage: string;  // Changed from 'image' to 'bannerImage'
  badge: string[];            // Changed from 'string' to 'string[]'
  createdAt: Date;
  slug: string;
  items: BlogItem[];         // Added 'items' as an array of BlogItem
  bannerDescription: string;  // Added 'bannerDescription'
  isOnline: boolean;
}

interface BlogsState {
  blogs: Blog[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BlogsState = {
  blogs: [],
  status: 'idle',
  error: null,
};

// Async thunk for fetching blogs using apiGet
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async (_, { rejectWithValue }) => {
  try {
    const data = await apiGet('/api/blog');
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for adding a new blog using apiPost
export const addBlog = createAsyncThunk('blogs/addBlog', async (newBlog: Blog, { rejectWithValue }) => {
  try {
    const data = await apiPost('/api/blog', newBlog, true);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for updating an existing blog using apiPut
export const updateBlog = createAsyncThunk('blogs/updateBlog', async (updatedBlog: Blog, { rejectWithValue }) => {
  try {
    const data = await apiPatch('/api/blog', updatedBlog, true);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for deleting a blog using apiDelete
export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (id: string, { rejectWithValue }) => {
  try {
    await apiDelete('/api/blog', { id }); // Sending ID in the body
    return id; // Return the ID of the deleted blog
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload.blogs; // Assuming the response contains a list of blogs
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload); // Assuming payload contains the new blog
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        const index = state.blogs.findIndex((blog) => blog._id === action.payload._id);
        if (index !== -1) {
          state.blogs[index] = action.payload; // Update the blog in the state
        }
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter((blog) => blog._id !== action.payload); // Remove the deleted blog
      });
  },
});

export default blogsSlice.reducer;
