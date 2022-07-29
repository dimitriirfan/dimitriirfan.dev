import Image from "next/image"
import { motion } from "framer-motion"
import H3 from "./typography/H3"
import P from "./typography/P"
import Tag from "./Tag"
import TechStack from "./TechStack"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"

const ProjectCard = (props) => {
    return (
        <>
            <motion.div
                className="flex flex-col sm:flex-row justify-center items-center relative sm:px-4  border"
            >   
                <div className="absolute left-0 top-0 w-12 h-12 bg-red-500 grid place-items-center text-white font-semibold text">
                    {props.item+1}
                </div>
                <div className="max-w-sm max-h-sm relative w-2/3 h-56">
                    <Image alt="foto dimitri" src={props.data.src} layout="fill" objectFit="contain" />
                </div>
                <div className="p-8 flex flex-col w-full">
                    <div className="flex flex-col gap-2">
                        <div className="border-r border-black">
                            <H3>{props.data.name}</H3>
                            <p>{props.data.date}</p>
                        </div>
                        <div className="flex flex-wrap mb-4">
                            <Tag color={`${props.data.tagColor}`}>{props.data.tagStatus}</Tag>
                        </div>
                        <div>
                            <p>{props.data.description}</p> 
                        </div>
                    </div>
                    <div className="flex gap-1 mt-2 flex-wrap">
                        {props.data.techStack && props.data.techStack.map((val, i) => {
                            return <TechStack key={i}>{val}</TechStack>
                        })}
                    </div>
                    <div className="self-end flex gap-4 mt-4">
                        {props.data.codeLink && (
                            <a target="_blank" href={props.data.codeLink} rel="noopener noreferrer" className="inline-flex items-center gap-2 border py-1 px-2 rounded cursor-pointer hover:bg-red-500 hover:text-white font-semibold text-gray-500">
                                <p>Code</p>
                                <FontAwesomeIcon icon={faExternalLink} />
                            </a>
                        )}
                        {props.data.demoLink && (
                            <a target="_blank" href={props.data.demoLink} rel="noopener noreferrer" className="inline-flex items-center gap-2 border py-1 px-2 rounded cursor-pointer hover:bg-red-500 hover:text-white font-semibold text-gray-500">
                                <p>Demo</p>
                                <FontAwesomeIcon icon={faExternalLink} />
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        
        </>
    )
}

export default ProjectCard