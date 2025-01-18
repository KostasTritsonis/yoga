import React from 'react'

const Contact = () => {
  return (
    <section className="bg-background ">
        <div className="container  py-12 mx-auto">
            <div>
                <p className=" text-primary">Contact us</p>

                <h1 className="mt-2 text-2xl font-semibold text-primary md:text-5xl ">Get in touch</h1>

                <p className="mt-3 text-secondary">Our team would love to hear from you.</p>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                    <div>
                        <span className="inline-block p-3 text-background bg-primary rounded-full" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>

                        <h2 className="mt-4 text-base font-medium text-primary">Email</h2>
                        <p className="mt-2 text-sm text-secondary">Our friendly team is here to help.</p>
                        <p className="mt-2 text-sm text-primary">test@harmony.com</p>
                    </div>

                    <div>
                        <span className="inline-block p-3 text-background bg-primary rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </span>
                        
                        <h2 className="mt-4 text-base font-medium  text-primary">Gym</h2>
                        <p className="mt-2 text-sm text-secondary">Come say hello at our Gym.</p>
                        <p className="mt-2 text-sm text-primary">Athens</p>
                    </div>

                    <div>
                        <span className="inline-block p-3 text-background bg-primary rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </span>
                        
                        <h2 className="mt-4 text-base font-medium  text-primary">Phone</h2>
                        <p className="mt-2 text-sm text-secondary">Mon-Fri from 8am to 5pm.</p>
                        <p className="mt-2 text-sm text-primary">+30 (210) 000-0000</p>
                    </div>
                </div>

                <div className="overflow-hidden rounded-3xl lg:col-span-2 h-96 lg:h-auto">
                <iframe width="100%" height="100%"  title="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50310.55897734267!2d23.697139782777263!3d37.990897659523114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2zzpHOuM6uzr3OsQ!5e0!3m2!1sel!2sgr!4v1736977532117!5m2!1sel!2sgr"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact


