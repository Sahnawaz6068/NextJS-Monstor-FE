import { Clock, Home, TrendingUp } from 'lucide-react'
import React from 'react'

const Sidebar = async () => {

  return (
    <aside className='w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen'>
      <section>
        <h2 className='text-xl font-bold'>MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className='flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer'>
              <Home/> Discover
            </li>
            <li className='flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer'>
              <TrendingUp/> Trending
            </li>
            <li className='flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer'>
              <Clock/> Recent
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className='mt-6 text-xl font-bold'>FAVROITE</h2>
        <ul className='mt-2 mb-[2rem]'>
          {[1,2,3,4,5].map((i)=>(
            <div key={i} className='flex gap-4 mt-[2rem]'>
              <img className='h-15 w-15 rounded-md bg-gray-700' src="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div>
                <div className='text-white'>
                Random
              </div>
              <div className='text-sm text-gray-700'>person</div>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar