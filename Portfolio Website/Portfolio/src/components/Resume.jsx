import '../styles/resume.css';

function Resume() {
  const config = {
    link: "/resume/Tamilarasan M-Resume-Final (2).pdf"
  }
  return (
    <>
    <section className='flex flex-col md:flex-row bg-primary px-5' id='resume'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px] rounded' src='/images/resume.jpg'></img>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 w-[130px] border-secondary mb-5 font-bold'>Resume</h1>
                <p className='pb-5'>You can download my resume here: <a className='btn' href={config.link} download="Tamilarasan M-Resume">Download</a></p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Resume