import NavbarWeb from '../components/NavbarWeb'
import NavbarMobile from '../components/NavbarMobile'
import { motion } from "framer-motion"
import Footer from '../components/Footer'




export default function Home() {


    return ( 
        <> 
            <div className='flex flex-col h-screen text-gray-800'>
                <NavbarWeb/>
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className='flex flex-grow bg-white'    
                >
                    <div className='container mx-auto flex flex-col justify-center items-center max-w-5xl'>
                        <div className='flex flex-col gap-8 flex-grow justify-center md:items-center md:flex-row p-4'>
                            <div className='md:w-1/3 bg-red'>
                                <p className='text-3xl font-semibold sm:text-5xl'>Dimitri Irfan Dzidny 🎯</p>
                                <p className='text-2xl font-light sm:text-3xl mt-1 sm:mt-4'>Self Proclaimed Software Engineer & Traveler</p>
                            </div>
                            <div className='text-sm sm:text-lg md:w-2/3'>
                                <div>
                                        <p className=''>
                                            I am a person with a <b className='font-medium'>passion to learn something new</b>. Strong logical skill, and
                                            an effective problem-solving skill. A patient person in almost everything. I am also a coding geek (preferably called <b className='font-medium'>tech savvy</b>), once I&apos;m hooked into a coding project, it&apos;s hard for me
                                            to stop.
                                        </p>
                                </div>
                                <div className='gap-2 mt-8 flex flex-wrap sm:gap-8 border-r-2 border-gray-900'>
                                    <span className=''><p className='font-medium inline'>Email:</p> dimitriirfan@gmail.com</span>
                                    <span className=''><p className='font-medium inline'>Phone:</p> +62 812 83083410</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </motion.div>
                <Footer />
            </div>
            <NavbarMobile />
        </>
    )
}
