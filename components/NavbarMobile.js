import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faChevronLeft, faClose, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, m } from "framer-motion"

const NavbarWeb = () => {
    const [isShowMicro, seIsShowMicro] = useState(false)
    const [isShowNav, setIsShowNav] = useState(false)
    const [isShowBlogs, setIsShowBlogs] = useState(false)

    const handleOnMouseEnter = () => {
        seIsShowMicro(true)
    }

    const handleOnMouseLeave = () => {
        seIsShowMicro(false)
    }

    const handleShowNav = () => {
        setIsShowNav(true)
        seIsShowMicro(false)

    }

    const handleCloseNav = () => {
        setIsShowNav(false)
        setIsShowBlogs(false)
    }

    const handleToggleBlogs = () => {
        setIsShowBlogs(!isShowBlogs)
    }


    const microVariants = {
        open: {
            x: 0,
            y: 0,
        },
        close: {
            x: "100%",
            y: "100%"
        }
    }

    const navVariants = {
        open: {
            x:0,
            opacity: 100,
            transition: {
                delay: 0.5,
                opacity: {ease: "linear"}
            },
            
        },
        close: {
            x:"100%",
            opacity: 0,
            transition: {
                opacity: {ease: "linear"}
            }
            
        }
    }

    const blogVariants = {
        open: {
            x: 0,
            opacity: 1,
            type: 'spring',
            display: 'block',
            transition: {duration: 0.2}
        },
        close: {
            x: 100,
            opacity: 0,
            type: 'spring',
            transitionEnd: { display: 'none'},
            transition: {duration: 0.2}
    
        }
    }
    
    const bubbleVariants = {
        expand: {
            scale: 10,
            transition: {duration: 0.6}

        },
        initial : {
            scale: 0,
            transition: {duration: 0.5}
        },
    }

    return (
        <>
            <motion.div
                variants={bubbleVariants}
                animate={isShowNav ? "expand" : "initial"}
                className='fixed bg-black w-64 h-64 -right-36 -bottom-36 cursor-pointer rounded-full scale-0'
            >
            </motion.div>
            <motion.div 
                id='navbar' 
                variants={navVariants}
                animate={isShowNav ? "open" : "close"}
                className='fixed top-0 h-screen w-screen bg-black z-50 flex-col flex items-end justify-end p-8 py-16 gap-4 font-medium text-white'>
                <div className='cursor-pointer'>
                    <FontAwesomeIcon 
                        className='transition-all ease-out fa-2xl hover:text-red-500' 
                        icon={faClose} 
                        onClick={() => handleCloseNav()}
                    />
                </div>
                <Link href='/'>
                    <a className='cursor-pointer transition ease-in-out text-2xl hover:text-red-500'>Home</a>
                </Link>
                <Link href='/about'>
                    <a className='cursor-pointer transition ease-in-out text-2xl hover:text-red-500'>About</a>
                </Link>
                <span className='cursor-pointer text-2xl inline-flex gap-3 items-center hover:text-red-500'>
                    <FontAwesomeIcon icon={faChevronDown} />
                    <a onClick={handleToggleBlogs} className=''>Blogs</a>
                </span>
                <motion.div
                    variants={blogVariants}
                    animate={isShowBlogs ? "open" : 'close'}
                >
                    <Link href='/'>
                        <a className='cursor-pointer transition ease-in-out text-lg font-normal hover:text-red-500'>Kereta 🚅</a>
                    </Link>
                </motion.div>
                <motion.div
                    variants={blogVariants}
                    animate={isShowBlogs ? "open" : 'close'}
                >
                    <Link href='/'>
                        <a className='cursor-pointer transition ease-in-out text-lg font-normal hover:text-red-500'>Fotografi 📸</a>
                    </Link>
                </motion.div>
           
                <Link href='/projects'>
                    <a className='cursor-pointer transition ease-in-out text-2xl hover:text-red-500'>Projects</a>
                </Link>
            </motion.div>
            <motion.div 
                id='micro-1'
                variants={microVariants}
                animate={isShowMicro ? "open" : "close"}
                className='fixed bg-black w-64 h-64 -bottom-28 -right-28 cursor-pointer rounded-full scale-0'
            >
            </motion.div>
            {!isShowNav && (
                <div
                    onMouseEnter={ () => handleOnMouseEnter()}
                    onMouseLeave={ () => handleOnMouseLeave()} 
                    onClick={ () => handleShowNav() }
                    className='fixed bottom-4 right-4 cursor-pointer rounded-full bg-white sm:hidden grid place-items-center'
                >
                    <FontAwesomeIcon className='transition-all ease-out p-4 fa-2xl ' icon={isShowMicro ? faChevronLeft : faBars} />
                </div>

            )}
        
        </>
    )
    
}

export default NavbarWeb