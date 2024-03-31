import {React,useState} from 'react'
import videoBg from "../assets/videoBg.mp4";
export default function Home() {
  const [position, setPosition] =useState({ x: 0, y: 0 }); 
    const handleMouseMove = (e) => {
       setPosition({ x: e.clientX, y: e.clientY });
     };
  return (
    

    <div className='main' onMouseMove={handleMouseMove}>
    <video src={videoBg} autoPlay loop muted/>  
    <div style={{ position: 'absolute', left: position.x - 10, top: position.y - 10, width: 30 ,height: 30, border:"2px solid white" , borderRadius: '50%' }}></div>
  
  
    </div>
  );
}

/* <header className='flex justify-between items-center px-3 mx-auto bg-white border-b shadow-sm sticky top-0 z-40'>
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
      </header>*/
      //  