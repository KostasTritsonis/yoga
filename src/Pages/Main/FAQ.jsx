import React,{useState} from 'react'


const faqs = [
    {
      id: 1,
      question: "Do I need any prior experience to join your fitness programs?",
      answer: "No prior experience is required! Our classes cater to all levels, from beginners to advanced practitioners.",
    },
    {
      id: 2,
      question: "How do I book a personalized coaching session?",
      answer: "You can book a session by contacting us via our website or email. We'll schedule a time that works best for you.",
    },
    {
      id: 3,
      question: "What types of yoga classes do you offer?",
      answer: "We offer a variety of yoga styles, including Hatha, Vinyasa, and Yin Yoga, suitable for all skill levels.",
    },
    {
      id: 4,
      question: "What should I bring to a yoga class?",
      answer: "A yoga mat, water bottle, and comfortable clothing are recommended. If you don’t have a mat, we can provide one.",
    },
    {
      id: 5,
      question: "Are your nutritional plans tailored to individual needs?",
      answer: "Yes! Our nutritional plans are customized to fit your individual goals, dietary preferences, and lifestyle. Whether you're looking to improve flexibility, boost energy, or enhance overall well-being, we create personalized recommendations that align with your yoga practice.",
    },
    {
      id: 6,
      question: "How often are wellness workshops held?",
      answer: "We offer workshops on mindfulness, stress relief, and holistic wellness. These workshops are suitable for all levels of experience. You can attend as often as you like within a week.",
    }
    

  ];

const FAQ = () => {

    const [openFaqs, setOpenFaq] = useState([]);
    
    const toggleFAQ = (id) => {
        setOpenFaq((prevOpenFaqs) =>
            prevOpenFaqs.includes(id)
              ? prevOpenFaqs.filter((faqId) => faqId !== id) // Close if already open
              : [...prevOpenFaqs, id] // Open new one
          );
    }

    const minus = () => {
        return(
            <svg className="flex-shrink-0 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
            </svg>
        )
    }

    const plus = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg> 
        )
    }


  return (
    <section className="bg-primary">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-white">FAQ's</h1>

            <hr className="my-6 border-white"/>
            {faqs.map((faq) => (
                <div>
                    <div>
                        <div key={faq.id} className='flex items-center'>
                            <button  className={`flex  items-center focus:outline-none transform transition-transform
                                duration-300 ease-in-out ${openFaqs.includes(faq.id)  ? "rotate-0" : "rotate-90"} `} onClick={()=>toggleFAQ(faq.id)}>
                                {openFaqs.includes(faq.id) ? minus() : plus()}
                            </button>
                            <h1 className="mx-4 text-xl text-white">{faq.question}</h1>
                        </div>
                        <div className={`${openFaqs.includes(faq.id)  ? "block" : "hidden"} flex mt-8 md:mx-10`}>
                            <span className="border border-white"></span>
                            <p className="max-w-3xl px-4 text-gray-300">
                                {faq.answer}
                            </p>
                        </div>
                    </div>   
                    <hr className="my-8 border-white"/> 
                </div>
            ))}
        </div>
    </section>
  )
}

export default FAQ