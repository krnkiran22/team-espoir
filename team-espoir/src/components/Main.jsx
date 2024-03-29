import React ,{useState} from 'react';
import videoBg from '../assets/videoBg.mp4';
import "../index.css";
import { useNavigate } from 'react-router-dom';


function Main(){
   
   
   const now = new Date().toLocaleTimeString();
 
   const [time, settime] = useState(now);

   const navigate = useNavigate()
   
   function updateTime() {
     const newTime = new Date().toLocaleTimeString();
     settime(newTime);
   }
   const [position, setPosition] = useState({ x: 0, y: 0 }); 
   const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
   setInterval(updateTime, 1000);
   
    
     return(
      
        <div className='main' onMouseMove={handleMouseMove}>
          <video src={videoBg} autoPlay loop muted/>
          <div style={{ position: 'absolute', left: position.x - 10, top: position.y - 10, width: 30 ,height: 30, border:"2px solid white" , borderRadius: '50%' }}></div>
          <div className='time '>
             <h1 className=' mx-4 my-4 text-xl'>{time}</h1>
           </div>
           
            <div className="content flex-col gap-2 font-extrabold">
            
                <h1 className='text-5xl'> <span className='text-yellow-500'>Welcome </span>to our website</h1>
                <h2 className='text-3xl '>Team Espoir</h2>
                
               <button onClick={()=>navigate('about')} type="button" class="transition ease-in-out delay-150 hover:scale-110  duration-300 ...  text-white bg-red-700 hover:bg-red-800 px-4 py-1 font-semibold rounded-lg dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Unleash</button>
            </div>
        </div> 
          
          
     );
}
export default Main;

//flex-col  absolute  h-full w-full font-serif top-0  content-center items-center text-white text-4xl
//<button className='w-28 rounded-lg bg-#e50914'>Unleash</button>
//flex absolute top-0 font-3xl justify-end text-white font-extrabold
// <motion.div className='cursor' variants={variants} animate="default"/>
//framer motion
// <motion.div variants={variants} animate="default" style={{position:'fixed',backgroundColor: 'red',height: 8 ,width: 8,borderRadius: "50%",top:0,left:0}}/>
/*useEffect (()=>{
   const mouseMove = e =>{
      setMousePosition({x:e.clientX,y:e.clientY})
    }
   window.addEventListener("mousemove",mouseMove);
   return () =>{
    window.removeEventListener("mousemove",mouseMove);
   }
 },[]);
  const variants={
    default :{
      x:mousePosition.x,
      y:mousePosition.y
    }

  }
  const [mousePosition,setMousePosition]=useState({x:0,y:0});
  */
