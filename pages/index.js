import Header from '../components/Header'

export default function Home() {
    return ( <> <div className='container mx-auto flex flex-col h-screen'>
        <Header/>

        <div
            className='flex flex-col flex-grow p-4 gap-8 justify-center md:items-center md:flex-row '>
            <div className='md:w-1/3'>
                <p className='font-semibold text-6xl'>Dimitri Irfan Dzidny 🎯</p>
                <p className='font-light text-4xl mt-4'>Software Engineer & Traveler</p>
            </div>
            <div className='md:w-2/3'>
                <div>
                    <p className='text-lg'>
                        I am a person with a passion to learn something new. Strong logical skill, and
                        an effective problem-solving skill. A patient person in almost everything (at
                        least that's what people said about me). I am also a coding geek, especially
                        when it involves data. Once I'm hooked into a coding project, it's hard for me
                        to stop.
                    </p>
                </div>
                <div className='mt-8 flex gap-8 border-r-2 border-zinc-900'>
                    <span className='text-lg'><p className='font-medium inline'>Email:</p> dimitriirfan@gmail.com</span>
                    <span className='text-lg'><p className='font-medium inline'>Phone:</p> +62 812 83083410</span>
                </div>
            </div>
        </div>
    </div> < div className = 'container mx-auto p-4' > <p className='font-bold text-2xl border-r-2 border-zinc-900'>📸 Photography</p> < /div>

      <div className='container mx-auto p-4 grid grid-flow-col-dense gap-4'>
        <div className='col-span-2 h-96 bg-slate-100'></div > <div className='h-96 bg-slate-100'></div> < div className = 'h-96 bg-slate-100' > </div> < /div>
    </ >)
}
