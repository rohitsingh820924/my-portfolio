'use client';
import Cards from '@/components/Cards';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import BlogTable from '@/components/BlogTable';
import { useTheme } from 'next-themes';

const Page = () => { // Change 'page' to 'Page'
  const { theme } = useTheme();

  const newTheme = createTheme({
    palette: {
      mode: theme ? (theme === "dark" ? 'dark' : 'light') : 'dark',
    },
  });

  return (
    <div className="dark:bg-black bg-white min-h-screen pt-32"> {/* Changed 'min-h-svh' to 'min-h-screen' */}
      <div className='max-w-7xl mx-auto'>
        <ThemeProvider theme={newTheme}>
          {/* <Cards /> */}
          <BlogTable />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Page;
