import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faChevronLeft, faClose} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"

const NavbarWeb = () => {
    const [isShowMicro, seIsShowMicro] = useState(false)
    const [isShowNav, setIsShowNav] = useState(false)

    const handleOnMouseEnter = () => {
        seIsShowMicro(true)
    }

    const handleOnMouseLeave = () => {
        seIsShowMicro(false)
    }

    const handleShowNav = () => {
        setIsShowNav(true)
    }

    const handleCloseNav = () => {
        setIsShowNav(false)
    }

    const microVariants = {
        open: {
            x: 0,
            y: 0
        },
        close: {
            x: "100%",
            y: "100%"
        }
    }

    const navVariants = {
        open: {
            x: 0,
            y: 0,
            opacity: 100,
            transition: {
                opacity: {ease: "in"}

            }
            
        },
        close: {
            x: "100%",
            y: "100%",
            opacity: 0,
            transition: {
                opacity: {ease: "in"}

            }
            
        }
    }

    return (
        <>
            <motion.div 
                id='navbar' 
                variants={navVariants}
                animate={isShowNav ? "open" : "close"}
                className='fixed top-0 h-screen w-screen bg-white z-50 flex-col flex items-end justify-end p-8 py-16 gap-4 font-medium'>
                <div className='cursor-pointer'>
                    <FontAwesomeIcon 
                        className='transition-all ease-out fa-2xl' 
                        icon={faClose} 
                        onClick={() => handleCloseNav()}
                    />
                </div>
                <Link href='/'>
                    <a className='cursor-pointer transition ease-in-out text-lg'>Home</a>
                </Link>
                <Link href='/about'>
                    <a className='cursor-pointer transition ease-in-out text-lg'>About</a>
                </Link>
                <Link href='/blogs'>
                    <a className='cursor-pointer transition ease-in-out text-lg'>Blogs</a>
                </Link>
                <Link href='/projects'>
                    <a className='cursor-pointer transition ease-in-out text-lg'>Projects</a>
                </Link>
            </motion.div>
            <motion.div 
                id='micro-1'
                variants={microVariants}
                animate={isShowMicro ? "open" : "close"}
                className='fixed bg-black w-64 h-64 -bottom-28 -right-28 cursor-pointer rounded-full scale-0'
            >
            </motion.div>
            <div
                onMouseEnter={ () => handleOnMouseEnter()}
                onMouseLeave={ () => handleOnMouseLeave()} 
                onClick={ () => handleShowNav() }
                className='fixed bottom-4 right-4 cursor-pointer rounded-full bg-white sm:hidden grid place-items-center'
            >
                <FontAwesomeIcon className='transition-all ease-out p-4 fa-2xl' icon={isShowMicro ? faChevronLeft : faBars} />
            </div>
        
        </>
    )
    
}

export default NavbarWeb