import React,{useEffect} from 'react'
import { ReactSVG } from 'react-svg'
import schedule from '../assets/schedule.svg'
import gymarm from '../assets/gymarm.svg'
import heart from '../assets/heart.svg'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Plans = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on mount
      }, []);
  

  return (
    <>
        <div className="container mx-auto mt-10 px-4">
            {/* Heading Section */}
            <div className="text-center">
                <p className="text-primary text-3xl sm:text-4xl md:text-5xl font-semibold">Why Choose Us?</p>
                <p className="text-primary text-sm sm:text-base leading-6 pt-3 max-w-2xl ">
                    Our commitment to your wellness goes beyond just classes and training sessions. Discover the 
                    unique benefits that set us apart and ensure you have the best experience on your wellness journey.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-wrap justify-center   gap-6 pt-10">
                {[
                    { icon: schedule, title: "Flexible Scheduling", text: "Adapt your fitness routine to your busy life with our flexible scheduling options. Choose from morning yoga, lunchtime fitness sessions, or evening workshops to fit your lifestyle." },
                    { icon: schedule, title: "Personalized Programs", text: "Achieve your goals with customized fitness and wellness programs tailored to your unique needs. Whether you’re starting out or pushing your limits, we’ll guide you every step of the way." },
                    { icon: gymarm, title: "Expert Instructors", text: "Our certified and experienced instructors are here to support you. With expertise in fitness, yoga, and wellness, they’re dedicated to helping you reach your health and wellness goals." },
                    { icon: heart, title: "Holistic Wellness", text: "Beyond just fitness and yoga, we provide holistic wellness services, including nutritional advice and stress management techniques, to help you achieve a balanced, healthy lifestyle." }
                ].map((item, index) => (
                    <div key={index} className=" w-full sm:w-[280px] md:w-[300px] lg:w-[320px] h-auto sm:h-[350px] lg:h-[400px] p-6 bg-footer text-primary hover:bg-primary hover:text-white rounded-3xl transition-all duration-300">
                        <ReactSVG src={item.icon} className="w-12 " />
                        <h3 className="text-xl md:text-2xl font-semibold pt-3">{item.title}</h3>
                        <p className="text-sm pt-2">{item.text}</p>
                    </div>
                ))}
            </div>

            {/* Community Sweat Classes Section */}
            <div className="text-center pt-20">
                <p className="text-primary text-3xl sm:text-4xl md:text-5xl font-semibold">Community <br className="hidden sm:block" /> Sweat Classes</p>
                <p className="text-primary text-sm sm:text-lg leading-6 pt-3 max-w-2xl mx-auto">
                    If you're looking to supplement your current fitness routine with small group 
                    training or just want to join a few classes a month then take a look at our class pass options below.
                </p>
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-wrap justify-center gap-6 pt-10">
                {[
                    { name: "Starter Plan", price: "$14", features: ["8 yoga classes per month", "2 fitness training sessions per month", "Access to online resources", "Monthly wellness newsletter"] },
                    { name: "Basic Plan", price: "$29", features: ["Unlimited yoga classes", "4 fitness training sessions per month", "1 personalized coaching session per month", "Access to online resources", "Monthly wellness newsletter"], highlight: true },
                    { name: "Premium Plan", price: "$139", features: ["4 personalized coaching sessions per month", "Customized fitness and yoga plans", "Access to online resources", "Monthly wellness newsletter"] }
                ].map((plan, index) => (
                    <div key={index} className={`flex flex-col items-center w-full sm:w-[320px] md:w-[340px] lg:w-[380px] h-auto sm:h-[450px] lg:h-[500px] p-8 text-center rounded-3xl shadow-lg transition-all duration-300 ${plan.highlight ? "bg-primary text-white" : "bg-white text-primary"}`}>
                        <p className="text-xl font-semibold">{plan.name}</p>
                        <p className="text-5xl sm:text-7xl ">{plan.price}</p>
                        <p className="text-sm">per user, per month</p>
                        <hr className={`mt-5 h-[2px] w-32 ${plan.highlight ? "bg-white" : "bg-primary"}`} />
                        <div className="mt-5 space-y-3">
                            {plan.features.map((feature, i) => (
                                <p key={i} className="text-sm">{feature}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <Contact />
        <Footer />
    
    </>
  )
}

export default Plans