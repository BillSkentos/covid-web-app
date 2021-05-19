import BreakingNews from '../Components/BreakingNews';


export default function NewsPage() {
  return (
    
  <>
    <BreakingNews />
    <div className="mt-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">

      <div className=" w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Mountain">
            <img className = "w-full h-full object-cover" src = "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt = "newsImg" />
        </div>
        <div className="border-r border-b border-l border-gray-400  lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <div className="flex items-center justify-start">
            <img className="w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Avatar of Writer" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">John Smith</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button className="oultine-none  w-20  text-white rounded-md transform hover:bg-orange ease-out duration-700  bg-FQAItem  px-4 py-1 uppercase ">
              READ
            </button>
          </div>

        </div>
      </div>

      <div className=" w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Mountain">
            <img className = "w-full h-full object-cover" src = "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt = "newsImg" />
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Avatar of Writer" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">John Smith</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button className="oultine-none  w-20  text-white rounded-md transform hover:bg-orange ease-out duration-700  bg-FQAItem  px-4 py-1 uppercase ">
              READ
            </button>
          </div>
        </div>
      </div>
  
      <div className=" w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"  title="Mountain">
            <img className = "w-full h-full object-cover" src = "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="newsImg"/>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <div className="flex items-center justify-start">
            <img className="w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Avatar of Writer" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">John Smith</p>
              <p className="text-gray-600">Aug 18</p>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button className="oultine-none  w-20  text-white rounded-md transform hover:bg-orange ease-out duration-700  bg-FQAItem  px-4 py-1 uppercase ">
              READ
            </button>
          </div>
        </div>
      </div>
    </div>

  </>
  )
}
