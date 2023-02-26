import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { BenefitType, pageEnum } from '@/shared/types';
import { motion } from 'framer-motion';
import Htext from '@/shared/Htext';
import BenefitCard from './BenefitCard';

type Props = {
  setSelectedPage: (value: pageEnum.Benefits) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'State of the art facilities',
    description:
      'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: '100s of diverse classes',
    description:
      'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: 'Expert and Pro Trainers',
    description:
      'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
  },
];

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div onViewportEnter={() => setSelectedPage(pageEnum.Benefits)}>
        {/* header */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='md:w-3/5 md:my-5'
        >
          <Htext tag='h2'>More than just gym</Htext>
          <p className='my-5 text-sm'>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* benefits */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className='flex items-center justify-between flex-col md:flex-row gap-8 mt-5'
        >
          {benefits.map(
            ({ icon, title, description, setSelectedPage }: BenefitType) => (
              <BenefitCard
                key={title + description}
                icon={icon}
                title={title}
                description={description}
                setSelectedPage={setSelectedPage}
              />
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
