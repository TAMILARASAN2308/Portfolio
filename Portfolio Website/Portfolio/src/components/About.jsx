import '../styles/about.css';

function About() {
  const config = {
  line1: "Hi, My name is Tamilarasan. I'm a Full Stack Web Developer passionate about building dynamic and user-friendly applications.",
  line2: "I specialize in frontend technologies such as React.js, Angular, Redux, Redux Toolkit, Axios, Tailwind CSS, and CSS3.",
  line3: "On the backend, I have experience with Node.js, Express.js, MongoDB, and MySQL, enabling me to develop scalable and efficient web applications.",
};

  return (
    <>
    <section className='flex flex-col md:flex-row bg-primary px-5 font-poppins-font' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src='/images/about.png'></img>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 w-[180px] border-secondary mb-5 font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default About