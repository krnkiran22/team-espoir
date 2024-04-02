import {React,useState,useEffect} from 'react'
import leaf1 from "../assets/leaf1.png";
import leaf2 from "../assets/leaf2.png";
import mount2 from "../assets/mount2.png";
import mount1 from "../assets/mount1.png";
import bush2 from "../assets/bush2.png";
import bush1 from "../assets/bush1.png";


export default function Home() {
  const [position, setPosition] =useState({ x: 0, y: 0 }); 
    const handleMouseMove = (e) => {
       setPosition({ x: e.clientX, y: e.clientY });
     };
  useEffect(()=>{
     

    const title = document.querySelector('.title');
    const leaf1 = document.querySelector('.leaf1');
    const leaf2 = document.querySelector('.leaf2');
    const bush2 = document.querySelector('.bush2');
    const mount1 = document.querySelector('.mount1');
    const mount2 = document.querySelector('.mount2');
    
    document.addEventListener("scroll", function() {
      const value = window.scrollY;
    
      title.style.marginTop = value * 1.3 + 'px';
      leaf1.style.marginLeft = -value + 'px';
      leaf2.style.marginLeft = value + 'px';
      bush2.style.marginBottom = -value + 'px';
      mount1.style.marginBottom = -value * 1.1 + 'px';
      mount2.style.marginBottom = -value * 1.2 + 'px';
    })
    
        })
   
  
   
  return (<div >
      <div onMouseMove={handleMouseMove} style={{ position: 'absolute', left: position.x - 10, top: position.y - 10, width: 30 ,height: 30, border:"2px solid white" , borderRadius: '50%' }}></div>
      <div >
      <header>
        <h1>Logo</h1>
        <nav>
            <a href="#" class="active">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </header>

    <section class="home">
        <img src={mount2} class="mount2"/>
        <img src={mount1} class="mount1"/>
        <img src={bush2} class="bush2"/>

        <h1 class="title">Parallax</h1>

        <img src={bush1} class="bush1"/>
        <img src={leaf2} class="leaf2"/>
        <img src={leaf1} class="leaf1"/>
    </section>

    <section class="about">
        <h1>Parallax</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem aliquid unde praesentium harum consequuntur consequatur exercitationem quas officiis quod quidem amet, illum facere ipsam vitae quae, a aut non numquam minus voluptate doloremque. Fugiat dolor dolores, temporibus, culpa quia illo, enim sint harum adipisci voluptatem aliquid. Officia tempore dolore natus iure, odit blanditiis? Voluptate aliquid vel suscipit fugiat dolor distinctio, blanditiis cupiditate rerum quidem repellat sint vero error minima? Culpa, porro ipsa totam consequuntur molestiae nulla dignissimos voluptatum provident, minima eligendi sapiente tempore quas asperiores, reiciendis veritatis placeat? Odit nobis rem a iste reiciendis nemo tempore quae asperiores quia.</p>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquam illum. Totam inventore beatae, facilis harum adipisci molestias blanditiis voluptatibus consequatur, explicabo, voluptates consectetur eaque nihil perferendis ratione architecto. Unde odio modi dolor, suscipit nostrum quibusdam quia minima, facilis distinctio aliquid excepturi. Repellendus consequuntur numquam, minus tenetur commodi ipsum velit aspernatur nostrum suscipit explicabo possimus molestiae minima doloribus. Doloribus architecto voluptates perferendis nostrum ullam hic odio sunt. Dolores facilis, pariatur eligendi excepturi accusamus optio aliquam maxime aspernatur, explicabo velit cum, quia a cumque voluptas quis nesciunt. Repellendus hic consequuntur aperiam delectus ratione reprehenderit expedita adipisci ut nesciunt amet, exercitationem illo.</p>
       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt saepe dolorem consectetur architecto officiis. Unde, at. Magnam sed aliquid nesciunt error sint repudiandae ad. Reiciendis minus, esse eos soluta mollitia quia est! Inventore aliquid ut hic fuga ratione consectetur ea? Ratione tempore, ab dolor, assumenda neque doloremque voluptate nesciunt eaque, illo ipsa quia. Nihil dolor libero animi quibusdam recusandae et cumque deleniti minima unde iste sint possimus numquam nam, corporis cupiditate? Maxime voluptate atque alias consequuntur tenetur non quia amet, eligendi libero odio adipisci aperiam dolore perferendis illum vero, nam temporibus numquam cumque, neque fuga iste? Totam cum modi excepturi!</p>
    </section>
    </div>
         </div>
   
  );
}
