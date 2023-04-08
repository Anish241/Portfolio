import React, { useState } from 'react'
import {motion} from 'framer-motion'
import  emailjs from '@emailjs/browser'
import {styles} from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { useRef } from 'react'

//template_hw04fap
//service_sz7veq4
//fRWukTjlOFHItGmGl

const Contact = () => {
  const formref = useRef()
  const [form, setform] = useState(
   {
    name: '',
    email: '',
    message: '',
   }
  )
  const [loading, setloading] = useState(false)
  const handleChange = (e) => {

    const {name,value} = e.target;

    setform({...form,[name]:value})


  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs.send(
      'service_sz7veq4',
      'template_hw04fap',
      {
        name: form.name,
        to_name: 'Anish',
        email: form.email,
        to_email: 'anish.gade@spit.ac.in',
        message: form.message,
      },
      'fRWukTjlOFHItGmGl',
      
      ).then(()=>{
        setloading(false);
        alert('I will get back to you soon!')
        setform({
          name: '',
          email: '',
          message: '',
        })
       
      },(error)=>{
        setloading(false);
        alert('Something went wrong, please try again later!')
        console.log(error)
      })
  }
  return (
    <div
    className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
    >
      <motion.div
       variants={slideIn('left',"tween",0.2,1)}
       className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formref}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

      </motion.div>

      <motion.div
       variants={slideIn('right',"tween",0.2,1)}
       className='xl:flex-1 xl:h-auto md-h-[550px] h-[350px]'
      >
        <EarthCanvas />

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")