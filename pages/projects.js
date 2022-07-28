import NavbarMobile from "../components/NavbarMobile";
import NavbarWeb from "../components/NavbarWeb";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion"
import Footer from "../components/Footer";
import H1 from "../components/typography/H1"
import Quote from "../components/typography/Quote";
import P from "../components/typography/P";
import H2 from "../components/typography/H2";

export default function Projects() {
    return (
        <>
            <div className='flex flex-col h-screen '>
                    <NavbarWeb />
                    <motion.div 
                        initial={{opacity: 0}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-grow bg-white"
                    >
                        <div className="container mx-auto flex flex-col py-16 pb-32 p-4 gap-8 max-w-5xl ">
                            
                            <div className="flex flex-col gap-8">
                                <H1>🕹 Projects</H1>
                                <p>A curated lists of my favorite side projects. This list may not complete, for full lists of my projects you can visit my <a target="_blank" href='https://github.com/dimitriirfan' rel="noopener noreferrer" className="border-b border-gray-900">github</a> page</p>

                                <Quote >"It ain't much, but it's an honest works" -a meme</Quote>

                            </div>
                            <div className="container flex flex-col gap-8">
                                {
                                    projects && projects.map((data, i) => {
                                        return <ProjectCard key={i} item={i} data={data}/>
                                    })
                                }
                            </div>
                            <H2>More to come..</H2>

                        </div>
                    </motion.div>
                    <Footer />

            </div>
            <NavbarMobile />
        
        </>
    )
}

const projects = [
    {
        src:"/images/projects-sorting.png",
        name: "Sorting Visualization",
        description: "Sorting visualization using react js, using insertion and selection sorting algorithms",
        date: "Feb 2021",
        tagStatus: "Completed",
        tagColor: "green",
        techStack: [
            "React.js",
            "Vanilla CSS", 
            "Javascript"
        ],
        codeLink: "https://github.com/dimitriirfan/sorting-visualization",
        demoLink: "https://sorting-visualization-dimitriirfan.netlify.app/"
    },

    {
        src:"/images/projects-ner-annotation.png",
        name: "NER Annotation Tool",
        description: "As the name suggests, it's a tool for text sequence annotation, especially word tagging. Currently only support word by word tagging",
        date: "Oct 2021",
        tagStatus: "Completed",
        tagColor: "green",
        techStack: [
            "Svelte.js",
            "Tailwind", 
            "Javascript"
        ],
        codeLink: "https://github.com/dimitriirfan/sorting-visualization",
        demoLink: "https://wordbyword-annotation.netlify.app/"
    },

    {
        src:"/images/projects-bwa-backer-fe.png",
        name: "BWA Backer Project Front End",
        description: "Part of Build with Angga project course, instead of using Vue.js as a FE framework I use Next.js with Tailwind",
        date: "Jul 2022",
        tagStatus: "On going",
        tagColor: "yellow",
        techStack: [
            "Next.js",
            "Tailwind", 
            "Javascript",
            "Axios",
            "Midtrans"
        ],
        codeLink: "https://github.com/dimitriirfan/bwa-backer-next-fe",
    },

    {
        src:"/images/projects-bwa-backer-fe.png",
        name: "BWA Backer Project Back End",
        description: "Part of Build with Angga project course, creating REST API services for Backer website and also provide Midtrans payment services using Golang",
        date: "Jul 2022",
        tagStatus: "Completed",
        tagColor: "green",
        techStack: [
            "Golang",
            "GORM",
            "Microservice",
            "MySQL", 
            "Midtrans",
            "REST API"
        ],
        codeLink: "https://github.com/dimitriirfan/bwa-backer-next-fe",
    },

    {
        src:"/images/projects-kosutan.png",
        name: "Kosutan",
        description: "Software Engineering course final project, building a platform for people who wanted to rent Kosts. Developed using React.js, and Express",
        date: "Jun 2021",
        tagStatus: "Completed",
        tagColor: "green",
        techStack: [
            "React.js",
            "Express.js",
            "PostgreSQL",
            "Tailwind", 
            "REST API"
        ],
        codeLink: "https://github.com/dimitriirfan/rpl-kosutan/tree/main/client",
    },

]