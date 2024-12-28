import BlogItem from '@/components/BlogItem'
import CompareBox from '@/components/CopmareBox'
import ProjectTabs from '@/components/ProjectTabs';
import { apiGet } from '@/lib/api';
import { Blog } from '@/lib/types/blogType';
import Image from 'next/image';
import React from 'react'

const baseUrl = process.env.NEXT_BASE_URL;
async function fetchBlogPost(): Promise<Blog[]> {
  const data = await apiGet(`${baseUrl}/api/blog`);
  return data.blogs;
}



export default async function page () {
  const blogs = await fetchBlogPost();

  const tabs = [
    {
      title: "mAiTutor",
      value: "maitutor",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-700 to-cyan-900">
          <iframe className="w-full h-full rounded-xl" width="800" height="450" src="https://embed.figma.com/design/8C4PbNyE11bhgPeX53BnX0/mAiTtutor?node-id=0-1&embed-host=share"></iframe>
        </div>
      ),
    },
    {
      title: "Bus App",
      value: "busapp",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-fuchsia-700 to-fuchsia-900">
          <iframe className="w-full h-full rounded-xl" width="800" height="450" src="https://embed.figma.com/design/03sDWjuk8eVxJFvfMkA8On/BusApp_v?node-id=0-1&embed-host=share"></iframe>
        </div>
      ),
    },
    {
        title: "mAiStory",
        value: "maistory",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-700 to-cyan-900">
            <iframe className="w-full h-full rounded-xl" width="800" height="450" src="https://embed.figma.com/design/6YllF8bWDQuTLvlc25nR73/mAiStory?node-id=0-1&embed-host=share"></iframe>
          </div>
        ),
      },
    {
        title: "DigiHomes",
        value: "digihomes",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-500 to-orange-900">
            <iframe className="w-full h-full rounded-xl" width="800" height="450" src="https://embed.figma.com/design/w4msazPdNDsTaPfZ0JdhFE/DigiHomes?node-id=0-1&embed-host=share"></iframe>
          </div>
        ),
      },
    {
        title: "dqotSolutions",
        value: "dqotsolutions",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
            <iframe className="w-full h-full rounded-xl" width="800" height="450" src="https://embed.figma.com/design/imMezwOU3s5EHX3CYPXjnG/Dqot?node-id=0-1&embed-host=share"></iframe>
          </div>
        ),
      },
    {
        title: "MyGuru",
        value: "myguru",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-yellow-500 to-yellow-900">
            <iframe className="w-full h-full rounded-xl" width="800" height="450" src="https://embed.figma.com/design/PwNNowyw5ph3Qyu3NSEVB6/MyGuruApp_v1?node-id=0-1&embed-host=share"></iframe>
          </div>
        ),
      },
  ];

  return (
    <div className='max-w-4xl mx-auto py-5 md:mt-8'>
      <h1 className='text-3xl text-neutral-950 dark:text-neutral-50 font-bold mb-5'>UI/UX Design | Crafting Seamless Digital Experiences</h1>
        <CompareBox />

        <p className='my-10 text-neutral-950 dark:text-neutral-50 text-lg'>Explore my UI/UX design projects where creativity meets functionality. I craft intuitive, user-centric interfaces that enhance user experiences and drive engagement. See how I transform ideas into visually compelling and responsive designs.</p>
        <div className=''>
          <h2 className='text-2xl font-semibold mb-3 text-neutral-950 dark:text-neutral-50'>My UI/UX Projects</h2>
          <p className='text-neutral-950 dark:text-neutral-50 text-sm'>A showcase of sleek, user-friendly designs crafted for seamless digital experiences.</p>
          <ProjectTabs tabs={tabs} />
        </div>
        <h2 className='text-2xl font-semibold mb-3 text-neutral-950 dark:text-neutral-50'>All Blogs</h2>
        <p className='text-neutral-950 dark:text-neutral-50 text-sm'>Browse through all my blogs covering UI/UX design, web development, and creative projects. Gain insights, tips, and inspiration from my experiences and industry trends.</p>
        <div className="grid md:grid-cols-1 gap-10 md:flex-wrap flex-nowrap my-10">
          {
            blogs?.map((item:Blog)=><BlogItem key={item.id} blogContent={item} />)
          }
        </div>
    </div>
  )
}