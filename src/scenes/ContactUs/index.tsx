import Htext from '@/shared/Htext';
import { pageEnum } from '@/shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from './../../assets/ContactUsPageGraphic.png';

type Props = {
  setSelectedPage: (value: pageEnum) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles =
    'w-full rounded-lg bg-primary-300 mt-5 px-5 py-3 placeholder-white';
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id='contactus' className='mx-auto w-5/6 pt-24 pb-32'>
      <motion.div onViewportEnter={() => setSelectedPage(pageEnum.ContactUs)}>
        {/* header */}
        <motion.div
          className='md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext tag='h2'>
            {' '}
            <span className='text-primary-500'>Join now</span> to get in shape
          </Htext>
          <p className='my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quae
            in error, expedita doloremque aliquam unde provident voluptatem odit
            optio.
          </p>
        </motion.div>
        {/* form */}
        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div
            className='mt-10 basis-3/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target='_blank'
              method='POST'
              action='https://formsubmit.co/miroshnik.bogdan@gmail.com'
              onSubmit={onSubmitHandler}
            >
              <input
                className={inputStyles}
                type='text'
                placeholder='Name'
                {...register('name', {
                  required: true,
                  maxLength: 20,
                })}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type == 'required' &&
                    'This field needs to required'}
                  {errors.name.type == 'maxLength' && 'Max length is 20 char'}
                </p>
              )}

              <input
                className={inputStyles}
                type='text'
                placeholder='Email'
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type == 'required' &&
                    'This field needs to required'}
                  {errors.email.type == 'pattern' && 'Invalid email adress'}
                </p>
              )}

              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder='Message'
                {...register('message', {
                  required: true,
                  maxLength: 1000,
                })}
                id=''
              />
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type == 'required' &&
                    'This field needs to required'}
                  {errors.message.type == 'maxLength' &&
                    'Max length is 1000 char'}
                </p>
              )}
              {/* button */}
              <button
                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                type='submit'
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            className='relative mt-16 basis-2/5 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className='w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext'>
              <img
                className='w-full'
                src={ContactUsPageGraphic}
                alt='Contactus Photo'
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
