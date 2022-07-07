import NavbarWeb from '../components/NavbarWeb'
import NavbarMobile from '../components/NavbarMobile'
import { motion } from "framer-motion"



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
                    <div className='container mx-auto flex flex-col p-4 gap-8 justify-center md:items-center md:flex-row md:px-32'>
                        <div className='md:w-1/3 bg-red'>
                            <p className='text-4xl font-semibold sm:text-6xl'>Dimitri Irfan Dzidny 🎯</p>
                            <p className='text-2xl font-light sm:text-4xl mt-4'>Software Engineer & Traveler</p>
                        </div>
                        <div className='text-sm sm:text-lg md:w-2/3'>
                            <div>
                                <p className=''>
                                    I am a person with a passion to learn something new. Strong logical skill, and
                                    an effective problem-solving skill. A patient person in almost everything (at
                                    least that's what people said about me). I am also a coding geek, especially
                                    when it involves data. Once I'm hooked into a coding project, it's hard for me
                                    to stop.
                                </p>
                            </div>
                            <div className='gap-2 mt-8 flex flex-wrap sm:gap-8 border-r-2 border-zinc-900'>
                                <span className=''><p className='font-medium inline'>Email:</p> dimitriirfan@gmail.com</span>
                                <span className=''><p className='font-medium inline'>Phone:</p> +62 812 83083410</span>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
            <NavbarMobile />
        </>
    )
}
