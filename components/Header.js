import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


const Header = () => {

    const [isOpenBlog, setOpenBlog] = useState(false) 
    const toggleOpenBlog = () => {
        setOpenBlog(!isOpenBlog)
        console.log(isOpenBlog)
    }

    return (
        <div className='container flex justify-between p-4 font-medium sticky top-0 bg-white'>
            <div>
                <p className='p-1 cursor-pointer text-lg'>🎯 dimitriirfan.dev</p>
            </div>
            <div>
            <div className='flex gap-4'>
                <a className='p-1 cursor-pointer border-b-2 border-white hover:border-red-500 transition ease-in-out text-lg'>Home</a>
                <a className='p-1 cursor-pointer border-b-2 border-white hover:border-red-500 transition ease-in-out text-lg'>About</a>
                <span 
                    className='p-1 cursor-pointer border-b-2 border-white hover:border-red-500 transition ease-in-out inline-flex gap-3 items-center text-lg'
                    onClick={toggleOpenBlog}
                >
                    <p className='' >Blogs</p>
                    <FontAwesomeIcon icon={faChevronDown} />
                </span>
                <a className='p-1 cursor-pointer border-b-2 border-white hover:border-red-500 transition ease-in-out text-lg'>Projects</a>

            </div>
            </div>
        </div>
    )
    
}

export default Header