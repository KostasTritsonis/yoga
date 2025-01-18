import React, {useState,useRef} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,setMenu] = useState("main");
  const menuRef = useRef();

  return (
    <div className='flex justify-between p-10  container mx-auto'>
        <Link onClick={()=>{setMenu("/")}} to='/' className='text-5xl text-primary font-medium font-tregular'>HARMONY</Link>
        <nav ref={menuRef} className="text-secondary text-3xl flex justify-evenly font-tregular xl:w-1/3 lg:w-1/2  w-2/3"> 
        {[
            ['Trainers','/trainers'],
            ['Blog','/blog'],    
            ['Plans','/plans'],
            ['Contact','/contact'],  
        ].map(([text,link])=>(
            <Link key={text} onClick={()=>{setMenu(text.toLowerCase())}} className= {text.toLowerCase() === menu ? "font-semibold " : ""} to={link}>{text}</Link>
        ))}
        </nav>
    </div>
  )
}

export default Navbar