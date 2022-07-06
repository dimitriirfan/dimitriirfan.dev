import NavbarWeb from '../components/NavbarWeb'
import NavbarMobile from '../components/NavbarMobile'
import { BrowserView, MobileView } from "react-device-detect";
import {faInstagram} from '@fortawesome/free-solid-svg-icons'


export default function Home() {


    return ( 
        <> 
            <div className='container mx-auto flex flex-col h-screen px-4 md:px-16'>
                <NavbarWeb/>
            
                <div className='flex flex-col flex-grow p-4 gap-8 justify-center md:items-center md:flex-row'>
                    <div className='md:w-1/3'>
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
                {/* <div className='flex justify-center gap-8 p-4'>
                    <div className='w-8 h-8 bg-black'>

                    </div>
                    <div className='w-8 h-8 bg-black'>

                    </div>
                    <div className='w-8 h-8 bg-black'>

                    </div>
                </div> */}

            </div>
            {/* <div className = 'container mx-auto p-4 px-4 md:px-16' > 
                <p className='font-bold text-2xl border-r-2 border-zinc-900'>📸 Photography</p> 
            </div>

            <div className='container mx-auto p-4 grid grid-flow-col-dense gap-4 px-4 md:px-16'>
                <div className='col-span-2 h-96 bg-slate-100'></div > 
                <div className='h-96 bg-slate-100'></div> 
                <div className = 'h-96 bg-slate-100' ></div> 
            </div> */}

            <NavbarMobile />
        </>
    )
}
