import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import TechStack from "./TechStack"

const ExperienceCard = (props) => {
    const [isExpand, setIsExpand] = useState(false)
    return (
        <div className="border p-6 cursor-pointer"  onClick={() => setIsExpand(!isExpand)}>
            <div className="flex items-center gap-4">
                <div className="w-16 place-self-center grid place-items-center ">
                    <img className="" src={props.data.image}></img>
                </div>
                <div className="p-2 flex-grow">
                    <p className="inline text-xl" >
                        <span className="font-bold">{props.data.companyName}</span>
                        <span> | </span>
                        <span>{props.data.role}</span>
                    </p>
                    
                    <p>{`${props.data.startDate} - ${props.data.endDate}`}</p>
                    <div className="flex mt-2 gap-1 text-sm flex-wrap">
                        {props.data.techStack && props.data.techStack.map((val, i) => {
                            return <TechStack key={i}>{val}</TechStack>
                        })}
                        
                       
                    </div>
                </div>
                <div className="rounded-full w-8 h-8 grid place-items-center">
                    <FontAwesomeIcon className="text-lg" icon={faChevronDown}  />
                </div>
            </div>
            {isExpand && (
                <div className="px-8 py-4">
                    <p className="font-bold">What i do:</p>
                    
                    <ul className="list-disc mt-4 flex flex-col gap-2">
                        {props.data.whatYouDo.map((val, i) => {
                            return <li key={i} >{val}</li>
                        })}
                    </ul> 
                </div>
            )}

        </div>
    )
}

export default ExperienceCard