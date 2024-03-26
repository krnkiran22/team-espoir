import React from 'react';
import videoBg from '../assets/videoBg.mp4';


function Main(){
     return(
        <div className='main'>
         <div className='overlay'>
            <video src={videoBg} autoPlay loop muted/>
            <div className="content">
                <h1 className='text-4xl'>Welcome</h1>
                <p className='text-2xl'>To Our Website.</p>
            </div>
         </div>
        </div>
     );
}
export default Main;

//flex-col  absolute  h-full w-full font-serif top-0  content-center items-center text-white text-4xl