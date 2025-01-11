import CompareBox from '@/components/CopmareBox'
import ProjectTabs from '@/components/ProjectTabs';
import RelatedBlogs from '@/components/RelatedBlogs';
import React from 'react'

export default function page () {

  const tabs = [
    {
      title: "mAiTutor",
      value: "maitutor",
      content: (
          <iframe className="w-full h-full rounded-xl" width="800" height="450" src="https://embed.figma.com/design/8C4PbNyE11bhgPeX53BnX0/mAiTtutor?node-id=0-1&embed-host=share"></iframe>
      ),
    },
    {
      title: "Bus App",
      value: "busapp",
      content: (
      <iframe className="w-full h-full rounded-xl" width="800" height="450" src="https://embed.figma.com/design/03sDWjuk8eVxJFvfMkA8On/BusApp_v?node-id=0-1&embed-host=share"></iframe>
      ),
    },
    {
        title: "mAiStory",
        value: "maistory",
        content: (
          <iframe className="w-full h-full rounded-xl" width="800" height="450" src="https://embed.figma.com/design/6YllF8bWDQuTLvlc25nR73/mAiStory?node-id=0-1&embed-host=share"></iframe>
        ),
      },
    {
        title: "DigiHomes",
        value: "digihomes",
        content: (
          <iframe className="w-full h-full rounded-xl" width="800" height="450" src="https://embed.figma.com/design/w4msazPdNDsTaPfZ0JdhFE/DigiHomes?node-id=0-1&embed-host=share"></iframe>
        ),
      },
    {
        title: "dqotSolutions",
        value: "dqotsolutions",
        content: ( <iframe className="w-full h-full rounded-xl" width="800" height="450" src="https://embed.figma.com/design/imMezwOU3s5EHX3CYPXjnG/Dqot?node-id=0-1&embed-host=share"></iframe>
        ),
      },
    {
        title: "MyGuru",
        value: "myguru",
        content: (
        <iframe className="w-full h-full rounded-xl" width="800" height="450" src="https://embed.figma.com/design/PwNNowyw5ph3Qyu3NSEVB6/MyGuruApp_v1?node-id=0-1&embed-host=share"></iframe>
        ),
      },
  ];

  return (
    <div className='max-w-4xl mx-auto pb-5 px-4 mt-20'>
      <div className="md:px-8">
        <h1 className="text-xl md:text-2xl lg:text-4xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          UI/UX Design | Crafting Seamless Digital Experiences
        </h1>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        Explore my UI/UX design projects where creativity meets functionality. I craft intuitive, user-centric interfaces that enhance user experiences and drive engagement. See how I transform ideas into visually compelling and responsive designs.
        </p>
      </div>
        <CompareBox />
      <div className=''>
          <h2 className='text-lg md:text-2xl font-semibold mb-3 text-neutral-950 dark:text-neutral-50 mt-5'>My UI/UX Projects</h2>
          <p className='text-neutral-950 dark:text-neutral-50 text-sm'>A showcase of sleek, user-friendly designs crafted for seamless digital experiences.</p>
          <ProjectTabs tabs={tabs} />
        </div>
        <RelatedBlogs />
    </div>
  )
}