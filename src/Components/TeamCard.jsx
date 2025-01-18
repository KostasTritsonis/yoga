import React,{useState} from 'react'
import { Modal,Fade} from "@mui/material";
import yoga1 from '../assets/yoga1.png'
import group from '../assets/group.png'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'


const TeamCard = ({element, image, text}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  

  return (
    <>
    <div className="group 2xl:w-[370px] md:w-[315px] sm:w-[300px] w-[250px] 2xl:h-[600px] xl:h-[550px]  h-[450px]
      overflow-hidden rounded-3xl ">
        <div className="w-full h-full duration-500 group-hover:[transform:scale(1.1)] ">
            <div className="absolute flex items-center justify-center bg-black bg-opacity-50
              2xl:w-[370px] md:w-[315px] sm:w-[300px] w-[250px] 2xl:h-[600px] xl:h-[550px]   h-[450px] 
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
      <div className={"flex flex-col justify-center 2xl:w-[800px] xl:[700px] md:w-[700px] sm:w-[500px] 2xl:h-[800px] md:h-[700px] sm:h-[550px]  bg-background rounded-3xl"}>
        <div className='grid grid-cols-2'>
          <div className='flex '>
              <img src={image} className='2xl:w-[300px] xl:w-[240px] lg:w-[240px] sm:w-[180px] w-[160px] h-[260px] rounded-e-full' alt="" />
          </div>
          
          <div className='flex flex-col justify-center '>
              <p className='text-primary 2xl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl text-2xl'>Services Offered</p>
              <p className='text-secondary w-[80%] pt-5'>{text}</p>
          </div>
        </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 max-md:hidden'>
        <div className='flex flex-col items-center'>
            <img src={yoga1} className="w-[50px]" alt="" />
            <p className='text-primary text-3xl max-lg:text-2xl'>Yoga Sessions</p>
            <p className='text-secondary w-[60%] max-lg:w-[80%] text-center'>One-on-one sessions focused on personalized instruction and individual goals.</p>
        </div>
        <div className='flex flex-col items-center'>
            <img src={group} className="w-[50px]"  alt="" />
            <p className='text-primary text-3xl max-lg:text-2xl'>Group Classes</p>
            <p className='text-secondary w-[60%] max-lg:w-[80%] text-center'>Dynamic group sessions designed to improve flexibility, strength, and mindfulness.</p>
        </div>
        <div className='flex flex-col max-lg:col-span-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="10%" viewBox="0 0 55 55" fill="none" className="icon-1x1-large">
            <path d="M17.6008 26.6197C18.2836 26.7337 18.9535 26.9146 19.6008 27.1597C21.9052 28.443 23.9967 30.0757 25.8008 31.9997C26.4719 32.6474 27.3682 33.0094 28.3008 33.0094C29.2335
            33.0094 30.1297 32.6474 30.8008 31.9997L35.0008 27.9997C35.2773 27.727 35.6109 27.5191 35.9775 27.3911C36.3442 27.2631 36.7347 27.2182 37.1208 27.2597C37.52 27.2901 37.9072 27.4102
              38.2535 27.6111C38.5997 27.8119 38.8962 28.0883 39.1208 28.4197L44.8008 36.9397C44.9312 37.1345 45.0214 37.3534 45.066 37.5835C45.1107 37.8136 45.1089 38.0503 45.0608 38.2797C44.9618
              38.7426 44.69 39.1503 44.3008 39.4197L44.0008 39.5997C40.9608 41.7397 36.9408 34.5997 36.9408 34.5997C36.0891 35.9822 35.0753 37.2579 33.9208 38.3997C32.8613 39.6428 31.5591 40.6564
                30.0941 41.3786C28.6291 42.1008 27.0321 42.5163 25.4008 42.5997C21.9951 42.2199 18.7929 40.7866 16.2408 38.4997C3.26083 28.4997 2.98083 22.8997 3.12083 21.9397C3.18631 21.4629 3.43801
                21.0314 3.82083 20.7397L4.00083 20.4997C4.37753 20.2235 4.84684 20.1046 5.30961 20.1681C5.77237 20.2315 6.19236 20.4723 6.48083 20.8397C7.16083 21.6997 8.60083 23.4197 10.0008 25.0397L11.3208
                  26.5397C13.4011 26.1775 15.5305 26.2046 17.6008 26.6197Z" stroke="#0F2E15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.99904 25.0404C9.71257 24.4124 9.5626 23.7307 9.55904 23.0404C9.548 22.2267 9.74234 21.4232 10.1241 20.7045C10.5058 19.9857 11.0627 19.3748 11.7431 18.9283C12.4235 18.4818 13.2055
                  18.214 14.0169 18.1498C14.8282 18.0857 15.6426 18.2271 16.3848 18.5611C17.1269 18.895 17.7729 19.4108 18.2629 20.0606C18.753 20.7104 19.0712 21.4732 19.1883 22.2786C19.3053 23.084 19.2174 23.9059
                    18.9326 24.6683C18.6479 25.4307 18.1754 26.109 17.559 26.6404C15.482 26.2297 13.3481 26.1959 11.259 26.5404C10.899 26.0004 10.439 25.5604 9.99904 25.0404Z"
                    stroke="#0F2E15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M32.2402 8.45996L35.8402 12L32.2402 15.58" stroke="#0F2E15" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"></path>
                    <path d="M25.1797 12H35.8397" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <p className='text-primary text-3xl max-lg:text-2xl'>Workshops</p>
            <p className='text-secondary sm:w-[60%] max-lg:w-[80%] text-center'>Immersive workshops that deepen your practice and enhance your overall wellness.</p>
          </div>
        </div>
        <div className='flex justify-center items-center pb-4'>
            <Link to="/contact"><CustomButton text="Book A Consultation" /></Link>
        </div>
      </div>
      </Fade>
    </Modal>
    
    </>
  )
}

export default TeamCard