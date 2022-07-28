import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className='flex flex-col sm:flex-row-reverse sm:justify-center sm:items-center p-4 gap-2 sm:p-4 sm:gap-12 bg-white fixed bottom-0 w-full border-t'>
            <div className='flex sm:justify-center sm:items-center text-2xl gap-8 sm:gap-12'>
                <a target="_blank" href='https://www.instagram.com/dimitriirfann/' rel="noopener noreferrer">
                    <FontAwesomeIcon 
                        className='hover:text-red-500 cursor-pointer rounded-full p-2' 
                        icon={faInstagram} 
                    />
                </a>
                <a target="_blank" href='https://www.linkedin.com/in/dimitriirfan/' rel="noopener noreferrer">
                    <FontAwesomeIcon 
                        className='hover:text-red-500 cursor-pointer rounded-full p-2' 
                        icon={faLinkedinIn} 
                    />
                </a>
                <a target="_blank" href='https://github.com/dimitriirfan' rel="noopener noreferrer">
                    <FontAwesomeIcon 
                        className='hover:text-red-500 cursor-pointer rounded-full p-2' 
                        icon={faGithub} 
                    />
                </a>
            </div>
            <div>
                <p className='text-xs sm:text-sm'>©2022 Dimitri Irfan Dzidny. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer