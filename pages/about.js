import NavbarWeb from "../components/NavbarWeb"
import { motion } from "framer-motion"
import H2 from "../components/typography/H2"
import Link from "next/link"
import Footer from "../components/Footer"
import NavbarMobile from '../components/NavbarMobile'
import H3 from "../components/typography/H3"
import P from "../components/typography/P"
import Quote from "../components/typography/Quote"
import ExperienceCard from "../components/ExperienceCard"
import Image from "next/image"

const About = () => {
    return (
        <>
            <NavbarWeb />
            <motion.div 
                    initial={{opacity: 0}}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className='flex flex-grow bg-white'    
                >
                    {/* md:items-center md:flex-row md:px-32 */}
                    <div className='container mx-auto flex flex-col justify-center max-w-5xl gap-8 py-16 pb-32 p-4 text-gray-800'>
                        <div className="self-center h-80">
                            <Image alt="foto dimitri" src="/static/images/photo-dimitri.jpg" height="300" width="300" />
                            {/* <img className="" src="/images/photo-dimitri.jpg"></img> */}
                            <p className="text-center text-gray-500 mt-1">Picture of me at 22 years old :D</p>
                        </div>
                        
                        <hr></hr>
                        <H2>About</H2>
                        <P>
                            Hi!, I&apos;m Dimitri Irfan, you can call me Dimitri, Dim, or Mit whichever you prefer. 
                            I&apos;m currently a final year student who already finished my undergraduate thesis in Telkom University Bandung.
                            I have an interest in Software Engineering, and Product Development. Building products that actually matters is what I keen for
                        </P>
                        <P>
                            Previously, I am a Software Engineer (front-end) at LingoTalk for 8 months, building an online language learning platform for students, and also a Data Scientist Intern at Telkom Indonesia
                            for 6 months.
                        </P>
                        <P>
                            I am also an active lab and organization student in my college years. I used to be a laboratory assistant at Artificial Intelligence Lab Telkom University,
                            Data Structure Practicum assistant, programming tutor, etc. etc. I also used to participate in competitions! (Data science, competitive programming, etc)
                            although not all of it I actually winned it :(
                        </P>
                        <P>I do games, sports, code, etc. etc.</P>
                        
                        <H3>Projects</H3>
                        <Quote >`&quot;`It ain&apos;t much, but it&apos;s an honest works`&quot;` -a meme</Quote>
                        <P>
                            Throughout my college years I&apos;ve done several software projects, be it side projects, client projects, or college projects.
                            You can see my curated projects in the <Link href='/projects'><a className="border-b border-gray-900">projects page </a></Link> 
                            or you can go to my <a target="_blank" href='https://github.com/dimitriirfan' rel="noopener noreferrer" className="border-b border-gray-900">github</a> for more complete project lists.
                        </P>
                        <P>
                            Most of the time I do frontend and backend, but frontend is where I`&quot;`m currently confident with my skills but that doesn&apos;t mean I
                            left my backend skills for good. I also have a interest in backend kinda things, currently I`&quot;`m learning to create microservice REST API using Golang with midtrans payment services.
                        </P>
                        <hr></hr>
                        <H2>Professional Experience</H2>
                        {
                            professionalExperience.map((data, index) => {
                                return <ExperienceCard data={data} key={index} >test</ExperienceCard>
                            })
                        }
                        
                        <P className="text-right">Last udpated 28 July 2022</P>
                       
                    </div>
                </motion.div>
                <Footer />
                <NavbarMobile />
        </>
    )
}

export default About


const professionalExperience = [
    {
        image: "/static/images/logo-lingotalk.jpg",
        companyName: "LingoTalk",
        role: "Software Engineer",
        startDate: "May 2021",
        endDate: "Dec 2022",
        whatYouDo: [
            "Contribute in the development of LingoTalk website using Sapper.js as a front-end framework",
            "Contribute to multiple website project development, mainly in developing a LMS and admin dashboard",
            "Integrate front-end with back-end by consuming API which is provided by the back-end team",
            "Assess potential improvements and potential bugs in the web development",
            "Work closely together with front-end & project manager in a fast pace environment"
        ],
        techStack: ["Svelte.js", "Node.js", "MidTrans", "GitLab", "Git", "Javascript", "Typescript"]
    }, 

    {
        image: "/static/images/logo-telkom.jpg",
        companyName: "Telkom Indonesia",
        role: "Data Scientist",
        startDate: "Jan 2022",
        endDate: "Jun 2022",
        whatYouDo: [
            "Performed various analysis from start to end mainly from customer transaction data that consist of more than 1 million transactions from more than 100,000 users. Usually ends with reporting, presentation with stakeholders and/or dashboards.",
            "Performed Price Elasticity of Demand analysis using machine learning model to determine the best price for marketing promotion, thus increases GMV while minimizing costs.",
            "Performed A/B Testing on marketing promotion to determined which treatment works for specific groups of customer based on its RFM segmentation.",
            "Performed Sentiment analysis on Brand24 and Google Reviews to provide summary and recommendations for several departments in which to improve product image, application, and customer service.",
            "Maintain and develop Tableau dashboards to monitor how our product performs using Python for datamart creation and Airflow for automation, minimalizing manual reporting effort."
        ],
        techStack: ["Python", "SQL", "Excel", "Tableau", "Airflow", "BigQuery", "GitLab", "Git"]
    }
]
