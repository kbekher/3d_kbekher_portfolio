import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { emailIds } from '../constants';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

// const PUBLIC_KEY = 'J1VAP8MMyBRlLDJNs';
// const TEMPLATE_ID = 'template_blwzgk9';
// const SERVICE_ID = 'service_32gt2ja';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleResponse = (success, message) => {
    setLoading(false);
    setFormMessage(message);

    const timeoutId = setTimeout(() => {
      setFormMessage("");
      clearTimeout(timeoutId);
    }, 3000);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      emailIds.SERVICE_ID,
      emailIds.TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Kristina',
        from_email: form.email,
        to_email: 'krbekher@gmail.com',
        message: form.message,
      },
      emailIds.PUBLIC_KEY,
    )
      .then(() => {
        handleResponse(true, "Thank you! I will get back to you as soon as possible.");
      })
      .catch((error) => {
        console.error(error);
        handleResponse(false, "Oops, something went wrong. Please try again!");
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse
    flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6
                placeholder:text-secondary text-white
                rounded-lg outline-none border-none 
                font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6
                placeholder:text-secondary text-white
                rounded-lg outline-none border-none 
                font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6
                placeholder:text-secondary text-white
                rounded-lg outline-none border-none 
                font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit
              text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>

            <p className="text-secondary mt-1 text-center h-[14px] text-[14px]">
              {formMessage}
            </p>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");