import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

const NavbarWeb = () => {

    const [isOpenBlog, setOpenBlog] = useState(false) 
    const handleOpenBlog = () => {
        setOpenBlog(true)
    }
    const handleCloseBlog = () => {
        setOpenBlog(false)

    }

    return (
        <div className=' p-4 gap-2 sm:p-4 sm:gap-12 w-full border-b bg-white sticky top-0 z-50'>
            <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center mx-auto max-w-6xl font-semibold'>
                <Link href='/'>
                    <p className='p-1 cursor-pointer text-lg'>🎯 dimitriirfan.dev</p>
                </Link>
                <div>
                <div className='gap-4 bg-red hidden sm:flex'>
                    <Link href='/'>
                        <a className='p-1 cursor-pointer border-b-2 border-white hover:border-red-500 transition ease-in-out text-lg'>Home</a>
                    </Link>
                    <Link href='/about'>
                        <a className='p-1 cursor-pointer border-b-2 border-white hover:border-red-500 transition ease-in-out text-lg'>About Me !!! </a>
                    </Link>
                    <div 
                        className='relative'
                        onMouseEnter={handleOpenBlog}
                        onMouseLeave={handleCloseBlog}
                    >
                        <span 
                            className='p-1 cursor-pointer border-b-2 border-white hover:border-red-500 transition ease-in-out inline-flex gap-3 items-center text-lg'
                        >
                            <p className='' >Blogs</p>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                        <motion.div 
                            id='blog' 
                            initial={false}
                            animate={{ x: isOpenBlog ? -100 : -70, opacity: isOpenBlog ? 1 : 0, type: "spring"}}
                            className='shadow-sm duration-400 bg-white absolute w-48 p-2 flex flex-col rounded-lg border border-neutral-800'
                        >
                            <Link href=''>
                                <a className='w-full p-2 hover:border-r-2 border-gray-900'>Kereta 🚅</a>
                            </Link>
                            <Link href=''>
                                <a className='w-full p-2 hover:border-r-2 border-gray-900'>Fotografi 📸</a>
                            </Link>
                        </motion.div>

                    </div>
                    <Link href='/projects'>
                        <a className='p-1 cursor-pointer border-b-2 border-white hover:border-red-500 transition ease-in-out text-lg'>Projects</a>
                    </Link>

                </div>

                </div>

            </div>
        </div>
    )
    
}

export default NavbarWeb