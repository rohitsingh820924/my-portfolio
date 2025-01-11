export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto pb-5 px-4 mt-20">
    <div>
      <div className="h-10 bg-gray-200 rounded-xl dark:bg-gray-700 w-2/3 mx-auto mb-3"></div>
      <div className="h-10 bg-gray-200 rounded-xl dark:bg-gray-700 w-1/3 mx-auto mb-3"></div>
    </div>

    <div className="my-12">
      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full mx-auto mb-3"></div>
      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-3/4 mx-auto mb-3"></div>
      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-2/4 mx-auto mb-3"></div>
      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/3 mx-auto"></div>
    </div>

    <div className="flex items-center justify-center w-full h-auto aspect-[7/3] rounded-3xl bg-gray-300 dark:bg-gray-900 my-5">
    <svg
        className="w-10 h-10 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>

    <div className="my-12">
      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full mb-3"></div>
      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full mb-3"></div>
      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full mb-3"></div>
      <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-1/3"></div>
    </div>

    <div>
      <div className="h-8 bg-gray-200 rounded-md dark:bg-gray-700 w-2/3 mb-3"></div>
    </div>

    <div className="my-5">
      <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full mb-3"></div>
      <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-2/3"></div>
    </div>

    <div className="flex gap-5">
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-36"></div>
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-28"></div>
        <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
      </div>

      <div className="flex items-center justify-center w-full h-auto aspect-video rounded-3xl bg-gray-300 dark:bg-gray-900 my-12">
      </div>

      <div>
      <div className="h-8 bg-gray-200 rounded-md dark:bg-gray-700 w-1/3 mb-3"></div>
    </div>

    <div className="my-5">
      <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full mb-3"></div>
      <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-1/3"></div>
    </div>

    {
      Array.from({length: 3}, (_, i) => (
        <div key={i} className="grid md:grid-cols-2 rounded-3xl overflow-hidden mb-20">
            <div className="flex items-center justify-center w-full h-full bg-gray-300 dark:bg-gray-900">
    <svg
        className="w-10 h-10 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </div>
    <div className="px-4 flex justify-between flex-col h-full bg-white dark:bg-neutral-900">
    <div className="mt-8">
      <div className="h-5 bg-gray-200 rounded dark:bg-gray-700 w-full mb-3"></div>
      <div className="h-5 bg-gray-200 rounded dark:bg-gray-700 w-1/3 mb-3"></div>
    </div>

    <div className="my-8">
      <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full mb-3"></div>
      <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-full mb-3"></div>
      <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-1/3"></div>
    </div>

    <div className="flex items-center justify-between mb-8">
        <div className="h-3 bg-gray-200 rounded dark:bg-gray-700 w-2/4"></div>
        <div className="h-8 bg-gray-200 rounded dark:bg-gray-700 w-1/4"></div>
    </div>

    </div>
        </div>
      ))
    }

  </div>
)
  }