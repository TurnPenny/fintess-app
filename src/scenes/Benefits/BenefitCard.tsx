import { BenefitType, pageEnum } from '@/shared/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const childVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: { opacity: 1, scale: 1 },
};

const BenefitCard = (
  { icon, title, description }: BenefitType,
  setSelectedPage: (value: pageEnum) => void
) => {
  return (
    <motion.div
      variants={childVariant}
      className='mt-5 rounded-md border-2 border-gray-100 w-1/2 px-5 py-16 text-center'
    >
      <div className='mb-4 flex justify-center'>
        <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
          {icon}
        </div>
      </div>
      <h4 className='font-bold'>{title}</h4>
      <p className='my-3 break-all'>{description} </p>
      <AnchorLink
        href={`#${pageEnum.ContactUs}`}
        onClick={() => setSelectedPage(pageEnum.ContactUs)}
        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default BenefitCard;
