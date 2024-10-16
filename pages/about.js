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
                        <div className="self-center h-80 ">
                            <Image alt="foto dimitri" src="/static/images/photo-dimitri-3.png" height="300" width="300" objectFit="cover" className="rounded-full"/>
                            {/* <img className="" src="/images/photo-dimitri.jpg"></img> */}
                            <p className="text-center text-gray-500 mt-2">Picture of me at 23 years old :D</p>
                        </div>

                        <hr></hr>
                        <H2>About</H2>
                        <P>
                            Hi! I am Dimitri Irfan Dzidny, people usually call me Dimitri, but you can call me whatever you want. I am currently a Software Engineer at an e-groceries startup for more than two years,

                            mostly doing backend stuffs but also have an experience on front end. I have an interest in Software Engineering and Product Development.

                            Building products that actually matters is what I keen for
                        </P>
                        <P>
                            Previously, I am a Software Engineer (front-end) at LingoTalk for 8 months, building an online language learning platform for students, and also a Data Scientist Intern at Telkom Indonesia
                            for 6 months mostly on Machine Learning and Data Analysis.
                        </P>
                        <P>
                            During my college years, I was an active lab and organization student. I used to be a laboratory assistant at Artificial Intelligence Lab Telkom University,
                            Data Structure Practicum assistant, programming tutor, etc. I also used to participate in competitions! (Data science, competitive programming, etc)
                            although not all of it I actually winned it :(
                        </P>
                        <P>I do games, sports, code, videography, etc.</P>

                        <H3>Projects</H3>
                        <Quote >&quot;It ain&apos;t much, but it&apos;s an honest works&quot;</Quote>
                        <P>
                            Throughout my college years I&apos;ve done several software projects, be it side projects, client projects, or college projects.
                            You can see my curated projects in the <Link href='/projects'><a className="border-b border-gray-900">projects page </a></Link>
                            or you can go to my <a target="_blank" href='https://github.com/dimitriirfan' rel="noopener noreferrer" className="border-b border-gray-900">github</a> for more complete project lists.
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
        image: "/static/images/logo-allofresh.png",
        companyName: "AlloFresh",
        role: "Software Engineer (Backend)",
        startDate: "Sep 2022",
        endDate: "Present",
        whatYouDo: [
            "Built AlloFresh product discovery features such as search, synonym, typo handling, product recommendations, and categories using Elasticsearch, in collaboration with the data team",
            "Initiated and developed a new service that migrates product discovery endpoints such as PLP (product listing page), search, PDP (product detail page), and home blocks which decreased the latency by 42.8%, 70.36%, and 44.9%, respectively",
            "Developed a personalized product discovery experience based on user persona, RFM segmentation, and cohort by integrating Mixpanel, BigQuery and Kafka. This personalized project improved the home to ATC rate by 2-3x",
            "Established an A/B testing system with Unleash and Mixpanel cohorts that are synchronized through Kubernetes cronjobs and persistent Redis storage which enables product teams to validate their ideas faster through experiments",
            "Improved register API latency by up to 60% by optimizing query operations, simplifying processes, and exploiting asynchronous operations. Debugged using APM, log, and query planner",
            "As an Engineering Squad Lead, I led grooming sessions, technical discussions and provided guidance to engineers on their assigned tasks, ensuring efficient project progress and alignment",
            "Led the product grooming, planning and the development of Flash Sale features starting from technical document creations to overseeing the development itself. Supervised two backend engineers and collaborated closely with app engineers, test engineers, and product managers"
        ],
        techStack: ["Go", "Elasticsearch", "Kafka", "Redis", "Kubernetes", "Docker", "Datadog", "Prometheus", "git", "GCP", "BigQuery", "REST", "gRPC", "MySQL", "Postgres", "React", "Testing", "Product Analytics"]
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
        techStack: ["Python", "SQL", "Excel", "Tableau", "Airflow", "BigQuery", "GitLab", "git", "Machine Learning", "Numpy"]
    },
    {
        image: "/static/images/logo-lingotalk.jpg",
        companyName: "LingoTalk",
        role: "Software Engineer",
        startDate: "May 2021",
        endDate: "Dec 2021",
        whatYouDo: [
            "Developed LingoTalk website using SvelteJS as a front-end framework",
            "Developed multiple website projects such as a Learning Management System and admin dashboard",
            "Assessed potential improvements and potential bugs in the web development",
            "Worked closely with other engineers to develop a payment system using Midtrans",
        ],
        techStack: ["Svelte.js", "Node.js", "MidTrans", "GitLab", "Git", "Javascript", "Typescript"]
    },

]
