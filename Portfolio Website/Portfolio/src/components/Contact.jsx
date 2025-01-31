import { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://portfolio-pxqp.onrender.com/auth/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong.");
    }
  };


  return (
    <>
    <section className='flex flex-col bg-secondary px-5 py-32 text-white' id='contact'>
      <div className='flex flex-col items-center'>
          <h1 className='text-4xl border-b-4 w-[195px] border-primary mb-5 font-bold'>Contact Me</h1>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-5 w-full max-w-2xl'>
              <div className='flex flex-col md:flex-row gap-4 w-full'>
                  <input onChange={handleChange} name='name' className='rounded h-10 pl-4 w-full md:w-1/2 text-black' type='text' placeholder='Full Name'/>
                  <input onChange={handleChange} name='email' className='rounded h-10 pl-4 w-full md:w-1/2 text-black' type='email' placeholder='Email Address'/>
              </div>
              <div className='flex flex-col md:flex-row gap-4 w-full'>
                <input onChange={handleChange} name='mobile' className='rounded h-10 pl-4 w-full md:w-1/2 text-black' type='number' placeholder='Mobile Number'/>
                <input onChange={handleChange} name='subject' className='rounded h-10 pl-4 w-full md:w-1/2 text-black' type='text' placeholder='Email Subject'/>
              </div>
              <textarea onChange={handleChange} name='message' className='rounded pl-4 w-full text-black' cols="30" rows="6" placeholder='Your Message'></textarea>
              <button type='submit' className='bg-primary w-40 h-10 rounded-xl hover:border-2 border-white self-center' >Submit</button>
          </form>
      </div>
  </section>
    </>
  )
}

export default Contact