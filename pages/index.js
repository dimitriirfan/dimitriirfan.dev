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
                                <p className='text-2xl font-light sm:text-3xl mt-1 sm:mt-4'><s>Self Proclaimed</s> Software Engineer & Traveler</p>
                            </div>
                            <div className='text-sm sm:text-lg md:w-2/3'>
                                <div>
                                        <p className=''>
                                        <b>Experienced as a Backend Software Engineer</b> at an e-groceries startup for more than two years, specializing in the shopping experience (Shopex) team.

                                        My expertise lies in developing personalized product discovery services and other upper funnel features mainly using Golang.

                                        I am passionate about software engineering and product development.
                                        </p>
                                </div>
                                <div className='gap-2 mt-8 flex flex-wrap sm:gap-8 border-r-2 border-gray-900'>
                                    <span className=''><p className='font-medium inline'>Email:</p> dimitriirfan@gmail.com</span>
                                    <span className=''><p className='font-medium inline'>Phone:</p> <a rel='noopener noreferrer' target='_blank' href='https://api.whatsapp.com/send/?phone=6281283083410&text&type=phone_number&app_absent=0'>+62 812 83083410</a></span>
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
