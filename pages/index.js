import NavbarWeb from '../components/NavbarWeb'
import NavbarMobile from '../components/NavbarMobile'
import { motion } from "framer-motion"
import Footer from '../components/Footer'




export default function Home() {


    return ( 
        <> 
            <div className='flex flex-col h-screen'>
                <NavbarWeb/>
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className='flex flex-grow bg-white'    
                >
                    {/* md:items-center md:flex-row md:px-32 */}
                    <div className='container mx-auto flex flex-col justify-center'>
                        <div className='flex flex-col gap-8 flex-grow justify-center p-4 sm:p-0 md:items-center md:flex-row md:px-32'>
                            <div className='md:w-1/3 bg-red'>
                                <p className='text-4xl font-semibold sm:text-6xl'>Dimitri Irfan Dzidny 🎯</p>
                                <p className='text-2xl font-light sm:text-4xl mt-1 sm:mt-4'>Software Engineer & Traveler</p>
                            </div>
                            <div className='text-sm sm:text-lg md:w-2/3'>
                                <div>
                                    <p className=''>
                                        I am a person with a <b>passion to learn something new</b>. Strong logical skill, and
                                        an effective problem-solving skill. A patient person in almost everything. I am also a coding geek (preferably called <b>tech savvy</b>), once I'm hooked into a coding project, it's hard for me
                                        to stop.
                                    </p>
                                </div>
                                <div className='gap-2 mt-8 flex flex-wrap sm:gap-8 border-r-2 border-zinc-900'>
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
