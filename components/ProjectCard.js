import Image from "next/image"

const ProjectCard = (_) => {
    const props = {
        data: {
            num: 1,
            src:"/images/projects-sorting.png",
            description: "PT Pindad, is an Indonesian state-owned enterprise specialising in military and commercial products."

        }
    }
    return (
        <div className="relative border-2 border-gray-100 flex-col bg-white shadow-sm">
            <div className="relative h-56">
                <Image 
                    src={props.data.src}
                    alt='sorting visualization project'
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            <div className="p-4 border-t-2 border-gray-100 ">
                <div className="mb-4">
                    <p className="font-semibold" >Sorting Visualization</p>
                    <p className="text-gray-500">20 September 2021</p>
                </div>
                <p className="">{props.data.description}</p>
            </div>
            <div className="absolute top-0 left-0 w-16 h-16 bg-red-500 grid place-items-center text-xl font-semibold text-white rounded-br-2xl">
                #{props.data.num}
            </div>
        </div>
    )
}

export default ProjectCard