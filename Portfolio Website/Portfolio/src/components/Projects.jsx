import '../styles/projects.css'

function Projects() {
    const config = {
        projects : [
            {
                id: 1,
                image: "/images/flight-booking.webp",
                description: "Flight Reservation System, Built with the MERN Stack",
                link: "https://github.com/TAMILARASAN2308/Aspire-Training/tree/main/Flight%20Reservation%20System"
            },
            {
                id: 2,
                image: "/images/ecommerce.jpg",
                description: "Ecommerce Website, Built with the MEAN Stack",
                link: "https://github.com/TAMILARASAN2308/Aspire-Training/tree/main/Angular_Task/src"
            },
            {
                id: 3,
                image: "/images/farm2home.png",
                description: "Farm to Home, Built with the MERN Stack",
                link: "https://github.com/TAMILARASAN2308/Farmer-Application/tree/main/Farm2Home"
            }
        ]
    }
  return (
    <>
    <section className='flex flex-col py-20 px-5 justify-center bg-secondary text-white font-poppins-font' id='projects'> 
        <div className='w-full'>
            <div className='flex flex-col px-10 py-5'>
                <h1 className='text-4xl border-b-4 w-[130px] border-primary mb-5 font-bold'>Project</h1>
                <p>Here are some of my best projects that I've developed, showcasing my skills in frontend, backend, and database technologies.</p>
            </div>
        </div>
        <div className='w-full'>
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) =>(
                <div className='relative' key={project.id}>
                    <img className='h-[250px] w-[500px] rounded-xl'  src={project.image}></img>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>{project.description}</p>
                        <div className='flex justify-center'>
                            <a className='btn' target='_blank' href={project.link}>View Project</a>
                            {/* target='_blank' -> Opens link in a new tab */}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Projects