import React from 'react'

export default function About() {
  return (
    <div>
      <header className='flex justify-between items-center px-3 mx-auto bg-white border-b shadow-sm sticky top-0 z-40'>
        <div>
        <p className={`cursor-pointer font-bold shadow-md rounded-full p-1 hover:animate-ping
            `}><span className='text-blue-900'>Team</span><span className='text-lg text-red-900'>Espoir</span></p>
        </div>
        <div>
          <ul className='flex space-x-5'>
            <li className={`cursor-pointer text-sm py-3 font-bold text-fuchsia-900 hover:bg-slate-300 hover:text-fuchsia-800 rounded-full transition ease-in-out duration-700 p-1 hover:shadow-md
            `}>About</li>
            <li className={`cursor-pointer text-sm py-3 font-bold text-fuchsia-900 hover:bg-slate-300 hover:text-fuchsia-800 rounded-full transition ease-in-out duration-700 p-1 hover:shadow-md
            `}>Contact</li>
          </ul>
        </div>
      </header>
    </div>
  )
}
