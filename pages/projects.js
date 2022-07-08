import NavbarMobile from "../components/NavbarMobile";
import NavbarWeb from "../components/NavbarWeb";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion"
import Footer from "../components/Footer";

export default function Projects() {
    return (
        <>
            <div className='flex flex-col h-screen'>
                    <NavbarWeb />
                    <motion.div 
                        initial={{opacity: 0}}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-grow bg-gray-50"
                    >
                        <div className="container mx-auto flex flex-col py-16 p-4 gap-8 md:px-32">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-4xl font-semibold">🕹 Projects</h1>
                                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a quam id purus scelerisque aliquam.</p>
                            </div>
                            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                                <ProjectCard data={{src: "/images/projects-sorting.png", description: "haloo", num:1}}/>
                                <ProjectCard data={{src: "/images/projects-sorting.png", description: "haloo", num:2}}/>
                            </div>

                        </div>
                    </motion.div>
                    <Footer />

            </div>
            <NavbarMobile />
        
        </>
    )
}