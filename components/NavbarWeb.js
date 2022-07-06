import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

const NavbarWeb = () => {

    const [isOpenBlog, setOpenBlog] = useState(false) 
    const handleOpenBlog = () => {

        if (!isOpenBlog) {
            // document.getElementById('blog').classList.add('top-12')
            // document.getElementById('blog').classList.add('opacity-100')
            // document.getElementById('blog').classList.remove('-top-32')
            // document.getElementById('blog').classList.remove('opacity-0')
        } else {
            // document.getElementById('blog').classList.remove('opacity-100')
            // document.getElementById('blog').classList.remove('top-12')
            // document.getElementById('blog').classList.add('opacity-0')
            // document.getElementById('blog').classList.add('-top-32')
        }

        setOpenBlog(!isOpenBlog)
    }
    const handleCloseBlog = () => {
        setOpenBlog(!isOpenBlog)

    }

    return (
        <div className='container flex justify-between p-4 font-medium sticky top-0 bg-white items-center'>
            <Link href=''>
                <p className='p-1 cursor-pointer text-lg'>🎯 dimitriirfan.dev</p>
            </Link>
            <div>
            <div className='gap-4 bg-red hidden sm:flex'>
                <Link href='/'>
                    <a className='p-1 cursor-pointer border-b-2 border-white hover:border-red-500 transition ease-in-out text-lg'>Home</a>
                </Link>
                <Link href='/about'>
                    <a className='p-1 cursor-pointer border-b-2 border-white hover:border-red-500 transition ease-in-out text-lg'>About</a>
                </Link>
                <div className='relative'>
                    <span 
                        className='p-1 cursor-pointer border-b-2 border-white hover:border-red-500 transition ease-in-out inline-flex gap-3 items-center text-lg'
                        onClick={handleOpenBlog}
                    >
                        <p className='' >Blogs</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                    <motion.div 
                        id='blog' 
                        animate={{ x: isOpenBlog ? -100 : -70, opacity: isOpenBlog ? 1 : 0, type: "spring"}}
                        className='shadow-sm duration-400 bg-white absolute top-12 w-48 p-2 flex flex-col rounded-lg border border-neutral-800'
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
    )
    
}

export default NavbarWeb