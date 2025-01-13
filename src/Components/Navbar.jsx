import React, {useState,useRef} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,setMenu] = useState("main");
  const menuRef = useRef();

  return (
    <div className='flex justify-between p-10'>
        <Link onClick={()=>{setMenu("/")}} to='/' className='text-3xl text-primary font-pbold'>HARMONY</Link>
        <nav ref={menuRef} className="text-secondary text-lg flex justify-evenly w-1/4"> 
        {[
            ['Trainers','/trainers'],
            ['Blog','/blog'],    
            ['Plans','/plans'],
            ['Contact','/contact'],  
        ].map(([text,link])=>(
            <Link key={text} onClick={()=>{setMenu(text.toLowerCase())}} className= {text.toLowerCase() === menu ? "font-bold" : ""} to={link}>{text}</Link>
        ))}
        </nav>
    </div>
  )
}

export default Navbar