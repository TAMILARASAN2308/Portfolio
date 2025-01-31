import '../styles/hero.css';
import { AiOutlineLinkedin, AiOutlineGithub  } from "react-icons/ai";

function Hero() {
  const config = {
    subtitle:"I'm a Full-stack developer",
    social:{
      github:"https://github.com/TAMILARASAN2308",
      linkedin:"https://www.linkedin.com/in/tamilarasan-m-1892b9285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
    }
   
  }
  return (
    <>
    <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center">
        <div className='md:w-1/2 flex flex-col'>
            <h1 className="text-white text-6xl font-hero-font">Hi,<br/>I&apos;m Tamilarasan <span className='text-black'>M</span>
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className='hover:text-white'><AiOutlineGithub size={40}/></a>
            </div>
        </div>
        <img className="md:w-1/3" src="/images/hero.png"></img>
    </section>
    </>
  )
}

export default Hero