import React,{useState} from 'react'
import { Modal,Fade} from "@mui/material";
import { ReactSVG } from 'react-svg'
import yoga1 from '../assets/yoga1.png'
import group from '../assets/group.png'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
import workshop from '../assets/workshop.svg'

const TeamCard = ({element, image, text}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  

  return (
    <>
    <div className="group relative w-full sm:w-[300px] md:w-[315px] lg:w-[370px] 
          h-[400px] sm:h-[450px] lg:h-[550px] overflow-hidden rounded-3xl ">
        <div className="w-full h-full duration-500 group-hover:transform group-hover:scale-110">
            <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50
             text-white text-3xl font-tregular opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <button onClick={handleOpen}>{element}</button>
            </div>
            <img src={image} alt="" className="w-full h-full object-cover"/>
        </div>
    </div>

    
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className='flex items-center justify-center'
    >
      <Fade in={open} unmountOnExit timeout={500} >
      <div className={"flex flex-col justify-center 2xl:w-[800px] xl:[700px] md:w-[700px] sm:w-[500px] w-[400px] 2xl:h-[740px] md:h-[700px] sm:h-[550px]  bg-background rounded-3xl"}>
        <div className='grid grid-cols-2'>
          <div className='flex'>
              <img src={image} className='2xl:w-[320px]  lg:w-[280px] sm:w-[205px] w-[160px] max-sm:h-[260px] rounded-e-full' alt="" />
          </div>
          
          <div className='flex flex-col justify-center '>
              <p className=' max-sm:hidden text-primary 2xl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl text-[23px] '>Services Offered</p>
              <p className='text-secondary sm:w-[80%]  pt-5'>{text}</p>
          </div>
        </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 max-md:hidden'>
        <div className='flex flex-col items-center'>
            <img src={yoga1} className="w-[50px]" alt="" />
            <p className='text-primary text-3xl max-lg:text-2xl'>Yoga Sessions</p>
            <p className='text-secondary sm:w-[80%] text-center'>One-on-one sessions focused on personalized instruction and individual goals.</p>
        </div>
        <div className='flex flex-col items-center'>
            <img src={group} className="w-[50px]"  alt="" />
            <p className='text-primary text-3xl max-lg:text-2xl'>Group Classes</p>
            <p className='text-secondary sm:w-[80%] text-center'>Dynamic group sessions designed to improve flexibility, strength, and mindfulness.</p>
        </div>
        <div className='flex flex-col max-lg:col-span-2 items-center'>
            <ReactSVG src={workshop} className='text-primary w-[50px]'/>
            <p className='text-primary text-3xl max-lg:text-2xl'>Workshops</p>
            <p className='text-secondary sm:w-[80%]  text-center'>Immersive workshops that deepen your practice and enhance your overall wellness.</p>
          </div>
        </div>
        <div className='flex justify-center items-center  max-sm:pt-4 max-sm:pb-2 mt-4 '>
            <Link to="/contact"><CustomButton text="Book A Consultation" /></Link>
        </div>
      </div>
      </Fade>
    </Modal>
    
    </>
  )
}

export default TeamCard