import React, {useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import MenuButton from '../../Components/MenuButton'

const Navbar = () => {

  const [menu,setMenu] = useState("main");
  const menuRef = useRef();

  const [mobileMenu,setMobileMenu] = useState(false);

  const toggleMenu = ()=>{
    setMobileMenu(mobileMenu ? false : true);
  } 


  return (
    <div className='flex justify-between p-10 container mx-auto'>
        <Link onClick={()=>{setMenu("/")}} to='/' className='text-5xl text-primary font-tregular'>HARMONY</Link>
        <nav ref={menuRef} className={`text-secondary text-3xl flex sm:justify-evenly font-tregular xl:w-1/3 lg:w-1/2 w-2/3 
          ${mobileMenu ?'absolute max-sm:top-24 max-sm:right-0 max-sm:text-center max-sm:flex-col max-sm:z-10 max-sm:bg-background max-sm:text-primary max-sm:w-full max-sm:h-[40%] max-sm:pt-[30px] max-sm:transition-transform max-sm:duration-500':'max-sm:hidden '} `}> 
        {[
            ['Trainers','/trainers'],
            ['Blog','/blog'],    
            ['Plans','/plans'],
            ['Contact','/contact'],  
        ].map(([text,link])=>(
            <Link key={text} onClick={()=>{setMenu(text.toLowerCase())}} className= {text.toLowerCase() === menu ? "font-medium" : ""} to={link}>{text}</Link>
        ))}
        </nav>
        <div className='sm:hidden max-sm:block '>
          <MenuButton  onToggle={toggleMenu}/>
        </div>
        
        
    </div>
  )
}

export default Navbar